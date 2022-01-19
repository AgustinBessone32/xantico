/*******************************************************
 * Nombre:        Habitacion
 * Descripcion:   Subcomponete que muesta una habitacion
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/

 import { Grid, Typography } from '@mui/material'
 import React from 'react'
 import {PRIMARIO} from '../../../../Colores'
 
 export const Habitacion = (props) => {
     const { inverse } = props
 
 
     return (
         <Grid
             item
             container
             justifyContent='center'
             alignItems='center'
             lg={6}
             sm={12}
             sx={{ my: 4}}
         >
 
             <div style={{ backgroundColor: '#FAF9F5', width: '320px', padding: '0px 20px 15px 20px', 
                           display:'flex', flexDirection:'column'}}>
                 <img
                     src='https://images.pexels.com/photos/5709298/pexels-photo-5709298.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                     width='400px' height='350px'
                     style={{ marginLeft: inverse ? '30px' : '-110px' }}
                 />
                 <Typography sx={{ fontSize: 26, color: '#000000', mt: 1 }}>Habitacion privada</Typography>
                 <Typography sx={{ fontSize: 15, color: PRIMARIO, textAlign: 'right' }}>Noche   $  22.0000</Typography>
             </div>
 
         </Grid>
     )
 }
 