/*******************************************************
 * Nombre:        ListadoServicios
 * Descripcion:   ListadoServicios
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/

import { Grid, Typography } from '@mui/material'
import React from 'react'

export const ListadoServicios = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ px: 20, boxShadow: 0, py: 10 }}

        >
            <Grid
                item
                container
                direction='row'
                justifyContent="center"
                alignItems='center'

            >
                {
                    services.map(servi => {
                        return (
                            <Grid item sx={{ mx: 5 }}
                                container
                                alignItems='center'
                                direction='column'
                                lg={2} >
                                <img src={servi.url} alt={servi.name} width='100px' />
                                <Typography  >{servi.name}</Typography>
                            </Grid>
                        )
                    })
                }


            </Grid>


        </Grid >
    )
}


const services = [
    {
        name: 'WIFI',
        url: 'https://images.pexels.com/photos/10158736/pexels-photo-10158736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
        name: 'WIFI',
        url: 'https://images.pexels.com/photos/10158736/pexels-photo-10158736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
        name: 'WIFI',
        url: 'https://images.pexels.com/photos/10158736/pexels-photo-10158736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
        name: 'WIFI',
        url: 'https://images.pexels.com/photos/10158736/pexels-photo-10158736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }

]