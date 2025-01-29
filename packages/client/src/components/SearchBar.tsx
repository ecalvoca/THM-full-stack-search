import SearchInput from "./SearchInput.tsx";
import ClearBtn from "./ClearBtn.tsx";

export default function SearchBar({ searchTerm, onSearchChange, showClearBtn, onClear }) {
    return (
        <div className="form">
            <i className="fa fa-search"></i>
            <SearchInput value={searchTerm} onChange={onSearchChange} />
            {showClearBtn && <ClearBtn onClick={onClear} />}
        </div>
    );
}
