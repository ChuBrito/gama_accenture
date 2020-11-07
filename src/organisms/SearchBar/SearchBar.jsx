import React from "react";
import Box from "@material-ui/core/Box";
import theme from "../../core/theme/theme";
import SearchBarFields from "./components/SearchBarFields";

const SearchBar = () => {
  const onChangeOneWay = (e) => {
    console.log(e);
  };
  const onChangeInput = (e) => {
    console.log(e.target.value);
  };

  const sendSearchData = (e) => {
    console.log(e);
  };

  return (
    <Box
      bgcolor={theme.palette.primary.main}
      padding="18px 18px"
      borderRadius="4px"
      justifyContent="center"
    >
      <SearchBarFields
        sendSearchData={sendSearchData}
        onChangeInput={onChangeInput}
        onChangeOneWay={onChangeOneWay}
      />
    </Box>
  );
};

export default SearchBar;
