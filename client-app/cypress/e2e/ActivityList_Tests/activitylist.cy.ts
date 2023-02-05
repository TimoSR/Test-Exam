/// <reference types="cypress" />   

describe('example website', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://localhost:7032/')
      cy.contains("Login").click();
      cy.get('.ui.form').within(() => {
        cy.get('[name="email"]').clear();
        cy.get('[name="email"]').type('bob@test.com');
        cy.get('[name="password"]').clear();
        cy.get('[name="password"]').type('Pa$$w0rd');
        cy.get('[type="submit"]').click();
      });
    })

    it('Testing Activity List', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(2) > .clearing > .teal').click();
      cy.get('.active').click();
      cy.get(':nth-child(4) > .clearing > .teal').click();
      cy.get('.active').click();
      cy.get(':nth-child(6) > .clearing > .teal').click();
      cy.get('.active').click();
      cy.get(':nth-child(6) > .clearing > .teal').click();
      cy.get('.active').click();
      cy.get(':nth-child(8) > .clearing > .teal').click();
      /* ==== End Cypress Studio ==== */
    })

  })
  