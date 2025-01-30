import SearchResultsList from "../components/SearchResultsList.tsx";
import SearchBar from "../components/SearchBar.tsx";
import { useSearch } from "../hooks/useSearch.tsx";


export default function HomePage() {
    const {
        searchTerm,
        handleSearchChange,
        showClearBtn,
        emptyData,
        hotels,
        countries,
        cities,
    } = useSearch();

    return (
        <div className="App">
            <div className="container">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="dropdown">
                            <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} showClearBtn={showClearBtn} onClear={emptyData} />
                            {showClearBtn && (
                                <div className="search-dropdown-menu dropdown-menu w-100 show p-2">
                                    <SearchResultsList results={hotels} page={"hotel"} title={"Hotels"}/>
                                    <SearchResultsList results={countries} page={"country"} title={"Countries"}/>
                                    <SearchResultsList results={cities} page={"city"} title={"Cities"}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
