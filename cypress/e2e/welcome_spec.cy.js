describe('Welcome', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });
  it('As a user I should see a welcome page with a link to home and a picture', () => {
    cy.get('.welcome-img');
    cy.get('.welcome-title').contains('Wizzy Eats').click();
    cy.url().should('include', '/home');
  });
});
