import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Modal, Grid, Hidden, Typography, Divider, Box } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import CloseIcon from '@material-ui/icons/Close';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import CustomButton from '../../components/CustomButton/CustomButton';
import { ModalBorder } from './styles';
import useStyles from './ComponentStyleModal/styles';

 function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Grid container className={classes.modalContainer}>
        <Modal
          xs={12}
          sm={2}
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade 
            in={open}
            
          >
            <AppBar className={classes.appBar}>
              <Toolbar className={classes.modalHeader}>
                <Typography variant="h4" className={classes.fontVoo}>
                  GOL
                </Typography>
                
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                  <CloseIcon />
                </IconButton>
              </Toolbar>

              <div>
                <Grid>
                  <Toolbar item>
                    <Typography variant="h6" className={classes.title}>
                      Voo GOL3340 - Airbus A320 - 100/200
                    </Typography>
                  </Toolbar>

                  <ModalBorder>
                    <Grid className={classes.modalContent} container>
                      <Grid item xs={12} sm={3} className={classes.modalContentItem} >
                        <div>
                          <Typography variant="h5" color="textPrimary">Ter 03 Nov</Typography>
                          <Typography variant="h4" color="textPrimary" className={classes.fontHour}>19:25</Typography>
                        </div>
                        <div>
                          <Typography variant="h3" color="textPrimary" className={classes.fontVoo}>CGH</Typography>
                          <Typography>Aeroporto Internacional de Guarulhos</Typography>
                        </div>
                      </Grid>

                      <Divider />

                      <Grid className={classes.modalContentItem}>
                        <div>
                          <Typography variant="h5" color="textPrimary" className={classes.fontVoo}>Duração</Typography>
                          <Typography color="textPrimary" className={classes.fontHour}>1h 10m</Typography>
                          <Typography color="">Econômica</Typography>
                        </div>
                      </Grid>

                      <Divider />

                      <Grid className={classes.modalContentItem} item xs={12} sm={3}>
                        <div>
                          <Typography variant="h5" color="textPrimary" >Ter 03 Nov</Typography>
                          <Typography variant="h4" color="textPrimary" className={classes.fontHour}>19:25</Typography>
                        </div>
                        <div>
                          <Typography variant="h3" color="textPrimary" className={classes.fontVoo}>CGH</Typography>
                          <Typography>Aeroporto Internacional de Guarulhos</Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </ModalBorder>
                  <br/> {/*Corrigir o espaçamento*/}
                  <Hidden xsDown>{/*colocar xsDown*/}
                    <ModalBorder className={classes.modalContent}>
                      <Typography>Bagagem</Typography>
                      <Divider />
                      <Grid>
                        <div>
                          <CardTravelIcon />
                          <div>
                            <Typography>Inclui uma mochila ou bolsa</Typography>
                            <Typography>Deve caber embaixo do assento dianteiro.</Typography>
                          </div>
                        </div>
                        <div>
                          <CardTravelIcon />
                          <div>
                            <Typography>Inclui bagagem de mão</Typography>
                            <Typography>Deve caber no compartimento superior de avião.</Typography>
                          </div>
                        </div>
                      </Grid>
                    </ModalBorder>
                  </Hidden>
                  <br/> {/*Corrigir o espaçamento*/}

                  <div >
                  <Grid spacing={3} className={classes.root}>
                    <Grid item xs={6}>
                      <Box
                        display="flex"
                        flexDirection="column"
                        width="80%"
                        maxWidth="450px"
                        alignItems="stretch"
                      >
                        <Box display="flex" flexDirection="column" marginY="3px">
                          <CustomButton
                              color="primary"
                              text="Comprar"
                              color="secondary"
                            />                
                        </Box> 
                      </Box>
                    </Grid>

                      <Grid item xs={4} display="flex">
                        <Box
                          display="flex"
                          flexDirection="column"
                          width="80%"
                          maxWidth="450px"
                          alignItems="stretch"
                        >
                          <Box 
                            display="flex" 
                            flexDirection="row" 
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Typography>R$</Typography>
                            <Typography className={classes.ModalPrice}>400,00</Typography>
                          </Box>
                          
                        </Box>
                      </Grid>
                      <Grid item xs={2}>
                      <Box
                          display="flex"
                          flexDirection="column"
                          width="80%"
                          maxWidth="450px"
                          alignItems="stretch"
                        >
                          <Box 
                            display="flex" 
                            flexDirection="row" 
                            alignItems="center"
                            justifyContent="center"
                          >
                            <StarBorderIcon className={classes.ModalPrice}/>
                          </Box>

                        </Box>
                      </Grid>
                    </Grid>
                  </div>

                </Grid>
              </div>
            </AppBar>
          </Fade>
        </Modal>
      </Grid>
    </div>
  );
}
export default TransitionsModal;