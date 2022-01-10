/*******************************************************
 * Nombre:        Habitacion
 * Descripcion:   Subcomponete que muesta una habitacion
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/

import { Grid, Typography } from '@mui/material'
import React from 'react'

export const Habitacion = (props) => {
    const { habitacion } = props

    console.log(habitacion)

    return (
        <Grid
            item
            container
            justifyContent='center'
            lg={6}
            sx={{ my: 4 }}
        >

            <div style={{ backgroundColor: '#FAF9F5', width: '320px', padding: '0px 20px 25px 20px', minHeight: '400px', 
                          display:'flex', flexDirection:'column', justifyContent:'space-around' }}>
                <img
                    src={habitacion.img}
                    width='400px'
                    style={{ marginLeft: '50px' }}
                />
                <Typography sx={{ fontSize: 26, color: '#000000', mt: 1 }}>{habitacion.nombre}</Typography>
                <Typography sx={{ fontSize: 15, color: '#000000', textAlign: 'right' }}>Noche   $  {habitacion.precio}</Typography>
                <Typography sx={{ fontSize: 18, color: '#000000', mt: 1 }}>
                    {habitacion.contenido}
                </Typography>

                <Typography sx={{ fontSize: 20, fontWeight: 500, color: '#663419', mt: 2, cursor: 'pointer' }}>
                    Reservar Ahora
                </Typography>
            </div>

        </Grid>
    )
}
