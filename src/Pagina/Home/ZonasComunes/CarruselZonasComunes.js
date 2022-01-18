/*******************************************************
 * Nombre:        CarruselZonasComunes
 * Descripcion:   CarruselZonasComunes
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/
 import {React, useRef, useState} from 'react';
 import {ButtonBase, Grid, Typography, useMediaQuery} from '@mui/material';
 import Carousel, {consts} from 'react-elastic-carousel';
 import {
     IconChevronLeft,
     IconChevronRight,
 } from '@tabler/icons';
 
 import Reseña from "./Components/ZonaComun";
 import {theme} from "../../../Tema";
import { ACENTO, PRIMARIO } from '../../../Colores';
 
 
 const CarruselZonasComunes = () => {
 
     const ref = useRef();
     const masSM = useMediaQuery(theme.breakpoints.up("md"));
 
 
     const siguiente = () => {
         ref.current.slideNext();
     };
     const atras = () => {
         ref.current.slidePrev();
     };

    let index = 0
 
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
                 my:10
 
             }}
         >
 
             <Grid
                 container
                 direction="row"
                 justifyContent="flex-start"
                 alignItems="flex-start"
                 sx={{maxWidth: "1300px"}}
             >

                 <Grid item container sx={{marginTop: 0}}>
 
                     <Grid
                         container
                         direction="row"
                         justifyContent="space-between"
                         alignItems="center"
                     >
                         {masSM && <Grid item>
                             <ButtonBase
                                 sx={{padding: 1, borderRadius: 8}}
                                 onClick={() => atras()}
                             >
                                 <IconChevronLeft  size={'3rem'} stroke={1}/>
                             </ButtonBase>
                         </Grid>}
 
 
                         <Grid item container lg={9} xs={12} sx={{paddingX: masSM ? 0 : 3,}}>
                             <Carousel
                                 ref={ref}
                                 itemPosition={index}
                                 itemsToScroll={1}
                                 itemsToShow={3}
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
 
                         {masSM && <Grid item>
                             <ButtonBase
                                 sx={{padding: 1, borderRadius: 8}}
                                 onClick={() => siguiente()}
                             >
                                 <IconChevronRight
                                     size={'3rem'}
                                     stroke={1}
                                 />
                             </ButtonBase>
                         </Grid>}

                         <Grid item container justifyContent='center' xs={12} sx={{paddingX: masSM ? 0 : 3, backgroundColor: ACENTO}} >
                            <Typography>{}</Typography>
                         </Grid>
 
 
                     </Grid>
 
                     {!masSM && <Grid item container sx={{marginTop: 3,}}>
                         <Grid
                             container
                             direction="row"
                             justifyContent="space-between"
                             alignItems="center"
                         >
 
 
                             <Grid item>
                                 <Grid item>
                                     <ButtonBase
                                         sx={{padding: 1, borderRadius: 8}}
                                         onClick={() => atras()}
                                     >
                                         <IconChevronLeft size={'3rem'} stroke={1} color={'#ffffff'}/>
                                     </ButtonBase>
                                 </Grid>
                             </Grid>
 
                             <Grid item>
                                 <Grid item>
                                     <ButtonBase
                                         sx={{padding: 1, borderRadius: 8}}
                                         onClick={() => siguiente()}
                                     >
                                         <IconChevronRight
                                             color={'#ffffff'}
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