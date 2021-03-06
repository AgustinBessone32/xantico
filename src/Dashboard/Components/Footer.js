/*******************************************************
 * Nombre:    Footer
 * Resumen:   Footer de la web
 * sistema
 * Props:
 * Librerias:
 * Autor:
 * Tiempo :   45 min
 ********************************************************/

import {ButtonBase, Grid, Typography, useMediaQuery} from '@mui/material'
import {IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp, IconLocation} from '@tabler/icons';
import React from 'react'
import {ACENTO, PRIMARIO} from '../../Colores'
import {Facebook, Instagram, Map, Whatsapp} from "iconsax-react";
import {theme} from "../../Tema";
import {irURL} from "../../FuncionesGlobales";

export const Footer = () => {
    const masSM = useMediaQuery(theme.breakpoints.up("md"));
    const ir = () => {

        window.open("https://www.google.com/maps/dir/?api=1&destination=0.8240956320744778,-77.63667467558821,20&dir_action=navigate")
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            sx={{paddingX: 3, boxShadow: 0, height: '100%', backgroundColor: ACENTO, py: masSM ? 10 : 6,}}
        >

            <Grid
                item
                container
                direction="column"
                lg={3}
                xs={6}
                sx={{px: masSM ? 5 : 1}}
            >
                <Typography sx={{fontSize: masSM ? 28 : 22, mt: 1, fontFamily: "Cormorant"}}>
                    Xantico
                </Typography>

                <Typography sx={{marginTop: 2, fontWeight: 300, fontSize: masSM ? 14 : 11}}>
                    Viaja sin barreras Viaja con libertad Hospedate en Xantico
                </Typography>


            </Grid>

            <Grid
                item
                container
                direction="column"
                lg={3}
                xs={6}
                sx={{px: masSM ? 5 : 1}}
            >
                <Typography sx={{fontSize: masSM ? 28 : 22, mt: 1, fontFamily: "Cormorant"}}>
                    Contacto
                </Typography>


                <Typography sx={{marginTop: 2, fontWeight: 300, fontSize: masSM ? 14 : 11}}>
                    Direccion : Cra 6 # 10-59 <br/>
                    Telefono : 60 2 7753461 <br/>
                    Correo: Xantico@gmail.com
                </Typography>

                <ButtonBase sx={{marginTop: 2, borderRadius: 2}} onClick={() => ir()}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"

                    >

                        <Grid item>
                            <Map color={PRIMARIO} size={masSM ? "2rem" : "1.5rem"} stroke={1}/>
                        </Grid>


                        <Grid item>
                            <Typography sx={{ml: 1, color: PRIMARIO, fontSize: masSM ? 14 : 11}}>
                                Vernos en el mapa
                            </Typography>
                        </Grid>

                    </Grid>
                </ButtonBase>


            </Grid>

            <Grid
                item
                container
                direction="column"
                lg={3}
                sm={6}
                xs={6}
                sx={{px: masSM ? 5 : 1, mt: masSM ? 0 : 3}}
            >
                <Typography sx={{fontSize: masSM ? 28 : 22, mt: 1, fontFamily: "Cormorant"}}>
                    Metodo de Pago
                </Typography>

                <Grid item container>
                    <Typography sx={{marginTop: 2, fontWeight: 300, fontSize: masSM ? 14 : 11}}>
                        Efectivo
                    </Typography>
                </Grid>

                <Grid item container>
                    <Typography sx={{marginTop: 0, fontWeight: 300, fontSize: masSM ? 14 : 11}}>
                        Targeta
                    </Typography>
                </Grid>

                <Grid item container>
                    <Typography sx={{marginTop: 0, fontWeight: 300, fontSize: masSM ? 14 : 11}}>
                        Deposito Bancario
                    </Typography>
                </Grid>


            </Grid>

            <Grid
                item
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                lg={3}
                xs={6}
                sx={{px: masSM ? 5 : 1, mt: masSM ? 0 : 3}}
            >
                <Typography sx={{fontSize: masSM ? 28 : 22, mt: 1, fontFamily: "Cormorant"}}>
                    Nuestras Redes
                </Typography>

                {/*} <Typography sx={{marginTop: 2, fontWeight: 300, fontSize: masSM ? 14 : 11}}>
                    Lorem Ipsum es un texto de marcador de posici??n com??nmente utilizado en las industrias gr??ficas,
                </Typography>*/}

                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    sx={{mt: 2}}
                >
                    <Grid item sx={{marginRight: 1}}>
                        <ButtonBase sx={{p: 0.5}} onClick={() => irURL("https://")}>
                            <Whatsapp color={PRIMARIO} size={masSM ? "2rem" : "1.5rem"} stroke={0.5} variant={"Bulk"}/>
                        </ButtonBase>
                    </Grid>

                    <Grid item sx={{marginRight: 1}}>
                        <ButtonBase sx={{p: 0.5}} onClick={() => irURL("https://")}>
                            <Instagram color={PRIMARIO} size={masSM ? "2rem" : "1.5rem"} stroke={0.5} variant={"Bulk"}/>
                        </ButtonBase>
                    </Grid>

                    <Grid item sx={{marginRight: 1}}>
                        <ButtonBase sx={{p: 0.5}} onClick={() => irURL("https://")}>
                            <Facebook color={PRIMARIO} size={masSM ? "2rem" : "1.5rem"} stroke={0.5} variant={"Bulk"}/>
                        </ButtonBase>
                    </Grid>


                </Grid>

            </Grid>

        </Grid>

    )
}
