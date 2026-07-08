
import Input from "../../atoms/Input/Input";

interface SearchBarProps {
    SearchPlaceholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ SearchPlaceholder, onChange }) => {

    const searchBarStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        gap: "10px"
    }
    return(
        <div style={searchBarStyle}>
            <Input placeholder={SearchPlaceholder} onChange={onChange} />
    
        </div>
    )
}

export default SearchBar;