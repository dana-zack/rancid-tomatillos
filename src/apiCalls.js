const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movis'

async function fetchMovies() {
    const response = await fetch(`${url}`)
    if(!response.ok) {
      throw new Error('Sorry, try again in a moment.')
    }
    return await response.json();
}

async function fetchSingleMovie(id) {
  const response = await fetch(`${url}/${id}`)
  if(!response.ok) {
    throw new Error('Sorry, try again in a moment.')
  }
  return await response.json();
}

async function fetchSingleMovieVids(id) {
  const response = await fetch(`${url}/${id}/videos`)
  if(!response.ok) {
    throw new Error('Sorry, failed to load media!')
  }
  return await response.json();
}

export {
  fetchMovies,
  fetchSingleMovie,
  fetchSingleMovieVids
}