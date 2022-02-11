/*******************
 * Nombre:        CarruselZonasComunes
 * Descripcion:   CarruselZonasComunes
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************/
import {useEffect, useRef} from 'react';
import {ButtonBase, Grid, Typography, useMediaQuery} from '@mui/material';
import Carousel from 'react-elastic-carousel';
import {IconChevronLeft, IconChevronRight,} from '@tabler/icons';

import Reseña from "./Components/ZonaComun";
import {theme} from "../../../Tema";


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

                                <Reseña reseña={reseña}/>

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
                        sx={{backgroundColor: "#F4EFE2", p: 6, paddingTop: "200px", marginTop: "-160px", boxShadow: 4}}
                    >


                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >

                            <Grid item lg={2} sm={12} xs={12}>
                                <ButtonBase
                                    sx={{padding: 1, borderRadius: 8}}
                                    onClick={() => atras()}
                                >
                                    <IconChevronLeft size={'3rem'} stroke={1}/>
                                </ButtonBase>
                            </Grid>

                            <Grid item lg={8} sm={12} xs={12}>

                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="flex-start"
                                >

                                    <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: "center"}}>
                                        <Typography sx={{fontSize: 28, fontWeight: 400}}>Zonas Comunes</Typography>
                                    </Grid>

                                    <Grid item container lg={12} sm={12} xs={12}
                                          sx={{justifyContent: "center", marginTop: 2}}>
                                        <Typography
                                            sx={{fontSize: 16, fontWeight: 300, color: "#663419", textAlign: "center"}}>
                                            Cierra los ojos e imagínate un lugar hermoso y colorido,
                                            con diversos contrastes cargados de emociones y una muestra auténtica de la
                                            cultura local, así son los espacios de Xanticó.
                                        </Typography>
                                    </Grid>

                                </Grid>

                            </Grid>

                            <Grid item container lg={2} sm={12} xs={12} sx={{justifyContent: "flex-end"}}>

                                <ButtonBase
                                    sx={{padding: 1, borderRadius: 8}}
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

        img: "https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/habitaciones%2FESPACIOS%20(2).png?alt=media&token=aacd8b7a-8cb9-4dd7-9f24-c43ef1be1560"
    },
    {

        img: "https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/habitaciones%2FESPACIOS%20(9).png?alt=media&token=f7cfe1f6-e1bf-4c95-a93a-5fd952766f9c"
    },

    {

        img: "https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/habitaciones%2Fespacios%20(7).png?alt=media&token=b55b57af-b00a-4df9-9011-2ae093088da6"
    },

    {

        img: "https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/habitaciones%2Fespacios%20ban%CC%83os%20(4).png?alt=media&token=cec9029f-36f5-4d28-949d-97da031b76bb"
    },

    {

        img: "https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/habitaciones%2Fdetalles%20(1).png?alt=media&token=c90935b4-dd7f-4f77-bc5f-69a2830e5f88"
    },


    {

        img: "https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/habitaciones%2FESPACIOS%20(6).png?alt=media&token=498192ae-2d47-48f0-b007-8a32f78d3061"
    },


];