/*******************************************************
 * Nombre:    ItemMenu
 * Resumen:   Items de menu lateral, contiene un menu de
 *            iconos traidos desde componentes contantes
 * Props:
 *  credencial -> String de nombre de credencial a mostrar
 * Librerias:
 * Autor:     Luis Rosero
 * Tiempo :   10 min
 ********************************************************/
import {React, useEffect, useState} from 'react';
import {Grid, Typography} from '@mui/material';
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {ClipboardText, ClipboardTick, Profile2User, SliderHorizontal} from "iconsax-react";
import {PRIMARIO} from "../../Colores";


const useStyles = makeStyles((theme) => ({
    boton: {
        transition: 'all .2s ease-in-out',
        '&:hover': {
            background: "#23232380",
            boxShadow: 6,
            color: "#fff",
            "& $icon": {
                color: "#fff"
            }
        }

        ,
    },
    icon: {
        color: "#23232380",
    },

    iconActivo: {
        color: "#fff",
    },

    link: {
        textDecoration: "none"
    }
}));
const ItemMenu = (props) => {
    const {credencial, index, escogido, setEscogido, link} = props;
    const [activo, setActivo] = useState(false);

    const classes = useStyles();
    useEffect(() => {
        if (index === escogido) {
            setActivo(true);
        } else {
            setActivo(false);
        }
    }, [escogido]);


    const getIcon = (cred) => {

        switch (cred) {
            case "Artistas":
                return <Profile2User color={PRIMARIO}/>
            case "Obras Definitivas":
                return <ClipboardTick color={PRIMARIO}/>
            case "Obras Previas":
                return <ClipboardText color={PRIMARIO}/>
            case "Anuncios":
                return <SliderHorizontal color={PRIMARIO}/>
        }
    }


    return (
        <Link to={link} className={classes.link}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{
                    cursor: 'pointer',
                    paddingY: 1,
                    paddingX: 2,
                    paddingTop: 1,
                    borderRadius: 2,
                    width: 300,
                    backgroundColor: activo ? "#232323" : 'none',
                }}
                className={classes.boton}
                onClick={() => setEscogido(index)}
            >
                <Grid item>

                    {getIcon(credencial)}

                </Grid>

                <Grid item sx={{marginLeft: 2}}>
                    <Typography
                        sx={{
                            marginLeft: 0,
                            fontWeight: 600,
                            fontSize: 16
                        }}
                        className={activo ? classes.iconActivo : classes.icon}
                    >
                        {credencial}
                    </Typography>
                </Grid>
            </Grid>

        </Link>
    );
};

export default ItemMenu;
