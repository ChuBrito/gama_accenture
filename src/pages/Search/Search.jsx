import React, { useState } from "react";
import DefaultPage from "../../templates/DefaultPage/DefaultPage";
import SearchBar from "../../organisms/SearchBar/SearchBar";
import SearchList from "../../organisms/SearchList/SearchList";
import { MOCK_TICKET_LIST } from "../../shared/utils/MOCKS";

const Search = () => {
  const [results, setResults] = useState();

  const searchObjHandler = (searchObj) => {
    //manda o send obj pro serviço
    setResults([...MOCK_TICKET_LIST]);
  };

  return (
    <DefaultPage>
      <SearchBar searchHandler={searchObjHandler} />
      <SearchList searchResults={results} />
    </DefaultPage>
  );
};

export default Search;
