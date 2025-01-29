import express from "express";
import { getAllItems, getItemById } from "../handlers/route.handler";

export const hotelsRouter = express.Router();

hotelsRouter.get("/", getAllItems("hotels", { name: "$hotel_name", chain_name: 1, country: 1, city: 1 }));
hotelsRouter.get("/:id", getItemById("hotels",{ name: "$hotel_name"}));
