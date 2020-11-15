import React, { useMemo, useState } from "react";
import {
  Modal,
  Grid,
  Hidden,
  Typography,
  Divider,
  Box,
  Toolbar,
  AppBar,
  Backdrop,
  Fade,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

import CustomButton from "../CustomButton/CustomButton";
import ModalFlyInfo from "./component/ModalFlyInfo";
import { ModalBorder } from "./component/styles";
import useStyles from "./ComponentStyleModal/styles";
import { TICKET_MOCK_1 } from "../../shared/utils/MOCKS";

const TransitionsModal = ({
  ticket = TICKET_MOCK_1,
  open: openProps,
  onClose,
  favorited,
}) => {
  const classes = useStyles();
  const open = useMemo(() => openProps && !!ticket, [openProps, ticket]);

  const [isfavorited, setFavorited] = useState(favorited);

  async function favoritedToggleAdd() {
    const favorites = localStorage.getItem("favorites");

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isfavorited) {
      // remover os favoritos
      const favoriteIndex = favoritesArray.findIndex((ticketItem) => {
        return ticketItem.id === ticket.id;
      });

      favoritesArray.splice(favoriteIndex, 1);
      setFavorited(false);
    } else {
      favoritesArray.push(ticket);

      setFavorited(true);
    }
    await localStorage.setItem("favorites", JSON.stringify(favoritesArray));
  }
  return (
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
      <Fade in={open}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.modalHeader}>
            <Typography variant="h4" className={classes.fontVoo}>
              {ticket?.flyInfos[0].airline}
            </Typography>

            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>

          <div>
            <Grid>
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  {`${ticket?.initialDestination} - ${ticket?.finalDestination}`}
                </Typography>
              </Toolbar>
              <ModalFlyInfo
                flyInfoItens={{
                  initialDate: ticket.flyInfos[0].dates.initialDate,
                  initialTime: ticket.flyInfos[0].dates.initialTime,
                  initialIataCode: ticket.initialIataCode,
                  flyDuration: ticket.flyInfos[0].flyDuration,
                  arriveDate: ticket.flyInfos[0].dates.arriveDate,
                  arriveTime: ticket.flyInfos[0].dates.arriveTime,
                  finalIataCode: ticket.finalIataCode,
                }}
              />
              {!ticket.oneWay ? (
                <ModalFlyInfo
                  flyInfoItens={{
                    initialDate: ticket.flyInfos[1].dates.initialDate,
                    initialTime: ticket.flyInfos[1].dates.initialTime,
                    initialIataCode: ticket.finalIataCode,
                    flyDuration: ticket.flyInfos[1].flyDuration,
                    arriveDate: ticket.flyInfos[1].dates.arriveDate,
                    arriveTime: ticket.flyInfos[1].dates.arriveTime,
                    finalIataCode: ticket.initialIataCode,
                  }}
                />
              ) : null}
              <Hidden xsDown>
                <ModalBorder className={classes.modalContent}>
                  <Typography>Bagagem</Typography>
                  <Divider />
                  <Grid>
                    <div>
                      <CardTravelIcon />
                      <div>
                        <Typography>Inclui uma mochila ou bolsa</Typography>
                        <Typography>
                          Deve caber embaixo do assento dianteiro.
                        </Typography>
                      </div>
                    </div>
                    <div>
                      <CardTravelIcon />
                      <div>
                        <Typography>Inclui bagagem de mão</Typography>
                        <Typography>
                          Deve caber no compartimento superior de avião.
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                </ModalBorder>
              </Hidden>
              <br /> {/*Corrigir o espaçamento*/}
              <div>
                <Grid className={classes.root}>
                  <Grid item xs={6}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      width="80%"
                      maxWidth="450px"
                      alignItems="stretch"
                    >
                      <Box display="flex" flexDirection="column" marginY="3px">
                        <CustomButton color="primary" text="Comprar" />
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
                        <Typography className={classes.ModalPrice}>
                          {ticket.value}
                        </Typography>
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
                        <IconButton
                          edge="start"
                          color="inherit"
                          onClick={favoritedToggleAdd}
                        >
                          {isfavorited ? (
                            <StarIcon className={classes.ModalPrice} />
                          ) : (
                            <StarBorderIcon className={classes.ModalPrice} />
                          )}
                        </IconButton>
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
  );
};
export default TransitionsModal;
