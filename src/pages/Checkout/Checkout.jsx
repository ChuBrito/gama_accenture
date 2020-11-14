import React, { useState } from "react";
// import DefaultPage from '../../templates/DefaultPage';
import {
  Grid,
  Hidden,
  Typography,
  Divider,
  Box,
  TextField,
  Toolbar,
} from "@material-ui/core";

import CardTravelIcon from "@material-ui/icons/CardTravel";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import AirlineSeatReclineNormalIcon from "@material-ui/icons/AirlineSeatReclineNormal";
import CustomButton from "../../components/CustomButton/CustomButton";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import {
  Container,
  ModalBorder,
  Content,
  ContentInput,
  ContainerForm,
} from "./styles";

import "./styles.css";
import useStyles from "./ComponentStyleCheckout/styles";

const Checkout = () => {
  const classes = useStyles();

  const [inputList, setInputList] = useState([
    {
      cpf: "",
      firstName: "",
      lastName: "",
    },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { cpf: "", firstName: "", lastName: "" }]);
  };

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      {/* <DefaultPage>
            
      </DefaultPage> */}
      <Container>
        <Toolbar className={classes.headerTitle}>
          <Typography variant="h4" className={classes.fontVoo}>
            GOL
          </Typography>

          <Typography>
            <a href="/">voltar</a>{" "}
            {/* colocar o link de volta para tela anterior */}
          </Typography>
        </Toolbar>

        <div>
          <Grid>
            <Toolbar item className={classes.headerTitle}>
              <Typography variant="h6">
                Voo GOL3340 - Airbus A320 - 100/200
              </Typography>
            </Toolbar>
            <ModalBorder>
              <Grid className={classes.modalContent} container>
                <Grid item xs={12} sm={3} className={classes.modalContentItem}>
                  <div>
                    <Typography variant="h5" color="textPrimary">
                      Ter 03 Nov
                    </Typography>
                    <Typography
                      variant="h4"
                      color="textPrimary"
                      className={classes.fontHour}
                    >
                      19:25
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h3"
                      color="textPrimary"
                      className={classes.fontVoo}
                    >
                      CGH
                    </Typography>
                    <Typography>
                      Aeroporto Internacional de Guarulhos
                    </Typography>
                  </div>
                </Grid>

                <Divider />

                <Grid className={classes.modalContentItem}>
                  <div>
                    <Typography
                      variant="h5"
                      color="textPrimary"
                      className={classes.fontVoo}
                    >
                      Duração
                    </Typography>
                    <Typography
                      color="textPrimary"
                      className={classes.fontHour}
                    >
                      1h 10m
                    </Typography>
                    <Typography color="">Econômica</Typography>
                  </div>
                </Grid>

                <Divider />

                <Grid className={classes.modalContentItem} item xs={12} sm={3}>
                  <div>
                    <Typography variant="h5" color="textPrimary">
                      Ter 03 Nov
                    </Typography>
                    <Typography
                      variant="h4"
                      color="textPrimary"
                      className={classes.fontHour}
                    >
                      19:25
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h3"
                      color="textPrimary"
                      className={classes.fontVoo}
                    >
                      CGH
                    </Typography>
                    <Typography>
                      Aeroporto Internacional de Guarulhos
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </ModalBorder>
            <br /> {/*Corrigir o espaçamento*/}
            <Hidden xsDown>
              {/*colocar xsDown*/}
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
            <ModalBorder>
              <Content>
                <div>
                  <Typography className="contentTitle">
                    Antes de finalizar verifique os dados informados
                  </Typography>
                </div>

                <Grid>
                  <Grid>
                    <div className="contentInfoPassage">
                      <span>
                        {" "}
                        <EventAvailableIcon />{" "}
                      </span>
                      <span>Data</span>
                    </div>

                    <Grid>
                      <Typography className="contentIdaVolta">
                        Ida: sexta-feira 22 de janeiro 2020,{" "}
                        <span>07:20hs</span>
                      </Typography>
                      <Typography className="contentIdaVolta">
                        Volta: sexta-feira 25 de janeiro 2020,{" "}
                        <span>20:20hs</span>
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid>
                    <div className="contentInfoPassage">
                      <span>
                        {" "}
                        <AirlineSeatReclineNormalIcon />{" "}
                      </span>
                      <span>Passageiros</span>
                    </div>

                    <Grid>
                      <div className="App">
                        {inputList.map((x, i) => {
                          return (
                            <ContainerForm>
                              <ContentInput className="Content">
                                <TextField
                                  className="input"
                                  name="cpf"
                                  placeholder="Informe o seu cpf"
                                  value={x.cpf}
                                  onChange={(e) => handleInputChange(e, i)}
                                  id="standard-basic"
                                  label="CPF"
                                />
                                <TextField
                                  className="input"
                                  name="firstName"
                                  placeholder="Informe o seu nome"
                                  value={x.firstName}
                                  onChange={(e) => handleInputChange(e, i)}
                                  id="standard-basic"
                                  label="Nome"
                                />
                                <TextField
                                  className="input"
                                  name="lastName"
                                  placeholder="Inform o seu sobrenome"
                                  value={x.lastName}
                                  onChange={(e) => handleInputChange(e, i)}
                                  id="standard-basic"
                                  label="Sobrenome"
                                />
                              </ContentInput>
                              <div className="btn-Content">
                                <div className="btn-one">
                                  {inputList.length - 1 === i && (
                                    <button onClick={handleAddClick}>
                                      Adicionar
                                    </button>
                                  )}
                                </div>
                                <div className="btn-two">
                                  {inputList.length !== 1 && (
                                    <button
                                      onClick={() => handleRemoveClick(i)}
                                    >
                                      Remover
                                    </button>
                                  )}
                                </div>
                              </div>
                            </ContainerForm>
                          );
                        })}
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Content>
            </ModalBorder>
            <br />
            <ModalBorder>
              <Content>
                <Grid>
                  <div>
                    <Typography className="contentTitle">
                      Forma de pagamento
                    </Typography>
                  </div>
                  <FormControl component="fieldset">
                    {/* <FormLabel component="legend">Gender</FormLabel> */}
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="Cartão de crédito"
                        control={<Radio color="primary" />}
                        label="Cartão de crédito"
                      />
                      <FormControlLabel
                        value="Cartão de débito"
                        control={<Radio color="primary" />}
                        label="Cartão de débito"
                      />
                      <FormControlLabel
                        value="Boleto"
                        control={<Radio color="primary" />}
                        label="Boleto"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Content>
            </ModalBorder>
            <br />
            <ModalBorder>
              <Content>
                <div className="priceButton">
                  <Grid item xs={4} display="flex">
                    <Box
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography>R$</Typography>
                      <Typography className={classes.ModalPrice}>
                        400,00
                      </Typography>
                    </Box>
                  </Grid>
                </div>
                <div>
                  <Box display="flex" flexDirection="column" marginY="3px">
                    <CustomButton
                      color="primary"
                      text="Comprar"
                      color="secondary"
                    />
                  </Box>
                </div>
              </Content>
            </ModalBorder>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
