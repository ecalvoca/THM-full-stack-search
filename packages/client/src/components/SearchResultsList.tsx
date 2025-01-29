
function getNameField (result, typeSearch: string): string
{
    switch (typeSearch) {
        case "hotels":
            return result.hotel_name;
        case "countries":
            return result.country;
        case "cities":
            return result.city;
        default:
            return "";
    }
}

export default function SearchResultsList({ results, typeSearch, title }) {
    return (
        <>
            <h2>{title}</h2>
            {results.length === 0 ? (
                <p>No {title.toLowerCase()} matched</p>
            ) : (
                results.map((result) => (
                    <li key={result._id}>
                        <a href={`/${typeSearch}/${result._id}`} className="dropdown-item">
                            <i className="fa fa-building mr-2"></i>
                            {getNameField(result, typeSearch)}
                        </a>
                        <hr className="divider"/>
                    </li>
                ))
            )}
        </>
    );
}
