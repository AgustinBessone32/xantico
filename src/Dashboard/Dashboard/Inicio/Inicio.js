/*************************************************
 * nombre:       Inicio
 * descripcion:
 *
 * librerias:  libreria extra
 * props:
 * tiempo:       10 min
 *************************************************/
import React from 'react'
import { Grid } from '@mui/material'
import CarruselReseñas from './Reseñas/CarruselReseñas'
import CardInicio from './CardInicio/CardInicio'
import ContentImages from './ContentImages/ContentImages'

const Inicio = () => {
    return (

        <>
            <Grid item container sx={{ marginTop: 10, justifyContent: "center" }}>
                <CardInicio />
            </Grid>

            <Grid item container sx={{ marginTop: 10, justifyContent: "center" }}>
                <ContentImages />
            </Grid>

            <Grid item container sx={{ marginTop: 10, justifyContent: "center" }}>
                <CarruselReseñas />
            </Grid>



        </>


    )
}

export default Inicio