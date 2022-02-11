/*************************************************
 * nombre:       CardReglas
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/

import { Grid, Typography } from '@mui/material';
import React from 'react';
import { ACENTO } from '../../../Colores'
import ButtonReservar from '../ButtonReservar/ButtonReservar'

const CardReglas = () => {
    return (

        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                sx={{ mt: '-5%' }}
            >

                <img
                    src='https://images.pexels.com/photos/6257033/pexels-photo-6257033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    width='40%' style={{ zIndex: 900 }} />

                <div style={{
                    backgroundColor: ACENTO,
                    width: '20%',
                    padding: '3%',
                    marginTop: '17%',
                    marginLeft: '-5%',
                    paddingLeft: '7%',
                    textAlign: 'center'
                }}>


                    <Typography sx={{ fontSize: 30, fontFamily: 'Cormorant', fontWeight: 'bold' }}> Reglas de la casa </Typography>


                    <Typography sx={{ fontSize: 18, fontWeight: 300, mb: 10, textAlign:'left' }}>
                        ¡Nos alegra que hayas llegado hasta aquí! Hemos creado algunas reglas para que toda la comunidad de viajeros que visita nuestro hostal tenga una estadía inigualable.
                        Pero antes, asegura tu viaje y reserva la mejor opción de alojamiento. 


                    </Typography>


                    <ButtonReservar />


                </div>


            </Grid>


        </Grid>
    )
};

export default CardReglas
