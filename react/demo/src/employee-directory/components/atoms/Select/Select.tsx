interface SelectProps {
    options: string[];
    onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, onChange }) => {
    const selectStyle: React.CSSProperties = {
        border: "1px solid #ccc",
        borderRadius: "5px",
        width: "200px",
        height: "30px",
        background: "aliceblue",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "5px"
    }

    return (
        <select style={selectStyle} onChange={(e) => onChange(e.target.value)}>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

export default Select;