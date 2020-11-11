import React from "react";
import DefaultPage from "../../templates/DefaultPage/DefaultPage";
import SearchBar from "../../organisms/SearchBar/SearchBar";
import SearchList from "../../organisms/SearchList/SearchList";

const Search = () => {
  return (
    <DefaultPage>
      <SearchBar></SearchBar>
      <SearchList></SearchList>
    </DefaultPage>
  );
};

export default Search;
