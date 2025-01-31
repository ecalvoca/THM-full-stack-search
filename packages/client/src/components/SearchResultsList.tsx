import { CityType } from "../types/CityType.ts";
import { CountryType } from "../types/CountryType.ts";
import { HotelType } from "../types/HotelType.ts";
import { Link } from "react-router-dom";

interface SearchResultsListProps {
    results: (HotelType | CountryType | CityType)[];
    page: string;
    title: string;
}


const SearchResultsList: React.FC<SearchResultsListProps> = ({ results, page, title }) => {
    return (
        <>
            <h2>{title}</h2>
            {results.length === 0 ? (
                <p>No {title.toLowerCase()} matched</p>
            ) : (
                results.map((result) => (
                    <li key={result._id}>
                        <Link to={`/${page}/${result._id}`} className="dropdown-item">
                            <i className="fa fa-building mr-2"></i>
                            {result.name}
                        </Link>
                        <hr className="divider"/>
                    </li>
                ))
            )}
        </>
    );
}

export default SearchResultsList;
