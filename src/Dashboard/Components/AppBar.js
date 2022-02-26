/*******************************************************
 * Nombre:    AppBar
 * Resumen:   Menu de navegacion
 * sistema
 * Props:
 * Librerias:
 * Autor:
 * Tiempo :   45 min
 ********************************************************/
import {ButtonBase, Drawer, Grid, Typography, useMediaQuery} from '@mui/material'
import {useEffect, useState} from 'react'
import logo from '../../Recursos/logo.svg'
import nube from '../../Recursos/nube.svg'
import {ACENTO, PRIMARIO} from "../../Colores";
import {Link} from 'react-router-dom';
import {Facebook, HambergerMenu, Instagram, Whatsapp} from "iconsax-react";
import {irURL} from "../../FuncionesGlobales";
import {theme} from "../../Tema";

export const AppBar = () => {
    const kay = "http://api.openweathermap.org/data/2.5/weather?q=Ipiales&appid=51ef9fd08a0df70ab1db95eb317a2217";
    const [temp, setTemp] = useState(11);
    const masSM = useMediaQuery(theme.breakpoints.up("md"));
    const [open, setOpen] = useState(false);

    const abrir = () => {
        setOpen(true)
    }

    const cerrar = () => {
        setOpen(false);
    }

    useEffect(() => {
        fetch(kay)
            .then((res) => res.json())
            .then((data) => {
                setTemp(parseInt(data.main.temp - 273.15) + 3)
            });
    }, []);

    return (

        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{paddingX: 2, paddingY: 2, boxShadow: 0, backgroundColor: ACENTO, zIndex: 1100}}
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

                    <Grid item lg={2} sm={6} xs={6}>

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


                    {masSM &&
                    <>
                        <Grid container item lg={1} sx={{justifyContent: "center"}}>

                            <Link to="/"
                                  style={{textDecoration: 'none'}}>
                                <Typography sx={{fontSize: 13, color: PRIMARIO, fontWeight: 600}}
                                > HOME
                                </Typography>

                            </Link>
                        </Grid>


                        <Grid container item lg={1} sx={{justifyContent: "center"}}>

                            <Link to="/acomodaciones"
                                  style={{color: PRIMARIO, cursor: 'pointer', textDecoration: 'none'}}> <Typography
                                sx={{fontSize: 13, color: PRIMARIO, fontWeight: 600}}> ACOMODACIONES
                            </Typography></Link>

                        </Grid>


                        <Grid container item lg={1} sx={{justifyContent: "flex-end"}}>
                            <Typography
                                sx={{fontSize: 13, color: PRIMARIO + 50, fontWeight: 600}}> QUE HACER
                            </Typography>

                            {/* <Link to="/quehacer"
                                  style={{color: PRIMARIO, cursor: 'pointer', textDecoration: 'none'}}> <Typography
                                sx={{fontSize: 13, color: PRIMARIO, fontWeight: 600}}> QUE HACER
                            </Typography>
                            </Link>*/}
                        </Grid>

                        <Grid
                            item
                            lg={2}
                            sx={{textAlign: 'center'}}
                        >
                            <Link to="/"
                                  style={{color: PRIMARIO, cursor: 'pointer', textDecoration: 'none'}}>
                                <img src={logo} style={{width: "50%", textAlign: 'center', flexGrow: 1}}
                                     alt={"logo"}/>
                            </Link>
                        </Grid>


                        <Grid container item lg={1} sx={{justifyContent: "flex-start"}}>
                            <Link to="/reglas"
                                  style={{color: PRIMARIO, cursor: 'pointer', textDecoration: 'none'}}> <Typography
                                sx={{fontSize: 13, color: PRIMARIO, fontWeight: 600}}> REGLAS
                            </Typography></Link>
                        </Grid>


                        <Grid container item lg={1} sx={{justifyContent: "flex-start"}}>

                            <Link to="/nosotros"
                                  style={{color: PRIMARIO, cursor: 'pointer', textDecoration: 'none'}}> <Typography
                                sx={{fontSize: 13, color: PRIMARIO, fontWeight: 600}}> NOSOTROS
                            </Typography></Link>

                        </Grid>


                        <Grid container item lg={1} sx={{justifyContent: "flex-start"}}>
                            <Link to="/contacto"
                                  style={{color: PRIMARIO, cursor: 'pointer', textDecoration: 'none'}}> <Typography
                                sx={{fontSize: 13, color: PRIMARIO, fontWeight: 600}}> CONTACTO
                            </Typography></Link>
                        </Grid>

                    </>
                    }

                    <Grid item container lg={2} sm={6} xs={6} sx={{justifyContent: "flex-end"}}>


                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <Grid item sx={{marginRight: 1, opacity: 0.7}}>
                                <ButtonBase sx={{p: masSM ? 1 : 0, borderRadius: 2}}
                                            onClick={() => irURL("https://api.whatsapp.com/send?phone=573169225653&text=Hola%20Xantico")}>
                                    <Whatsapp color={PRIMARIO} size={"1.7rem"} stroke={1} variant={"Bold"}/>
                                </ButtonBase>
                            </Grid>

                            <Grid item sx={{marginRight: 1, opacity: 0.7}}
                                  onClick={() => irURL("https://instagram.com/xanticohostal?utm_medium=copy_link")}>
                                <ButtonBase sx={{p: masSM ? 1 : 0, borderRadius: 2}}>
                                    <Instagram color={PRIMARIO} size={"1.7rem"} stroke={1} variant={"Bold"}/>
                                </ButtonBase>
                            </Grid>

                            <Grid item sx={{marginRight: 0, opacity: 0.7}}
                                  onClick={() => irURL("https://www.facebook.com/Xantico-Hostal-101580132306440/")}>
                                <ButtonBase sx={{p: masSM ? 1 : 0, borderRadius: 2}}>
                                    <Facebook color={PRIMARIO} size={"1.7rem"} stroke={1} variant={"Bold"}/>
                                </ButtonBase>
                            </Grid>


                        </Grid>

                    </Grid>

                </Grid>


                {!masSM &&
                <>

                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{marginTop: 2}}
                    >

                        <Grid item lg={2} sm={1} xs={3}>
                            <img src={logo} width={"100%"}/>
                        </Grid>

                        <Grid item container lg={12} sm={6} xs={6} sx={{justifyContent: "flex-end"}}>
                            <ButtonBase onClick={() => abrir()}>
                                <HambergerMenu color={PRIMARIO} size={"2rem"}/>
                            </ButtonBase>
                        </Grid>

                    </Grid>


                    <Drawer
                        anchor={'right'}
                        open={open}
                        variant={"temporary"}
                        onClose={cerrar}

                    >

                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            sx={{width: 200, py: 4, px: 2, backgroundColor: ACENTO, minHeight: "100vh"}}
                        >


                            <Grid item container sx={{justifyContent: "center", marginTop: 4}}>
                                <ButtonBase sx={{width: "100%"}} onClick={() => cerrar()}>
                                    <Link to={"/"} style={{textDecoration: "none"}}>
                                        <Typography sx={{
                                            fontSize: 22,
                                            width: "100%",
                                            color: PRIMARIO,
                                            fontWeight: 600
                                        }}>Home </Typography>
                                    </Link>
                                </ButtonBase>
                            </Grid>

                            <Grid item container sx={{justifyContent: "center", marginTop: 4}}>
                                <ButtonBase sx={{width: "100%"}} onClick={() => cerrar()}>
                                    <Link to={"/acomodaciones"} style={{textDecoration: "none"}}>
                                        <Typography sx={{
                                            fontSize: 22,
                                            width: "100%",
                                            color: PRIMARIO,
                                            fontWeight: 600
                                        }}>Acomodaciones </Typography>
                                    </Link>
                                </ButtonBase>
                            </Grid>


                            <Grid item container sx={{justifyContent: "center", marginTop: 4}}>
                                <ButtonBase sx={{width: "100%"}} onClick={() => cerrar()}>
                                    <Link to={"/quehacer"} style={{textDecoration: "none"}}>
                                        <Typography sx={{
                                            fontSize: 22,
                                            width: "100%",
                                            color: PRIMARIO,
                                            fontWeight: 600
                                        }}>¿Que Hacer? </Typography>
                                    </Link>
                                </ButtonBase>
                            </Grid>


                            <Grid item container sx={{justifyContent: "center", marginTop: 4}}>
                                <ButtonBase sx={{width: "100%"}} onClick={() => cerrar()}>
                                    <Link to={"/reglas"} style={{textDecoration: "none"}}>
                                        <Typography sx={{
                                            fontSize: 22,
                                            width: "100%",
                                            color: PRIMARIO,
                                            fontWeight: 600
                                        }}>Reglas </Typography>
                                    </Link>
                                </ButtonBase>
                            </Grid>

                            <Grid item container sx={{justifyContent: "center", marginTop: 4}}>
                                <ButtonBase sx={{width: "100%"}} onClick={() => cerrar()}>
                                    <Link to={"/nosotros"} style={{textDecoration: "none"}}>
                                        <Typography sx={{
                                            fontSize: 22,
                                            width: "100%",
                                            color: PRIMARIO,
                                            fontWeight: 600
                                        }}>Nosotros </Typography>
                                    </Link>
                                </ButtonBase>
                            </Grid>

                            <Grid item container sx={{justifyContent: "center", marginTop: 4}}>
                                <ButtonBase sx={{width: "100%"}} onClick={() => cerrar()}>
                                    <Link to={"/contacto"} style={{textDecoration: "none"}}>
                                        <Typography sx={{
                                            fontSize: 22,
                                            width: "100%",
                                            color: PRIMARIO,
                                            fontWeight: 600
                                        }}>Contacto </Typography>
                                    </Link>
                                </ButtonBase>
                            </Grid>


                            <Grid container sx={{marginTop: "70vh"}}>

                            </Grid>


                        </Grid>

                    </Drawer>
                </>
                }


            </Grid>


        </Grid>
    )
}
