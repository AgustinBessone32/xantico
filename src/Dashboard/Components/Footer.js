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

export const Footer = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{ paddingX: 20, boxShadow: 0, height: '100%', backgroundColor: ACENTO, py: 10 }}
        >

            <Grid
                item
                container
                direction="column"
                lg={3}
                xs={12}
                sx={{ px: 5 }}
            >
                <Typography sx={{ color: '#000000', fontSize: 30, mt:1 }}>
                    Nosotros
                </Typography>
                <Typography>
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
                <Typography sx={{ color: '#000000', fontSize: 30, mt:1 }}>
                    Contacto
                </Typography>

                <Typography>
                    Direccion : &nbsp;&nbsp;&nbsp;&nbsp; Carrera 6 N 45 - 12 <br />
                    Telefono : &nbsp;&nbsp;&nbsp;&nbsp;  + (57) 350 454 45 45 <br />
                    Correo:    &nbsp;&nbsp;&nbsp;&nbsp;   Xantico@gmail.com
                </Typography>

                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >

                    <Grid item>
                        <IconLocation color={PRIMARIO} size={"1.5rem"} stroke={1} />
                    </Grid>


                    <Grid item>
                        <Typography sx={{ ml: 1, color: PRIMARIO, mt:1 }}>
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
                xs={12}
                sx={{ px: 5 }}
            >
                <Typography sx={{ color: '#000000', fontSize: 30, mt:1 }}>
                    Metodo de Pago
                </Typography>

                <Typography>
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
                <Typography sx={{ color: '#000000', fontSize: 30, mt:1 }}>
                    Nuestras Redes
                </Typography>

                <Typography>
                    Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas,
                </Typography>

                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    sx={{mt:1}}
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

    )
}
