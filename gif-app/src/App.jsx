import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const App = () => {
  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return

    // setCategories([...categories, 'Valorant']); // 1era forma de manejar estados
    setCategories((cat) => [newCategory, ...cat]) // 2da forma de manejar estados
  }

  return (
    <>
      <h1>Gif App</h1>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}
