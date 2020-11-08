import React from "react";
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";

const CustomInput = ({
  name,
  type,
  color,
  onChange,
  onClick,
  iconData,
  defaultValue,
  noPlaceholder,
}) => {
  return (
    <FormControl>
      <OutlinedInput
        color={color}
        id={name.toLowerCase()}
        type={type || "text"}
        onChange={onChange}
        value={defaultValue ? defaultValue : ""}
        startAdornment={
          <InputAdornment position="start">
            <IconButton
              size="small"
              onClick={onClick ? onclick : null}
              edge="start"
            >
              {iconData}
            </IconButton>
          </InputAdornment>
        }
        placeholder={noPlaceholder ? "" : name}
      />
    </FormControl>
  );
};

export default CustomInput;
