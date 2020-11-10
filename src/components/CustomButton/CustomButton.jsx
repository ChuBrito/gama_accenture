import React from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";

const CustomButton = ({ text, iconName, color, onClick, size, variant}) => {
  return (
    <Button
      variant='contained'
      color={color || "default"}
      size={size}
      onClick={onClick}
      startIcon={iconName ? <Icon>{iconName}</Icon> : ""}
    >
      <Typography variant={variant || "body1"}>{text}</Typography>
    </Button>
  );
};

export default CustomButton;
