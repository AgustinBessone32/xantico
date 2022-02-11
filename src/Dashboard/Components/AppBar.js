/*******************************************************
 * Nombre:    AppBar
 * Resumen:   Menu de navegacion
 * sistema
 * Props:
 * Librerias:
 * Autor:
 * Tiempo :   45 min
 ********************************************************/
import {ButtonBase, Grid, Typography} from '@mui/material'
import {useEffect, useState} from 'react'
import logo from '../../Recursos/logo.svg'
import nube from '../../Recursos/nube.svg'
import {ACENTO, PRIMARIO} from "../../Colores";
import {Link} from 'react-router-dom';
import {Facebook, Instagram, Whatsapp} from "iconsax-react";
import {irURL} from "../../FuncionesGlobales";

export const AppBar = () => {
    const kay = "http://api.openweathermap.org/data/2.5/weather?q=Ipiales&appid=51ef9fd08a0df70ab1db95eb317a2217";
    const [temp, setTemp] = useState(11);


    useEffect(() => {
        fetch(kay)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setTemp(parseInt(data.main.temp - 273.15))
            });
    }, []);

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{paddingX: 2, paddingY: 2, boxShadow: 0, backgroundColor: ACENTO, zIndex: 900}}
        >

            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{maxWidth: '1400px'}}
            >

                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >

                    <Grid item lg={2}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item sx={{marginRight: 1}}>
                                <Typography sx={{fontWeight: 400, fontSize: 14,}}>Ipiales </Typography>
                            </Grid>

                            <Grid item sx={{marginRight: 0}}>
                                <img src={nube} width={"60%"}/>
                            </Grid>

                            <Grid item sx={{marginRight: 0}}>
                                <Typography sx={{fontWeight: 400, fontSize: 14}}>{temp + "° C"} </Typography>
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid container item lg={1} sx={{justifyContent: "center"}}>

                        <Link to="/"
                              style={{textDecoration: 'none'}}>
                            <Typography sx={{fontSize: 14, color: PRIMARIO, fontWeight: 500}}
                            > HOME
                            </Typography>

                        </Link>
                    </Grid>


                    <Grid container item lg={1} sx={{justifyContent: "center"}}>

                        <Link to="/camas"
                              style={{color: PRIMARIO, cursor: 'pointer', textDecoration: 'none'}}> <Typography
                            sx={{fontSize: 14, color: PRIMARIO, fontWeight: 500}}> CAMAS
                        </Typography></Link>

                    </Grid>


                    <Grid container item lg={1} sx={{justifyContent: "flex-end"}}>
                        <Link to="/quehacer"
                              style={{color: PRIMARIO, cursor: 'pointer', textDecoration: 'none'}}> <Typography
                            sx={{fontSize: 14, color: PRIMARIO, fontWeight: 500}}> QUE HACER
                        </Typography></Link>
                    </Grid>

                    <Grid
                        item
                        lg={2}
                        sx={{textAlign: 'center'}}
                    >
                        <Link to="/"
                              style={{color: PRIMARIO, cursor: 'pointer', textDecoration: 'none'}}>
                        <img src={logo} style={{width: "50%", textAlign: 'center', flexGrow: 1}} alt={"logo"}/>
                        </Link>
                    </Grid>


                    <Grid container item lg={1} sx={{justifyContent: "flex-start"}}>
                        <Link to="/reglas"
                              style={{color: PRIMARIO, cursor: 'pointer', textDecoration: 'none'}}> <Typography
                            sx={{fontSize: 14, color: PRIMARIO, fontWeight: 500}}> REGLAS
                        </Typography></Link>
                    </Grid>


                    <Grid container item lg={1} sx={{justifyContent: "flex-start"}}>

                        <Link to="/nosotros"
                              style={{color: PRIMARIO, cursor: 'pointer', textDecoration: 'none'}}> <Typography
                            sx={{fontSize: 14, color: PRIMARIO, fontWeight: 500}}> NOSOTROS
                        </Typography></Link>

                    </Grid>


                    <Grid container item lg={1} sx={{justifyContent: "flex-start"}}>
                        <Link to="/contacto"
                              style={{color: PRIMARIO, cursor: 'pointer', textDecoration: 'none'}}> <Typography
                            sx={{fontSize: 14, color: PRIMARIO, fontWeight: 500}}> CONTACTO
                        </Typography></Link>
                    </Grid>

                    <Grid
                        item
                        container
                        lg={2}
                        sx={{justifyContent: 'flex-end'}}
                    >

                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <Grid item sx={{marginRight: 1, opacity: 0.7}}>
                                <ButtonBase sx={{p: 1, borderRadius: 2}}
                                            onClick={() => irURL("https://api.whatsapp.com/send?phone=573004627579&text=Hola%20Xantico")}>
                                    <Whatsapp color={PRIMARIO} size={"1.7rem"} stroke={1} variant={"Bold"}/>
                                </ButtonBase>
                            </Grid>

                            <Grid item sx={{marginRight: 1, opacity: 0.7}}
                                  onClick={() => irURL("https://api.whatsapp.com/send?phone=573004627579&text=Hola%20Xantico")}>
                                <ButtonBase sx={{p: 1, borderRadius: 2}}>
                                    <Instagram color={PRIMARIO} size={"1.7rem"} stroke={1} variant={"Bold"}/>
                                </ButtonBase>
                            </Grid>

                            <Grid item sx={{marginRight: 1, opacity: 0.7}}
                                  onClick={() => irURL("https://api.whatsapp.com/send?phone=573004627579&text=Hola%20Xantico")}>
                                <ButtonBase sx={{p: 1, borderRadius: 2}}>
                                    <Facebook color={PRIMARIO} size={"1.7rem"} stroke={1} variant={"Bold"}/>
                                </ButtonBase>
                            </Grid>


                        </Grid>

                    </Grid>

                </Grid>

            </Grid>


        </Grid>
    )
}
