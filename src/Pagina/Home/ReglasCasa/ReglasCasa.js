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
                    my: 5, mx: 10, width: '100%', height: 671, backgroundSize: 'cover',
                    backgroundImage: 'url("https://images.pexels.com/photos/3962293/pexels-photo-3962293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")'
                }}
            >

            </Grid>

            <Grid
                item
                sx={{ backgroundColor: ACENTO, maxWidth: 714, p:3, mt: -80, ml:10 }}
            >

                <Typography sx={{ fontSize: 35 }}>
                    Reglas De La Casa
                </Typography>

                <Typography sx={{ fontSize: 18, mt:2 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                </Typography>

                <Typography sx={{ fontSize: 18, mt:2, cursor: 'pointer' }}>
                    Leer Mas +

                </Typography>


            </Grid>



        </Grid>
    )
}
