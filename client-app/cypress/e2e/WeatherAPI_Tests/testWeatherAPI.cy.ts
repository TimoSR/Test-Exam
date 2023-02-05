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

  it('Testing Copenhagen', () => {
    cy.get('[href="/weather"]').click();
    cy.get('#react-select-2-input').clear();
    cy.get('#react-select-2-input').type('Copenhagen');
    cy.get('#react-select-2-option-0').click();
    cy.get('.city').should('have.text', 'Copenhagen, DK');
    /* Testing if temperatures are visible */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#accordion__heading-\\:r0\\: > .daily-item > .min-max').should('be.visible');
    cy.get('#accordion__heading-\\:r1\\: > .daily-item > .min-max').should('be.visible');
    cy.get('#accordion__heading-\\:r2\\: > .daily-item > .min-max').should('be.visible');
    cy.get('#accordion__heading-\\:r3\\: > .daily-item > .min-max').should('be.visible');
    cy.get('#accordion__heading-\\:r4\\: > .daily-item > .min-max').should('be.visible');
    cy.get('#accordion__heading-\\:r5\\: > .daily-item > .min-max').should('be.visible');
    cy.get('#accordion__heading-\\:r6\\: > .daily-item > .min-max').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })

  it('Testing Stockholm', () => {
    cy.get('[href="/weather"]').click();
    cy.get('#react-select-2-input').clear();
    cy.get('#react-select-2-input').type('Stockholm');
    cy.get('#react-select-2-option-0').click();
    cy.get('.city').should('have.text', 'Stockholm, SE');
    /* Testing if temperatures are visible */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#accordion__heading-\\:r0\\: > .daily-item > .min-max').should('be.visible');
    cy.get('#accordion__heading-\\:r1\\: > .daily-item > .min-max').should('be.visible');
    cy.get('#accordion__heading-\\:r2\\: > .daily-item > .min-max').should('be.visible');
    cy.get('#accordion__heading-\\:r3\\: > .daily-item > .min-max').should('be.visible');
    cy.get('#accordion__heading-\\:r4\\: > .daily-item > .min-max').should('be.visible');
    cy.get('#accordion__heading-\\:r5\\: > .daily-item > .min-max').should('be.visible');
    cy.get('#accordion__heading-\\:r6\\: > .daily-item > .min-max').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })

  it('Testing Berlin', () => {
    cy.get('[href="/weather"]').click();
    cy.get('#react-select-2-input').clear();
    cy.get('#react-select-2-input').type('Berlin');
    cy.get('#react-select-2-option-0').click();
    cy.get('.city').should('have.text', 'Berlin, DE');
    /* Testing if temperatures are visible */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#accordion__heading-\\:r0\\: > .daily-item > .min-max').should('be.visible');
    cy.get('#accordion__heading-\\:r1\\: > .daily-item > .min-max').should('be.visible');
    cy.get('#accordion__heading-\\:r2\\: > .daily-item > .min-max').should('be.visible');
    cy.get('#accordion__heading-\\:r3\\: > .daily-item > .min-max').should('be.visible');
    cy.get('#accordion__heading-\\:r4\\: > .daily-item > .min-max').should('be.visible');
    cy.get('#accordion__heading-\\:r5\\: > .daily-item > .min-max').should('be.visible');
    cy.get('#accordion__heading-\\:r6\\: > .daily-item > .min-max').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })
})
  