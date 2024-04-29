// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-xpath';
import 'cypress-file-upload';

Cypress.Commands.add("login", (email, password) => {
    cy.get("#top-login").click();
    cy.xpath('(//input[contains(@type, "email")])[4]').type(email);
    cy.xpath('(//input[contains(@type, "password")])[5]').type(password);
    cy.xpath('(//button[contains(@type, "submit")])[2]').click();
  });
  


   
      
