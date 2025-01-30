import {useState, type ChangeEvent, useEffect} from 'react';
import { fetchBySearchTerm } from "../services/apiService.ts";
import { HotelType } from "../types/HotelType.ts";
import { CountryType } from "../types/CountryType.ts";
import { CityType } from "../types/CityType.ts";


/**
 * Manages search input changes and search results
 */
export function useSearch() {
    const [hotels, setHotels] = useState<HotelType[]>([]);
    const [countries, setCountries] = useState<CountryType[]>([]);
    const [cities, setCities] = useState<CityType[]>([]);
    const [showClearBtn, setShowClearBtn] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    // Handle search input changes
    const handleSearchChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    // Fetch and manage search results state
    useEffect(() => {
        const fetchData = async() => {
            if (searchTerm === '') {
                setHotels([]);
                setCountries([]);
                setCities([]);
                setShowClearBtn(false);
                return;
            }

            const [filteredHotels, filteredCountries, filteredCities] = await Promise.all([
                fetchBySearchTerm(searchTerm, 'hotels'),
                fetchBySearchTerm(searchTerm, 'countries'),
                fetchBySearchTerm(searchTerm, 'cities'),
            ]);

            setShowClearBtn(true);
            setHotels(filteredHotels);
            setCountries(filteredCountries);
            setCities(filteredCities);
        }

        // Debounce fetching data to allow time for user input
        const debounceTimeout = setTimeout(fetchData, 200); // 200ms debounce
        return () => clearTimeout(debounceTimeout);
    }, [searchTerm]);

    // Clear search results
    const emptyData = () => {
        setHotels([]);
        setCountries([]);
        setCities([]);
        setSearchTerm("");
    };

    return {
        searchTerm,
        handleSearchChange,
        showClearBtn,
        emptyData,
        hotels,
        countries,
        cities
    }
}