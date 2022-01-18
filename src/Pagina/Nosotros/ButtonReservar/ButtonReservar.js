import { Button, Grid } from '@mui/material'
import React from 'react'
import { PRIMARIO } from '../../../Colores'

const ButtonReservar = () => {
    return (
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
    >
        <Grid
            item
            container
            justifyContent="center"
            lg={12}
            sx={{mb:9}}
            
        >
            <Button sx={{ px: 12, py: 1, backgroundColor: PRIMARIO }}> RESERVAR</Button>
        </Grid>

    </Grid>
    )
}

export default ButtonReservar
