/*************************************************
 * nombre:       Nosotros
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/

import {Grid, Typography} from '@mui/material';
import React from 'react';
import {FONDO} from '../../Colores';
import Encabezado from '../Home/Encabezado/Encabezado';
import {ParaHacerCard} from './ParaHacerCard/ParaHacerCard';
import CarruselReseñas from './Reseñas/CarruselReseñas'
import {CardCosasParaHacer} from "../Cards/CardCosasParaHacer";


const QueHacer = () => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: '100%', height: 671, backgroundSize: 'cover',
                    backgroundImage: 'url("https://images.pexels.com/photos/3962293/pexels-photo-3962293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")'
                }}
            >
                <Grid
                    item
                    lg={12}
                    sx={{width: '100%'}}
                >
                    <Typography sx={{textAlign: 'center', fontSize: 75, color: FONDO, fontWeight: 'bold'}}>
                        QUE HACER EN IPIALES
                    </Typography>
                </Grid>


            </Grid>

            <Grid item container sx={{marginTop: 12, justifyContent: "center"}}>
                <Encabezado titulo='Cosas Para Hacer'
                            descripcion='Nuestro hostal está ubicado en Ipiales, dentro del departamento de Nariño, un lugar con paisajes de postal, tenemos uno de los santuarios más bellos del mundo y una experiencia gastronómica que de seguro te atrapará. 
                            ¡Encuentra esto y mucho más en tu visita al sur, no querrás irte de aquí! 
                             '
                />
            </Grid>


            <Grid item container sx={{justifyContent: "center"}}>
                <Grid item container sx={{marginTop: 12, justifyContent: "center", maxWidth: "1200px"}} spacing={8}>

                    {
                        paraHacer.map(item => {
                            return (
                                <Grid item lg={4} sm={12} xs={12}>
                                    <CardCosasParaHacer item={item}/>
                                </Grid>
                            )
                        })
                    }


                </Grid>
            </Grid>


            <Grid item container sx={{marginTop: 12, justifyContent: "center"}}>
                <CarruselReseñas/>
            </Grid>
        </>
    )
};

export default QueHacer


const paraHacer = [
    {
        img: 'https://images.pexels.com/photos/10885300/pexels-photo-10885300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        titulo: 'Andrea Caprio',
    },
    {
        img: 'https://images.pexels.com/photos/10885300/pexels-photo-10885300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        titulo: 'Andrea Caprio',
    },
    {
        img: 'https://images.pexels.com/photos/10885300/pexels-photo-10885300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        titulo: 'Andrea Caprio',
    },
    {
        img: 'https://images.pexels.com/photos/10885300/pexels-photo-10885300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        titulo: 'Andrea Caprio',
    },


]