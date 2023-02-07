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

  ///* ==== Test Created with Cypress Studio ==== */
  //it('Test case 0: Template', function() {
  //    /* ==== Generated with Cypress Studio ==== */
  //    cy.get('.container > :nth-child(5) > .ui').click();
  //    cy.get('.form > :nth-child(1) > input').clear();
  //    cy.get('.form > :nth-child(1) > input').type('title');
  //    cy.get('.react-datepicker__input-container > input').click();
  //    cy.get('.react-datepicker__day--006').click();
  //    cy.get('textarea').click();
  //    cy.get('textarea').type('description');
  //    cy.get('.form > :nth-child(5) > .ui').click();
  //    cy.get('.selected').click();
  //    cy.get('.blue').click();
  //    /* ==== End Cypress Studio ==== */
  //});

    /* ==== Test Created with Cypress Studio ==== */
    it('Test case 1: Title minimum 3 characters', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.container > :nth-child(5) > .ui').click();
        cy.get('.form > :nth-child(1) > input').clear();
        cy.get('.form > :nth-child(1) > input').type('12');
        cy.get('.react-datepicker__input-container > input').click();
        cy.get('.react-datepicker__day--006').click();
        cy.get('textarea').click();
        cy.get('textarea').type('description');
        cy.get('.form > :nth-child(5) > .ui').click();
        cy.get('.selected').click();
        cy.get('.blue').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Test case 2: Title max 100 characters', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.container > :nth-child(5) > .ui').click();
        cy.get('.form > :nth-child(1) > input').clear();
        cy.get('.form > :nth-child(1) > input').type('HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!');
        cy.get('.react-datepicker__input-container > input').click();
        cy.get('.react-datepicker__day--006').click();
        cy.get('textarea').click();
        cy.get('textarea').type('description');
        cy.get('.form > :nth-child(5) > .ui').click();
        cy.get('.selected').click();
        cy.get('.blue').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Test case 5: Description minimum 10 characters', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.container > :nth-child(5) > .ui').click();
        cy.get('.form > :nth-child(1) > input').clear();
        cy.get('.form > :nth-child(1) > input').type('CharacterTitle');
        cy.get('.react-datepicker__input-container > input').click();
        cy.get('.react-datepicker__day--006').click();
        cy.get('textarea').click();
        cy.get('textarea').type('123456789');
        cy.get('.form > :nth-child(5) > .ui').click();
        cy.get('.selected').click();
        cy.get('.blue').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Test case 6: Description maximum 1000 characters', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.container > :nth-child(5) > .ui').click();
        cy.get('.form > :nth-child(1) > input').clear();
        cy.get('.form > :nth-child(1) > input').type('CharacterTitle');
        cy.get('.react-datepicker__input-container > input').click();
        cy.get('.react-datepicker__day--006').click();
        cy.get('textarea').click();
        cy.get('textarea').type('p0PpKcHgEcttLn8WgKjnDQrbdYfZgJQx1AdTgTbTq3qoEk70XzW9R6IMHVcibj04jZthx7jdeRJUyxV6U0gEuxu2jm79OgcJOfV7qYjKwclV0cxM4n0Q7bJN23Kj5e5z80N5SJ7NzZJchHjKx7U1R6UACe6yvJEz1ix7cdjkG3YV7wZjKcPVJ4n4jf1I7Kj5i5n5e5z80N5SJ7NzZJchHjKx7U1R6UACe6yvJEz1ix7cdjkG3YV7wZjKcPVJ4n4jf1I7Kj5i5n5e5z80N5SJ7NzZJchHjKx7U1R6UACe6yvJEz1ix7cdjkG3YV7wZjKcPVJ4n4jf1I7Kj5i5n5e5z80N5SJ7NzZJchHjKx7U1R6UACe6yvJEz1ix7cdjkG3YV7wZjKcPVJ4n4jf1I7Kj5i5n5e5z80N5SJ7NzZJchHjKx7U1R6UACe6yvJEz1ix7cdjkG3YV7wZjKcPVJ4n4jf1I7Kj5i5n5e5z80N5SJ7NzZJchHjKx7U1R6UACe6yvJEz1ix7cdjkG3YV7wZjKcPVJ4n4jf1I7Kj5i5n5e5z80N5SJ7NzZJchHjKx7U1R6UACe6yvJEz1ix7cdjkG3YV7wZjKcPVJ4n4jf1I7Kj5i5n5e5z80N5SJ7NzZJchHjKx7U1R6UACe6yvJEz1ix7cdjkG3YV7wZjKcPVJ4n4jf1I7Kj5i5n5e5z80N5SJ7NzZJchHjKx7U1R6UACe6yvJEz1ix7cdjkG3YV7wZjKcPVJ4n4jf1I7Kj5i5n5e5z80N5SJ7NzZJchHjKx7U1R6UACe6yvJEz1ix7cdjkG3YV7wZjKc1');
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(5) > .ui > .divider').click();
        cy.get('.selected').click();
        cy.get('.blue').click();
        /* ==== End Cypress Studio ==== */
    });
})
