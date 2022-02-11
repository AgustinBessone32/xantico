/*******************
 * Nombre:        CarruselZonasComunes
 * Descripcion:   CarruselZonasComunes
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************/
import { useRef, useState, useEffect } from 'react';
import { ButtonBase, Grid, Typography, useMediaQuery } from '@mui/material';
import Carousel from 'react-elastic-carousel';
import { IconChevronLeft, IconChevronRight, } from '@tabler/icons';

import Reseña from "./Components/ZonaComun";
import { theme } from "../../../Tema";


const CarruselZonasComunes = () => {
    const ref = useRef();
    const masSM = useMediaQuery(theme.breakpoints.up("md"));



    const siguiente = () => {
        ref.current.slideNext();
    };
    const atras = () => {
        ref.current.slidePrev();
    };

    var index = 0;

    useEffect(() => {
        ref.current.slideNext();
    }, [])
    return (


        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"

        >

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
            >


                <Grid item lg={12} sm={12} xs={12}>


                    <Carousel
                        ref={ref}
                        itemPosition={index}
                        itemsToScroll={1}
                        itemsToShow={1}
                        outerSpacing={400}
                        pagination={false}
                        showArrows={false}
                    >
                        {rese.map((reseña) => {
                            return (

                                <Reseña reseña={reseña} />

                            )
                        })}


                    </Carousel>
                </Grid>


                <Grid item lg={10} sm={12} xs={12}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        sx={{ backgroundColor: "#F4EFE2", p: 6, paddingTop: "200px", marginTop: "-160px" }}
                    >


                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >

                            <Grid item lg={2} sm={12} xs={12}>
                                <ButtonBase
                                    sx={{ padding: 1, borderRadius: 8 }}
                                    onClick={() => atras()}
                                >
                                    <IconChevronLeft size={'3rem'} stroke={1} />
                                </ButtonBase>
                            </Grid>

                            <Grid item lg={8} sm={12} xs={12}>

                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="flex-start"
                                >

                                    <Grid item container lg={12} sm={12} xs={12} sx={{ justifyContent: "center" }}>
                                        <Typography sx={{ fontSize: 28, fontWeight: 400 }}>Zonas Comunes</Typography>
                                    </Grid>

                                    <Grid item container lg={12} sm={12} xs={12} sx={{ justifyContent: "center", marginTop: 2 }}>
                                        <Typography sx={{ fontSize: 16, fontWeight: 300, color: "#663419", textAlign: "center" }}>
                                            Cierra los ojos e imagínate un lugar hermoso y colorido,
                                            con diversos contrastes cargados de emociones y una muestra auténtica de la cultura local, así son los espacios de Xanticó.
                                        </Typography>
                                    </Grid>

                                </Grid>

                            </Grid>

                            <Grid item container lg={2} sm={12} xs={12} sx={{ justifyContent: "flex-end" }}>

                                <ButtonBase
                                    sx={{ padding: 1, borderRadius: 8 }}
                                    onClick={() => siguiente()}
                                >
                                    <IconChevronRight
                                        size={'3rem'}
                                        stroke={1}
                                    />
                                </ButtonBase>
                            </Grid>


                        </Grid>


                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
};

export default CarruselZonasComunes;

const rese = [
    {
        title: 'Branding',
        desc:
            'Más que un logo, contamos tu historia, tus valores, tu filosofía. Creamos una marca fuerte que hable por sí misma.',
        img: "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        title: 'Branding',
        desc:
            'Más que un logo, contamos tu historia, tus valores, tu filosofía. Creamos una marca fuerte que hable por sí misma.',
        img: "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },

    {
        title: 'Branding',
        desc:
            'Más que un logo, contamos tu historia, tus valores, tu filosofía. Creamos una marca fuerte que hable por sí misma.',
        img: "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },

    {
        title: 'Branding',
        desc:
            'Más que un logo, contamos tu historia, tus valores, tu filosofía. Creamos una marca fuerte que hable por sí misma.',
        img: "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },

    {
        title: 'Branding',
        desc:
            'Más que un logo, contamos tu historia, tus valores, tu filosofía. Creamos una marca fuerte que hable por sí misma.',
        img: "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },


];