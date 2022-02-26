/*******************************************************
 * Nombre:        Habitacion
 * Descripcion:   Subcomponete que muesta una habitacion
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/

import {Grid, Typography} from '@mui/material'
import React from 'react'
import {ACENTO, PRIMARIO} from "../../../../Colores";
import ButtonReservar from "./ButtonReservar"
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {AnimApareceAbajo} from "../../../../Animadores/Animadores";


export const Habitacion = (props) => {
    const {item} = props


    return (
        <Grid
            item
            container
            justifyContent='flex-start'
            alignItems='flex-start'
        >


            <AnimApareceAbajo delay={0}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                >

                    <Grid item lg={11} sm={11} xs={11} sx={{zIndex: 200, boxShadow: 8}}>
                        <LazyLoadImage src={item.img}
                                       width='100%'
                                       style={{marginBottom: -10}} effect="blur"/>

                    </Grid>


                </Grid>

            </AnimApareceAbajo>

            <AnimApareceAbajo>

                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >


                    <Grid item container lg={10} sm={11} xs={11}
                          sx={{backgroundColor: ACENTO, p: 4, marginTop: "-40%", zIndex: 100, boxShadow: 4}}>

                        <Grid item container lg={12} sm={12} xs={12}
                              sx={{justifyContent: "flex-start", marginTop: "50%", minHeight: 100}}>
                            <Typography sx={{fontSize: 26, mt: 4, fontFamily: "Cormorant"}}>{item.nombre}</Typography>
                        </Grid>


                        {/*}  <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: "flex-end", marginTop: 1}}>

                            <Typography sx={{fontSize: 14, fontWeight: 400, textAlign: 'right'}}>
                                <span style={{color: PRIMARIO}}>Noche:  </span>

                                $ {item.precio}</Typography>
                        </Grid>

                        <Grid item lg={12} sm={12} xs={12} sx={{marginTop: 2}}>
                            <Typography sx={{fontSize: 16, fontWeight: 300, textAlign: "left"}}>
                                {item.contenido}
                            </Typography>
                        </Grid>*/}

                        <Grid item lg={12} sm={12} xs={12}>

                            <ButtonReservar/>
                        </Grid>

                    </Grid>

                </Grid>

            </AnimApareceAbajo>


        </Grid>
    )
}
