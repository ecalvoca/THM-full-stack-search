import express from "express";
import { getAllItems, getItemById } from "../handlers/route.handler";

export const citiesRouter = express.Router();

citiesRouter.get("/", getAllItems("cities"));
citiesRouter.get("/:id", getItemById("cities"));