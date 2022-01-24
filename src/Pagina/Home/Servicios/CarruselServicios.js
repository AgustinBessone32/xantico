/*******************************************************
 * Nombre:        CarruselServicios
 * Descripcion:   CarruselServicios
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/
import { React, useEffect, useRef, useState } from 'react';
import { Button, ButtonBase, Grid, Typography, useMediaQuery } from '@mui/material';
import Carousel from 'react-elastic-carousel';
import {
    IconArrowLeft,
    IconChevronLeft,
    IconChevronRight,
} from '@tabler/icons';

import Servicio from "./Componentes/Servicio";
import { theme } from "../../../Tema";
import { AnuncioDoc } from '../../../Entidades/Anuncio';
import { ANUNCIOS } from '../../../Constantes';
import {fire} from '../../../fire'


const CarruselServicios = () => {

    const ref = useRef();
    const masSM = useMediaQuery(theme.breakpoints.up("md"));
    const [bg, setBg] = useState(0)
    const [anuncios,setAnuncios] = useState([]);


    const siguiente = () => {
        
        if(bg + 1 <= anuncios.length - 1){
            ref.current.slideNext();
            setBg(bg + 1)
        }
        
    };
    const atras = () => {
        if(bg - 1 >= 0){
            ref.current.slidePrev();
            setBg(bg - 1)
        }
    };

 
 
    useEffect(() =>{
       fire.firestore().collection(ANUNCIOS).onSnapshot((snap) =>{
           setAnuncios([]);
           snap.forEach((doc) =>{
               let oba = new AnuncioDoc(doc);
               setAnuncios((array) => array.concat(oba));
           })
       })
    },[])


    return (


        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            sx={{
                paddingX: masSM ? 6 : 0,
                paddingY: masSM ? 10 : 4,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: anuncios.length > 0 ? `url(${anuncios[bg].imagen})` :  `url(${servi[bg].img})`,
                width: '100%'
            }}
        >

            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{ maxWidth: "1300px" }}
            >

                <Grid item container sx={{ marginTop: 0 }}>

                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        {masSM && <Grid item>
                            <ButtonBase
                                sx={{ padding: 1, borderRadius: 8 }}
                                onClick={() => atras()}
                            >
                                <IconChevronLeft size={'3rem'} stroke={1} />
                            </ButtonBase>
                        </Grid>}


                        <Grid item container lg={9} xs={12} sx={{ paddingX: masSM ? 0 : 3 }}>
                            <Carousel
                                ref={ref}
                                itemsToScroll={1}
                                itemsToShow={1}
                                pagination={false}
                                showArrows={false}
                                enableAutoPlay={false}
                            >
                                {anuncios.map((servicio) => {
                                    return (
                                        <Servicio servicio={servicio} />
                                    )
                                })}


                            </Carousel>
                        </Grid>

                        {masSM && <Grid item>
                            <ButtonBase

                                sx={{ padding: 1, borderRadius: 8 }}
                                onClick={() => siguiente()}
                            >
                                <IconChevronRight
                                    size={'3rem'}
                                    stroke={1}
                                />
                            </ButtonBase>
                        </Grid>}


                    </Grid>

                    {!masSM && <Grid item container sx={{ marginTop: 3, }}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >


                            <Grid item>
                                <Grid item>
                                    <ButtonBase
                                        sx={{ padding: 1, borderRadius: 8 }}
                                        onClick={() => atras()}
                                    >
                                        <IconChevronLeft color={'#fff'} size={'3rem'} stroke={1} />
                                    </ButtonBase>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Grid item>
                                    <ButtonBase
                                        sx={{ padding: 1, borderRadius: 8 }}
                                        onClick={() => siguiente()}
                                    >
                                        <IconChevronRight
                                            color={'#fff'}
                                            size={'3rem'}
                                            stroke={1}
                                        />
                                    </ButtonBase>
                                </Grid>
                            </Grid>

                        </Grid>


                    </Grid>}

                </Grid>
            </Grid>
        </Grid>
    );
};

export default CarruselServicios;

const servi = [
    {
        nombre: 'Branding',
        contenido:
            'Más que un logo',
        caso: "Xantico Hostal",
        img: 'https://images.pexels.com/photos/5732505/pexels-photo-5732505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
        nombre: 'Contenido y estrategia digital',
        contenido:
            'Las redes sociales ',
        caso: "Quesuditas",
        img: 'https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },

];