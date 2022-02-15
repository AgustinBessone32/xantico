/*************************************************
 * nombre:       CardReglas
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/

import { Grid, Typography } from '@mui/material';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AnimApareceAbajo } from '../../../Animadores/Animadores';
import { ACENTO } from '../../../Colores'
import ButtonReservar from '../ButtonReservar/ButtonReservar'

const CardReglas = () => {
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
            >
                <AnimApareceAbajo delay={1}>

                    <Grid item lg={12} sm={11} xs={11} sx={{ zIndex: 200 }}>
                        <LazyLoadImage src='https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/reglas%2FDETALLES%20(4).png?alt=media&token=4a710989-d167-4777-90f8-276ceb5a1317'
                            width='100%'
                            effect="blur" />

                    </Grid>
                </AnimApareceAbajo>

            </Grid>





            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
                lg={3}
                sx={{pt:20, ml: -3}}
            >
                <AnimApareceAbajo >

                    <Grid item container lg={12} sm={11} xs={11}
                        sx={{ backgroundColor: ACENTO, p: 7, zIndex: 100, boxShadow: 4 }}>


                        <Grid item container lg={12} sm={12} xs={12}
                            sx={{ justifyContent: "flex-start" }}>
                            <Typography sx={{ fontSize: 30, fontFamily: 'Cormorant', fontWeight: 'bold' }}> Reglas de la casa </Typography>
                        </Grid>


                        <Grid item container lg={12} sm={12} xs={12} sx={{ justifyContent: "flex-end", marginTop: 1 }}>
                            <Typography sx={{ fontSize: 18, fontWeight: 300, mb: 10, textAlign: 'left' }}>
                                ¡Nos alegra que hayas llegado hasta aquí!Hemos creado algunas reglas para que toda la comunidad de viajeros que visita nuestro hostal tenga una estadía inigualable.
                                Pero antes, asegura tu viaje y reserva la mejor opción de alojamiento.


                            </Typography>

                        </Grid>



                        <Grid item lg={12} sm={12} xs={12} sx={{ mt: 2 }}>

                            <ButtonReservar />
                        </Grid>

                    </Grid>
                </AnimApareceAbajo>

            </Grid>





        </Grid >

    )
};

export default CardReglas
