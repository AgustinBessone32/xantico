/*************************************************
 * nombre:       ContentImages
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/

import {Grid} from '@mui/material';
import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const ContentImages = (props) => {
    const {item} = props;
    return (

        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
        >
            {item !== undefined &&
            item.imagenes.map(img => {
                return (
                    <Grid item container lg={3} sm={12} xs={12} sx={{justifyContent: "center"}}>
                        <Zoom>
                            <LazyLoadImage src={img} alt={img.alt} width='90%' effect="blur"/>

                        </Zoom>
                    </Grid>
                )
            })
            }

        </Grid>
    )
}

export default ContentImages
