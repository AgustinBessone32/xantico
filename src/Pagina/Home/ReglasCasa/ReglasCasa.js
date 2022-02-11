/*******************************************************
 * Nombre:        ReglasCasa
 * Descripcion:   Componente que muestra las reglas de la casa
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/

import { Grid, Typography } from '@mui/material'
import React from 'react'
import { ACENTO } from '../../../Colores'

export const ReglasCasa = () => {
    return (
        <Grid container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"

        >

            <Grid
                item
                lg={12}
                sx={{
                    width: '100%', height: 671, backgroundSize: 'cover',
                    backgroundImage: 'url("https://images.pexels.com/photos/3962293/pexels-photo-3962293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")'
                }}
            >

            </Grid>

            <Grid
                item
                lg={6}
                sx={{ backgroundColor: ACENTO, p: 4, mt: -80, }}
            >

                <Typography sx={{ fontSize: 35, fontFamily: "Cormorant", fontWeight: 700 }}>
                    Reglas de la casa
                </Typography>

                <Typography sx={{ fontSize: 18, mt: 2, fontWeight: 300 }}>
                    ¡Nos alegra que hayas llegado hasta aquí! Hemos creado algunas reglas para que toda la comunidad de viajeros que
                    visita nuestro hostal tenga una estadía inigualable.

                </Typography>

                <Typography sx={{ fontSize: 18, mt: 2, cursor: 'pointer', fontWeight: 600 }}>
                    Leer Mas +

                </Typography>


            </Grid>


        </Grid>
    )
}
