/*************************************************
 * nombre:       CardObra
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/
import { React } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import { Link , useNavigate} from "react-router-dom";
import { ACENTO } from '../../../../Colores'
import { Trash } from "iconsax-react";
import { RUTAS } from "../../../../Constantes";
import { fire } from "../../../../fire";

const CardRuta = (props) => {
    const { item } = props;

    return (
        <Link to={"/admin/detalleruta/" + item.id} style={{ textDecoration: "none", color: "#000" }}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{ backgroundColor: ACENTO, borderRadius: 2, boxShadow: 2, padding: 2 }}
            >

                <Grid item lg={12} sm={12} xs={12}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"

                    >

                        <Grid item lg={12} sm={12} xs={12}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                spacing={2}
                            >

                                <Grid item container lg={4}>
                                    <img src={item.imagen} width={"100%"}  />
                                </Grid>


                                <Grid item container lg={8}>
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
