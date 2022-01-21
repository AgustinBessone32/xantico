/*************************************************
 * nombre:       CardAnuncio
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/
import {React} from "react";
import {Avatar, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const CardArtista = (props) => {
    const {item} = props;
    return (
        <Link to={"/admin/detalleartista/" + item.id} style={{textDecoration: "none", color: "#232323", width: "100%"}}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{backgroundColor: "#fff", padding: 2, borderRadius: 2, boxShadow: 2}}
            >

                <Grid item container lg={2} sm={12} xs={12} sx={{justifyContent: "center"}}>
                    <Avatar src={item.imgPerfil} sx={{width: 80, height: 80}}/>
                </Grid>

                <Grid item lg={8} sm={12} xs={12}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >

                        <Grid item container>
                            <Typography sx={{fontWeight: 400}}>
                                <span style={{fontWeight: 700}}>Nombre: </span>
                                {item.nombre} </Typography>
                        </Grid>

                        <Grid item container>
                            <Typography sx={{fontWeight: 400}}>
                                <span style={{fontWeight: 700}}>Pais: </span>
                                {item.pais} </Typography>
                        </Grid>

                    </Grid>

                </Grid>


            </Grid>
        </Link>
    );
};
export default CardArtista;
