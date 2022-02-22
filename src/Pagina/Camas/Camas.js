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
                <ContentHabitacion inverse={true} image='https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/habitaciones%2Fprivada.png?alt=media&token=86b1b6b2-ac59-45be-ace8-f700f7566ccb'/>
            </Grid>

            <Grid item container sx={{ marginTop: 15, justifyContent: "center" }}>
                <ContentHabitacion inverse={false} image='https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/habitaciones%2Fmultiple.png?alt=media&token=b1d0f49d-3a54-4888-84e5-816bec5662c0' />
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
