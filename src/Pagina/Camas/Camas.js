/*************************************************
 * nombre:       Camas
 * descripcion:
 *
 * librerias:  libreria extra
 * props:
 * tiempo:       10 min
 *************************************************/
import React from 'react'
import ContentHabitacion from './ContentHabitacion/ContentHabitacion'
import ListadoServicios from './ListadoServicios/ListadoServicios'
import CardReseñas from './CardReseñas/CardReseñas'
import ButtonReservar from './ContentHabitacion/Components/ButtonReservar'
import { Grid } from '@mui/material'
import CarruselZonasComunes from './ZonasComunes/CarruselZonasComunes'

const Camas = () => {
    return (

        <>

            <Grid item container sx={{ marginTop: 10, justifyContent: "center" }}>
                <ContentHabitacion inverse={true} />
            </Grid>

            <Grid item container sx={{ marginTop: 15, justifyContent: "center" }}>
                <ContentHabitacion inverse={false} />
            </Grid>

            <Grid item container sx={{ marginTop: 15, justifyContent: "center" }}>
                <ListadoServicios />
            </Grid>

            <Grid item container sx={{ marginTop: 15 }}>
                <CarruselZonasComunes />
            </Grid>

            <Grid item container sx={{ marginTop: 15, justifyContent: "center" }}>
                <CardReseñas />
            </Grid>



            <Grid item container sx={{mt:15,mb:-5 , justifyContent: "center" }}>
                <ButtonReservar />
            </Grid>



        </>


    )
}

export default Camas
