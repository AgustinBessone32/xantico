/*************************************************
 * nombre:       Sumador
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/
import { React } from "react";
import {ButtonBase, Grid, Typography} from "@mui/material";
import {Add, Minus} from "iconsax-react";

const Sumador = (props) => {
    const {maximo = 1, numero, setNumero} = props;


    const sumar = () => {
        if (numero < maximo) {
            let num = numero;
            num++
            setNumero(num)
        }

    }

    const restar = () => {
        if (numero > 1) {
            let num = numero;
            num--
            setNumero(num)
        }

    }


    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{backgroundColor: "#fff", width: 60}}
        >


            <Grid item container lg={8} sm={12} xs={12} sx={{justifyContent: "center"}}>
                <Typography sx={{fontFamily: "Poppins", fontSize: 14, fontWeight: 500}}>{numero}</Typography>
            </Grid>

            <Grid item container lg={4} sm={12} xs={12} sx={{justifyContent: "flex-end"}}>
                <Grid item container sx={{justifyContent: "flex-end"}}>
                    <ButtonBase sx={{border: 1, padding: 0, borderColor: "#70707030"}}
                                onClick={() => sumar()}
                    >
                        <Add size={18}/>
                    </ButtonBase>
                </Grid>

                <Grid item container sx={{justifyContent: "flex-end"}}>
                    <ButtonBase
                        sx={{borderRight: 1, borderLeft: 1, borderBottom: 1, padding: 0, borderColor: "#70707030"}}
                        onClick={() => restar()}
                    >
                        <Minus size={18}/>
                    </ButtonBase>
                </Grid>
            </Grid>


        </Grid>
    );
};

export default Sumador;
