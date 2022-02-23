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
                        outerSpacing={masSM ? 400 : 0}
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

                            {masSM && <Grid item lg={2} sm={12} xs={12}>
                                <ButtonBase
                                    sx={{padding: 1, borderRadius: 8}}
                                    onClick={() => atras()}
                                >
                                    <IconChevronLeft size={'3rem'} stroke={1}/>
                                </ButtonBase>
                            </Grid>
                            }

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

                            {masSM && <Grid item container lg={2} sm={12} xs={12} sx={{justifyContent: "flex-end"}}>

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
                            }


                        </Grid>


                        {!masSM &&

                        <>

                            <Grid
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="flex-start"
                            >

                                <Grid item lg={2} sm={6} xs={6}>
                                    <ButtonBase
                                        sx={{padding: 1, borderRadius: 8}}
                                        onClick={() => atras()}
                                    >
                                        <IconChevronLeft size={'3rem'} stroke={1}/>
                                    </ButtonBase>
                                </Grid>

                                <Grid item container lg={2} sm={6} xs={6} sx={{justifyContent: "flex-end"}}>

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


                        </>

                        }


                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
};

export default CarruselZonasComunes;

const rese = [
    {

        img: "https://firebasestorage.googleapis.com/v0/b/xanticohostal-a9d46.appspot.com/o/espacios%2FESPACIOS%20(2).png?alt=media&token=cb7aba48-5557-4b39-ae39-79a98b4023f1"
    },
    {

        img: "https://firebasestorage.googleapis.com/v0/b/xanticohostal-a9d46.appspot.com/o/espacios%2FESPACIOS%20(9).png?alt=media&token=cd16787e-e58b-4cc7-877b-81c74246c78b"
    },

    {

        img: "https://firebasestorage.googleapis.com/v0/b/xanticohostal-a9d46.appspot.com/o/espacios%2Fespacios%20(7).png?alt=media&token=bbbe36c4-29ee-4ec6-b9cb-460d3245c2f1"
    },

    {

        img: "https://firebasestorage.googleapis.com/v0/b/xanticohostal-a9d46.appspot.com/o/espacios%2Fespacios%20ban%CC%83os%20(4).png?alt=media&token=05abeb71-54ea-441e-a765-2f330d6d4a37"
    },

    {

        img: "https://firebasestorage.googleapis.com/v0/b/xanticohostal-a9d46.appspot.com/o/espacios%2Fdetalles%20(1).png?alt=media&token=bb867eaf-65eb-4afe-a3dd-d98011af3a93"
    },


    {

        img: "https://firebasestorage.googleapis.com/v0/b/xanticohostal-a9d46.appspot.com/o/espacios%2FESPACIOS%20(6).png?alt=media&token=763cb97c-21d9-423e-9e97-4b9822b549d2"
    },


];