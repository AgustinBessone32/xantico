/*******************************************************
 * Nombre:        Reseña
 * Descripcion:   Subcomponete que muesta un Reseña
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/
import {React} from 'react';
import {Grid, Typography, useMediaQuery} from '@mui/material';
import {theme} from "../../../../../Tema";
import {PRIMARIO} from '../../../../../Colores';


const Reseña = (props) => {
    const {reseña} = props;
    const masSM = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            sx={{marginTop: masSM ? 4 : 0, padding: masSM ? 4 : 0}}

        >


            <Grid item container sx={{justifyContent: "center", minHeight: 100}}>
                <Typography
                    sx={{fontSize: masSM ? 45 : 24, fontFamily: "Cormorant", fontWeight: 700,}}>
                    {reseña.tituloReseña}
                </Typography>
            </Grid>

            <Grid item container sx={{alignItems: "center"}}>
                <Typography sx={{
                    fontSize: 18,
                    fontWeight: 300,
                    textAlign: "center"
                }}>
                    {reseña.descripcionReseña}
                </Typography>
            </Grid>

            <Grid item container sx={{marginTop: 4, justifyContent: "center"}}>

                <Typography sx={{fontSize: 16, color: PRIMARIO, fontWeight: 600}}>
                    {reseña.autorReseña}
                </Typography>

            </Grid>
        </Grid>
    );
};

export default Reseña;