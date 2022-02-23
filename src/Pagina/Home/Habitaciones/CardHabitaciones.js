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
            sx={{maxWidth: "1300px"}}
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
        nombre: 'Habitación Privada ',
        contenido:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
        precio: 22,
        img: 'https://firebasestorage.googleapis.com/v0/b/xanticohostal-a9d46.appspot.com/o/habitaciones%2Fprivada.png?alt=media&token=6fa45e63-2c4e-4027-97c9-589181cf224f'
    },
    {
        nombre: 'Habitación Con Acomodación Multiple',
        contenido:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
        precio: 57,
        img: 'https://firebasestorage.googleapis.com/v0/b/xanticohostal-a9d46.appspot.com/o/habitaciones%2Fmultiple.png?alt=media&token=2ac32d5b-872b-4386-a743-eb4ff7212f75'
    },

];