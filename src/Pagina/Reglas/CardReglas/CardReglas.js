/*************************************************
 * nombre:       CardReglas
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/

import { Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AnimApareceAbajo } from '../../../Animadores/Animadores';
import { ACENTO } from '../../../Colores'
import { theme } from '../../../Tema';
import ButtonReservar from '../ButtonReservar/ButtonReservar'

const CardReglas = () => {
    const masSM = useMediaQuery(theme.breakpoints.up("md"));
    return (

        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >

            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-start"
                lg={6}
                sm={12}
                xs={12}
            >
                <AnimApareceAbajo delay={masSM ? 1: 0} >

                    <Grid item lg={12} sm={11} xs={11} sx={{ zIndex: 200 }} sx={{ml: !masSM && 2, mb: !masSM && -4}}>
                        <LazyLoadImage src='https://firebasestorage.googleapis.com/v0/b/xanticohostal-a9d46.appspot.com/o/anuncios%2FDETALLES%20(4)%20(1).png?alt=media&token=98e05347-5f30-425b-8e30-d563e194da6e'
                            width='100%'
                            effect="blur" />

                    </Grid>
                </AnimApareceAbajo>

            </Grid>





            <Grid
                container
                direction="row"
                justifyContent={"flex-end"}
                alignItems="flex-end"
                lg={3}

                sx={{pt: masSM ? 20 : -3, ml: masSM ? -3 : 4}}
            >
                <AnimApareceAbajo delay={masSM ? 0: 1} >

                    <Grid item container lg={12} sm={11} xs={11}
                        sx={{ backgroundColor: ACENTO, p: masSM ? 7 : 5, zIndex: 100, boxShadow: 4 }}>


                        <Grid item container lg={12} sm={12} xs={12}
                            sx={{ justifyContent: "flex-start"  }}>
                            <Typography sx={{ fontSize: 30, fontFamily: 'Cormorant', fontWeight: 'bold' }}> Reglas de la casa </Typography>
                        </Grid>


                        <Grid item container lg={12} sm={12} xs={12} sx={{ justifyContent: "flex-end", marginTop: 1 }}>
                            <Typography sx={{ fontSize: 18, fontWeight: 300, mb: 10, textAlign: 'left' }}>
                                ¡Nos alegra que hayas llegado hasta aquí!<br/>
                                Hemos creado algunas reglas para que toda la comunidad de viajeros que visita nuestro hostal tenga una estadía inigualable.
                                Pero antes, asegura tu viaje y reserva la mejor opción de alojamiento.


                            </Typography>

                        </Grid>



                        <Grid item lg={12} sm={12} xs={12} sx={{ mt: masSM ? 2 : -6}}>

                            <ButtonReservar />
                        </Grid>

                    </Grid>
                </AnimApareceAbajo>

            </Grid>





        </Grid >

    )
};

export default CardReglas
