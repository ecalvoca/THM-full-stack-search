import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { MongoClient } from "mongodb";
import Hotel from "../models/hotel";
import Country from "../models/country";
import City from "../models/city";


export const collections: {
    hotels?: mongoDB.Collection<Hotel>,
    countries?: mongoDB.Collection<Country>,
    cities?: mongoDB.Collection<City>
} = {};

/**
 * Connect to the database and set the collections
 */
export async function connect() {
    dotenv.config();
    if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
    const DATABASE_URL = process.env.DATABASE_URL;

    const mongoClient = new MongoClient(DATABASE_URL);
    console.log('Connecting to MongoDB...');

    try {
        // Connect to the database
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB!');
        const db = mongoClient.db();

        // Set the collections
        collections.hotels = db.collection<Hotel>('hotels');
        collections.countries = db.collection<Country>('countries');
        collections.cities = db.collection<City>('cities');
    } catch {
        console.log('Error: database connection failed!');
        await mongoClient.close();
    }
}