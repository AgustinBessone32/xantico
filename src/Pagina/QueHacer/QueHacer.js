/*************************************************
 * nombre:       Nosotros
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/

import { Grid, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FONDO } from '../../Colores';
import Encabezado from '../Home/Encabezado/Encabezado';
import { ParaHacerCard } from './ParaHacerCard/ParaHacerCard';
import CarruselReseñas from './Reseñas/CarruselReseñas'
import { CardCosasParaHacer } from "../Cards/CardCosasParaHacer";
import { AnimApareceAbajo } from '../../Animadores/Animadores';
import { collection, getDocs, getFirestore, query } from '@firebase/firestore';
import { app } from '../../fire';
import { RUTAS } from '../../Constantes';
import { RutaDoc } from '../../Entidades/Rutas';
import {theme} from '../../Tema'


const QueHacer = () => {
    const [rutas,setRutas] = useState([])
    const masSM = useMediaQuery(theme.breakpoints.up("md"));

    useEffect(() => {


        const db = getFirestore(app)
        const q = query(collection(db, RUTAS));
        getDocs(q).then((snap) => {

            setRutas([]);
            snap.forEach((doc) => {

                let mac = new RutaDoc(doc);
                setRutas((array) => array.concat(mac))

            });
        });

    }, [])
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: '100%', height: masSM ? 671 : 450, backgroundSize: 'cover',
                    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/quehacer%2Fdetalles%20(9).png?alt=media&token=20b5baff-bd58-4644-8acf-b69efab77657")'
                }}
            >
                <Grid
                    item
                    lg={12}
                    sx={{ width: '100%' }}
                >
                    <AnimApareceAbajo>
                        <Typography sx={{ textAlign: 'center', fontSize: masSM ? 75 : 40, color: FONDO, fontWeight: 'bold' }}>
                            QUE HACER EN IPIALES
                        </Typography>
                    </AnimApareceAbajo>
                </Grid>


            </Grid>

            <Grid item container sx={{ marginTop: 12, justifyContent: "center" }}>
                <Encabezado titulo='Cosas Para Hacer'
                    descripcion='Nuestro hostal está ubicado en Ipiales, dentro del departamento de Nariño, un lugar con paisajes de postal, tenemos uno de los santuarios más bellos del mundo y una experiencia gastronómica que de seguro te atrapará. 
                            ¡Encuentra esto y mucho más en tu visita al sur, no querrás irte de aquí! 
                             '
                />
            </Grid>


            <Grid item container sx={{ justifyContent: "center" }}>
                <Grid item container sx={{ marginTop: 12, justifyContent: "center", maxWidth: "1200px" }} spacing={8}>

                    {
                        rutas.map(item => {
                            return (
                                <Grid item lg={4} sm={12} xs={12} sx={{mx: !masSM && 6}}>
                                    <CardCosasParaHacer item={item} />
                                </Grid>
                            )
                        })
                    }


                </Grid>
            </Grid>


            <Grid item container sx={{ marginTop: 12, justifyContent: "center" }}>
                <CarruselReseñas />
            </Grid>
        </>
    )
};

export default QueHacer
