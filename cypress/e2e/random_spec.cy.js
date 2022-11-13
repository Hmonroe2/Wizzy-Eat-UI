describe('random component', () => {
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

  it('As a user I should get a random restaurant when I click the random button', () => {
    cy.get(':nth-child(3) > .nav-button').click();
    cy.url().should('include', '/randomRestaurant');
  });

  it('As a user I should see a random restaurant card', () => {
    cy.get(':nth-child(3) > .nav-button').click();
    cy.url().should('include', '/randomRestaurant');
    cy.get('.random-img');
    cy.get('.random-name');
    cy.get('.ballon');
  });

  it('As a user, I should be able to click the card to go to the restaurant details', () => {
    cy.get(':nth-child(3) > .nav-button').click();
    cy.url().should('include', '/randomRestaurant');
    cy.get('.random-rest-container').click();
    cy.url().should('include', '/');
  });
});
