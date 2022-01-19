/*************************************************
 * nombre:       Camas
 * descripcion:
 *
 * librerias:  libreria extra
 * props:
 * tiempo:       10 min
 *************************************************/
import React from 'react'
import ContentHabitacion from './ContentHabitacion/ContentHabitacion'
import ListadoServicios from './ListadoServicios/ListadoServicios'
import CardReseñas from './CardReseñas/CardReseñas'
import ButtonReservar from './ContentHabitacion/Components/ButtonReservar'

const Camas = () => {
    return (

        <>
            <ContentHabitacion inverse={true} />
            <ContentHabitacion inverse={false} />

            <ListadoServicios />

            <CardReseñas />

            <ButtonReservar />

        </>


    )
}

export default Camas
