const { expect } = require("chai");
describe("Login test", ()=>{
    beforeEach(()=>{
        cy.visit('/')
        });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })

      it("Fixed Desks Booking", () => {
        
        formRequestVisit();
        findSpace();
      });
     function formRequestVisit(){
        cy.xpath('(//input[contains(@id, "name")])[1]').as('Name').type('Sachin Rawat')
        .should('have.value', 'Sachin Rawat')
        cy.xpath('(//input[contains(@id, "email")])[1]').as('email').type('sachin@gmail.com')
        .should('have.value', 'sachin@gmail.com')
        cy.xpath('(//input[contains(@id, "phone")])[1]').as('number').type('7830767416')
        .should('have.value','7830767416')
        cy.xpath('(//select[contains(@id, "city")])').select('Delhi');
        cy.xpath('(//input[contains(@type, "button")])[1]').as('submit').click()
        cy.wait(3000)
        cy.get('#bodyapp > div.swal2-container.swal2-center.swal2-fade.swal2-shown > div > div.swal2-buttonswrapper > button.swal2-confirm.swal2-styled').click()
     }

     function findSpace(){
        cy.xpath('(//select[contains(@ng-change, "changeCity()")])').select('New Delhi')
        cy.xpath('(//select[contains(@ng-model, "model.location")])').select('New Delhi')
        cy.xpath('(//select[contains(@ng-model, "model.product")])').select('Fixed Desks')
        cy.xpath('(//input[contains(@value, "Search")])').click()
        cy.wait(1000)    
     }


    })