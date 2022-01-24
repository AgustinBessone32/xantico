/*************************************************
 * nombre:       Anuncios
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
 import {ANUNCIOS} from "../../../Constantes";
 import {AnuncioDoc} from "../../../Entidades/Anuncio";
import CardAnuncio from "../Cards/CardAnuncio/CardAnuncio";
 
 const Anuncios = () => {
     const [anuncios,setAnuncios] = useState([]);
 
 
     useEffect(() =>{
        fire.firestore().collection(ANUNCIOS).onSnapshot((snap) =>{
            setAnuncios([]);
            snap.forEach((doc) =>{
                let oba = new AnuncioDoc(doc);
                setAnuncios((array) => array.concat(oba));
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
                 ANUNCIOS
           </Typography>
         </Grid>
 
         <Grid item >
           <Link to={"/admin/detalleanuncio/" + null} style={{textDecoration: "none"}}  >
             <Button variant={"contained"} color={"secondary"} size={"small"} >
               Ingresar Anuncio
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
 
                   {anuncios.map((item, index) =>{
                     return(
                         <Grid item container key={item} lg={3} >
                           <CardAnuncio item={item}/>
                         </Grid>
                     )
                   })}
 
                  </Grid>
       </Grid>
       
     </Grid>
   );
 };
 export default Anuncios;
 
 