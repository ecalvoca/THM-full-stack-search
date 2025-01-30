import { Request, Response } from "express";
import { collections } from "../services/database.service";
import { ObjectId } from "mongodb";
import { searchQueryBuilder } from "../utils/search.query.builder";

/**
 * Find items by search term searchTerm
 * Uses searchQueryBuilder to build the query for the collection collectionName
 * If specified, only returns the fields in projection
 * @param collectionName
 * @param projection
 */
export const findItemByTerm = (collectionName: string, projection?: Record<string, any>) => async (req: Request, res: Response) => {
    try {
        const collection = collections[collectionName as keyof typeof collections];
        if (!collection) {
            return res.status(500).json({ error: "Collection not found" });
        }

        const filter = searchQueryBuilder(req, collectionName);
        const items = await collection.find(filter, { projection }).toArray();

        res.status(200).json(items);
    } catch (error) {
        console.error(`Error fetching ${collectionName}:`, error);
        res.status(500).json({ error: `Failed to fetch ${collectionName}` });
    }
};

/**
 * Get an item from a collection by _id
 * If specified, only returns the fields in projection
 * @param collectionName
 * @param projection
 */
export const getItemById = (collectionName: string, projection?: Record<string, any>) => async (req: Request, res: Response) => {
    try {
        const collection = collections[collectionName as keyof typeof collections];
        if (!collection) {
            return res.status(500).json({ error: "Collection not found" });
        }

        const { id } = req.params;
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const item = await collection.findOne({ _id: new ObjectId(id) }, { projection });

        if (!item) {
            return res.status(404).json({ error: `${collectionName.slice(0, -1)} not found` });
        }

        res.status(200).json(item);
    } catch (error) {
        console.error(`Error fetching ${collectionName} by ID:`, error);
        res.status(500).json({ error: `Failed to fetch ${collectionName}` });
    }
}
