/*******************************************************
 * Nombre:        Habitacion
 * Descripcion:   Subcomponete que muesta una habitacion
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/

import { Grid, Typography } from '@mui/material'
import React from 'react'
import { AnimApareceAbajo } from '../../../../Animadores/Animadores'
import { PRIMARIO, ACENTO } from '../../../../Colores'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ButtonReservar from './ButtonReservar';

export const Habitacion = (props) => {
    const { inverse } = props


    return (
        <Grid
            item
            container
            justifyContent='flex-start'
            alignItems='flex-start'
            lg={6}
            sx={{ my: 4 }}
        >

            <AnimApareceAbajo>
                <Grid
                    container
                    direction="row"
                    justifyContent={inverse ? "flex-start" : "flex-end"}
                    alignItems={inverse ? "flex-start" : "flex-end"}
                >

                    <Grid item lg={11} sm={11} xs={11} sx={{ zIndex: 300, boxShadow: 8 }}>
                        <LazyLoadImage src='https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/camas%2Fh1-room-img-04.png?alt=media&token=f29efa80-bc6f-4427-87ca-90899960bd70'
                            width='100%'
                            style={{ marginBottom: -10 }} effect="blur" />

                    </Grid>


                </Grid>

            </AnimApareceAbajo>

            <AnimApareceAbajo delay={1}>

                <Grid
                    container
                    direction="row"
                    justifyContent={inverse ? "flex-end" : "flex-start"}
                    alignItems={inverse ? "flex-end" : "flex-start"}
                >


                    <Grid item container lg={10} sm={11} xs={11}
                        sx={{ backgroundColor: ACENTO, p: 4, marginTop: "-40%", zIndex: 100, boxShadow: 4 }}>

                        <Grid item container lg={12} sm={12} xs={12}
                            sx={{ justifyContent: "flex-start", marginTop: "50%" }}>
                            <Typography sx={{ fontSize: 26, mt: 4, fontFamily: "Cormorant" }}>lalalaal</Typography>
                        </Grid>


                        <Grid item container lg={12} sm={12} xs={12} sx={{ justifyContent: "flex-end", marginTop: 1 }}>

                            <Typography sx={{ fontSize: 14, fontWeight: 400, textAlign: 'right' }}>
                                <span style={{ color: PRIMARIO }}>Noche:  </span>

                                $ 22.000</Typography>
                        </Grid>

                        <Grid item lg={12} sm={12} xs={12} sx={{ marginTop: 2 }}>
                            <Typography sx={{ fontSize: 16, fontWeight: 300, textAlign: "left" }}>
                                lalalalala
                            </Typography>
                        </Grid>

                        <Grid item lg={12} sm={12} xs={12} sx={{mt:2}}>

                            <ButtonReservar />
                        </Grid>

                    </Grid>

                </Grid>

            </AnimApareceAbajo>
        </Grid>

    )

}