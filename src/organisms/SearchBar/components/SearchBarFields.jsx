import React from "react";
import Grid from "@material-ui/core/Grid";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomRadialInputs from "./components/CustomRadialInputs";
import CustomSearchFields from "./components/CustomSearchFields";
import useStyles from "./styles";

const SearchBarFields = ({ searchHandler, onChangeOneWay, onChangeInput }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <CustomRadialInputs onChangeOneWay={() => onChangeOneWay} />
      <Grid item xs={12} container spacing={1}>
        <CustomSearchFields onChangeInput={() => onChangeInput} />
        <Grid
          item
          container
          className={classes.customFlexBasisButton}
          xs={6}
          md={1}
          alignItems="flex-end"
        >
          <CustomButton
            color="secondary"
            text="Buscar"
            iconName="search"
            onClick={() => searchHandler()}
          ></CustomButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchBarFields;
