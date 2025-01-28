import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import { connect } from './services/database.service';
import { hotelsRouter } from "./routes/hotels.router";
import { citiesRouter } from "./routes/cities.router";
import { countriesRouter } from "./routes/countries.router";

dotenv.config();

if (process.env.NODE_ENV !== 'production' && !process.env.DATABASE_URL) {
    await import('./db/startAndSeedMemoryDB');
}

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());

connect().then(() => {
    app.use("/hotels", hotelsRouter);
    app.use("/countries", countriesRouter);
    app.use("/cities", citiesRouter);

    app.listen(PORT, () => {
      console.log(`API Server Started at ${PORT}`)
    })
}).catch((error: Error) => {
    console.error("Database connection failed", error);
});

