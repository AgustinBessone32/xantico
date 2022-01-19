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
                sx={{mt: '-10%'}}
            >

                <img src='https://images.pexels.com/photos/6257033/pexels-photo-6257033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    width='40%' style={{zIndex: 900}} />

                <div style={{ backgroundColor: ACENTO, width: '20%', padding: '3%', marginTop: '17%', marginLeft: '-5%', paddingLeft: '7%', textAlign: 'center'}}>
                    <Typography sx={{ fontSize: 30, fontFamily: 'Cormorant', fontWeight: 'bold' }}> Hola</Typography>

                    <Typography sx={{ fontSize: 18, fontWeight: 300, mb:10 }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    </Typography>

                    <ButtonReservar />


                </div>


            </Grid>



        </Grid>
    )
};

export default CardReglas
