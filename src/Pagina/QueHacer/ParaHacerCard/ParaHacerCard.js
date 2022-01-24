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
import {ACENTO} from '../../../Colores'
import DetalleRuta from "../DetalleRuta/DetalleRuta";

export const ParaHacerCard = () => {
    const [open, setOpen] = useState(false)

    const abrir = () => {
        setOpen(true)

    }

    const cerrar = () => {
        setOpen(false)

    }

    return (
        <>
            <ButtonBase onClick={() => abrir()} >
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{mx: '15%', backgroundColor: "pink"}}

            >
                {

                    paraHacer.map(ph => {
                        return (
                            <Grid item
                                  sx={{py: '3%'}}
                                  lg={4}
                                  container
                                  alignItems='center'
                                  direction='column'
                            >
                                <img src={ph.img} width='300px'/>
                                <Typography
                                    sx={{
                                        backgroundColor: ACENTO, fontSize: 30, mt: -14, ml: -15,
                                        padding: 2,
                                        fontFamily: "Cormorant",
                                        fontWeight: 700
                                    }}>
                                    {ph.titulo}
                                </Typography>


                            </Grid>
                        )
                    })

                }


            </Grid>

            </ButtonBase>

            <Dialog open={open} fullWidth maxWidth={"sm"}>
                <DetalleRuta/>

            </Dialog>

        </>
    )
}

const paraHacer = [
    {
        img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        titulo: 'Andrea Caprio',
    },
    {
        img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        titulo: 'Andrea Caprio',
    },
    {
        img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        titulo: 'Andrea Caprio',
    },
    {
        img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        titulo: 'Andrea Caprio',
    },
    {
        img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        titulo: 'Andrea Caprio',
    },


]
