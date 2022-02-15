/*************************************************
 * nombre:       Nosotros
 * descripcion:
 *
 * librerias: 
 * props:
 * tiempo:       10 min
 *************************************************/

import { Grid, Typography } from '@mui/material'
import React from 'react'
import { FONDO } from '../../Colores'
import Encabezado from '../Home/Encabezado/Encabezado'
import CardReseñas from './Reseñas/CardReseñas'
import ButtonReservar from './ButtonReservar/ButtonReservar'
import ContentNosotros from './ContentNosotros/ContentNosotros'
import CarruselZonasComunes from '../Nosotros/ZonasComunes/CarruselZonasComunes'


const Nosotros = () => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: '100%', height: 671, backgroundSize: 'cover',
                    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/nosotros%2Fdetalles%20(3).png?alt=media&token=19dd486c-1a22-474f-b784-3ced4b808932")'
                }}
            >
                <Grid
                    item
                    lg={12}
                    sx={{ width: '100%' }}
                >
                    <Typography sx={{ textAlign: 'center', fontSize: 75, color: FONDO, fontWeight: 'bold' }}>
                        ACERCA DE NOSOTROS
                    </Typography>
                </Grid>

            </Grid>

            <Grid item container sx={{ marginTop: 15, justifyContent: "center" }}>
                <Encabezado titulo='Hemos preparado esto para ti '
                    descripcion='En la entrada encontrarás imágenes que cuentan historias e ilustran experiencias vivas de la cultura del sur, cuando camines por nuestros pasillos vas a experimentar el despertar de la creatividad y en cada rincón crearás nuevas anécdotas y grandes recuerdos que viajarán contigo por siempre.'
                />
            </Grid>

            <Grid item container sx={{ my: 15 }}>
                <CarruselZonasComunes />
            </Grid>


            <Grid item container sx={{ marginTop: 15, justifyContent: "center" }}>
                <ContentNosotros />
            </Grid>

            <Grid item container sx={{ marginTop: 15, justifyContent: "center" }}>
                <Encabezado titulo='TENEMOS ALGO PARA TI'
                    descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                />
            </Grid>

            

            <Grid item container sx={{ marginTop: 12, justifyContent: "center" }}>
                <CardReseñas />
            </Grid>

            <Grid item container sx={{ my: 15, justifyContent: "center" }}>
                <ButtonReservar />
            </Grid>







        </>
    )
}

export default Nosotros
