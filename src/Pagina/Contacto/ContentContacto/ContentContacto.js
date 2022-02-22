/*************************************************
 * nombre:       ContentContacto
 * descripcion:
 *
 * librerias: 
 * props:
 * tiempo:       10 min
 *************************************************/
import { Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { AnimApareceAbajo, AnimApareceDerecha, AnimApareceIsquierda } from '../../../Animadores/Animadores';
import { ACENTO } from '../../../Colores';
import valija from '../../../Recursos/valija.svg'
import { theme } from '../../../Tema';

const ContentContacto = () => {
    const masSM = useMediaQuery(theme.breakpoints.up("md"));
    return (

        <>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{ zIndex: 300}}
            >
                <AnimApareceAbajo delay={1}>
                    <img src='https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/contacto%2FFACHADA%20(1).png?alt=media&token=eecc8f50-8e1d-4dd0-a7b1-3ada85a90943'
                        style={{ maxWidth: '100%', marginLeft: masSM ? '8%': 0 }} />

                </AnimApareceAbajo>

            </Grid>


            <AnimApareceAbajo >
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                    sx={{ backgroundColor: ACENTO, mx: '15%', mt: masSM ? '-46%' : 0, ml: masSM ? '28%' : 0, pl: '5%' }}
                    lg={7}
                    xs={12}
                    sm={12}
                >


                    {
                        cNosotros.map(nos => {
                            return (
                                <Grid
                                    item
                                    container
                                    lg={6}
                                    sx={{ p: '6%' }}
                                >
                                    <AnimApareceDerecha  >
                                        <Typography sx={{ fontFamily: 'Cormorant', fontSize: 28, fontWeight: 'bold' }}>{nos.titulo}</Typography>
                                        <Typography sx={{ fontSize: 15, fontWeight: 'light' }}>
                                            {nos.desc}
                                        </Typography>
                                    </AnimApareceDerecha>

                                </Grid>
                            )
                        })
                    }


                </Grid>
            </AnimApareceAbajo>



        </>
    )
};

export default ContentContacto


const cNosotros = [
    {
        titulo: 'Direccion',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: 'Direccion',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: 'Direccion',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: 'Telefono',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: 'Telefono',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: 'Telefono',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
]
