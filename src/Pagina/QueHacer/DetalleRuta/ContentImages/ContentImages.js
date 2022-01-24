/*************************************************
 * nombre:       ContentImages
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/

 import { Button, Grid, Typography } from '@mui/material';
 import React from 'react';
 import { ACENTO, PRIMARIO } from '../../../../Colores'
 
 
 const ContentImages = (props) => {
     const {item} = props;
     return (
 
         <Grid
             container
             direction="row"
             justifyContent="star"
             alignItems="center"
             lg={12}
             spacing={2}
         >
             { item !== undefined &&
                 item.imagenes.map(img =>{
                     return(
                        <Grid item containter lg={2} >
                            <img src={img} alt={img.alt} width='90%' />
                        </Grid>
                     )
                 })
             }
 
         </Grid>
     )
 }
 
 export default ContentImages

 const cImages=[
     {
         img: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
         alt: 'img'
     },
     {
        img: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'img'
    },
    {
        img: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'img'
    },
    {
        img: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'img'
    },
    {
        img: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'img'
    }
 ]