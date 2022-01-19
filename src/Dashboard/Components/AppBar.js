/*******************************************************
 * Nombre:    AppBar
 * Resumen:   Menu de navegacion
 * sistema
 * Props:
 * Librerias:
 * Autor:
 * Tiempo :   45 min
 ********************************************************/

import {Grid, Typography} from '@mui/material'
import React from 'react'
import logo from '../../Recursos/logo.svg'
import nube from '../../Recursos/nube.svg'
import {ACENTO, PRIMARIO} from "../../Colores";
import {Link} from 'react-router-dom';
import {Facebook, Instagram, Whatsapp} from "iconsax-react";

export const AppBar = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{paddingX: 2, paddingY: 2, boxShadow: 0, backgroundColor: ACENTO}}
        >

            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{maxWidth: '1400px'}}
            >

                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >

                    <Grid item lg={2}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item sx={{marginRight: 1}}>
                                <Typography sx={{fontWeight: 500}} >Ipiales </Typography>
                            </Grid>

                            <Grid item sx={{marginRight: 1}}>
                                <img src={nube} width={"70%"}/>
                            </Grid>

                            <Grid item sx={{marginRight: 1}}>
                                <Typography>11 C </Typography>
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid container item lg={1} sx={{justifyContent: "center"}}>

                        <Link to="/"
                              style={{textDecoration: 'none'}}>
                            <Typography sx={{fontSize: 14, color: PRIMARIO, fontWeight: 500}}> HOME
                            </Typography>

                        </Link>
                    </Grid>


                    <Grid container item lg={1} sx={{justifyContent: "center"}}>

                        <Link to="/camas"
                              style={{color: PRIMARIO, cursor: 'pointer', textDecoration: 'none'}}> <Typography
                            sx={{fontSize: 14, color: PRIMARIO, fontWeight: 500}}> CAMAS
                        </Typography></Link>

                    </Grid>


                    <Grid container item lg={1} sx={{justifyContent: "flex-end"}}>
                        <Typography sx={{fontSize: 14, color: PRIMARIO, fontWeight: 500}}> QUE HACER
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        lg={2}
                        sx={{textAlign: 'center'}}
                    >

                        <img src={logo} style={{width: "50%", textAlign: 'center', flexGrow: 1}} alt={"logo"}/>
                    </Grid>


                    <Grid container item lg={1} sx={{justifyContent: "flex-start"}}>
                        <Typography sx={{fontSize: 14, color: PRIMARIO, fontWeight: 500}}> REGLAS
                        </Typography>
                    </Grid>


                    <Grid container item lg={1} sx={{justifyContent: "flex-start"}}>

                        <Link to="/nosotros"
                              style={{color: PRIMARIO, cursor: 'pointer', textDecoration: 'none'}}> <Typography
                            sx={{fontSize: 14, color: PRIMARIO, fontWeight: 500}}> NOSOTROS
                        </Typography></Link>

                    </Grid>


                    <Grid container item lg={1} sx={{justifyContent: "flex-start"}}>
                        <Typography sx={{fontSize: 14, color: PRIMARIO, fontWeight: 500}}> CONTACTOS
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        container
                        lg={2}
                        sx={{justifyContent: 'flex-end'}}
                    >

                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <Grid item sx={{marginRight: 1}}>
                                <Whatsapp color={PRIMARIO} size={"2rem"} stroke={1} variant={"Bold"}/>
                            </Grid>

                            <Grid item sx={{marginRight: 1}}>
                                <Instagram color={PRIMARIO} size={"2rem"} stroke={1} variant={"Bold"}/>
                            </Grid>

                            <Grid item sx={{marginRight: 1}}>
                                <Facebook color={PRIMARIO} size={"2rem"} stroke={1} variant={"Bold"}/>
                            </Grid>


                        </Grid>

                    </Grid>

                </Grid>

            </Grid>


        </Grid>
    )
}
