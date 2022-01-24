/*************************************************
 * nombre:       CardObra
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/
import { React } from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {ACENTO} from '../../../../Colores'

const CardRuta = (props) => {
    const { item } = props;
    return (
        <Link to={"/admin/detalleruta/" + item.id} style={{ textDecoration: "none", color: "#000"  }}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ backgroundColor: ACENTO, borderRadius: 2, boxShadow: 2, padding: 2 }}
                lg={6}
            >

                <Grid item lg={12} sm={12} xs={12}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}
                    >

                        <Grid item lg={6} sm={12} xs={12}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                spacing={2}
                            >

                                <Grid item container lg={6}>
                                    <img src={item.imagen} width={"100%"} />
                                </Grid>


                                <Grid item container lg={6}>
                                    <Typography sx={{ fontWeight: 400, fontSize: 18 }}><span style={{ fontWeight: 600 }}>Nombre: </span>
                                        {item.nombre}
                                    </Typography>

                                    <Grid item container>
                                        <Typography sx={{ fontWeight: 300, fontSize: 16 }}>
                                            {item.descripcion}
                                        </Typography>
                                    </Grid>
                                </Grid>





                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </Link>
    );
};
export default CardRuta;
