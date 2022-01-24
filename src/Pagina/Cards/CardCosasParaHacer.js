/*******************************************************
 * Nombre:        CardCosasParaHacer
 * Descripcion:   CardCosasParaHacer
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/

import {ButtonBase, Dialog, Grid, Typography} from '@mui/material'
import {useState} from 'react'
import {ACENTO} from "../../Colores";
import DetalleRuta from "../QueHacer/DetalleRuta/DetalleRuta";


export const CardCosasParaHacer = (props) => {
    const {item} = props;
    const [open, setOpen] = useState(false)

    const abrir = () => {
        setOpen(true)

    }

    const cerrar = () => {
        setOpen(false)

    }

    return (
        <>
            <ButtonBase onClick={() => abrir()}>

                <Grid item
                      container
                      alignItems='flex-start'
                      direction='flex-start'
                >
                    <img src={item.imagen} width='100%'/>
                    <Typography
                        sx={{
                            backgroundColor: ACENTO, fontSize: 30, mt: -14, ml: -5,
                            padding: 2,
                            fontFamily: "Cormorant",
                            fontWeight: 700
                        }}>
                        {item.nombre}
                    </Typography>


                </Grid>


            </ButtonBase>

            <Dialog open={open} fullWidth maxWidth={"lg"} onClose={cerrar}>
                <DetalleRuta item={item} />

            </Dialog>

        </>
    )
}


