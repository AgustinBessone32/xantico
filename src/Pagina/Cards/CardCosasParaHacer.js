/*******************************************************
 * Nombre:        CardCosasParaHacer
 * Descripcion:   CardCosasParaHacer
 *
 * Props:
 * Librerias:
 * Tiempo :        10 min
 ********************************************************/

import { ButtonBase, Dialog, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import { AnimApareceAbajo, AnimApareceDerecha } from '../../Animadores/Animadores';
import { ACENTO } from "../../Colores";
import DetalleRuta from "../QueHacer/DetalleRuta/DetalleRuta";



export const CardCosasParaHacer = (props) => {
    const { item } = props;
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

                <AnimApareceAbajo>
                    <Grid item
                        container
                        alignItems='flex-start'
                        direction='flex-start'
                        sx={{ boxShadow: 6 }}
                    >

                        <img src={item.imagen} width='100%' />
                        <AnimApareceDerecha delay={1}>
                            <Typography
                                sx={{
                                    backgroundColor: ACENTO, fontSize: 30, mt: -14, ml: -5,
                                    padding: 2,
                                    fontFamily: "Cormorant",
                                    fontWeight: 700,
                                    boxShadow: 8
                                }}>
                                {item.nombre}
                            </Typography>
                        </AnimApareceDerecha>


                    </Grid>
                </AnimApareceAbajo>


            </ButtonBase>

            <Dialog open={open} fullWidth maxWidth={"md"} onClose={cerrar}>
                <DetalleRuta item={item} />

            </Dialog>

        </>
    )
}


