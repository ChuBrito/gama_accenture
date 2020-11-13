<<<<<<< HEAD
import React from 'react'
import DefaultPage from '../../templates/DefaultPage/DefaultPage'
=======
import React, { useState } from "react";
import DefaultPage from "../../templates/DefaultPage/DefaultPage";
import SearchBar from "../../organisms/SearchBar/SearchBar";
import SearchList from "../../organisms/SearchList/SearchList";

const MOCKITEM = {
  initialDestination: "New York",
  initialIataCode: "NYC",
  finalDestination: "Madrid",
  finalIataCode: "MAD",
  oneWay: false,
  value: 455.45,
  flyInfos: [
    {
      //infos da ida
      airline: "Gol", // ele envia o codigo ai tem que traduzir pelo campo dictionaries no final da response
      flyType: "Econômica",
      flyDuration: "1:00",
      dates: {
        initialDate: "12/04/2021",
        initialTime: "17:00",
        arriveDate: "12/05/2021",
        arriveTime: "13:00",
      },
    },
    {
      //infos da volta
      airline: "Gol",
      flyType: "Econômica",
      flyDuration: "1:00",
      dates: {
        initialDate: "12/04/2021",
        initialTime: "17:00",
        arriveDate: "12/05/2021",
        arriveTime: "13:00",
      },
    },
  ],
};
const MOCKSEARCHLIST = [MOCKITEM, MOCKITEM, MOCKITEM, MOCKITEM, MOCKITEM];
>>>>>>> origin

const Search = () => {
  const [results, setResults] = useState();

  const searchObjHandler = (searchObj) => {
    //manda o send obj pro serviço
    setResults([...MOCKSEARCHLIST]);
  };

  return (
    <DefaultPage>
      <SearchBar searchHandler={searchObjHandler} />
      <SearchList searchResults={results} />
    </DefaultPage>
  );
};

export default Search;
