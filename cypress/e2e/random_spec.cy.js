describe('empty spec', () => {
  beforeEach(() => {
      cy.visit('localhost:3000/home');
      cy.intercept('GET', 'http://localhost:3001/api/v1/restaurants', {
        fixture: 'restaurants.json',
      }).as('restaurants')
  })
  
  it('As a user I should get a random restaurant when I click the random button', () => {
    cy.get(':nth-child(3) > .nav-button').click();
    cy.url().should('include', '/randomRestaurant')
  })

  it('As a user I should see a random restaurant card', () => {
     cy.get(':nth-child(3) > .nav-button').click();
    cy.url().should('include', '/randomRestaurant');
    cy.get('.random-img')
    cy.get('.random-name')
    cy.get('.ballon')
  })




})