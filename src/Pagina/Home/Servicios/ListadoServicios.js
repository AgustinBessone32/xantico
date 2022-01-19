/*******************************************************
 * Nombre:        ListadoServicios
 * Descripcion:   ListadoServicios
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/

import { Grid, Typography } from '@mui/material'
import React from 'react'
import wifi from '../../../Recursos/wifi.svg'
import agua from '../../../Recursos/agua.svg'
import desayuno from '../../../Recursos/desa.svg'
import caja from '../../../Recursos/caja.svg'
import pet from '../../../Recursos/pet.svg'
import servi from '../../../Recursos/servi.svg'


export const ListadoServicios = () => {
    return (

            <Grid
                item
                container
                direction='row'
                justifyContent="center"
                alignItems='center'
                sx={{maxWidth: "1000px"}}
            >
                {
                    services.map(servi => {
                        return (
                            <Grid item
                                container
                                alignItems='center'
                                direction='column'
                                lg={2} >
                                <Grid item container sx={{justifyContent: "center"}} >
                                    <img src={servi.url} alt={servi.name} width={"40%"} height={50} />
                                </Grid>

                                <Grid item container sx={{justifyContent: "center", marginTop: 2}} >
                                    <Typography sx={{fontWeight: 500, fontSize: 12}}  >{servi.name}</Typography>
                                </Grid>

                            </Grid>
                        )
                    })
                }


            </Grid>


    )
}


const services = [
    {
        name: 'WIFI',
        url: wifi
    },
    {
        name: 'AGUA CALIENTE',
        url: agua
    },
    {
        name: 'DESAYUNO',
        url: desayuno
    },
    {
        name: 'CAJA DE SEGURIDAD',
        url: caja
    },
    {
        name: 'PET FRIENDLY',
        url: pet
    },
    {
        name: 'SERVICIO',
        url: servi
    },


]