/*******************************************************
 * Nombre:    AppBarCustom
 * Resumen:   Barra de herramientas creada, maneja la
 *            apertura de menu lateral y salida del
 * sistema
 * Props:
 * Librerias:
 * Autor:     Luis Rosero
 * Tiempo :   45 min
 ********************************************************/
import {React, useContext, useState} from 'react';
import {Avatar, Grid, IconButton, Menu, MenuItem} from '@mui/material';

import {CDashboard} from '../Dashboard';
import logo from '../../Recursos/logolargo.svg'
import {Link} from "react-router-dom";
import {HambergerMenu} from "iconsax-react";
import fire from "../../fire";


const AppBarCustom = (props) => {
    const {alto} = props;
    const cData = useContext(CDashboard);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const salir = () => {
        fire
            .auth()
            .signOut()
            .then((dox) => {
                cData.setUsuario('')

            });
    };
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{paddingX: 2, boxShadow: 0, height: alto, backgroundColor: '#fff', zIndex: 200}}
        >
            <Grid
                item
                lg={3}
                xs={2}

            >
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >


                    <Grid item sx={{marginRight: 2, display: {xs: 'none', lg: 'block'}}}>
                        <img src={logo} style={{width: 180}} alt={"logo"}/>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <HambergerMenu onClick={cData.abrir}/>
                        </IconButton>

                    </Grid>

                </Grid>


            </Grid>


            <Grid item lg={7} xs={6}/>

            <Grid item container lg={2} xs={4} sx={{justifyContent: "flex-end"}}>

                <Avatar src={cData.usuario.img} onClick={handleClick}/>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    <MenuItem>
                        <Link to={"/home"} onClick={() => salir()}> Salir</Link>
                    </MenuItem>
                </Menu>

            </Grid>
        </Grid>
    );
};

export default AppBarCustom;
