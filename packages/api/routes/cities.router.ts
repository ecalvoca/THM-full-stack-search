import express from "express";
import { findItemByTerm, getItemById } from "../handlers/route.handler";

export const citiesRouter = express.Router();

citiesRouter.get("/", findItemByTerm("cities"));
citiesRouter.get("/:id", getItemById("cities"));