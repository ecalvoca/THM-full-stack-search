import express from "express";
import { getAllItems, getItemById } from "../handlers/routeHandler";

export const citiesRouter = express.Router();

citiesRouter.get("/", getAllItems("cities"));
citiesRouter.get("/:id", getItemById("cities"));