/*******************
 * Nombre:        Reseña
 * Descripcion:   Subcomponete que muesta un Reseña
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************/
import {React} from 'react';
import {Grid, useMediaQuery} from '@mui/material';
import {theme} from "../../../../Tema";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


const Reseña = (props) => {
    const {reseña} = props;
    const masSM = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            sx={{px: 4}}

        >

            <Grid item lg={12} sm={12} xs={12} container sx={{alignItems: "center"}}>
                <Zoom>
                    <img src={reseña.img} alt={reseña.title} width={"100%"}/>
                </Zoom>
            </Grid>


        </Grid>
    );
};

export default Reseña;