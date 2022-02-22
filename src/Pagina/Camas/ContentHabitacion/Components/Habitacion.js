/*******************************************************
 * Nombre:        Habitacion
 * Descripcion:   Subcomponete que muesta una habitacion
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/

import { Grid, Typography,useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AnimApareceAbajo } from '../../../../Animadores/Animadores'
import { PRIMARIO, ACENTO } from '../../../../Colores'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ButtonReservar from './ButtonReservar';
import { theme } from "../../../../Tema";

export const Habitacion = (props) => {
    const { inverse , image } = props
    const masSM = useMediaQuery(theme.breakpoints.up("md"));


    console.log('img', image, inverse)


    return (
        <Grid
            item
            container
            justifyContent='flex-start'
            alignItems='flex-start'
            lg={7}
            sx={{ my: 7 , px: masSM ? 0 : 2}}
        >

            <AnimApareceAbajo>
                <Grid
                    container
                    direction="row"
                    justifyContent={inverse ? "flex-start" : "flex-end"}
                    alignItems={inverse ? "flex-start" : "flex-end"}
                >

                    <Grid item lg={11} sm={11} xs={11} sx={{ zIndex: 300, boxShadow: 8 }}>
                        <LazyLoadImage src={image}
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

                    </Grid>

                </Grid>

            </AnimApareceAbajo>
        </Grid>

    )

}