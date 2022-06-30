import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const App = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = (newCategory) => {
    console.log(newCategory);
    // setCategories([...categories, 'Valorant']); // 1era forma de manejar estados
    setCategories((cat) => [newCategory, ...cat]) // 2da forma de manejar estados
  }

  return (
    <>
      {/* Titulo */}
      <h1>Gif App</h1>

      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />

      {/* Litado de Gif */}

      <ol>
        {categories.map((element) => {
          return <li key={element}>{element}</li>
        })}
      </ol>
    </>
  )
}
