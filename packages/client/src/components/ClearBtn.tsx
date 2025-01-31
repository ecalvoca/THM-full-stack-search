

export default function ClearBtn({ onClearClick }) {
    return (
        <span className="left-pan" onClick={onClearClick}>
            <i className="fa fa-close"></i>
        </span>
    );
}
