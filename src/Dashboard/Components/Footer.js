/*******************************************************
 * Nombre:    Footer
 * Resumen:   Footer de la web
 * sistema
 * Props:
 * Librerias:
 * Autor:     
 * Tiempo :   45 min
 ********************************************************/

import { Grid, Typography } from '@mui/material'
import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp, IconLocation } from '@tabler/icons';
import React from 'react'
import { ACENTO, PRIMARIO } from '../../Colores'
import {Facebook, Instagram, Map, Whatsapp} from "iconsax-react";

export const Footer = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            sx={{ paddingX: 3, boxShadow: 0, height: '100%', backgroundColor: ACENTO, py: 10, }}
        >

            <Grid
                item
                container
                direction="column"
                lg={3}
                xs={12}
                sx={{ px: 5 }}
            >
                <Typography sx={{fontSize: 28, mt:1, fontFamily: "Cormorant" }}>
                    Nosotros
                </Typography>

                <Typography sx={{marginTop: 2, fontWeight: 300, fontSize: 14}} >
                    Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas,
                </Typography>


            </Grid>

            <Grid
                item
                container
                direction="column"
                lg={3}
                xs={12}
                sx={{ px: 5 }}
            >
                <Typography sx={{fontSize: 28, mt:1, fontFamily: "Cormorant" }}>
                    Contacto
                </Typography>


                <Typography sx={{marginTop: 2, fontWeight: 300, fontSize: 14}} >
                    Direccion : Carrera 6 N 45 - 12 <br />
                    Telefono : + (57) 350 454 45 45 <br />
                    Correo:      Xantico@gmail.com
                </Typography>

                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{marginTop: 2}}
                >

                    <Grid item>
                        <Map color={PRIMARIO} size={"1.5rem"} stroke={1} />
                    </Grid>


                    <Grid item>
                        <Typography sx={{ ml: 1, color: PRIMARIO, }}>
                            Vernos en el mapa
                        </Typography>
                    </Grid>

                </Grid>



            </Grid>

            <Grid
                item
                container
                direction="column"
                lg={3}
                sm={12}
                xs={12}
                sx={{ px: 5 }}
            >
                <Typography sx={{fontSize: 28, mt:1, fontFamily: "Cormorant" }}>
                    Metodo de Pago
                </Typography>


                <Typography sx={{marginTop: 2, fontWeight: 300, fontSize: 14}} >
                    Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas,
                </Typography>

            </Grid>

            <Grid
                item
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                lg={3}
                xs={12}
                sx={{ px: 5 }}
            >
                <Typography sx={{fontSize: 28, mt:1, fontFamily: "Cormorant" }}>
                    Nuestras Redes
                </Typography>

                <Typography sx={{marginTop: 2, fontWeight: 300, fontSize: 14}} >
                    Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas,
                </Typography>

                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    sx={{mt:2}}
                >
                    <Grid item sx={{ marginRight: 1 }}>
                        <Whatsapp color={PRIMARIO} size={"1.5rem"} stroke={0.5} />
                    </Grid>

                    <Grid item sx={{ marginRight: 1 }}>
                        <Instagram color={PRIMARIO} size={"1.5rem"} stroke={0.5} />
                    </Grid>

                    <Grid item sx={{ marginRight: 1 }}>
                        <Facebook color={PRIMARIO} size={"1.5rem"} stroke={0.5} />
                    </Grid>


                </Grid>

            </Grid>

        </Grid>

    )
}
