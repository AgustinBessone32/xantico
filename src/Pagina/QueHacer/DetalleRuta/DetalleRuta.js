/*************************************************
 * nombre:       DetalleRuta
 * descripcion:
 *
 * librerias:  libreria extra
 * props:
 * tiempo:       10 min
 *************************************************/
import React from 'react'
import {Grid} from '@mui/material'
import CardInicio from './CardInicio/CardInicio'
import ContentImages from './ContentImages/ContentImages'

const DetalleRuta = (props) => {
    const {item} = props;
    return (

        <>
            <Grid item container sx={{marginTop: 0, justifyContent: "center"}}>
                <CardInicio item={item}/>
            </Grid>

            <Grid item container sx={{marginTop: 6, justifyContent: "center", px: 8, marginBottom: 4}}>
                <ContentImages item={item}/>
            </Grid>


        </>


    )
}

export default DetalleRuta