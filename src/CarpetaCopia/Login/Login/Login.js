/*************************************************
 * nombre:       Login
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       1 hora
 *************************************************/
import {React, useState} from "react";
import {Button, ButtonBase, Dialog, Grid, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import logo from '../../Recursos/logolargo.svg'
import fire from "../../../fire";
import {obtenerID} from "../../../FuncionesGlobales";
import {UsuarioDoc} from "../../Entidades/Usuario";
import {USUARIOS} from "../../../Constantes";


const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('')

    const loguear = () => {
        fire.auth().signInWithEmailAndPassword(email, pass).then((doc) => {
            let id = obtenerID(doc.user.email)
            fire.firestore().collection(USUARIOS).doc(id).get().then((doc) => {
                let usu = new UsuarioDoc(doc);
                //setUsuario(usu)
            }).catch((err) => {
                alert(err)
            })
        }).catch((err) =>{
            alert(err)
        })
    }

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >


        <Dialog open={true} maxWidth={"lg"} fullWidth >
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{height: "100vh",}}
            >

                <Grid item container lg={6} sm={12} xs={12} sx={{justifyContent: "center", marginTop: -6}}>
                    <img src={logo} width={"50%"}/>
                </Grid>

                <Grid item container lg={6} sm={12} xs={12} sx={{justifyContent: "center"}}>

                    <Grid
                        container
                        item
                        lg={6}
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >

                        <Grid item container sx={{justifyContent: "flex-end"}}>
                            <Link to={"/home"} style={{textDecoration: "none", color: "#000"}}

                            >
                                <Typography >Ir a home</Typography>
                            </Link>
                        </Grid>


                        <Grid item container sx={{marginTop: 8}}>
                            <TextField variant={"filled"} color={"secondary"} label={"Correo"} size={"small"}
                                       fullWidth
                                      value={email}
                                       onChange={(e) => setEmail(e.target.value)}

                            />
                        </Grid>

                        <Grid item container sx={{marginTop: 3}}>
                            <TextField variant={"filled"} color={"secondary"} label={"Constraseña"} size={"small"}
                                       fullWidth
                                       value={pass}
                                       onChange={(e) => setPass(e.target.value)}

                            />
                        </Grid>

                        <Grid item container sx={{marginTop: 2, justifyContent: "flex-end"}}>
                            <ButtonBase>
                                <Typography sx={{fontSize: 14}}>Olvide mi contraseña</Typography>
                            </ButtonBase>
                        </Grid>

                        <Grid item container sx={{justifyContent: "center", marginTop: 8}}>
                            <Button variant={"contained"} color={"secondary"}
                                    onClick={() => loguear()}
                            >ENTRAR</Button>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>
        </Dialog>

    </Grid>
  );
};
export default Login;
