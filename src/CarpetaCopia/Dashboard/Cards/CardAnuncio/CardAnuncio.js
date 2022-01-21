/*************************************************
 * nombre:       CardAnuncio
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/
import {React} from "react";
import {Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const CardAnuncio = (props) => {
    const {item} = props;
    return (
        <Link to={"/admin/detalleanuncio/" + item.id} style={{textDecoration: "none", color: "#232323", width: "100%"}}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{backgroundColor: "#fff", padding: 2, borderRadius: 2, boxShadow: 2}}
            >

                <Grid item container lg={3} sm={12} xs={12} sx={{justifyContent: "center"}}>
                    <img src={item.img} width={"100%"}/>
                </Grid>

                <Grid item lg={3} sm={12} xs={12} sx={{padding: 2}}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"


                    >

                        <Grid item container>
                            <Typography sx={{fontWeight: 400}}>
                                <span style={{fontWeight: 700}}>Titulo: </span>
                                {item.titulo} </Typography>
                        </Grid>

                        <Grid item container>
                            <Typography sx={{fontWeight: 400}}>
                                <span style={{fontWeight: 700}}>Contenido: </span>
                                {item.contenido} </Typography>
                        </Grid>

                    </Grid>

                </Grid>

                <Grid item lg={3} sm={12} xs={12} sx={{padding: 2}}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"


                    >

                        <Grid item container>
                            <Typography sx={{fontWeight: 400}}>
                                <span style={{fontWeight: 700}}>Titulo (ENG): </span>
                                {item.titeng} </Typography>
                        </Grid>

                        <Grid item container>
                            <Typography sx={{fontWeight: 400}}>
                                <span style={{fontWeight: 700}}>Contenido (ENG): </span>
                                {item.coneng} </Typography>
                        </Grid>

                    </Grid>

                </Grid>

                <Grid item lg={3} sm={12} xs={12} sx={{padding: 2}}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"


                    >
                        <Grid item container>
                            <Typography sx={{fontWeight: 400}}>
                                <span style={{fontWeight: 700}}>Autor: </span>
                                {item.autor} </Typography>
                        </Grid>

                        <Grid item container>
                            <Typography sx={{fontWeight: 400}}>
                                <span style={{fontWeight: 700}}>Tipo: </span>
                                {item.tipo} </Typography>
                        </Grid>

                        <Grid item container>
                            <Typography sx={{fontWeight: 400}}>
                                <span style={{fontWeight: 700}}>Lleva a: </span>
                                {item.llevaNom} </Typography>
                        </Grid>

                    </Grid>

                </Grid>


            </Grid>
        </Link>
    );
};
export default CardAnuncio;
