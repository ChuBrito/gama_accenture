import React from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";

const CustomButton = ({ text, iconName, color, onClick, margin, variant }) => {
  return (
    <Button
      margin={margin}
      variant="contained"
      color={color}
      size="medium"
      onClick={onClick}
      startIcon={iconName ? <Icon>{iconName}</Icon> : ""}
    >
      <Typography variant={variant ? variant : "body1"}>{text}</Typography>
    </Button>
  );
};

export default CustomButton;
