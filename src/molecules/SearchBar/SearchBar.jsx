import React from 'react'
import {
  Grid,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Box,
} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import GpsFixedIcon from '@material-ui/icons/GpsFixed'
import PersonIcon from '@material-ui/icons/Person'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../../core/theme/theme'

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'nowrap',
  },
}))

const SearchBar = () => {
  const classes = useStyles()

  const onChangeOneWay = (e) => {
    console.log(e)
  }
  const onChangeInput = (e) => {
    console.log(e)
  }

  const sendSearchData = (e) => {
    console.log(e)
  }

  return (
    <Box
      bgcolor={theme.palette.primary.main}
      padding='20px 50px'
      borderRadius='4px'
    >
      <Grid container direction='column'>
        <FormControl>
          <RadioGroup
            row
            defaultValue='oneWay'
            onChange={onChangeOneWay.bind(this)}
          >
            <FormControlLabel
              value='oneWay'
              control={<Radio />}
              label='Somente Ida'
            />
            <FormControlLabel
              value='twoWay'
              control={<Radio />}
              label='Ida e Volta'
            />
          </RadioGroup>
        </FormControl>
        <Grid container direction='row' wrap='nowrap'>
          <CustomInput
            iconData={<GpsFixedIcon />}
            type='input'
            name='Origem'
          ></CustomInput>
          <CustomInput
            iconData={<LocationOnIcon />}
            type='input'
            name='Destino'
          ></CustomInput>
          <FormGroup label='Datas' row className={classes.root}>
            <CustomInput
              iconData={<CalendarTodayIcon />}
              type='date'
              name=''
            ></CustomInput>
            <CustomInput
              iconData={<CalendarTodayIcon />}
              type='date'
              name=''
            ></CustomInput>
          </FormGroup>
          <CustomInput
            iconData={<PersonIcon />}
            type='select'
            name=''
          ></CustomInput>
          <CustomButton
            text='Enviar'
            iconName='send'
            onClick={sendSearchData.bind(this)}
          ></CustomButton>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SearchBar
