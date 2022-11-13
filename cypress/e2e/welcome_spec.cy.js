describe('Welcome', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });
  it('As a user I should see a welcome page with a link to home and a picture', () => {
    cy.get('.welcome-img');
    cy.get('.welcome-container > :nth-child(1)').contains('Welcome to');
    cy.get('.welcome-title').contains('Wizzy Eats')
    cy.get('.welcome-container > :nth-child(3)').contains('An app for the indecisive');
    cy.get('.click-me').contains('Click Me to get started').click()
    cy.url().should('include', '/home')
  });
});
