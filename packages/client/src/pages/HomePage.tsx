import { useState, type ChangeEvent } from 'react';
import { getCodeSandboxHost } from "@codesandbox/utils";
import SearchResultsList from "../components/SearchResultsList.tsx";
import SearchBar from "../components/SearchBar.tsx";

type Hotel = { _id: string, chain_name: string; name: string; city: string, country: string };

const codeSandboxHost = getCodeSandboxHost(3001);
const API_URL = codeSandboxHost ? `https://${codeSandboxHost}` : 'http://localhost:3001';

const fetchAndFilterHotels = async (value: string) => {
    const hotelsData = await fetch(`${API_URL}/hotels`);
    const hotels = (await hotelsData.json()) as Hotel[];
    return hotels.filter(
        ({ chain_name, name, city, country }) =>
            chain_name.toLowerCase().includes(value.toLowerCase()) ||
            name.toLowerCase().includes(value.toLowerCase()) ||
            city.toLowerCase().includes(value.toLowerCase()) ||
            country.toLowerCase().includes(value.toLowerCase())
    );
}

export default function HomePage() {
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [showClearBtn, setShowClearBtn] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchData = async (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);

        if (searchTerm === '') {
            setHotels([]);
            setShowClearBtn(false);
            return;
        }

        const filteredHotels = await fetchAndFilterHotels(searchTerm)
        setShowClearBtn(true);
        setHotels(filteredHotels);
    };

    const emptyData = () => {
        setHotels([]);
        setSearchTerm("");
    };


    return (
        <div className="App">
            <div className="container">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="dropdown">
                            <SearchBar searchTerm={searchTerm} onSearchChange={fetchData} showClearBtn={showClearBtn} onClear={emptyData} />
                            {showClearBtn && (
                                <div className="search-dropdown-menu dropdown-menu w-100 show p-2">
                                    <SearchResultsList results={hotels} page={"hotel"} title={"Hotels"}/>
                                    <h2>Countries</h2>
                                    <p>No countries matched</p>
                                    <h2>Cities</h2>
                                    <p>No cities matched</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

