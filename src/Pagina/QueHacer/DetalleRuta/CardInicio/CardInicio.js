/*************************************************
 * nombre:       CardInicio
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/

import {Button, Grid, Typography} from '@mui/material';
import React from 'react';
import {ACENTO, PRIMARIO} from '../../../../Colores'
import ButtonReservar from '../../../Camas/ContentHabitacion/Components/ButtonReservar';


const CardInicio = (props) => {
    const {item} = props;
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
                <Grid item sx={{zIndex: 900, ml: '5%', mr:'30%'}}>
                    <img
                        src={item.imagen}
                        width='40%'/>
                </Grid>

                <Grid item lg={8} sx={{backgroundColor: ACENTO, mt: '-15%', p: '2% 2% 2% 13%'}}>
                    <Typography sx={{
                        fontSize: 32,
                        fontFamily: 'Cormorant',
                        textAlign: 'center',
                        marginLeft: "18%",
                        fontWeight: 700
                    }}>
                        {item.nombre}
                    </Typography>

                    <Typography sx={{fontSize: 16, fontWeight: 300, my: 4, marginLeft: "26%"}}>
                        {item.descripcion}
                    </Typography>

                    <Grid
                        item
                        container
                        justifyContent="center"
                        sx={{marginLeft: "11%"}}
                    >
                        <ButtonReservar />
                    </Grid>


                </Grid>


            </Grid>


        </Grid>
    )
}

export default CardInicio