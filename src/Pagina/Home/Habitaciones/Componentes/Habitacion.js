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
import {PRIMARIO} from "../../../../Colores";
import ButtonReservar from "./ButtonReservar"

export const Habitacion = (props) => {
    const {item} = props


    return (
        <Grid
            item
            container
            justifyContent='center'
            alignItems='center'


        >

            <div style={{
                backgroundColor: '#F4EFE2', width: '50%', padding: 30,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-around'
            }}>
                <img
                    src={item.img}
                    width='130%'
                    style={{marginLeft: '10%', marginTop: "-20%"}}
                />
                <Typography sx={{fontSize: 26,  mt: 4, fontFamily: "Cormorant"}}>{item.nombre}</Typography>
                <Typography sx={{fontSize: 14, fontWeight: 400, textAlign: 'right'}}>
                    <span style={{color: PRIMARIO}} >Noche:  </span>

                    $ {item.precio}</Typography>
                <Typography sx={{fontSize: 14, fontWeight: 300, mt: 1}}>
                    {item.contenido}
                </Typography>

                <ButtonReservar />
            
            </div>

        </Grid>
    )
}
