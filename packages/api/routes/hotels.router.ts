import express from "express";
import { getAllItems, getItemById } from "../handlers/routeHandler";

export const hotelsRouter = express.Router();

hotelsRouter.get("/", getAllItems("hotels", { hotel_name: 1, chain_name: 1, country: 1, city: 1 }));
hotelsRouter.get("/:id", getItemById("hotels"));
