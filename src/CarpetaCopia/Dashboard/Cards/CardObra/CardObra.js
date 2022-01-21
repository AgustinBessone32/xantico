/*************************************************
 * nombre:       CardObra
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/
import { React } from "react";
import {Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const CardObra = (props) => {
    const {item} = props;
  return (
      <Link to={"/admin/detalleobra/" + item.id}  style={{textDecoration: "none", color: "#000"}} >
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{backgroundColor: "#fff", borderRadius: 2, boxShadow: 2, padding: 2}}

    >

        <Grid item lg={6} sm={12} xs={12} >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
             >

               <Grid item lg={2} sm={12} xs={12} >
                      <img  src={item.imgPerfil} width={"100%"} />
               </Grid>

                <Grid item lg={10} sm={12} xs={12} >
                        <Grid
                          container
                          direction="row"
                          justifyContent="flex-start"
                          alignItems="flex-start"
                         >


                            <Grid item container  >
                                <Typography sx={{fontWeight: 400}} ><span style={{fontWeight: 600}} >Tipo: </span>
                                    {item.tipo}
                                </Typography>
                            </Grid>

                            <Grid item container  >
                                <Typography sx={{fontWeight: 400}} ><span style={{fontWeight: 600}} >Referencia: </span>
                                    {item.referencia}
                                </Typography>
                            </Grid>


                            <Grid item container >
                                <Typography sx={{fontWeight: 400}} ><span style={{fontWeight: 600}} >Nombre: </span>
                                    {item.nombre}
                                </Typography>
                            </Grid>




                            <Grid item  container>
                                <Typography sx={{fontWeight: 400}} ><span style={{fontWeight: 600}} >Categoria: </span>
                                    {item.categoria}
                                </Typography>
                            </Grid>


                         </Grid>
                </Grid>

             </Grid>

        </Grid>


        <Grid item lg={3} sm={12} xs={12} >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
           >

              <Grid item container>
                  <Typography sx={{fontWeight: 400}} ><span style={{fontWeight: 600}} >Pesos COL: </span>
                      {item.valor}
                  </Typography>
              </Grid>


              <Grid item container>
                  <Typography sx={{fontWeight: 400}} ><span style={{fontWeight: 600}} >DOLAR US: </span>
                      {item.dolar}
                  </Typography>
              </Grid>


           </Grid>
        </Grid>


        <Grid item lg={3} sm={12} xs={12} >
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >

                <Grid item container>
                    <Typography sx={{fontWeight: 400}} ><span style={{fontWeight: 600}} >Envio COL: </span>
                        {item.envioNacional}
                    </Typography>
                </Grid>


                <Grid item container>
                    <Typography sx={{fontWeight: 400}} ><span style={{fontWeight: 600}} >Envio EEUU: </span>
                        {item.envioEEUU}
                    </Typography>
                </Grid>



            </Grid>
        </Grid>


    </Grid>
      </Link>
  );
};
export default CardObra;
