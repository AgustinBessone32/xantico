/*************************************************
 * nombre:       CardInicio
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/

import {Button, Grid, Typography} from '@mui/material';
import React from 'react';
import {ACENTO} from "../../../../Colores";
import {irURL, noEspacios} from "../../../../FuncionesGlobales";


const CardInicio = (props) => {
    const {item} = props;
    return (

        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{p: 4}}
        >

            <Grid item lg={4} sm={12} xs={12} sx={{zIndex: 900,}}>
                <img
                    src={item.imagen}
                    width='100%'/>
            </Grid>


            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-start"
            >


                <Grid item lg={10} sm={12} xs={12} sx={{marginTop: "-24%"}}>


                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        sx={{backgroundColor: ACENTO, p: 4, paddingLeft: 20, boxShadow: 4}}
                    >

                        <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: "center"}}>
                            <Typography sx={{
                                fontSize: 32,
                                fontFamily: 'Cormorant',
                                textAlign: 'center',
                                fontWeight: 700
                            }}>
                                {item.nombre}
                            </Typography>
                        </Grid>

                        <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: "center", marginTop: 2}}>
                            <Typography sx={{fontSize: 14, fontWeight: 300, textAlign: "justify"}}>
                                {item.descripcion}
                            </Typography>

                        </Grid>

                        <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: "center", marginTop: 4}}>
                            <Button
                                onClick={() => irURL("https://api.whatsapp.com/send?phone=57" + item.nroContacto +
                                    "&text=Necesito%20maz%20informacion%20de:%20" + noEspacios(item.nombre))}
                            >Mas Informacion</Button>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>


        </Grid>
    )
}

export default CardInicio