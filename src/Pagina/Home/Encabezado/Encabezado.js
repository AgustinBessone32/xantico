/*******************************************************
 * Nombre:        Encabezado
 * Descripcion:   Componente que muestra el titulo con una descripcion
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/

import {Grid, Typography} from '@mui/material'
import React from 'react'

const Encabezado = (props) => {
    const {titulo, descripcion} = props
    return (

        <Grid
            item
            container
            sx={{maxWidth: "800px"}}
        >

            <Grid item container sx={{justifyContent: "center"}}>
                <Typography sx={{textAlign: 'center', fontSize: 38, fontWeight: 500}}>{titulo}</Typography>
            </Grid>

            <Grid item container>
                <Typography sx={{
                    textAlign: 'center',
                    mt: 2,
                    fontSize: 18,
                    fontWeight: 300,
                    lineHeight: 1.7
                }}>{descripcion}</Typography>
            </Grid>

        </Grid>


    )
}


export default Encabezado