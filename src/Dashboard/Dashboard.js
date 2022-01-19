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
import {useMediaQuery} from '@mui/material';
import {CRoot} from '../App';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {theme} from "../Tema";


export const CDashboard = createContext();

const Dashboard = () => {
    const cData = useContext(CRoot);
    const [openDrawer, setOpenDrawer] = useState(false);
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const anchoDrawer = 240;
    const altoBarra = 60;


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
                        cerrarDrawer: cerrarDrawer,

                    }}
                >

                    <main
                        style={{
                            width: "100%",
                            //  paddingTop: matchUpMd ? 0 : 0,
                            //  paddingBottom: matchUpMd ? 0 : 0,
                            //  paddingLeft: matchUpMd ? 20 : 10,
                            //  paddingRight: matchUpMd ? 20 : 10,
                            //  marginLeft: openDrawer && matchUpMd ? anchoDrawer : '0px',
                            transition: theme.transitions.create('margin', {
                                easing: theme.transitions.easing.easeOut,
                                duration: theme.transitions.duration.enteringScreen,
                            }),
                        }}
                    >

                        <Routes>


                            <Route exact path="/" element={<h1> Dashboard </h1>}></Route>


                        </Routes>


                    </main>

                </CDashboard.Provider>
            </Router>
        </>
    );
};

export default Dashboard;