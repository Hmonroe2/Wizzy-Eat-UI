describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/home');
    cy.intercept('GET', 'http://localhost:3001/api/v1/restaurants', {
      fixture: 'restaurants.json',
    }).as('restaurants');
  });

  it('As a user, I should see a nav bar with the title and picture.', () => {
    cy.visit('localhost:3000/home');
    cy.get('.nav-container');
    cy.get('.nav-container').get('.snoopy');
    cy.get('.nav-container').get('h1.nav-title > .nav-title');
  });
   it('As a user, I should see a Random button that takes me to a random restaurant', () => {
     cy.get('.nav-container').get(':nth-child(3) > .nav-button').click();
      cy.url().should('include', '/randomRestaurant');
   });

  it('As a user, I should see a Winter Park button that takes me to all Winter Park restaurants', () => {
    cy.get('.nav-container').get('.nav-container > :nth-child(4)').click();
    cy.url().should('include', '/home');
    cy.get('[href="/2"] > .card')
      .get('[href="/2"] > .card > :nth-child(3)')
      .contains('WINTER Test House');
    cy.get('[href="/2"] > .card > :nth-child(3)')
      .get('[href="/3"] > .card > :nth-child(3)')
      .contains('WINTER Test House');
  });

  it('As a user, I should see a Denver button that takes me to all Denver restaurants', () => {
    cy.get('.nav-container').get('.nav-container > :nth-child(5)').click();
    cy.url().should('include', '/home');
    cy.get('[href="/1"] > .card')
      .get('[href="/1"] > .card > :nth-child(3)')
      .contains('DENVER Test House');
    cy.get('[href="/4"] > .card > :nth-child(3)')
      .get('[href="/4"] > .card > :nth-child(3)')
      .contains('DENVER Test House');
  });
 it('As a user, I should see a Denver button that takes me to all restaurants', () => {
   cy.get('.nav-container').get('.nav-container > :nth-child(6)').click();
   cy.url().should('include', '/home');
   cy.get('[href="/2"] > .card')
     .get('[href="/2"] > .card > :nth-child(3)')
     .contains('WINTER Test House');
   cy.get('[href="/4"] > .card > :nth-child(3)')
     .get('[href="/4"] > .card > :nth-child(3)')
     .contains('DENVER Test House');
 });

});
