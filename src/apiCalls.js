const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'

async function getMovies() {
    const response = await fetch(url)
    if(!response.ok) {
      throw new Error('Sorry, try again in a moment.')
    }
    return await response.json();
}

export {
  getMovies
}