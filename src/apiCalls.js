async function fetchMovies() {
    const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    if(!response.ok) {
      throw new Error('Sorry, try again in a moment.')
    }
    return await response.json();
}

async function fetchSingleMovie(id) {
  const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  if(!response.ok) {
    throw new Error('Sorry, try again in a moment.')
  }
  return await response.json();
}

export {
  fetchMovies,
  fetchSingleMovie
}