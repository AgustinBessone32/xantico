/*******************************************************
 * Nombre:    Dashboard
 * Resumen:   Panel de control donde se mostrara las
 *            secciones deacuerdo a user.credenciales
 * (array de strings)
 * Props: (por context)
 *  usuario -> custom object usuario
 *  proyecto -> objeto que contiene los datos del
 *              proyecto que se mostraran
 * Librerias:
 * Autor:    Luis Rosero
 * Tiempo :  4 hora
 ********************************************************/
import {createContext, React, useContext, useState} from 'react';
import {Drawer, Grid, useMediaQuery} from '@mui/material';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AppBarCustom from "./Componentes/AppBarCustom";
import MenuLateral from "./Componentes/MenuLateral";
import {CRoot} from "../App";
import {theme} from "../Tema";
import FObra from "./Formularios/FObra";
import SObrasDefinitivas from "./SObrasDefinitivas/SObrasDefinitivas";
import SObrasPrevias from "./SObrasPrevias/SObrasPrevias";




export const CDashboard = createContext();

const Dashboard = () => {
    const cData = useContext(CRoot);
    const [openDrawer, setOpenDrawer] = useState(false);
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const anchoDrawer = 240;
    const altoBarra = 60;
    //////////////////////////////////////////////////////////////
    const [artistaDetalle, setArtistaDetalle] = useState('');
    const [obraDetalle, setObraDetalle] = useState('');


    const abrirDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    const cerrarDrawer = () => {
        setOpenDrawer(false);
    };


    return (
        <>

            <Router>
                <CDashboard.Provider
                    value={{
                        usuario: cData.usuario,
                        setUsuario: cData.setUsuario,
                        abrir: abrirDrawer,
                        openDrawer: openDrawer,
                        setAdmin: cData.setAdmin,
                        artistaDetalle: artistaDetalle,
                        setArtistaDetalle: setArtistaDetalle,
                        obraDetalle: obraDetalle,
                        setObraDetalle: setObraDetalle,
                    }}
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"

                    >
                        <Grid item container>

                            <AppBarCustom alto={altoBarra}/>


                        </Grid>

                        <Drawer
                            variant={matchUpMd ? 'persistent' : 'temporary'}
                            anchor="left"
                            open={openDrawer}
                            onClose={cerrarDrawer}
                            color="inherit"
                            PaperProps={{
                                style: {
                                    width: anchoDrawer,
                                    border: 'none',
                                    paddingTop: matchUpMd ? altoBarra : '0px',
                                    zIndex: 100,
                                },
                            }}
                        >

                            <MenuLateral/>


                        </Drawer>
                    </Grid>
                    <main
                        style={{
                            width: "100%",
                            backgroundColor: "#EEF1F2",
                            minHeight: "91vh",
                            paddingTop: matchUpMd ? 0 : 0,
                            paddingBottom: matchUpMd ? 0 : 0,
                            paddingLeft: matchUpMd ? 20 : 10,
                            paddingRight: matchUpMd ? 20 : 10,
                            marginLeft: openDrawer && matchUpMd ? anchoDrawer : '0px',
                            transition: theme.transitions.create('margin', {
                                easing: theme.transitions.easing.easeOut,
                                duration: theme.transitions.duration.enteringScreen,
                            }),
                        }}
                    >


                        <Routes>


                            <Route path="/admin/Artistas" element={<SArtistas/>}>

                            </Route>

                            <Route path="/admin/detalleartista/:id" element={<FArtista/>}>

                            </Route>

                            <Route path="/admin/ObrasDefinitivas" element={<SObrasDefinitivas/>}>

                            </Route>

                            <Route path="/admin/ObrasPrevias" element={<SObrasPrevias/>}>

                            </Route>

                            <Route path="/admin/detalleobra/:id" element={<FObra/>}>

                            </Route>

                            <Route path="/admin/Anuncios" element={<SAnuncios/>}>

                            </Route>

                            <Route path={"/admin/detalleanuncio/:id"}  element={<FAnuncio/>} >


                            </Route>

                            <Route path={"/admin/ventas"}  element={<SVentas/>} >


                            </Route>




                        </Routes>


                    </main>
                </CDashboard.Provider>
            </Router>

        </>
    );
};

export default Dashboard;

