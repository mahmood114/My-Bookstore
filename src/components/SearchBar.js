import { SearchBarStyled } from "../styles.js";

const SearchBar = (props) => {
  const placeholder = `Search for a ${props.target}`;

  return (
    <SearchBarStyled
      onChange={(event) => props.setQuery(event.target.value)}
      placeholder={placeholder}
    />
  );
};

export default SearchBar;
