import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory'
import {GifGrid} from './components/GifGrid'

export const GifApp = () => {

    const [categories, setCategories] = useState(['Hola'])

    const handleAdd = ({ input }) => {
        setCategories([input, ...categories ])
    }

  return (
      <>
        <h2>Gif App</h2>
        <AddCategory handleAdd={handleAdd} />
        <hr />
        <ol>
            {categories.map(category => 
                <GifGrid key={category} category={category} />
            )}
        </ol>
      </>
  )
}
