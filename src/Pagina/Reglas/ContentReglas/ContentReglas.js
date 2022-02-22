/*************************************************
 * nombre:       ContentReglas
 * descripcion:
 *
 * librerias: 
 * props:
 * tiempo:       10 min
 *************************************************/

import { Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { AnimApareceDerecha } from '../../../Animadores/Animadores';
import { ACENTO } from '../../../Colores'
import { theme } from '../../../Tema';


const ContentReglas = () => {
    const masSM = useMediaQuery(theme.breakpoints.up("md"));
    return (

        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            sx={{ mx: '5%' }}
        >

            {
                reglas.map(regla => {
                    return (
                        <Grid
                            item
                            container
                            justifyContent="flex-start"
                            sx={{ backgroundColor: ACENTO, m: '1%', p: '2%' }}
                            lg={4}
                        >
                            <AnimApareceDerecha>
                                <Typography sx={{ fontFamily: 'Cormorant', fontSize: masSM ? 15 : 13, fontWeight: 'bold' }}>{regla.titulo}</Typography>
                            </AnimApareceDerecha>
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
        titulo: '1.	El hostal solo está autorizado para alojar huéspedes debidamente registrados. Para este propósito, los huéspedes deben presentar su tarjeta de identificación o pasaporte nacional válido, o cualquier otra prueba de identidad válida al empleado del hotel correspondiente a su llegada.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: '2.	Está prohibido fumar en todo el alojamiento',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: '3.	El hostal no se hace responsable de los objetos de valor de los huéspedes.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: '4.	El huésped puede solicitar Menú para dietas especiales bajo petición.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: '5.	El uso del servicio de lavandería tiene cobro adicional.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: '6. Los huéspedes no pueden mover muebles o interferir con la red eléctrica o cualquier otra instalación en las habitaciones del hostal o en las instalaciones del hostal sin el consentimiento de la administración.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: '7. Los huéspedes están obligados a pagar los daños causados por ellos, si no pueden demostrar que no son responsables de los daños.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
]