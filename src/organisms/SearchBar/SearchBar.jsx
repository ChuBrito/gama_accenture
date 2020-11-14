import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import theme from "../../core/theme/theme";
import SearchBarFields from "./components/SearchBarFields";

const SearchBar = ({ searchHandler }) => {
  const [searchObj, seatSearch] = useState({});

  const onChangeOneWay = (e) => {
    //altera os o tipo de viagem do search obj
    console.log(e);
  };
  const onChangeInput = (e) => {
    //altera os campos do search obj
    console.log(e.target.value);
  };
  const getLocations = (e) => {};

  return (
    <Box
      bgcolor={theme.palette.primary.main}
      padding="18px 18px"
      borderRadius="4px"
      justifyContent="center"
    >
      <SearchBarFields
        searchHandler={() => searchHandler(searchObj)}
        onChangeInput={onChangeInput}
        onChangeLocation={getLocations}
        onChangeOneWay={onChangeOneWay}
      />
    </Box>
  );
};

export default SearchBar;
