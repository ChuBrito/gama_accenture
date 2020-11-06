import React from 'react'
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@material-ui/core'

const CustomInput = ({ name, type, onChange, onClick, iconData }) => {
  return (
    <FormControl>
      <OutlinedInput
        id={name.toLowerCase()}
        type={type ? type : 'text'}
        onChange={onChange}
        startAdornment={
          <InputAdornment position='start'>
            <IconButton onClick={onClick ? onclick : null} edge='start'>
              {iconData}
            </IconButton>
          </InputAdornment>
        }
        placeholder={name}
      />
    </FormControl>
  )
}

export default CustomInput
