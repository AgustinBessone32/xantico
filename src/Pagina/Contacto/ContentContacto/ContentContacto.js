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
import { ACENTO } from '../../../Colores';
import valija from '../../../Recursos/valija.svg'

const ContentContacto = () => {
    return (

        <>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <img src='https://images.pexels.com/photos/6257033/pexels-photo-6257033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    style={{ maxWidth: '20%', zIndex: 900, marginLeft:'8%' }} />

            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ backgroundColor: ACENTO, mx: '15%', pl:'15%', mt: '-10%' }}

            >


                {
                    cNosotros.map(nos => {
                        return (
                            <Grid
                                item
                                container
                                lg={6}
                                sx={{ p: '2%' }}
                            >
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
