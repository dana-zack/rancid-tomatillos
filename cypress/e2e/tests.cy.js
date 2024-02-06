describe('Home page user flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: "movies"
    }).intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      fixture: "first-single-movie"
    }).intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', {
      statusCode: 200,
      fixture: "first-movie-media"
    }).intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495', {
      statusCode: 200,
      fixture: "last-single-movie"
    }).intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495/videos', {
      statusCode: 200,
      fixture: "last-movie-media"
    })
    .visit('http://localhost:3000/')
  });
  
  it('Should be able to visit the home page & render expected elements', () => {
    cy.contains('h1', 'Rancid Tomatillos')
    cy.get('.home-button').contains('Home')
    cy.get('.movie-card').first().contains('h3', 'Black Adam')
    cy.get('.movie-card').first().find('img').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg")
    cy.get('.movie-card').last().contains('h3', 'Woman King')
    cy.get('.movie-card').last().find('img').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg")
  })

  it('Should be able to select a movie & render only the details of that movie', () => {
    cy.get('.movie-card').first().click()
    cy.get('.poster-and-title-container').contains('h3', 'Black Adam')
    cy.get('.backdrop').find('img').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg")
    cy.get('.overview').contains('Nearly 5,000 years after he')
    cy.get('.movie-cards-container').should("not.exist")
  })

  it('Should be able to select a different movie & render only the details of that movie', () => {
    cy.get(".movie-card").last().click()
    cy.get('.poster-and-title-container').contains('h3', 'Woman King')
    cy.get('.backdrop').find('img').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg")
    cy.get('.overview').contains('The story of the Agojie')
    cy.get('.movie-cards-container').should("not.exist")
  })

  it('Should be able to return to the home page from the movie details page', () => {
    cy.get('.movie-card').first().click()
    cy.get('.home-button').click()
    cy.get('.movie-cards-container').should('exist')
    cy.get('.movie-details-container').should('not.exist')
  })

  it('Should notify the user if the API fails to fetch movies', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500
    })
    cy.get('p').contains('Sorry, try again in a moment.')
  })

  it('Should notify the user if the API fails to fetch single movie details', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 500
    })
    cy.get('.movie-card').first().click()
    cy.get('p').contains('Sorry, try again in a moment.')
  })

  it('Should notify the user if the API fails to fetch single movie media', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', {
      statusCode: 500
    })
    cy.get('.movie-card').first().click()
    cy.get('.movie-details-container').find('.media').contains('p', 'Sorry, failed to load media!')
  })
})
