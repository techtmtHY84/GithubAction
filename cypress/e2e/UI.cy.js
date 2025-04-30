describe('UI Test', () => {
  it('should login with correct credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/secure');
    cy.get('.flash.success').should('contain', 'You logged into a secure area!');
  })

    it('should not login with incorrect credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('wronguser');
    cy.get('#password').type('wrongpass');
    cy.get('button[type="submit"]').click();

    cy.get('.flash.error').should('contain', 'Your username is invalid!');
    cy.url().should('include', '/login');
  });
})