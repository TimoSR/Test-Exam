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
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('Test case 1: Email address: 320 characters', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.text > :nth-child(3)').click();
        cy.get(':nth-child(2) > input').clear();
        cy.get(':nth-child(2) > input').type('Email32');
        cy.get(':nth-child(3) > input').clear();
        cy.get(':nth-child(3) > input').type('Display Name');
        cy.get(':nth-child(4) > input').clear();
        cy.get(':nth-child(4) > input').type('averyveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryverylongemailaddress@example.com');
        cy.get(':nth-child(5) > input').clear();
        cy.get(':nth-child(5) > input').type('Pa$$w0rd');
        cy.get('.positive').click();
        /* ==== End Cypress Studio ==== */ 
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Test case 2: Username: 100 characters', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.text > :nth-child(3)').click();
        cy.get(':nth-child(2) > input').clear();
        cy.get(':nth-child(2) > input').type('Username10Username10Username10Username10Username10Username10Username10Username10Username10Username10');
        cy.get(':nth-child(3) > input').clear();
        cy.get(':nth-child(3) > input').type('Display Name');
        cy.get(':nth-child(4) > input').clear();
        cy.get(':nth-child(4) > input').type('username100@test.com');
        cy.get(':nth-child(5) > input').clear();
        cy.get(':nth-child(5) > input').type('Pa$$w0rd');
        cy.get('.positive').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Test case 3: Password: 32 characters', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.text > :nth-child(3)').click();
        cy.get(':nth-child(2) > input').clear();
        cy.get(':nth-child(2) > input').type('Char32');
        cy.get(':nth-child(3) > input').clear();
        cy.get(':nth-child(3) > input').type('Display Name');
        cy.get(':nth-child(4) > input').clear();
        cy.get(':nth-child(4) > input').type('char32@test.com');
        cy.get(':nth-child(5) > input').clear();
        cy.get(':nth-child(5) > input').type('Pa$$w0rdPa$$w0rdPa$$w0rdPa$$w0rd');
        cy.get('.positive').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Test case 4: Display name: 32 characters', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.text > :nth-child(3)').click();
        cy.get(':nth-child(2) > input').clear();
        cy.get(':nth-child(2) > input').type('Display32');
        cy.get(':nth-child(3) > input').clear();
        cy.get(':nth-child(3) > input').type('32CharsCharsCharsCharsCharsChars');
        cy.get(':nth-child(4) > input').clear();
        cy.get(':nth-child(4) > input').type('32char@example.com');
        cy.get(':nth-child(5) > input').clear();
        cy.get(':nth-child(5) > input').type('Pa$$w0rd');
        cy.get('.positive').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Register Cancel', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.text > :nth-child(3)').click();
        cy.get('.red').click();
        /* ==== End Cypress Studio ==== */
    });
})
