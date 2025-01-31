import SearchResultsList from "./SearchResultsList.tsx";
import SearchBar from "./SearchBar.tsx";
import { useSearch } from "../hooks/useSearch.tsx";


export default function SearchSection() {
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
        <div className="dropdown">
            <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} showClearBtn={showClearBtn} onClearClick={emptyData} />
            {showClearBtn && (
                <div className="search-dropdown-menu dropdown-menu w-100 show p-2">
                    <SearchResultsList results={hotels} page={"hotel"} title={"Hotels"}/>
                    <SearchResultsList results={countries} page={"country"} title={"Countries"}/>
                    <SearchResultsList results={cities} page={"city"} title={"Cities"}/>
                </div>
            )}
        </div>
    );
}