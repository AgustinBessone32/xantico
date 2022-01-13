/*******************************************************
 * Nombre:        Servicio
 * Descripcion:   Subcomponete que muesta un servicio
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/
import { React } from 'react';
import { Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { IconArrowRight } from '@tabler/icons';

import { Link } from "react-router-dom";
import { theme } from "../../../../Tema";


const Servicio = (props) => {
    const { servicio } = props;
    const masSM = useMediaQuery(theme.breakpoints.up("md"));
    return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                sx={{ padding: masSM ? 4 : 0 , width:'100%', mt:30}}
            >


                <Grid item container sx={{ justifyContent: "center", minHeight: 100, marginTop: '-90px' }}>
                    <Typography
                        sx={{ fontSize: masSM ? 50 : 24, marginTop: 2, color: "#FFFFFF", lineHeight: 1 }}>
                        {servicio.nombre}
                    </Typography>
                </Grid>

                <Grid item container sx={{ justifyContent: "center" }}>
                    <Typography sx={{
                        fontSize: masSM ? 20 : 18,
                        marginTop: masSM ? -2 : 0,
                        fontWeight: 400,
                        textAlign: "justify"
                    }}>
                        {servicio.contenido}
                    </Typography>
                </Grid>

                {/* <Grid item container sx={{ marginTop: 2 }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        sx={{ marginTop: 2 }}
                    >
                        <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
                            Caso {servicio.caso}
                        </Typography>
                        <IconArrowRight
                        />
                    </Grid>
                </Grid> */}

                <Grid item container sx={{ marginTop: 4, justifyContent: 'center' }}>
                    {/* <Link to={"/servicio/"} style={{textDecoration: "none"}}>
 
 
                     <Button variant={"contained"} color={"secondary"} size={"small"}>ver mas</Button>
                 </Link> */}

                    <Button variant={"contained"} color={"secondary"} size={"small"} sx={{width: '160px'}} >
                        ver mas
                    </Button>
                </Grid>
            </Grid>
    );
};

export default Servicio;