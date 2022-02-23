/*************************************************
 * nombre:       Nosotros
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/

import {Grid, Typography, useMediaQuery} from '@mui/material'
import React from 'react'
import {FONDO} from '../../Colores'
import Encabezado from '../Home/Encabezado/Encabezado'
import CardReseñas from './Reseñas/CardReseñas'
import ButtonReservar from './ButtonReservar/ButtonReservar'
import ContentNosotros from './ContentNosotros/ContentNosotros'
import CarruselZonasComunes from '../Nosotros/ZonasComunes/CarruselZonasComunes'
import {AnimApareceAbajo} from '../../Animadores/Animadores'
import {theme} from '../../Tema'


const Nosotros = () => {
    const masSM = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: '100%', height: masSM ? 440 : 400, backgroundSize: 'cover',
                    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/xanticohostal-a9d46.appspot.com/o/anuncios%2Fdetalles%20(3).png?alt=media&token=3e50f5d9-49e2-4532-b2b1-04d0d53d41c1")'
                }}
            >
                <Grid
                    item
                    lg={12}
                    sx={{width: '100%'}}
                >
                    <AnimApareceAbajo>
                        <Typography
                            sx={{textAlign: 'center', fontSize: masSM ? 65 : 40, color: FONDO, fontWeight: 'bold'}}>
                            ACERCA DE NOSOTROS
                        </Typography>
                    </AnimApareceAbajo>
                </Grid>

            </Grid>

            <Grid item container sx={{marginTop: 15, justifyContent: "center"}}>
                <Encabezado titulo='Hemos preparado esto para ti '
                            descripcion='En la entrada encontrarás imágenes que cuentan historias e ilustran experiencias vivas de la cultura del sur, cuando camines por nuestros pasillos vas a experimentar el despertar de la creatividad y en cada rincón crearás nuevas anécdotas y grandes recuerdos que viajarán contigo por siempre.'
                />
            </Grid>

            <Grid item container sx={{my: 15}}>
                <CarruselZonasComunes/>
            </Grid>


            <Grid item container sx={{marginTop: 15, justifyContent: "center"}}>
                <ContentNosotros/>
            </Grid>

            <Grid item container sx={{marginTop: 15, justifyContent: "center"}}>
                <Encabezado titulo='TENEMOS ALGO PARA TI'
                            descripcion='Nuestros espacios de descanso te garantizan una recarga de energía, para que continues disfrutando la aventura de viajar. Puedes elegir una cómoda habitación compartida y tener maravillosos encuentros, o una habitación privada llena de calidez y tranquilidad.'
                />
            </Grid>


            {/*} <Grid item container sx={{marginTop: 12, justifyContent: "center"}}>
                <CardReseñas/>
            </Grid>*/}

            <Grid item container sx={{mt: 15, mb: -5, justifyContent: "center"}}>
                <ButtonReservar/>
            </Grid>


        </>
    )
}

export default Nosotros
