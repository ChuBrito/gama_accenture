import React, { useState } from "react";
import DefaultPage from "../../templates/DefaultPage/DefaultPage";
import SearchBar from "../../organisms/SearchBar/SearchBar";
import SearchList from "../../organisms/SearchList/SearchList";
import TransitionsModal from "../../components/TransitionsModal/TransitionsModal";
import { MOCK_TICKET_LIST } from "../../shared/utils/MOCKS";

const Search = () => {
  const [results, setResults] = useState();

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

  return (
    <DefaultPage>
      <SearchBar searchHandler={searchObjHandler} />
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
