/*************************************************
 * nombre:       ContentContacto
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/
import {Grid, Typography, useMediaQuery} from '@mui/material';
import React from 'react';
import {AnimApareceAbajo, AnimApareceDerecha, AnimApareceIsquierda} from '../../../Animadores/Animadores';
import {ACENTO} from '../../../Colores';
import valija from '../../../Recursos/valija.svg'
import {theme} from '../../../Tema';

const ContentContacto = () => {
    const masSM = useMediaQuery(theme.breakpoints.up("md"));
    return (

        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            sx={{maxWidth: "1300px"}}
        >

            <Grid item lg={3} sm={12} xs={12}  >
                <img
                    src='https://firebasestorage.googleapis.com/v0/b/xanticohostal-a9d46.appspot.com/o/anuncios%2FFACHADA%20(1)%20(1).png?alt=media&token=9b369fa5-d6a8-41eb-b7f4-c0719f0002d6'
                    width={"100%"}/>
            </Grid>

            <Grid item lg={7}
                  xs={12}
                  sm={12}
                  sx={{backgroundColor: ACENTO,ml: masSM ? -4 :0, marginTop: masSM ? 4 : 0  }}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    sx={{p: 6}}
                >


                    {
                        cNosotros.map(nos => {
                            return (
                                <Grid
                                    item
                                    container
                                    lg={12}
                                    sx={{p: 2}}
                                >
                                    <AnimApareceDerecha>
                                        <Typography sx={{
                                            fontFamily: 'Cormorant',
                                            fontSize: 30,
                                            fontWeight: 'bold'
                                        }}>{nos.titulo}</Typography>
                                        <Typography sx={{fontSize: 14, fontWeight: 'light'}}>
                                            {nos.desc}
                                        </Typography>
                                    </AnimApareceDerecha>

                                </Grid>
                            )
                        })
                    }
                </Grid>

            </Grid>

        </Grid>


    )
};

export default ContentContacto


const cNosotros = [
    {
        titulo: 'Direccion',
        desc: 'Cra 6 # 10-59 Ipiales - Nariño - Colombia'
    },
    {
        titulo: 'Telefono',
        desc: '60 2 7753461'
    },
    {
        titulo: 'Celular',
        desc: '+57 316 922 5653'
    },


]
