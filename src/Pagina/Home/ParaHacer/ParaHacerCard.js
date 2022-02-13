/*******************************************************
 * Nombre:        CardCosasParaHacer
 * Descripcion:   CardCosasParaHacer
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/

import {Grid, Typography} from '@mui/material'
import React from 'react'
import {ACENTO} from '../../../Colores'
import {CardCosasParaHacer} from "../../Cards/CardCosasParaHacer";

export const ParaHacerCard = (props) => {
    const {rutas} = props;
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={8}

        >
            {
                rutas.map(item => {
                    return (
                        <Grid item lg={3} sm={6} xs={12}>
                            <CardCosasParaHacer item={item}/>
                        </Grid>
                    )
                })
            }


        </Grid>
    )
}


