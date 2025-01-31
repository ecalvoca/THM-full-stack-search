

export default function SearchInput({ value, onSearchChange }) {
    return (
            <input
                type="text"
                value={value}
                className="form-control form-input"
                placeholder="Search accommodation..."
                onChange={onSearchChange}
            />
    );
}

