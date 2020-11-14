import React, { useState } from "react";
import { Button } from "@material-ui/core";
import DefaultPage from "../../templates/DefaultPage/DefaultPage";
import SearchBar from "../../organisms/SearchBar/SearchBar";
import SearchList from "../../organisms/SearchList/SearchList";
import TransitionsModal from "../../components/TransitionsModal/TransitionsModal";
import { MOCK_TICKET_LIST } from "../../shared/utils/MOCKS";

const Search = () => {
  const [results, setResults] = useState();

  const handleOrder = () => {
    const filterItems = results.slice().sort((a, b) => {
      return a["value"] < b["value"] ? -1 : a["value"] > b["value"] ? 1 : 0;
    });
    setResults(filterItems);
  };

  const searchObjHandler = (searchObj) => {
    //manda o send obj pro serviço
    setResults([...MOCK_TICKET_LIST]);
  };
  const [openedTicket, setOpenedTicket] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  function closeModal() {
    setModalOpen(false);
  }

  function openModal(data) {
    setOpenedTicket(data);
    setModalOpen(true);
  }

  console.log(results);

  return (
    <DefaultPage>
      <SearchBar searchHandler={searchObjHandler} />
      <div>
        <h4>Ordenar por:</h4>
        <Button onClick={() => handleOrder()}>Menor valor</Button>
        <Button onClick={() => handleOrder()}>Relevância</Button>
      </div>
      <TransitionsModal
        open={modalOpen}
        ticket={openedTicket}
        onClose={closeModal}
      />
      <SearchList searchResults={results} openDetailsHandler={openModal} />
    </DefaultPage>
  );
};

export default Search;
