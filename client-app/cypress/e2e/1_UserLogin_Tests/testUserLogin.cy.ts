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


  /*it('Auto Generated Transaction', () => {
    /!* ==== Generated with Cypress Studio ==== *!/
    cy.get('.text > :nth-child(2)').click();
    cy.get(':nth-child(2) > input').clear();
    cy.get(':nth-child(2) > input').type('bob@test.com');
    cy.get(':nth-child(3) > input').clear();
    cy.get(':nth-child(3) > input').type('Pa$$w0rd');
    cy.get('.positive').click();
    cy.contains("View").click();
    /!* ==== End Cypress Studio ==== *!/
  })*/

  /*it('Manual Implementation', () => {
    cy.contains("Login").click();
    cy.get('.ui.form [name="email"]').clear();
    cy.get('.ui.form [name="email"]').type("bob@test.com");
    cy.get('.ui.form [name="password"]').clear();
    cy.get('.ui.form [name="password"]').type("Pa$$w0rd");
    cy.get('.ui.form').submit();
    cy.contains("View").click();
  })*/

  it('The Happy Path', () => {
    cy.contains("Login").click();
    cy.get('.ui.form').within(() => {
      cy.get('[name="email"]').clear();
      cy.get('[name="email"]').type('bob@test.com');
      cy.get('[name="password"]').clear();
      cy.get('[name="password"]').type('Pa$$w0rd');
      cy.get('[type="submit"]').click();
    });
    cy.contains("View").click();
  })

  it('Test case 1: Email address: 6 characters', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.text > :nth-child(2)').click();
      cy.get(':nth-child(2) > input').clear();
      cy.get(':nth-child(2) > input').type('a@a.dk');
      cy.get(':nth-child(3) > input').clear();
      cy.get(':nth-child(3) > input').type('Pa$$w0rd');
      cy.get('.positive').click();
      /* ==== End Cypress Studio ==== */
  })

  it('Test case 2: Email address: 320 characters', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.text > :nth-child(2)').click();
      cy.get(':nth-child(2) > input').clear();
      cy.get(':nth-child(2) > input').type('averyveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryverylongemailaddress@example.com');
      cy.get(':nth-child(3) > input').clear();
      cy.get(':nth-child(3) > input').type('Pa$$w0rd');
      cy.get('.positive').click();
      /* ==== End Cypress Studio ==== */
  })

  it('Test case 3: Password: 8 characters', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.text > :nth-child(2)').click();
      cy.get(':nth-child(2) > input').clear();
      cy.get(':nth-child(2) > input').type('8char@test.com');
      cy.get(':nth-child(3) > input').clear();
      cy.get(':nth-child(3) > input').type('Pa$$w0rd');
      cy.get('.positive').click();
      /* ==== End Cypress Studio ==== */
  })

  it('Test case 4: Password: 32 characters', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.text > :nth-child(2)').click();
      cy.get(':nth-child(2) > input').clear();
      cy.get(':nth-child(2) > input').type('char32@test.com');
      cy.get(':nth-child(3) > input').clear();
      cy.get(':nth-child(3) > input').type('Pa$$w0rdPa$$w0rdPa$$w0rdPa$$w0rd');
      cy.get('.positive').click();
      /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Login cancel', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.text > :nth-child(2)').click();
    cy.get('.red').click();
    /* ==== End Cypress Studio ==== */
  });
})
  