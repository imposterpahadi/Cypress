const { expect } = require("chai");
// const { tap } = require("cypress/types/lodash");

describe("Login test", ()=>{
    beforeEach(()=>{
        cy.visit('/')
        });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })

      it("Coworking booking ", ()=>{
        cy.wait(2000)
        cy.get("#top-login").click()
        cy.xpath('(//input[contains(@type, "email")])[4]').type('mayank19101@gmail.com')
        cy.xpath('(//input[contains(@type, "password")])[5]').type('Test@12345')
        cy.xpath('(//button[contains(@type, "submit")])[2]').click()
        cy.wait(1000)


        cy.get('#book-space-after-login > b').click()
        cy.get('#virtual-offices-after-login').click()
        cy.url().should('eq', 'https://gomile.awfis.com/remote-working')

        cy.scrollTo(0,500)
        cy.get('img').should('have.attr', 'src', 'https://gomile.awfis.com/images/logo_black.png');
        cy.wait(40000)

        cy.get('#cityIDVO').select(['Mumbai']);
        cy.get('#centerIDVO').select(['Coworking-Raghu Leela Arcade']);

        cy.xpath('(//a[contains(@id, "vo-chechavail")])[1]').click()
        cy.wait(2000)
        cy.xpath('(//button[contains(@id, "vo-booknow")])[1]').click()
        cy.wait(200)
        cy.xpath('(//a[contains(@id, "testproceed")])[1]').click()


      })
    })
