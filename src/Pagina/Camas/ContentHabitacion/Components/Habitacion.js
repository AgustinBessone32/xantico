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
import { PRIMARIO } from '../../../../Colores'

export const Habitacion = (props) => {
    const { inverse } = props


    return (
        <Grid
            item
            container
            justifyContent='center'
            alignItems='center'
            lg={6}
            sm={12}
            sx={{ my: 4 }}
        >

            <div style={{
                backgroundColor: '#FAF9F5', width: '75%', padding: 30,
                display: 'flex', flexDirection: 'column'
            }}>
                <img
                    src='https://images.pexels.com/photos/5709298/pexels-photo-5709298.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                    width='160%'
                    style={{ marginLeft: inverse ? '10%' : '-68%' }}
                />
                <Typography sx={{ fontSize: 26, mt: 1, fontFamily: "Cormorant" }}>Habitacion privada</Typography>
                <Typography sx={{ fontSize: 15, fontWeight: 400, textAlign: 'right' }}>
                    <span style={{ color: PRIMARIO }} >Noche:  </span> $22.000
                </Typography>
            </div>

        </Grid>
    )
}
