/*************************************************
 * nombre:       ContentNosotros
 * descripcion:
 *
 * librerias: 
 * props:
 * tiempo:       10 min
 *************************************************/
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { ACENTO } from '../../../Colores';
import valija from '../../../Recursos/valija.svg'

const ContentNosotros = () => {
    return (

        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                
                
            >

                <img src='https://images.pexels.com/photos/6257033/pexels-photo-6257033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' 
                    style={{maxWidth: '60%',  zIndex: 900}} />

            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ backgroundColor: ACENTO, mx: 20,  pt:50, mt:-50 }}
            >
                {
                    cNosotros.map(nos => {
                        return (
                            <Grid
                                item
                                container
                                lg={4}
                                sx={{ p: 6 }}
                            >
                                <Grid item lg={12}><img src={valija} width='26px' /></Grid>
                                <Typography sx={{ fontFamily: 'Cormorant', fontSize: 34, fontWeight: 'bold' }}>{nos.titulo}</Typography>
                                <Typography sx={{ fontSize: 20, fontWeight: 'light' }}>
                                    {nos.desc}
                                </Typography>

                            </Grid>
                        )
                    })
                }

            </Grid>
        </>
    )
};

export default ContentNosotros


const cNosotros = [
    {
        titulo: 'Restaurante',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: 'Mesa de ping pong y juego de dardos',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: 'Recepción 24 horas',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: 'Cocina compartida ',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: 'WIFI gratuita en todas las instalaciones',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: 'Servicio de organización de excursiones ',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
]
