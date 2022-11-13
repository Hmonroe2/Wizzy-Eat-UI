describe('NavBar', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/home');
    cy.intercept(
      'GET',
      'https://wizzy-eats-api.vercel.app/api/v1/restaurants',
      {
        fixture: 'restaurants.json',
      }
    ).as('restaurants');
  });

  it('As a user, I should see a nav bar with the title and picture.', () => {
    cy.get('.nav-container');
    cy.get('.nav-container').get('.snoopy');
    cy.get('.nav-container').get('h1.nav-title > .nav-title');
  });
  it('As a user, I should see a Random button that takes me to a random restaurant', () => {
    cy.get('.nav-container').get('.nav-container > :nth-child(3)').click();
    cy.url().should('include', '/randomRestaurant');
  });
  it('As a user, I should see a Winter park button that takes me tto all the winter park restaurants', () => {
    cy.get('.nav-container').get('.nav-container > :nth-child(4)').click();
    cy.url().should('include', '/home');
    cy.get('[href="/2"] > .card');
  });
  it('As a user, I should see a Denver park button that takes me to all the denver restaurants', () => {
    cy.get('.nav-container').get('.nav-container > :nth-child(5)').click();
    cy.url().should('include', '/home');
    cy.get('[href="/1"] > .card');
  });
  it('As a user, I should see a Home button that takes me to all the restaurants', () => {
    cy.get('.nav-container').get('.nav-container > :nth-child(6)').click();
    cy.url().should('include', '/home');
  });
});
