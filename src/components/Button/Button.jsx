import React from 'react'
import Button from '@material-ui/core/Button';

const Button = (text) => {
    return (
        <Button variant="contained" color="primary">
            {text}
        </Button>
    )
}

export default Button;