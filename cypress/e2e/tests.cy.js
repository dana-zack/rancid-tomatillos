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
    cy.contains('h1', 'RANCID TOMATILLOS')
    cy.get('#nav-home').contains('Home')
    cy.get('#nav-movies').contains('All Movies')
    cy.get('.carousel-container').should("exist")
    cy.get('#first-el').contains('h2', 'The Woman King')
    cy.get('#first-el').find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg')
    cy.get('#last-el').last().contains('h2', 'Smile')
    cy.get('#last-el').find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//olPXihyFeeNvnaD6IOBltgIV1FU.jpg')
    cy.get('.decide-title').contains(`Can't decide what to watch?`)
    cy.get('.picker-button').contains('Let us pick!')
  })

  it('Should be able to visit the home page, pick a random movie, & view those movie details', () => {
    cy.get('.picker-button').click()
    cy.get('.picked-movie').find('img').should('have.attr', 'alt')
    cy.get('.picked-movie').click()
    cy.get('.movie-details-container').should('exist')
    cy.get('.carousel-container').should("not.exist")
  })
  
  it('Should be able to visit the movies page & render expected elements', () => {
    cy.get('#nav-movies').click()
    cy.url().should('eq', 'http://localhost:3000/movies')
    cy.get('.movie-card').first().find('img').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg")
    cy.get('.movie-card').last().find('img').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg")
  })

  it('Should be able to select a movie from the movies page & render only the details of that movie', () => {
    cy.get('#nav-movies').click()
    cy.get('.movie-card').first().click()
    cy.url().should('eq', 'http://localhost:3000/movies/436270')
    cy.get('.poster-and-title-container').contains('h3', 'Black Adam')
    cy.get('.backdrop').find('img').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg")
    cy.get('.overview').contains('Nearly 5,000 years after he')
    cy.get('.movie-cards-container').should("not.exist")
  })

  it('Should be able to select a different movie from the movies page & render only the details of that movie', () => {
    cy.get('#nav-movies').click()
    cy.get(".movie-card").last().click()
    cy.url().should('eq', 'http://localhost:3000/movies/724495')
    cy.get('.poster-and-title-container').contains('h3', 'Woman King')
    cy.get('.backdrop').find('img').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg")
    cy.get('.overview').contains('The story of the Agojie')
    cy.get('.movie-cards-container').should("not.exist")
  })

  it('Should be able to return to the home page from the movie details page using the home button', () => {
    cy.get('#nav-movies').click()
    cy.get('.movie-card').first().click()
    cy.get('#nav-home').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.carousel-container').should("exist")
    cy.get('.movie-details-container').should('not.exist')
    cy.get('.movie-cards-container').should("not.exist")
  })

  it('Should be able to use the forward & backward navigation buttons to navigate forward & backward', () => {
    cy.get('#nav-movies').click()
    cy.go('back')
    cy.url().should('eq', 'http://localhost:3000/')
    cy.go('forward')
    cy.url().should('eq', 'http://localhost:3000/movies')
  })

  it('Should notify the user if the API fails to fetch movies', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500
    })
    cy.get('#nav-movies').click()
    cy.get('p').contains('Sorry, try again in a moment.')
  })

  it('Should notify the user if the API fails to fetch single movie details', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 500
    })
    cy.get('#nav-movies').click()
    cy.get('.movie-card').first().click()
    cy.get('p').contains('Sorry, try again in a moment.')
  })

  it('Should notify the user if the API fails to fetch single movie media', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', {
      statusCode: 500
    })
    cy.get('#nav-movies').click()
    cy.get('.movie-card').first().click()
    cy.get('.movie-details-container').find('.media').contains('p', 'Sorry, failed to load media!')
  })
})
