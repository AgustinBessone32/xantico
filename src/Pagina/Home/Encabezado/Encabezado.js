/*******************************************************
 * Nombre:        Encabezado
 * Descripcion:   Componente que muestra el titulo con una descripcion
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/

import { Grid, Typography } from '@mui/material'
import React from 'react'

const Encabezado = (props) => {
    const { titulo, descripcion } = props
    return (
        <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid
                item
                lg={12}
                sx={{my: 5, mx: 10}}
            >
                <Typography sx={{textAlign:'center', fontSize: 40}}>{titulo}</Typography>
                <Typography sx={{textAlign:'center', mt: 2}}>{descripcion}</Typography>
            </Grid>


        </Grid>
    )
}


export default Encabezado