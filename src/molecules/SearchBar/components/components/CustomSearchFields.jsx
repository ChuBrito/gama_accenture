import React from "react";
import { FormLabel, FormGroup, Grid } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import PersonIcon from "@material-ui/icons/Person";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import useStyles from "./styles";

const CustomSearchFields = ({}) => {
  const classes = useStyles();
  return (
    <>
      <Grid item container direction="column" xs={12} md={3}>
        <FormLabel color="secondary">Origem</FormLabel>
        <CustomInput
          color="secondary"
          iconData={<GpsFixedIcon />}
          type="input"
          name="Origem"
        ></CustomInput>
      </Grid>
      <Grid item container direction="column" xs={12} md={3}>
        <FormLabel color="secondary">Destino</FormLabel>
        <CustomInput
          color="secondary"
          iconData={<LocationOnIcon />}
          type="input"
          name="Destino"
        ></CustomInput>
      </Grid>
      <Grid item container direction="column" xs={12} md={4}>
        <FormLabel color="secondary">Datas</FormLabel>
        <FormGroup id="data" label="Datas" row className={classes.root}>
          <CustomInput
            color="secondary"
            iconData={<CalendarTodayIcon />}
            type="date"
            name="DataInicio"
            noPlaceholder
          ></CustomInput>
          <CustomInput
            color="secondary"
            iconData={<CalendarTodayIcon />}
            type="date"
            name="DataFim"
            noPlaceholder
          ></CustomInput>
        </FormGroup>
      </Grid>
      <Grid item container direction="column" xs={4} md={1}>
        <FormLabel color="secondary">Passageiros</FormLabel>
        <CustomInput
          iconData={<PersonIcon />}
          type="number"
          name="passengers"
          color="secondary"
          noPlaceholder
        ></CustomInput>
      </Grid>
    </>
  );
};

export default CustomSearchFields;
