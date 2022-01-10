/*******************************************************
 * Nombre:        CardReseñas
 * Descripcion:   CardReseñas
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/

import { Avatar, Grid, Typography } from '@mui/material'
import React from 'react'
import { PRIMARIO } from '../../../Colores'

export const CardReseñas = () => {
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

                    reseñas.map(res => {
                        return (
                            <Grid item
                                sx={{ mx: 1, my: 2 }}
                                lg={3}
                                container
                                alignItems='center'
                                direction='column'
                            >
                                <Avatar src={res.img} alt={res.name} />
                                <Typography sx={{ color: '#000000', fontSize: 30, mt: 3 }}> {res.titulo} </Typography>
                                <Typography sx={{ color: '#000000', fontSize: 16, mt: 1 }}> {res.desc} </Typography>

                                <Typography sx={{ color: PRIMARIO, fontSize: 16, mt: 2 }}> {res.name} </Typography>

                            </Grid>
                        )
                    })

                }




            </Grid>
        </Grid>
    )
}

const reseñas = [
    {
        img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: 'Andrea Caprio',
        titulo: '" Conocimos gente "',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: 'Andrea Caprio',
        titulo: '" Conocimos gente "',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: 'Andrea Caprio',
        titulo: '" Conocimos gente "',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]
