import {useState} from 'react';
import {Button, Dialog, Grid, Typography} from "@mui/material";
import {PRIMARIO} from "../../../Colores"


const ButtonReservar = () => {
   const [open,setOpen] = useState(false)

   const abrir = () =>{
       setOpen(true)
   }


   const cerrar = () =>{
       setOpen(false)
   }

   return (
       <>
       <Grid
           container
           direction="row"
           justifyContent="center"
           alignItems="center"
           
       >

           <Button sx={{ px: 12, py: 1, backgroundColor: PRIMARIO }} 
                    onClick={() => abrir()} >RESERVAR
            </Button>

       </Grid>

           <Dialog open={open} fullWidth maxWidth={"xs"} onClose={() => cerrar()}  >

               <iframe src={"https://engine.lobbypms.com/xantico?lang=es"}
                       height={550}

               />

           </Dialog>

       </>
   )
}

export default ButtonReservar;
