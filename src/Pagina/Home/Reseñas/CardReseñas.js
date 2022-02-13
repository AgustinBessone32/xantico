/*******************************************************
 * Nombre:        CardReseñas
 * Descripcion:   CardReseñas
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/

import {Avatar, Grid, Typography} from '@mui/material'
import React from 'react'
import {PRIMARIO} from '../../../Colores'
import {AnimApareceArriba} from "../../../Animadores/Animadores";

export const CardReseñas = () => {
    return (

        <Grid
            item
            container
            direction='row'
            justifyContent="center"
            alignItems='center'

        >

            {

                reseñas.map((res, index) => {
                    return (

                        <Grid item
                              sx={{mx: 1, my: 2}}
                              lg={3}
                              sm={4}
                              xs={12}
                              container
                              alignItems='center'
                              direction='column'
                        >
                            <AnimApareceArriba delay={index * 0.5}>
                                <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: "center"}}>
                                    <Avatar src={res.img} alt={res.name}/>
                                </Grid>

                                <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: "center"}}>
                                    <Typography sx={{
                                        fontWeight: 'bold',
                                        fontSize: 30,
                                        mt: 3,
                                        fontFamily: "Cormorant"
                                    }}> {res.titulo} </Typography>
                                </Grid>

                                <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: "center"}}>

                                    <Typography sx={{
                                        fontSize: 16,
                                        mt: 1,
                                        textAlign: "center",
                                        fontWeight: 300
                                    }}> {res.desc} </Typography>
                                </Grid>

                                <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: "center"}}>
                                    <Typography sx={{
                                        color: PRIMARIO,
                                        fontSize: 16,
                                        mt: 2,
                                        fontWeight: 600
                                    }}> {res.name} </Typography>
                                </Grid>


                            </AnimApareceArriba>
                        </Grid>


                    )
                })

            }


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
