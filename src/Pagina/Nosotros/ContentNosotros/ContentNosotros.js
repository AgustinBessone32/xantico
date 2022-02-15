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
import { AnimApareceIsquierda } from '../../../Animadores/Animadores'

const ContentNosotros = () => {
    return (

        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"


            >

                <img src='https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/nosotros%2FESPACIOS%20(8).png?alt=media&token=efc9ed7e-0330-4a84-9d7f-a17d90eb89c2'
                    style={{ height: 550, zIndex: 900 }} />

            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{ backgroundColor: ACENTO, mx: 20, pt: 50, mt: -50 }}
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
                                <AnimApareceIsquierda>

                                    <Grid item lg={12}>
                                        <img src={valija} width='26px' />
                                    </Grid>
                                    <Typography sx={{ fontFamily: 'Cormorant', fontSize: 34, fontWeight: 'bold' }}>{nos.titulo}</Typography>
                                    <Typography sx={{ fontSize: 20, fontWeight: 'light' }}>
                                        {nos.desc}
                                    </Typography>
                                </AnimApareceIsquierda>

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
