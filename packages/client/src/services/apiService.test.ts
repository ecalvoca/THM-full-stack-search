import { describe, it, expect } from "vitest";
import { fetchBySearchTerm } from "./apiService.ts";
import { HotelType } from "../types/HotelType.ts";
import {CountryType} from "../types/CountryType.ts";
import {CityType} from "../types/CityType.ts";


describe("Fetch hotels by search term", () => {
    it("should return 200 and an array of hotels", async () => {
        const result = await fetchBySearchTerm("resort", "hotels");
        expect(result).toBeInstanceOf(Array<HotelType>);
    });

    it("should contain a specific hotel in the results (found by country)", async () => {
        const result = await fetchBySearchTerm("unit", "hotels");
        //check if specific hotel is in the results
        expect(result).toEqual(expect.arrayContaining([
            expect.objectContaining({ name: "The Tower Hotel" })
        ]));
        //check other hotel is not in the results
        expect(result).not.toEqual(expect.arrayContaining([
            expect.objectContaining({ name: "Hotel Dann Carlton Medellin" })
        ]));
    });

    it("should contain a specific hotel name in the results when using special characters", async () => {
        //input contains '
        const result1 = await fetchBySearchTerm("george’s", "hotels");
        expect(result1).toEqual(expect.arrayContaining([
            expect.objectContaining({ name: "Corinthia Hotel St. George’s Bay" })
        ]));
        //input contains .
        const result2 = await fetchBySearchTerm("St.", "hotels");
        expect(result2).toEqual(expect.arrayContaining([
            expect.objectContaining({ name: "Corinthia Hotel St. George’s Bay" })
        ]));
    });

    it("should return an empty array", async () => {
        const result = await fetchBySearchTerm("abcdefg", "hotels");
        expect(result).toHaveLength(0);
    });
});

describe("Fetch countries by search term", () => {
    it("should return 200 and an array of countries", async () => {
        const result = await fetchBySearchTerm("uni", "countries");
        expect(result).toBeInstanceOf(Array<CountryType>);
        expect(result).toEqual(expect.arrayContaining([
            expect.objectContaining({ name: "United Kingdom" }),
            expect.objectContaining({ name: "United States" })
        ]));
    });

    it("should return an empty array", async () => {
        const result = await fetchBySearchTerm("abcdefg", "countries");
        expect(result).toHaveLength(0);
    });
});

describe("Fetch cities by search term", () => {
    it("should return 200 and an array of cities", async () => {
        const result = await fetchBySearchTerm("ma", "cities");
        expect(result).toBeInstanceOf(Array<CityType>);
        expect(result).toEqual(expect.arrayContaining([
            expect.objectContaining({ name: "Macau" }),
            expect.objectContaining({ name: "Madrid" }),
            expect.objectContaining({ name: "Malaga" }),
        ]));
    });

    it("should return an empty array", async () => {
        const result = await fetchBySearchTerm("uni", "cities");
        expect(result).toHaveLength(0);
    });
});

