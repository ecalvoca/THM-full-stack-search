import express from "express";
import { getAllItems, getItemById } from "../handlers/routeHandler";

export const countriesRouter = express.Router();

countriesRouter.get("/", getAllItems("countries", { "country": 1 }));
countriesRouter.get("/:id", getItemById("countries"));