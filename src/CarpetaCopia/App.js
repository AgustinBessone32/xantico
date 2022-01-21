import {Grid} from "@mui/material";
import {createContext, lazy, Suspense, useEffect, useState} from "react";
import Dashboard from "./Dashboard/Dashboard";
import Carga from "./Carga";
import fire from "./fire";
import {ANUNCIOS, USUARIOS} from "./Constantes";
import {obtenerID} from "./FuncionesGlobales";
import {UsuarioDoc} from "./Entidades/Usuario";

export const CRoot = createContext();

function App() {
    const [usuario, setUsuario] = useState('');

    const HomeLoad = lazy(() => import("./Home/Home"))

    useEffect(() => {

        console.log(fire.auth().onAuthStateChanged((doc) => {
            if (doc !== null) {
                  let email = fire.auth().currentUser.email;
                  let id = obtenerID(email);
                  fire.firestore().collection(USUARIOS).doc(id).get().then((doc) => {
                      let usu = new UsuarioDoc(doc);
                      setUsuario(usu)
                     // cerrarSplash()
                  }).catch((err) => {
                      alert(err)
                  })
            }
        }))



    }, [])

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >




            {usuario === '' ?
                <Suspense fallback={<Carga/>}>
                    <HomeLoad/>
                </Suspense>

                :

                <CRoot.Provider value={{usuario: usuario, setUsuario: setUsuario}}>
                <Dashboard/>
                </CRoot.Provider>}


        </Grid>
    );
}


export default App;


