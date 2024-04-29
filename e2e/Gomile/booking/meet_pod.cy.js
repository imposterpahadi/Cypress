const { expect } = require("chai");
describe("Login test", ()=>{
    beforeEach(()=>{
        cy.visit('/')
        });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })

      it("Fixed Desks Booking", () => {
        login();
        selectMeetPod();
        bookMeetPod();
      });

     function  login(){
        cy.wait(2000)
        cy.get("#top-login").click()
        cy.xpath('(//input[contains(@type, "email")])[4]').type('mayank19101@gmail.com')
        cy.xpath('(//input[contains(@type, "password")])[5]').type('Test@12345')
        cy.xpath('(//button[contains(@type, "submit")])[2]').click()
        cy.wait(1000)
     }

     function selectMeetPod(){

        cy.get('#book-space-after-login > b').click()
        cy.get('#meeting-pod-after-login').click()
     }

     function bookMeetPod(){
        cy.xpath('(//input[contains(@type, "text")])[1]').click()
        cy.wait(10000)
        cy.xpath('(//span[contains(@id, "qplusone")])[1]').as('plus_quant').click()
        // cy.xpath('(//span[contains(@id, "qminusOne")])[1]').as('minus_quant').click()
        cy.wait(6000)
        cy.xpath('(//input[contains(@type, "text")])[3]').as('start_time').click()
        // cy.xpath('(//input[contains(@type, "email")])[1]').as('end_time').click()
        // cy.xpath('(//p[contains(@class, "alert alert-success")])').should('not.be.visible')
        cy.xpath('(//button[contains(@type, "button")])[6]').as('check_slot').click()
        // cy.xpath('(//p[contains(@class, "alert alert-success")])').as('book_after_15min').should('be.visible') 
     }
})
    
    