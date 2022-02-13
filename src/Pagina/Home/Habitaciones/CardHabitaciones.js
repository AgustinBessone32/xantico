/*******************************************************
 * Nombre:        CardHabitaciones
 * Descripcion:   Componente que muestra tipos de habitaciones
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/

import {Grid, useMediaQuery} from '@mui/material'
import React from 'react'
import {Habitacion} from './Componentes/Habitacion'
import {theme} from "../../../Tema";

const CardHabitaciones = () => {
    const masSM = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            {
                habit.map((item) => {
                    return (
                        <Grid item lg={6} sm={6} xs={12} sx={{p: masSM ?  8 : 2}} >
                            <Habitacion item={item}/>
                        </Grid>

                    )
                })
            }


        </Grid>

    )
}


export default CardHabitaciones

const habit = [
    {
        nombre: 'Habitación Privada,',
        contenido:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
        precio: 22,
        img: 'https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/habitaciones%2Fprivada.png?alt=media&token=86b1b6b2-ac59-45be-ace8-f700f7566ccb'
    },
    {
        nombre: 'Habitación Con Acomodación Multiple',
        contenido:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
        precio: 57,
        img: 'https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/habitaciones%2Fmultiple.png?alt=media&token=b1d0f49d-3a54-4888-84e5-816bec5662c0'
    },

];