import { GiftItem } from './GiftItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category)

  return (
    <>
      <h4>{category}</h4>
      {isLoading && <h4>Cargando...</h4>}

      <div className="card-grid">
        {images.map((image) => (
          <GiftItem key={image.id} {...image} />
        ))}
      </div>
    </>
  )
}

GifGrid.prototype = {
  category: PropTypes.string.isRequired,
}
