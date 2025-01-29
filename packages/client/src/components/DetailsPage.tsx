import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import { fetchById } from "../services/apiService.ts";
import { Endpoint } from "../services/apiEndpoints.ts";

/**
 * Display the name of a Hotel | City | Country
 * by getting the id from the parameters and using apiService to fetch data
 * @param endpoint
 */
export default function DetailsPage({ endpoint } : { endpoint: Endpoint }) {
    const [details, setDetails] = useState("");
    const { id } = useParams();

    // fetch data after the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchById(id, endpoint);
                setDetails(data ? data.name : "Not found");
            } catch (error) {
                setDetails("Not found");
            }
        };

        fetchData();
    }, [id, endpoint]);

    return (
        <div className="App">
            <div className="container">
                <div className="row height d-flex justify-content-center align-items-center">
                    <h2>{details}</h2>
                </div>
            </div>
        </div>
    );
}
