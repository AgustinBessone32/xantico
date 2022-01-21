/*************************************************
 * nombre:       SObrasPrevias
 * descripcion:  
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/
import { useEffect, useState } from "react";
import {Button, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import CardObra from "../Cards/CardObra/CardObra";
import CardObraArtista from "../Cards/CardObra/CardObraArtista";
import fire from "../../fire";
import {OBRASPREVIAS} from "../../Constantes";
import {ObraDoc} from "../../Entidades/Obra";

const SObrasPrevias = () => {
    const [obras,setObras] = useState([]);


    useEffect(() =>{
       fire.firestore().collection(OBRASPREVIAS).orderBy("idDefinitiva","asc").onSnapshot((snap) =>{
           setObras([]);
           snap.forEach((doc) =>{
               let oba = new ObraDoc(doc);
               setObras((array) => array.concat(oba));
           })
       })
    },[])
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{padding: 4, minHeight: "80vh"}}
    >
      <Grid item container sx={{justifyContent: "space-between"}} >

        <Grid item >
          <Typography
              sx={{ fontSize: 20, fontWeight: 700, color: "#232323"}}>
         OBRAS PREVIAS
          </Typography>
        </Grid>

        <Grid item >
          <Link to={"/admin/detalleobra/" + null} style={{textDecoration: "none"}}  >
            <Button variant={"contained"} color={"secondary"} size={"small"} >Ingresar Obra</Button>
          </Link>
        </Grid>

      </Grid>


      <Grid item container sx={{marginTop: 4}} >
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                 >

                  {obras.map((item, index) =>{
                    return(
                        <Grid item container key={item}>
                          <CardObraArtista item={item}/>
                        </Grid>
                    )
                  })}

                 </Grid>
      </Grid>
      
    </Grid>
  );
};
export default SObrasPrevias;

