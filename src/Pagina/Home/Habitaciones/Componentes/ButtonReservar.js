import {useState} from 'react';
import {Button, Dialog, Grid, Typography} from "@mui/material";


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
           justifyContent="flex-start"
           alignItems="flex-start"
       >

           <Typography sx={{fontSize: 18, fontWeight: 600, color: '#663419', mt: 4, cursor: 'pointer'}} 
                    onClick={() => abrir()} >Reservar Ahora
            </Typography>

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