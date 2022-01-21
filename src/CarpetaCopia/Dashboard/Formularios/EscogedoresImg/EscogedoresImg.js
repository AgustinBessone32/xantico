/*************************************************
 * nombre:       EscogedoresImg
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/
import {createRef, useState} from "react";
import {Box, Button, ButtonBase, Dialog, Grid, LinearProgress} from "@mui/material";
import imgdefoult from '../../../Recursos/imgVacia.svg';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import imageCompression from "browser-image-compression";
import fire from "../../../fire";



export const EscogedorImg = (props) => {
    const {carpeta = "default", valor, setValor, x=200, y=200, xc=1, yc=1, calidad=0.6 } = props;
    const hiddenFileInput = createRef(null);
    const [cargando, setCargando] = useState(false);
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState('');
    const [cropper, setCropper] = useState("");


    const abrir = () => {
        setOpen(true)
    }

    const cerrar = () => {
        setOpen(false)

    }

    const onChange = (e) => {
        if (!cargando) {
            // e.preventDefault();
            let files;
            const validImageTypes = ["image/jpeg", "image/png"];
            if (e.dataTransfer) {
                files = e.dataTransfer.files;
            } else if (e.target) {
                files = e.target.files;
            }

            if (files[0] !== undefined) {
                const fileType = files[0]["type"];
                if (validImageTypes.includes(fileType)) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        setImage(reader.result);
                        abrir()
                    };
                    reader.readAsDataURL(files[0]);
                } else {
                    alert("formato de archivo no soportado");
                }
            }
        } else {
            alert("Hay una imagen procesandoce ahora mismo");
        }
    };

    async function comprimir(url) {
        const imageFile = url;
        const options = {
            maxSizeMB: calidad,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
        };
        try {
            const compressedFile = await imageCompression(imageFile, options);

            await subir(compressedFile);
        } catch (error) {
            console.log(error);
            alert("Formato de archivo no soportado");
        }
    }

    const getCropData = () => {
        if (typeof cropper !== "undefined") {
            setCargando(true);
            cerrar()
            cropper.getCroppedCanvas().toBlob(function (blob) {
                comprimir(blob);
            });
        }
    };

    const clickBoton = (e) => {
        e.preventDefault();

        hiddenFileInput.current.click();
    };

    const subir = (crop) => {
        let nom = new Date().getTime();
        const uploadTask = fire

            .storage()
            .ref(carpeta + `/` + nom)
            .put(crop);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
            },
            (error) => {
                console.log(error);
            },
            () => {
                fire
                    .storage()
                    .ref(carpeta + "/" + nom)
                    .getDownloadURL()
                    .then((url) => {
                        setValor(url)
                        setImage('');
                        setCargando(false);
                    });
            }
        );
    };


    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
            >
                <input
                    type="file"
                    onChange={onChange}
                    ref={hiddenFileInput}
                    style={{display: "none"}}
                />
                <Grid item container sx={{justifyContent: "center"}}>
                    <ButtonBase onClick={(e) => clickBoton(e)}>

                        <img src={valor === '' ? imgdefoult : valor} width={x} height={y}
                             style={{backgroundColor: "#7A7A7A"}}/>

                    </ButtonBase>
                </Grid>

                <Grid item container sx={{justifyContent: "center"}}>
                    <Box sx={{width: x,}} display={cargando ? "block" : "none"}>
                        <LinearProgress color={"secondary"} sx={{width: x}}/>
                    </Box>
                </Grid>


            </Grid>

            <Dialog open={open} fullWidth maxWidth={"xs"} onClose={cerrar}>

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    sx={{padding: 2}}
                >
                    <Grid item container sx={{justifyContent: "center"}}>


                        <Cropper
                            style={{
                                height: 300,
                                width: 300,
                                marginTop: 20,
                                marginBottom: 20,
                            }}
                            src={image}
                            viewMode={2}
                            aspectRatio={xc / yc}
                            guides={true}
                            minCropBoxHeight={10}
                            minCropBoxWidth={10}
                            background={true}
                            responsive={true}
                            autoCropArea={0.5}
                            modal={false}
                            checkOrientation={false}
                            onInitialized={(instance) => {
                                setCropper(instance);
                            }}
                        />

                    </Grid>

                    <Grid item container sx={{justifyContent: "center"}}>


                        <Button variant={"contained"} color={"secondary"} size={"small"}
                                onClick={() => getCropData()}
                        >cortar y Subir</Button>
                    </Grid>

                </Grid>

            </Dialog>

        </>
    );
};




