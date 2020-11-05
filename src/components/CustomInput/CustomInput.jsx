import React from "react";
import { FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";

const CustomInput = ({ name, type, onChange, onClick }) => {
  return (
    <FormControl>
      <InputLabel htmlFor={name.toLowerCase()}>{name}</InputLabel>
      <OutlinedInput
        id={name.toLowerCase()}
        type={type ? type : "text"}
        onChange={onChange}
        startAdornment={
          <InputAdornment position="start">
            <IconButton onClick={onClick ? onclick : ""} edge="start">
                <Visibility />
            </IconButton>
          </InputAdornment>
        }
      ></OutlinedInput>
    </FormControl>
  );
};

export default CustomInput;
