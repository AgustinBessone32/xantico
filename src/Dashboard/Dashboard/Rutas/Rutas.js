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
import {fire} from "../../../fire";
import {RUTAS} from "../../../Constantes";
import {RutaDoc} from "../../../Entidades/Rutas";
import CardRuta from "../Cards/CardRuta/CardRuta";

const Rutas = () => {
    const [rutas,setRutas] = useState([]);


    useEffect(() =>{
       fire.firestore().collection(RUTAS).onSnapshot((snap) =>{
           setRutas([]);
           console.log(snap)      
           snap.forEach((doc) =>{
               let oba = new RutaDoc(doc);
               setRutas((array) => array.concat(oba));
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
                COSAS POR HACER
          </Typography>
        </Grid>

        <Grid item >
          <Link to={"/admin/detalleruta/" + null} style={{textDecoration: "none"}}  >
            <Button variant={"contained"} color={"secondary"} size={"small"} >
              Ingresar Cosa Por Hacer
              </Button>
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

                  {rutas.map((item, index) =>{
                    return(
                        <Grid item container key={item}>
                          <CardRuta item={item}/>
                        </Grid>
                    )
                  })}

                 </Grid>
      </Grid>
      
    </Grid>
  );
};
export default Rutas;

