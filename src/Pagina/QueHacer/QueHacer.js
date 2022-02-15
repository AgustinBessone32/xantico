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
                <Grid item container sx={{marginTop: 12, justifyContent: "flex-start", maxWidth: "1200px"}} spacing={8}>

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
        imagen: 'https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/quehacer%2Fblog-featured-img-5-1024x669.png?alt=media&token=0231ee69-90fd-482d-81d5-e61dd200a44d',
        nombre: 'Andrea Caprio',
        descripcion : ' since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset '
    },
    {
        imagen: 'https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/quehacer%2Fp3-img-01-600x600.png?alt=media&token=9a150b52-372e-4cd0-8568-eb20ad445b5f',
        nombre: 'Andrea Caprio',
        descripcion : ' since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset '
    },
    {
        imagen: 'https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/quehacer%2Fp5-img-02-600x439.png?alt=media&token=a52ac8a0-e0df-460d-8657-9a0ffaefdcf9',
        nombre: 'Andrea Caprio',
        descripcion : ' since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset '
    },
    {
        imagen: 'https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/quehacer%2Fp3-img-01-600x600.png?alt=media&token=9a150b52-372e-4cd0-8568-eb20ad445b5f',
        nombre: 'Andrea Caprio',
        descripcion : ' since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset '
    },
    {
        imagen: 'https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/quehacer%2Fp5-img-02-600x439.png?alt=media&token=a52ac8a0-e0df-460d-8657-9a0ffaefdcf9',
        nombre: 'Andrea Caprio',
        descripcion : ' since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset '
    },



]