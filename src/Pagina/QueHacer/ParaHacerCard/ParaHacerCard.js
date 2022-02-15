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
        img: 'https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/quehacer%2Fblog-featured-img-5-1024x669.png?alt=media&token=0231ee69-90fd-482d-81d5-e61dd200a44d',
        titulo: 'Andrea Caprio',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/quehacer%2Fp3-img-01-600x600.png?alt=media&token=9a150b52-372e-4cd0-8568-eb20ad445b5f',
        titulo: 'Andrea Caprio',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/quehacer%2Fp5-img-02-600x439.png?alt=media&token=a52ac8a0-e0df-460d-8657-9a0ffaefdcf9',
        titulo: 'Andrea Caprio',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/quehacer%2Fp3-img-01-600x600.png?alt=media&token=9a150b52-372e-4cd0-8568-eb20ad445b5f',
        titulo: 'Andrea Caprio',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/xantico-990ea.appspot.com/o/quehacer%2Fp5-img-02-600x439.png?alt=media&token=a52ac8a0-e0df-460d-8657-9a0ffaefdcf9',
        titulo: 'Andrea Caprio',
    },


]
