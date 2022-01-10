/*******************************************************
 * Nombre:        Reseña
 * Descripcion:   Subcomponete que muesta un Reseña
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
import { PRIMARIO } from '../../../../Colores';


const Reseña = (props) => {
    const { reseña } = props;
    const masSM = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            sx={{ marginTop: masSM ? 6 : 0, padding: masSM ? 4 : 0 }}

        >


            <Grid item container sx={{ alignItems: "center", minHeight: 100 }}>
                <Typography
                    sx={{ fontSize: masSM ? 45 : 24, fontWeight: 600, marginTop: 2, color: "#000000", lineHeight: 1 }}>
                    {reseña.title}
                </Typography>
            </Grid>

            <Grid item container sx={{ alignItems: "center", minHeight: masSM ? 160 : 120 }}>
                <Typography sx={{
                    fontSize: masSM ? 20 : 18,
                    marginTop: masSM ? 2 : 0,

                    fontWeight: 400,
                    textAlign: "justify"
                }}>
                    {reseña.contenido}
                </Typography>
            </Grid>

            <Grid item container sx={{ marginTop: 2 }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{ marginTop: 2 }}
                >
                    <Typography sx={{ fontSize: 16, color: PRIMARIO}}>
                        {reseña.name}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Reseña;