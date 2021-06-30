import {SearchBarStyled} from "../styles.js";

const SearchBar = (props) => {
    return <SearchBarStyled 
                onChange={(event) => props.setQuery(event.target.value)} 
                placeholder="Search for a book's name or price"
            />
}

export default SearchBar;