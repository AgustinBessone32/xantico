/*******************************************************
 * Nombre:        ParaHacerCard
 * Descripcion:   ParaHacerCard
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/

import { Grid, Typography } from '@mui/material'
import React from 'react'
import {ACENTO} from '../../../Colores'

export const ParaHacerCard = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            sx={{  boxShadow: 0, py: 10 }}

        >
            {

                paraHacer.map(ph => {
                    return (
                        <Grid item
                            sx={{ mx: 1, my: 2}}
                            lg={3}
                            container
                            alignItems='center'
                            direction='column'
                        >
                            <img src={ph.img} width='300px'/>
                            <Typography sx={{ color: '#000000',backgroundColor: ACENTO, fontSize: 30, mt: -10, ml:-15, py: 1 }}>
                                {ph.titulo}
                            </Typography>


                        </Grid>
                    )
                })

            }


        </Grid>
    )
}

const paraHacer = [
    {
        img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        titulo: 'Andrea Caprio',
    },
    {
        img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        titulo: 'Andrea Caprio',
    },
    {
        img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        titulo: 'Andrea Caprio',
    },


]
