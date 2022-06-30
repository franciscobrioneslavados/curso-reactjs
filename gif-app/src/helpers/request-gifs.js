export const getGifs = async (category) => {
  const api_url = 'https://api.giphy.com/v1/gifs/search'
  const api_key = 'QJQ4OVaDoiHtD2TkCMlDpHhPWrK4aOTZ'
  const url = `${api_url}?api_key=${api_key}`
  const example = `${url}&q=${category}&limit=20`

  const resp = await fetch(example)
  const { data } = await resp.json()

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }))
  return gifs;
}
