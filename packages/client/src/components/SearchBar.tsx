

export default function SearchBar({ searchTerm, onSearchChange, showClearBtn, onClearClick }) {
    return (
        <div className="form">
            <i className="fa fa-search"></i>
            <input
                type="text"
                value={searchTerm}
                className="form-control form-input"
                placeholder="Search accommodation..."
                onChange={onSearchChange}
            />
            {showClearBtn &&
                <span className="left-pan" onClick={onClearClick}>
                    <i className="fa fa-close"></i>
                </span>
            }
        </div>
    );
}
