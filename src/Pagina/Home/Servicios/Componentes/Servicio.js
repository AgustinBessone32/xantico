/*******************************************************
 * Nombre:        Servicio
 * Descripcion:   Subcomponete que muesta un servicio
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/
import {React} from 'react';
import {Button, Grid, Typography, useMediaQuery} from '@mui/material';
import {Link} from "react-router-dom";
import {theme} from "../../../../Tema";
import {AnimApareceAbajo} from "../../../../Animadores/Animadores";


const Servicio = (props) => {
    const {servicio} = props;
    const masSM = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            sx={{padding: 0, width: '100%', mt: masSM ? 40 : 20}}
        >


            <AnimApareceAbajo>
                <Grid item container sx={{justifyContent: "center", minHeight: 100, marginTop: '-90px'}}>
                    <Typography
                        sx={{
                            fontSize: masSM ? 70 : 40, marginTop: 2, color: "#FFFFFF", lineHeight: 1,
                            fontFamily: "Cormorant", textAlign: "center"
                        }}>
                        {servicio.titulo}
                    </Typography>
                </Grid>
            </AnimApareceAbajo>

            <AnimApareceAbajo delay={0.7}>
                <Grid item container sx={{justifyContent: "center"}}>
                    <Typography sx={{
                        fontSize: masSM ? 22 : 18,
                        marginTop: masSM ? -2 : 2,
                        fontWeight: 300,
                        textAlign: "center",
                        color: "#fff",

                    }}>
                        {servicio.subtitulo}
                    </Typography>
                </Grid>
            </AnimApareceAbajo>

            <AnimApareceAbajo delay={1}>
                <Grid item container sx={{marginTop: 6, justifyContent: 'center'}}>
                    <Link to={servicio.dirige} style={{textDecoration: "none"}}>


                        <Button variant={"contained"} sx={{paddingX: 8, py: 1, borderRadius: 0, boxShadow: 4}}
                                color={"secondary"} size={"small"}>ver mas</Button>
                    </Link>
                </Grid>
            </AnimApareceAbajo>
        </Grid>
    );
};

export default Servicio;