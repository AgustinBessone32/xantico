/*******************************************************
 * Nombre:        ReglasCasa
 * Descripcion:   Componente que muestra las reglas de la casa
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/

import {ButtonBase, Grid, Typography} from '@mui/material'
import React from 'react'
import {ACENTO} from '../../../Colores'
import {AnimApareceIsquierda} from "../../../Animadores/Animadores";
import {Link} from "react-router-dom";

export const ReglasCasa = () => {
    return (
        <Grid container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"

        >

            <Grid
                item
                lg={12}
                sx={{
                    width: '100%', height: 671, backgroundSize: 'cover',
                    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/xanticohostal-a9d46.appspot.com/o/anuncios%2Freglas.png?alt=media&token=35297552-74cc-42d9-873a-35a676e562ee")'
                }}
            >

            </Grid>


            <Grid
                item
                lg={6}
                sx={{backgroundColor: ACENTO, p: 4, mt: -80, boxShadow: 8}}
            >

                <AnimApareceIsquierda>
                    <Typography sx={{fontSize: 35, fontFamily: "Cormorant", fontWeight: 700}}>
                        Reglas de la casa
                    </Typography>

                    <Typography sx={{fontSize: 18, mt: 2, fontWeight: 300}}>
                        ¡Nos alegra que hayas llegado hasta aquí! Hemos creado algunas reglas para que toda la comunidad
                        de viajeros que
                        visita nuestro hostal tenga una estadía inigualable.

                    </Typography>

                    <Link to={"/reglas"} style={{textDecoration: "none", color: "#000"}}>
                        <ButtonBase sx={{p: 1, borderRadius: 2, mt: 2}}>
                            <Typography sx={{fontSize: 18, cursor: 'pointer', fontWeight: 600}}>
                                Leer Mas +

                            </Typography>
                        </ButtonBase>
                    </Link>

                </AnimApareceIsquierda>

            </Grid>


        </Grid>
    )
}
