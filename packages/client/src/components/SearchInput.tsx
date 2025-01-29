
export default function SearchInput({ value, onChange }) {
    return (
            <input
                type="text"
                value={value}
                className="form-control form-input"
                placeholder="Search accommodation..."
                onChange={onChange}
            />
    );
}

