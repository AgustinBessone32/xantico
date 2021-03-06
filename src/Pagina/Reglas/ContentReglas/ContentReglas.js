/*************************************************
 * nombre:       ContentReglas
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/

import {Grid, Typography, useMediaQuery} from '@mui/material';
import React from 'react';
import {AnimApareceDerecha} from '../../../Animadores/Animadores';
import {ACENTO} from '../../../Colores'
import {theme} from '../../../Tema';


const ContentReglas = () => {
    const masSM = useMediaQuery(theme.breakpoints.up("md"));
    return (

        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            sx={{mx: 30, p: 8, backgroundColor: ACENTO,}}

        >


            <Grid item lg={5} sm={12} xs={12}>
                {
                    reglas1.map((regla, index) => {
                        return (
                            <Grid
                                item
                                container
                                justifyContent="flex-start"
                                sx={{p: 2}}

                            >
                                <AnimApareceDerecha>
                                    <Typography sx={{
                                        fontFamily: "Montserrat",
                                        fontSize: masSM ? 18 : 13,
                                        fontWeight: 400
                                    }}><span style={{fontWeight: 600}} >{(index+1)+ ") "}</span>

                                        {regla.titulo}</Typography>
                                </AnimApareceDerecha>
                            </Grid>
                        )
                    })
                }
            </Grid>

            <Grid item lg={5} sm={12} xs={12}>
                {
                    reglas2.map((regla, index) => {
                        return (
                            <Grid
                                item
                                container
                                justifyContent="flex-start"
                                sx={{p: 2}}

                            >
                                <AnimApareceDerecha>

                                    <Typography sx={{
                                        fontFamily: "Montserrat",
                                        fontSize: masSM ? 18 : 13,
                                        fontWeight: 400
                                    }}>
                                        <span style={{fontWeight: 600}} >{(index+3) + ") "}</span>
                                        {regla.titulo}</Typography>
                                </AnimApareceDerecha>
                            </Grid>
                        )
                    })
                }
            </Grid>


        </Grid>
    )
};

export default ContentReglas

const reglas1 = [
    {
        titulo: 'El hostal solo est?? autorizado para alojar hu??spedes debidamente registrados. Para este prop??sito, los hu??spedes deben presentar su tarjeta de identificaci??n o pasaporte nacional v??lido, o cualquier otra prueba de identidad v??lida al empleado del hotel correspondiente a su llegada.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: 'Est?? prohibido fumar en todo el alojamiento',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: 'El hostal no se hace responsable de los objetos de valor de los hu??spedes.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },

]

const reglas2 = [

    {
        titulo: 'El hu??sped puede solicitar Men?? para dietas especiales bajo petici??n.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: 'El uso del servicio de lavander??a tiene cobro adicional.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: 'Los hu??spedes no pueden mover muebles o interferir con la red el??ctrica o cualquier otra instalaci??n en las habitaciones del hostal o en las instalaciones del hostal sin el consentimiento de la administraci??n.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        titulo: 'Los hu??spedes est??n obligados a pagar los da??os causados por ellos, si no pueden demostrar que no son responsables de los da??os.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
]