/*******************************************************
 * Nombre:    AppBar
 * Resumen:   Menu de navegacion
 * sistema
 * Props:
 * Librerias:
 * Autor:     
 * Tiempo :   45 min
 ********************************************************/

import { Grid, Typography } from '@mui/material'
import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp, IconCloud } from '@tabler/icons';
import React from 'react'
import logo from '../../Recursos/logo.svg'
import nube from '../../Recursos/nube.svg'
import { ACENTO, PRIMARIO } from "../../Colores";

export const AppBar = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ paddingX: 2, boxShadow: 0, height: '80px', backgroundColor: ACENTO }}
        >

            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{ maxWidth: '1400px' }}
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
                            <Grid item sx={{ marginRight: 1 }}>
                                <Typography >Itali </Typography>
                            </Grid>

                            <Grid item sx={{ marginRight: 1 }}>
                                <img src={nube} width='20' />
                            </Grid>

                            <Grid item sx={{ marginRight: 1 }}>
                                <Typography>11 C </Typography>
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid item>
                        <Typography sx={{ color: PRIMARIO }}>HOME</Typography>
                    </Grid>


                    <Grid item>
                        <Typography sx={{ color: PRIMARIO }}>HABITACIONES</Typography>
                    </Grid>

                    <Grid item>
                        <Typography sx={{ color: PRIMARIO }}>PAGINAS</Typography>
                    </Grid>

                    <Grid
                        item
                        lg={2}
                        style={{ textAlign: 'center' }}
                    >

                        <img src={logo} style={{ width: 110, textAlign: 'center', flexGrow: 1 }} alt={"logo"} />
                    </Grid>


                    <Grid item>
                        <Typography sx={{ color: PRIMARIO }}>MOMENTOS</Typography>
                    </Grid>


                    <Grid item>
                        <Typography sx={{ color: PRIMARIO }}>BLOG</Typography>
                    </Grid>

                    <Grid item>
                        <Typography sx={{ color: PRIMARIO }}>CONTACTO</Typography>
                    </Grid>

                    <Grid
                        item
                        container
                        lg={2}
                        sx={{ justifyContent: 'flex-end' }}
                    >

                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <Grid item sx={{ marginRight: 1 }}>
                                <IconBrandWhatsapp color={PRIMARIO} size={"1.5rem"} stroke={1} />
                            </Grid>

                            <Grid item sx={{ marginRight: 1 }}>
                                <IconBrandInstagram color={PRIMARIO} size={"1.5rem"} stroke={1} />
                            </Grid>

                            <Grid item sx={{ marginRight: 1 }}>
                                <IconBrandFacebook color={PRIMARIO} size={"1.5rem"} stroke={1} />
                            </Grid>


                        </Grid>

                    </Grid>

                </Grid>

            </Grid>


        </Grid>
    )
}
