/*************************************************
 * nombre:       CardAnuncio
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/
import {useState} from "react";
import {ButtonBase, Dialog, Grid, Typography} from "@mui/material";

import SDetallePedido from "../../SDetallePedido/SDetallePedido";

const CardVenta = (props) => {
    const {item} = props;
    const [open, setOpen] = useState(false);

    const abrir = () => {
        setOpen(true)
    }

    const cerrar = () => {
        setOpen(false);
    }

    return (
        <>
            <ButtonBase onClick={() => abrir()}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{backgroundColor: "#fff", padding: 2, borderRadius: 2, boxShadow: 2}}

                >


                    <Grid item lg={4} sm={4} xs={12}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >

                            <Grid item container>
                                <Typography sx={{fontWeight: 400}}>
                                    <span style={{fontWeight: 700}}>Fecha: </span>
                                    {item.transactionDateTime} </Typography>
                            </Grid>

                            <Grid item container>
                                <Typography sx={{fontWeight: 400}}>
                                    <span style={{fontWeight: 700}}>Refencia: </span>
                                    {item.referencePayco} </Typography>
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid item lg={4} sm={4} xs={12}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >

                            <Grid item container>
                                <Typography sx={{fontWeight: 400}}>
                                    <span style={{fontWeight: 700}}>Nombre: </span>
                                    {item.names + " " + item.lastnames} </Typography>
                            </Grid>

                            <Grid item container>
                                <Typography sx={{fontWeight: 400}}>
                                    <span style={{fontWeight: 700}}>Metodo de pago: </span>
                                    {item.paymentMethod} </Typography>
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid item lg={4} sm={4} xs={12}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >

                            <Grid item container>
                                <Typography sx={{fontWeight: 400}}>
                                    <span style={{fontWeight: 700}}>Valor: </span>
                                    {item.amount + " " + item.currency} </Typography>
                            </Grid>

                            <Grid item container>
                                <Typography sx={{fontWeight: 400}}>
                                    <span style={{fontWeight: 700}}>Estado: </span>
                                    {item.status} </Typography>
                            </Grid>

                        </Grid>

                    </Grid>


                </Grid>
            </ButtonBase>

            <Dialog open={open} onClose={cerrar}>


                <SDetallePedido id={item.description}/>
            </Dialog>
        </>
    );
};
export default CardVenta;
