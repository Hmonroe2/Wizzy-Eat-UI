describe('Details', () => {
  beforeEach(() => {

    cy.visit('http://localhost:3000/1')
    cy.intercept(
      'GET',
      'https://wizzy-eats-api.vercel.app/api/v1/restaurants/1',
      {
        statusCode: 201,

        fixture: 'restaurant.json',
      }
    ).as('restaurant');
  });
  it('As a user, I should be able to click on a card and see its details', () => {
    cy.visit('localhost:3000/home');
    cy.intercept(
      'GET',
      'https://wizzy-eats-api.vercel.app/api/v1/restaurants',
      {
        fixture: 'restaurants.json',
      }
    ).as('restaurants');
    cy.get('[href="/1"] > .card').click();
    cy.url().should('include', '/1')
  })
  it('As a user, I should see a detail card for a restaurant', () => {
    cy.get('.detail-container')
    cy.get('.detail-img');
    cy.get('.detail-container > :nth-child(2)').contains('Name');
    cy.get('.detail-container > :nth-child(3)').contains('DENVER Test House');
    cy.get('.detail-container > :nth-child(4)').contains('Address');
    cy.get('.detail-container > :nth-child(5)').contains(
      '8437 Park Meadows Center Dr Lone Tree, CO 80124'
    );
    cy.get('.detail-container > :nth-child(6)').contains('Phone');
    cy.get('.detail-container > :nth-child(7)').contains('(303) 790-7453');
    cy.get('.detail-container > :nth-child(8)').contains('Website');
  });
});
