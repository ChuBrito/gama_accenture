import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import ProfileBio from "../../organisms/ProfileBio/ProfileBio";
import DefaultPage from "../../templates/DefaultPage/DefaultPage";
import TicketListAccord from "../../organisms/TicketsListAccord/TicketListAccord";
import InfoCard from "../../components/InfoCard/InfoCard";

const USER_DATA_MOCK = {
  name: "Fedrerico Novo",
  email: "fe.novo@fed.com",
  document: "377.670.555-08",
  phone: "11 986111616",
};
const MOCK_TICKET_ITEM = {
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
const MOCK_TICKET_LIST = [
  MOCK_TICKET_ITEM,
  MOCK_TICKET_ITEM,
  MOCK_TICKET_ITEM,
  MOCK_TICKET_ITEM,
  MOCK_TICKET_ITEM,
];
//TODO: colocar indenticon
const Profile = () => {
  const [userData, setUserData] = useState(USER_DATA_MOCK);
  const [bookmarkedTickets, setBookmarkedTickets] = useState([]);
  const [ticketsList, setTicketsList] = useState([]);
  const [reservedTickets, setReservedTickets] = useState([]);

  useEffect(() => {
    getUserTicketsLists();
  }, []);

  const saveProfileHandler = (e) => {
    console.log(e);
  };

  const shareTicketHandler = (e) => {
    console.log(e);
  };

  const getUserTicketsLists = () => {
    //TODO: CREATE SERVICE TO GET LISTS
    const favList = MOCK_TICKET_LIST.map((favItem) => (
      <InfoCard
        data={{ ...favItem, flyInfos: { ...favItem.flyInfos } }}
        key={Object.keys(favItem)}
      />
    ));
    const ticketsBuyList = [].map((ticketItem) => (
      <InfoCard
        data={{ ...ticketItem, flyInfos: { ...ticketItem.flyInfos } }}
        key={Object.keys(ticketItem)}
      />
    ));
    const reservedList = MOCK_TICKET_LIST.map((reserv) => (
      <InfoCard
        data={{ ...reserv, flyInfos: { ...reserv.flyInfos } }}
        key={Object.keys(reserv)}
      />
    ));

    setBookmarkedTickets([...favList]);
    setTicketsList([...ticketsBuyList]);
    setReservedTickets([...reservedList]);
  };

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
    </DefaultPage>
  );
};

export default Profile;
