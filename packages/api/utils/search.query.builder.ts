import { Request } from "express";

/**
 * Builds a query to search by searchTerm for the collection with collectionName
 * @param req
 * @param collectionName
 */
export const searchQueryBuilder = (req: Request, collectionName: string): Record<string, any> => {
    let searchTerm = req.query.searchTerm as string;

    if (!searchTerm) return {};

    switch (collectionName) {
        case "hotels":
            return {
                $or: [
                    { $text: { $search: searchTerm } },                         // match searchTerm word in hotel_name
                    { country: { $regex: `^${searchTerm}`, $options: "i" } }    // match countries starting with searchTerm
                ]
            };
        case "countries":
            return {
                country: { $regex: `^${searchTerm}`, $options: "i" }            // match countries starting with searchTerm
            };
        case "cities":
            return {
                name: { $regex: `^${searchTerm}`, $options: "i" }               // match cities starting with searchTerm
            };
        default:
            return {}; // return all items
    }
}
