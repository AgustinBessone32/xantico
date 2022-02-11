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


export const Habitacion = (props) => {
    const {item} = props


    return (
        <Grid
            item
            container
            justifyContent='flex-start'
            alignItems='flex-start'
        >


            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-start"
            >

                <Grid item lg={11} sm={12} xs={12} sx={{zIndex: 200, boxShadow: 8}}>
                    <img
                        src={item.img}
                        width='100%'
                        style={{marginBottom: -10}}

                    />
                </Grid>


            </Grid>

            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
            >


                <Grid item container lg={10} sm={12} xs={12}
                      sx={{backgroundColor: ACENTO, p: 4, marginTop: "-40%", zIndex: 100, boxShadow: 4}}>

                    <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: "flex-start", marginTop: "50%"}}>
                        <Typography sx={{fontSize: 26, mt: 4, fontFamily: "Cormorant"}}>{item.nombre}</Typography>
                    </Grid>


                    <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: "flex-end", marginTop: 1}}>

                        <Typography sx={{fontSize: 14, fontWeight: 400, textAlign: 'right'}}>
                            <span style={{color: PRIMARIO}}>Noche:  </span>

                            $ {item.precio}</Typography>
                    </Grid>

                    <Grid item lg={12} sm={12} xs={12} sx={{marginTop: 2}}>
                        <Typography sx={{fontSize: 16, fontWeight: 300, textAlign: "center"}}>
                            {item.contenido}
                        </Typography>
                    </Grid>

                    <Grid item lg={12} sm={12} xs={12}>

                        <ButtonReservar/>
                    </Grid>

                </Grid>

            </Grid>


        </Grid>
    )
}
