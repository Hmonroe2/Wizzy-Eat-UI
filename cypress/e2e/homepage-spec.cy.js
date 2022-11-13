describe('Homepage', () => {
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
  it('As a user I should see multiple cards on the home page', () => {
    cy.get('[href="/1"] > .card')
    cy.get('[href="/2"] > .card');
    cy.get('[href="/3"] > .card');
    cy.get('[href="/4"] > .card');

  });
  it('As a user the cards should contain an image, name, phone, address', () => {
    cy.get('[href="/1"] > .card').get('.img-container > .card-img');
    cy.get('[href="/1"] > .card > :nth-child(2)').contains('Name');
    cy.get('[href="/1"] > .card > :nth-child(3)').contains('DENVER Test House')
    cy.get('[href="/1"] > .card > :nth-child(4)').contains('Phone')
    cy.get('[href="/1"] > .card > :nth-child(5)').contains('(303) 790-7453');
    cy.get('[href="/1"] > .card > :nth-child(6)').contains('Address')
    cy.get('[href="/1"] > .card > :nth-child(7)').contains('8437 Park Meadows Center Dr Lone Tree, CO 80124');
  })

  it('As a user if I put in a bad url I should see a page with a link to home', () => {
    cy.visit('localhost:3000/doughnuts');
    cy.get('.error-text').contains('There was an Error. Please return to');
    cy.get('a').click();
    cy.url().should('include', '/home');
  });
});
