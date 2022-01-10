import { Grid, Typography } from '@mui/material'
import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp, IconCloud } from '@tabler/icons';
import React from 'react'
import logo from '../../Recursos/logo.png'
import { ACENTO } from "../../Colores";

export const AppBar = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ paddingX: 2, boxShadow: 0, height: '80px', backgroundColor: ACENTO }}
        >

            <Grid
                item
                lg={1}
                md={1}
                style={{textAlign:'center'}}


            >
                <Typography sx={{ flexGrow: 1 }} >
                    Itali <IconCloud color={"#000000"} size={"1.5rem"} stroke={2.5} /> 11 C
                </Typography>

            </Grid>

            <Grid
                item
                lg={4}
                md={1}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">

                    <Grid
                        item
                        lg={4}
                        md={1}
                        style={{textAlign:'center'}}

                    >

                        <Typography sx={{ color: '#663419' }}>HOME</Typography>
                    </Grid>


                    <Grid
                        item
                        lg={4}
                        md={1}
                        style={{textAlign:'center'}}
                    >

                        <Typography sx={{ color: '#663419' }}>HABITACIONES</Typography>
                    </Grid>

                    <Grid
                        item
                        lg={4}
                        md={1}
                        style={{textAlign:'center'}}
                    >

                        <Typography sx={{ color: '#663419' }}>PAGINAS</Typography>
                    </Grid>




                </Grid>





            </Grid>




            <Grid
                item
                lg={2}
                md={4}
                style={{textAlign:'center'}}
            >

                <img src={logo} style={{ width: 110, textAlign: 'center', flexGrow: 1 }} alt={"logo"} />
            </Grid>


            <Grid
                item
                lg={4}
                md={1}
                style={{textAlign:'center'}}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">

                    <Grid
                        item
                        lg={4}
                        md={1}
                        style={{textAlign:'center'}}

                    >

                        <Typography sx={{ color: '#663419' }}>MOMENTOS</Typography>
                    </Grid>

                    <Grid
                        item
                        lg={4}
                        md={1}
                        style={{textAlign:'center'}}

                    >

                        <Typography sx={{ color: '#663419' }}>BLOG</Typography>
                    </Grid>

                    <Grid
                        item
                        lg={4}
                        md={1}
                        style={{textAlign:'center'}}

                    >

                        <Typography sx={{ color: '#663419' }}>CONTACTO</Typography>
                    </Grid>



                </Grid>





            </Grid>




            <Grid
                item
                lg={1}
                md={1}
                style={{textAlign:'center'}}

            >

                <IconBrandWhatsapp color={"#663419"} size={"1.5rem"} stroke={1} />
                <IconBrandInstagram color={"#663419"} size={"1.5rem"} stroke={1} />
                <IconBrandFacebook color={"#663419"} size={"1.5rem"} stroke={1} />
            </Grid>



        </Grid>
    )
}
