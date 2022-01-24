/*************************************************
 * nombre:       CardInicio
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/

import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { ACENTO, PRIMARIO } from '../../../../Colores'


const CardInicio = () => {
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
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item sx={{ zIndex: 900, ml: '10%' }} >
                    <img src='https://images.pexels.com/photos/2600207/pexels-photo-2600207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' width='22%' />
                </Grid>

                <Grid item lg={8} sx={{ backgroundColor: ACENTO, mt: '-10%', p: '2% 2% 2% 13%' }}>
                    <Typography sx={{ fontSize: 45, fontFamily: 'Cormorant', textAlign: 'center' }}>
                        Lorem Impus
                    </Typography>

                    <Typography sx={{ fontSize: 24, fontWeight: 300, my: 4, textAlign: 'center' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>

                    <Grid
                        item
                        container
                        justifyContent="center"
                        lg={12}
                    >
                        <Button sx={{ px: 12, py: 1, backgroundColor: PRIMARIO, my:'5%' }}> RESERVAR</Button>
                    </Grid>


                </Grid>


            </Grid>


        </Grid>
    )
}

export default CardInicio