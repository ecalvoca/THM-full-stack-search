import SearchInput from "./SearchInput.tsx";
import ClearBtn from "./ClearBtn.tsx";


export default function SearchBar({ searchTerm, onSearchChange, showClearBtn, onClearClick }) {
    return (
        <div className="form">
            <i className="fa fa-search"></i>
            <SearchInput value={searchTerm} onSearchChange={onSearchChange} />
            {showClearBtn && <ClearBtn onClearClick={onClearClick} />}
        </div>
    );
}
