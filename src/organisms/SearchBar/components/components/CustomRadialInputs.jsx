import React from "react";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

const CustomRadialInputs = ({ onChangeOneWay }) => {
  return (
    <FormControl>
      <RadioGroup row defaultValue="oneWay" onChange={onChangeOneWay}>
        <FormControlLabel
          value="oneWay"
          control={<Radio />}
          label="Somente Ida"
        />
        <FormControlLabel
          value="twoWay"
          control={<Radio />}
          label="Ida e Volta"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default CustomRadialInputs;
