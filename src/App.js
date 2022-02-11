/*************************************************
 * nombre:       App
 * descripcion:
 *
 * librerias:  mui.com, tabler icons, firebase,
 *             react router dom, react-helmet,
 * react-intersection-observer, framer-motion,
 * (react-elastic-carousel, styled-components),
 * react-medium-image-zoom,
 * iconsax-react
 * props:
 * tiempo        10 min
 *************************************************/

import { createContext, useEffect, useState } from 'react';
import { Grid } from "@mui/material";
import { Helmet } from "react-helmet";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { obtenerID } from "./FuncionesGlobales";
import { UsuarioDoc } from "./Entidades/Usuario";

import {app} from "./fire";
import {USUARIOS} from "./Constantes";
import Pagina from "./Pagina/Pagina";

export const CRoot = createContext();

function App() {
  const [usuario, setUsuario] = useState(null);


  useEffect(() => {



    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        let id = obtenerID(user.email);
        let fire = getFirestore(app)
        const docRef = doc(fire, USUARIOS, id);
        getDoc(docRef).then((doc) =>{
          let usu = new UsuarioDoc(doc);
          setUsuario(usu)
        })


      } else {
        setUsuario(null)
      }

    });



  }, [])



  return (
    <>
      <Helmet>
        <title>{"Xantico"} </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Helmet>


      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"


      >
        {usuario === null ?
          <Pagina />

          :

          <CRoot.Provider value={{ usuario: usuario, setUsuario: setUsuario }}>
            {/* <Dashboard /> */}
            <h1>Hola</h1>
          </CRoot.Provider>}


      </Grid>
    </>
  );
}

export default App;
