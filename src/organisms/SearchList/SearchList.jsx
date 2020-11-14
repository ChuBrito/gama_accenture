import { Box, List } from "@material-ui/core";
import React from "react";
import InfoCard from "../../components/InfoCard/InfoCard";
import PlaceHolderList from "./placeHolderList/PlaceHolderList";

const SearchList = ({ searchResults, openDetailsHandler }) => {
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
        {searchResults !== undefined ? (
          searchResults.map((result, index) => {
            return (
              <InfoCard
                data={{ ...result, flyInfos: { ...result.flyInfos } }}
                key={index + "tck"}
                actionFunction={openDetailsHandler}
              />
            );
          })
        ) : (
          <PlaceHolderList />
        )}
      </List>
    </Box>
  );
};

export default SearchList;
