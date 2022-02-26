/*******************************************************
 * Nombre:        Encabezado
 * Descripcion:   Componente que muestra el titulo con una descripcion
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/

import {Grid, Typography, useMediaQuery} from '@mui/material'
import React from 'react'
import {AnimApareceAbajo} from "../../../Animadores/Animadores";
import {theme} from "../../../Tema";

const Encabezado = (props) => {
    const {titulo, descripcion} = props
    const masSM = useMediaQuery(theme.breakpoints.up("md"));
    return (

        <Grid
            item
            container
            sx={{maxWidth: "800px", px: masSM ? 0 : 2}}
        >

            <AnimApareceAbajo delay={0}>
                <Grid item container sx={{justifyContent: "center"}}>
                    <Typography sx={{textAlign: 'center', fontSize: masSM ? 38 : 28, fontWeight: 500}}>{titulo}</Typography>
                </Grid>
            </AnimApareceAbajo>

            <AnimApareceAbajo >
                <Grid item container>
                    <Typography sx={{
                        textAlign: 'center',
                        mt: 2,
                        fontSize: masSM ?  18 : 14,
                        fontWeight: 300,
                        lineHeight: masSM ? 1.7 : 1.5
                    }}>{descripcion}</Typography>
                </Grid>
            </AnimApareceAbajo>

        </Grid>


    )
}


export default Encabezado