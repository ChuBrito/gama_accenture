import { Box, Divider, Grid, GridList, List } from "@material-ui/core";
import React from "react";
import InfoCard from "../../components/InfoCard/InfoCard";

const MOCKITEM = {
  initialDestination: "New York",
  finalDestination: "Madrid",
  flyType: "oneWay",
  value: 455.45,
  airline: "Gol",
  flyInfo: "",
  date: {
    initialDate: "12/04/2021",
    arriveDate: "12/05/2021",
  },
};

const MOCKLIST = {};
const SearchList = (searchResult) => {
  return (
    <Box display="flex" flexDirection="column">
      <Box
        id="filtroField"
        display="flex"
        flexDirection="row"
        justifyContent="flexEnd"
      >
        <Box id="filtro"></Box>
      </Box>
      <List id="resultList">
        <InfoCard data={MOCKITEM} />

        <InfoCard data={MOCKITEM} />
        <InfoCard data={MOCKITEM} />
        <InfoCard data={MOCKITEM} />
        <InfoCard data={MOCKITEM} />
        <InfoCard data={MOCKITEM} />
        <InfoCard data={MOCKITEM} />
      </List>
    </Box>
  );
};

export default SearchList;
