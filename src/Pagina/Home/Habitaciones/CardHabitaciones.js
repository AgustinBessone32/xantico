/*******************************************************
 * Nombre:        CardHabitaciones
 * Descripcion:   Componente que muestra tipos de habitaciones
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/

import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Habitacion } from './Componentes/Habitacion'

const CardHabitaciones = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            {
                habit.map((habitacion) => {
                    return (
                        <Habitacion habitacion={habitacion} />
                    )
                })
            }




        </Grid>

    )
}


export default CardHabitaciones

const habit = [
    {
        nombre: 'Branding',
        contenido:
            'Más que un logo',
        precio: 22,
        caso: "Xantico Hostal",
        img: 'https://images.pexels.com/photos/5732505/pexels-photo-5732505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
        nombre: 'Contenido',
        contenido:
            'Las redes sociales ',
        caso: "Quesuditas",
        precio: 57,
        img: 'https://images.pexels.com/photos/10588300/pexels-photo-10588300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },

];