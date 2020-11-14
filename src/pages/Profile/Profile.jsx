import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import ProfileBio from "../../organisms/ProfileBio/ProfileBio";
import DefaultPage from "../../templates/DefaultPage/DefaultPage";
import TicketListAccord from "../../organisms/TicketsListAccord/TicketListAccord";
import InfoCard from "../../components/InfoCard/InfoCard";
import TransitionsModal from "../../components/TransitionsModal/TransitionsModal";
import { MOCK_TICKET_LIST, MOCK_USER_DATA } from "../../shared/utils/MOCKS.js";

//TODO: colocar indenticon
const Profile = () => {
  const [userData, setUserData] = useState(MOCK_USER_DATA);
  const [bookmarkedTickets, setBookmarkedTickets] = useState([]);
  const [ticketsList, setTicketsList] = useState([]);
  const [reservedTickets, setReservedTickets] = useState([]);
  const [openedTicket, setOpenedTicket] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getUserTicketsLists();
  }, []);

  const saveProfileHandler = (e) => {
    console.log(e);
  };

  const getUserTicketsLists = () => {
    //TODO: CREATE SERVICE TO GET LISTS
    const favList = MOCK_TICKET_LIST.map((favItem, index) => (
      <InfoCard
        bookmarked
        data={{ ...favItem, flyInfos: { ...favItem.flyInfos } }}
        key={index + "fav"}
        actionFunction={openModal}
      />
    ));
    const ticketsBuyList = MOCK_TICKET_LIST.map((ticketItem, index) => (
      <InfoCard
        data={{ ...ticketItem, flyInfos: { ...ticketItem.flyInfos } }}
        key={index + "tck"}
        actionFunction={openModal}
      />
    ));
    const reservedList = MOCK_TICKET_LIST.map((reserv, index) => (
      <InfoCard
        reserv
        data={{ ...reserv, flyInfos: { ...reserv.flyInfos } }}
        key={index + "rsv"}
        actionFunction={openModal}
      />
    ));

    setBookmarkedTickets([...favList]);
    setTicketsList([...ticketsBuyList]);
    setReservedTickets([...reservedList]);
  };

  function openModal(data) {
    setOpenedTicket(data);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <DefaultPage>
      <Box
        display="flex"
        flexDirection="column"
        bgcolor="#F5F8FA"
        borderRadius="10px"
        justifyContent="center"
        marginTop="10px"
      >
        <Grid
          id="profile-title-item"
          item
          container
          justify="center"
          alignItems="center"
        >
          <Box display="flex" height="96px" alignItems="center">
            <Typography color="primary" variant="h1">
              Perfil
            </Typography>
          </Box>
        </Grid>
        <Grid id="profile-container" container justify="center">
          <Grid id="profile-bios-container" item container>
            <Grid id="profile-bios-item" item container>
              <ProfileBio
                saveInputs={saveProfileHandler}
                nameUser={userData.name}
                emailUser={userData.email}
                phoneUser={userData.phone}
                documentUser={userData.document}
              />
            </Grid>
          </Grid>
          <Grid
            id="profile-tickets-list"
            item
            container
            justify="center"
            direction="column"
          >
            <Box margin="10px 20px">
              <TicketListAccord list={ticketsList} name="Passagens Compradas" />
              <TicketListAccord
                list={reservedTickets}
                name="Passagens Reservadas"
              />
              <TicketListAccord list={bookmarkedTickets} name="Favoritos" />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <TransitionsModal
        open={modalOpen}
        ticket={openedTicket}
        onClose={closeModal}
      />
    </DefaultPage>
  );
};

export default Profile;
