import React from "react";
import Grid from "@material-ui/core/Grid";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomRadialInputs from "./components/CustomRadialInputs";
import CustomSearchFields from "./components/CustomSearchFields";

const SearchBarFields = ({ sendSearchData, onChangeOneWay, onChangeInput }) => {
  return (
    <Grid container>
      <CustomRadialInputs onChangeOneWay={onChangeOneWay} />
      <Grid item xs={12} container spacing={1}>
        <CustomSearchFields onChangeInput={onChangeInput} />
        <Grid item container xs={6} md={1} alignItems="flex-end">
          <CustomButton
            color="secondary"
            text="Enviar"
            iconName="send"
            onClick={sendSearchData}
          ></CustomButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchBarFields;
