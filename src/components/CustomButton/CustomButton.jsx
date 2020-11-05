import React from 'react'
import Button from '@material-ui/core/Button';
import Icon from "@material-ui/core/Icon";

const CustomButton = ({text, iconName, color}) => {
    return (
        <Button 
            variant="contained"
            color={color} 
            size="medium"
            startIcon={iconName ? <Icon>{iconName}</Icon> : ""}
        >
            {text}
        </Button>
    )
}

export default CustomButton;