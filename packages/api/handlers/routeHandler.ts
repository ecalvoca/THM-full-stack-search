import { Request, Response } from "express";
import { collections } from "../services/database.service";
import { ObjectId } from "mongodb";

/**
 * Get all the items in a collection
 * @param collectionName - the collection name
 * @param projection - the fields to return
 */
export const getAllItems = (collectionName: string, projection?: Record<string, 1>) => async (req: Request, res: Response) => {
    try {
        const collection = collections[collectionName as keyof typeof collections];
        if (!collection) {
            return res.status(500).json({ error: "Collection not found" });
        }

        const items = await collection.find({}, { projection }).toArray();

        res.status(200).json(items);
    } catch (error) {
        console.error(`Error fetching ${collectionName}:`, error);
        res.status(500).json({ error: `Failed to fetch ${collectionName}` });
    }
};

/**
 * Get an item from a collection by _id
 * @param collectionName - the collection name
 */
export const getItemById = (collectionName: string) => async (req: Request, res: Response) => {
    try {
        const collection = collections[collectionName as keyof typeof collections];
        if (!collection) {
            return res.status(500).json({ error: "Collection not found" });
        }

        const { id } = req.params;
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const item = await collection.findOne({ _id: new ObjectId(id) });

        if (!item) {
            return res.status(404).json({ error: `${collectionName.slice(0, -1)} not found` });
        }

        res.status(200).json(item);
    } catch (error) {
        console.error(`Error fetching ${collectionName} by ID:`, error);
        res.status(500).json({ error: `Failed to fetch ${collectionName}` });
    }
}
