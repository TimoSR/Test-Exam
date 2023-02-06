/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress



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

    /* ==== Test Created with Cypress Studio ==== */
    it('Test case: logout', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.divider').click();
        cy.get('.active > .menu > div.item').click();
        /* ==== End Cypress Studio ==== */
    });
})