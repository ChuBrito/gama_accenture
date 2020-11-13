import React from 'react';
import Logo from '../../components/Logo/Logo';
import { Grid, Paper, Box} from '@material-ui/core';
import { ArrowRightAlt } from "@material-ui/icons";
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import useStyles from './RegisterComponentStyle/styles';
import { ImageLogo, Title, LinkVoltar } from './styles';

import * as Yup from 'yup';

export const Register = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} className={classes.box}>
                <div className={classes.paper}>
                    <ImageLogo >
                        <Logo large />
                    </ImageLogo>

                    <Title>
                        <h1>
                            Faça seu cadastro
                        </h1>
                    </Title>
               

                        <Grid
                            id="login-form-items"
                            container
                            item
                            direction="column"
                            alignItems="center"
                            >
                            <Box
                                display="flex"
                                flexDirection="column"
                                width="80%"
                                maxWidth="450px"
                                alignItems="stretch"
                                
                            >
                                <Box display="flex" flexDirection="column" marginY="3px">
                                    <CustomInput
                                        color="primary"
                                        name="CPF"
                                        type="text"
                                        
                                    />
                                </Box>
                                <Box display="flex" flexDirection="column" marginY="3px">
                                    <CustomInput
                                        color="primary"
                                        name="Email"
                                        type="email"
                                    />
                                </Box>
                                <Box display="flex" flexDirection="column" marginY="3px">
                                    <CustomInput
                                        color="primary"
                                        name="Login"
                                        type="text"
                                    />
                                </Box>
                                <Box display="flex" flexDirection="column" marginY="3px">
                                    <CustomInput
                                        color="primary"
                                        name="Nome"
                                        type="text"
                                    />
                                </Box>
                                <Box display="flex" flexDirection="column" marginY="3px">
                                    <CustomInput
                                        color="primary"
                                        name="Senha"
                                        type="password"
                                    />
                                </Box>
                                <Box display="flex" flexDirection="column" marginY="3px">
                                    <CustomButton
                                        text="Cadastrar"
                                        color="secondary"
                                        type="submit"
                                        
                                    />
                                </Box>
                            </Box>
                            <LinkVoltar>
                                <a href="forgot">
                                    Volta para login
                                    <ArrowRightAlt />
                                </a>
                            </LinkVoltar>
                        </Grid>
            

                </div>
            </Grid>
            <Grid item xs={false} sm={8} md={7} className={classes.image} />
        </Grid>
    )
}
export default Register;