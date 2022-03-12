import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
import PropTypes from 'prop-types'

export const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            { loading && <i className='animate__animated flash'>Cargando...</i>}

            <div className='card-grid'>
                {images.map( ( img, i ) =>
                    (
                        <GifGridItem key={i} {...img} />
                        )
                        )}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}