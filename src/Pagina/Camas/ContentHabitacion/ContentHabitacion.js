import { Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { Habitacion } from './Components/Habitacion'
import ButtonReservar from './Components/ButtonReservar'
import { AnimApareceAbajo } from '../../../Animadores/Animadores'
import { theme } from "../../../Tema";

const ContentHabitacion = (props) => {
    const { inverse } = props
    const masSM = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            {
                masSM ?
                    <>
                        <Grid
                            item
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            lg={6}
                        >
                            {
                                inverse
                                    ?
                                    <Habitacion inverse={inverse} />
                                    :
                                    <AnimApareceAbajo>
                                        <Typography sx={{ fontSize: masSM ? 40 : 30, fontWeight: 'medium', textAlign: 'center', mt: 6 }}>Urban Spirit of Helsinki</Typography>
                                        <Typography sx={{ fontSize: masSM ? 20 : 17, mt: 2, px: masSM ? 30 : 10, textAlign: 'center', mb: 10, fontWeight: 'light' }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </Typography>

                                        <ButtonReservar />
                                    </AnimApareceAbajo>


                            }

                        </Grid>

                        <Grid
                            item
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            lg={6}
                            sx={{ mt: inverse ? 5 : -5 }}
                        >
                            {
                                inverse
                                    ?
                                    <AnimApareceAbajo>
                                        <Typography sx={{ fontSize: masSM ? 40 : 30, fontWeight: 'medium', textAlign: 'center', mt: 6 }}>Urban Spirit of Helsinki</Typography>
                                        <Typography sx={{ fontSize: masSM ? 20 : 17, mt: 2, px: masSM ? 30 : 10, textAlign: 'center', mb: 10, fontWeight: 'light' }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </Typography>

                                        <ButtonReservar />
                                    </AnimApareceAbajo>
                                    :
                                    <Habitacion inverse={inverse} />



                            }

                        </Grid>
                    </>
                    :
                    <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        lg={6}
                    >

                        <Habitacion inverse={inverse} />
                        
                        <AnimApareceAbajo>
                            <Typography sx={{ fontSize: masSM ? 40 : 30, fontWeight: 'medium', textAlign: 'center', mt: 6 }}>Urban Spirit of Helsinki</Typography>
                            <Typography sx={{ fontSize: masSM ? 20 : 17, mt: 2, px: masSM ? 30 : 10, textAlign: 'center', mb: 10, fontWeight: 'light' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Typography>

                            <ButtonReservar />
                        </AnimApareceAbajo>




                    </Grid>

            }
        </Grid>
    )
}

export default ContentHabitacion
