import { Endpoint } from "../services/apiEndpoints.ts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchById } from "../services/apiService.ts";


/**
 * Get id with useParams hook and use apiService to fetch data by id
 * @param endpoint
 */
export default function useFetchDetails(endpoint: Endpoint) {
    const [details, setDetails] = useState("");
    const { id } = useParams();

    // fetch data after the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchById(id, endpoint);
                setDetails(data ? data.name : "Not found");
            } catch (error) {
                console.error("Fetch error:", error);
                setDetails("Not found");
            }
        };

        fetchData();
    }, [id, endpoint]);

    return details;
}