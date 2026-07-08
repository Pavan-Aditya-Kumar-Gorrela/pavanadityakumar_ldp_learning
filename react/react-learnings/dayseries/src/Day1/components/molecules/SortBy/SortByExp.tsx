interface SortByExpProps{
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const SortByExp:React.FC<SortByExpProps> = ({onChange}) => {

    return (
        <>
            <select name="exp" onChange={onChange}>
                <option value="">Sort By Experience</option>
                <option value="asc" id="asc">Ascending</option>
                <option value="desc" id="desc" >Descending</option>
            </select>
        </>
    )
}



export default SortByExp;