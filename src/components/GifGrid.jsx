import React/*, { useEffect, useState } */ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs( category );
    

    return (
        <>
            <p className='animate__animated animate__fadeIn'>{category}</p>

            { loading && <p className='animate__animated flash'>Cargando...</p>}

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