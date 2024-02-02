const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'

// function getMovies() {
//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Sorry pal, try again later!')
//       }
//       return response.json();
//     })
// }

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