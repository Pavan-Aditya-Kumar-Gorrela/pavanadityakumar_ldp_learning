import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

interface SearchBarProps{
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const SearchBar:React.FC<SearchBarProps> = ({ onChange, onClick }) => {

    return(
        <>
            <Input placeholder="Search..." onChange={onChange}/>
            <Button title="Search" color="skyblue" onClick={onClick}/>
        </>
    )
}

export default SearchBar;