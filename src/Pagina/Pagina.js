/*************************************************
 * nombre:       Pagina
 * descripcion:  Componente donde estara el router
 *               de la pagina
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/
import { React } from "react";
import { Grid } from "@mui/material";
import { AppBar } from "../Dashboard/Components/AppBar";
import { Footer } from "../Dashboard/Components/Footer";
import Home from "./Home/Home";
import Nosotros from "./Nosotros/Nosotros";
import Camas from "./Camas/Camas";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QueHacer from "./QueHacer/QueHacer";
import Reglas from "./Reglas/Reglas";
import Contacto from "./Contacto/Contacto";
import Login from "../Dashboard/Dashboard/Login/Login/Login";

const Pagina = () => {

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >

            <Router>

                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item container>

                        <AppBar />


                    </Grid>

                </Grid>


                <Routes>


                    <Route exact path="/" element={<Home />}></Route>

                    <Route exact path="/nosotros" element={<Nosotros />}></Route>

                    <Route exact path="/camas" element={<Camas />}></Route>

                    <Route exact path="/quehacer" element={<QueHacer />}></Route>

                    <Route exact path="/reglas" element={<Reglas />}></Route>

                    <Route exact path="/contacto" element={<Contacto />}></Route>

                    {/* aqui aumente esto */}
                    <Route exact path="/admin" element={<Login />}></Route>



                </Routes>


                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item container>

                        <Footer />


                    </Grid>

                </Grid>

            </Router>

        </Grid>
    );
};
export default Pagina;
