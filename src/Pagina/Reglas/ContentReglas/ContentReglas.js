/*************************************************
 * nombre:       ContentReglas
 * descripcion:
 *
 * librerias: 
 * props:
 * tiempo:       10 min
 *************************************************/

import { Grid, Typography } from '@mui/material';
import React from 'react';
import { ACENTO } from '../../../Colores'


const ContentReglas = () => {
    return (

        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{mx: '5%'}}
        >

            {
                reglas.map(regla => {
                    return (
                        <Grid
                            item
                            container
                            sx={{ backgroundColor: ACENTO, m: '1%', p:'2%' }}
                            lg={4}
                        >
                            <Typography sx={{fontFamily:'Cormorant', fontSize: 35, fontWeight: 'bold'}}>{regla.titulo}</Typography>
                            <Typography sx={{fontSize: 18, fontWeight: 300, mt:2}}>{regla.desc}</Typography>
                        </Grid>
                    )
                })
            }





        </Grid>
    )
};

export default ContentReglas

const reglas = [
    {
        titulo: 'Reglas de la casa',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: 'Reglas de la casa',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: 'Reglas de la casa',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: 'Reglas de la casa',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: 'Reglas de la casa',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: 'Reglas de la casa',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
]