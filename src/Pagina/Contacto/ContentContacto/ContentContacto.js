/*************************************************
 * nombre:       ContentContacto
 * descripcion:
 *
 * librerias: 
 * props:
 * tiempo:       10 min
 *************************************************/
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { AnimApareceAbajo, AnimApareceDerecha } from '../../../Animadores/Animadores';
import { ACENTO } from '../../../Colores';
import valija from '../../../Recursos/valija.svg'

const ContentContacto = () => {
    return (

        <>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                    <img src='https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/contacto%2FFACHADA%20(1).png?alt=media&token=eecc8f50-8e1d-4dd0-a7b1-3ada85a90943'
                        style={{ maxWidth: '100%', zIndex: 200, marginLeft: '8%' }} />
   

            </Grid>


            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-start"
                sx={{ backgroundColor: ACENTO, mx: '15%', pl: '20%', mt: '-46%' }}
            >


                {
                    cNosotros.map(nos => {
                        return (
                            <Grid
                                item
                                container
                                lg={6}
                                sx={{ p: '3%' }}
                            >
                                <AnimApareceDerecha delay={1} >
                                    <Typography sx={{ fontFamily: 'Cormorant', fontSize: 34, fontWeight: 'bold' }}>{nos.titulo}</Typography>
                                    <Typography sx={{ fontSize: 20, fontWeight: 'light' }}>
                                        {nos.desc}
                                    </Typography>
                                </AnimApareceDerecha>

                            </Grid>
                        )
                    })
                }


            </Grid>



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
