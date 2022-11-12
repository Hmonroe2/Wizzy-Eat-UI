
describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/home');
    cy.intercept('GET', 'http://localhost:3001/api/v1/restaurants', {
      fixture: 'restaurants.json',
    }).as('restaurants');
  });

  it('As a user, I should see a nav bar with the title and picture.', () => {
     cy.visit('localhost:3000/home');
    cy.get('.nav-container')
    cy.get('.nav-container').get('.snoopy')
    cy.get('.nav-container').get('h1.nav-title > .nav-title')
  });
  it('As a user, I should see a Random button that takes me to a random restaurant', () => {
    cy.visit()
    cy.get('.nav-container').get('.nav-container > :nth-child(3)').click()
    cy.url().should('include', '/randomRestaurant')
  });
  //  it('As a user, I should see a Random button that takes me to a random restaurant', () => {
  //    cy.get('.nav-container').get('.nav-container > :nth-child(4)').click();
  //    cy.url().should('include', '/home');
  //  });
  //  it('As a user, I should see a Random button that takes me to a random restaurant', () => {
  //    cy.get('.nav-container').get('.nav-container > :nth-child(5)').click();
  //    cy.url().should('include', '/home');
  //  });
});
