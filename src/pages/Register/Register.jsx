import React from 'react';
import Logo from '../../components/Logo/Logo';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core';

// import CustomInput from '../../components/CustomInput/CustomInput';
// import CustomButton from '../../components/CustomButton/CustomButton';
import useStyles from './RegisterComponentStyle/styles';
import { ImageLogo, Title } from './styles';


export const Register = () => {
    const classes = useStyles();

    const handleCadastrar = (e) => {
        e.preventDefault();
        console.log('cadastrou');
    }

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

                    <form className={classes.form} noValidate>
                        {/* <Box >
                            <CustomInput  Width="900px" name="teste aqui"/>
                        </Box> */}

                        <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="nome"
                            label="Infome o seu nome"
                            name="name"
                            autoComplete="name"
                            autoFocus
                        />
                        <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Senha"
                            name="senha"
                            type="password"
                            id="senha"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="container"
                            color="primary"
                            className={classes.submit}
                            onClick={handleCadastrar}
                        >
                            Cadastrar
                        </Button>

                        {/* <CustomButton
                            fullWidth        
                            text="Cadastrar"
                        ></CustomButton> */}
                    </form>
                </div>
            </Grid>
            <Grid item xs={false} sm={8} md={7} className={classes.image} />
        </Grid>
    )
}
export default Register;