const { expect } = require("chai");

describe("Login test", ()=>{
    beforeEach(()=>{
        cy.visit('/')
        });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      }) 

      it("Meeting Room BOOKING", ()=>{
        //Select Meeting Room
        cy.wait(2000)
        cy.get("#top-login").click()
        cy.xpath('(//input[contains(@type, "email")])[4]').type('mayank.negi@awfis.com')
        cy.xpath('(//input[contains(@type, "password")])[5]').type('Test@1234')
        cy.xpath('(//button[contains(@type, "submit")])[2]').click()
        cy.wait(1000)
        cy.xpath('(//a[contains(@class, "mob-view-padding")])[1]').click()
        cy.xpath('(//div[contains(@id, "listing")])').find('.blue-button').eq(3).click();      
        cy.xpath('(//button[contains(@class, "plusOne")])').click({ multiple: true })  // Plus one Quantity
        cy.wait(2000)
        cy.xpath('(//button[contains(@class, "minusOne")])').click({ multiple: true }) // Minus one Quantity
        cy.wait(3000) 

        cy.xpath('(//input[contains(@id, "datepicker")])').click({multiple: true })
        cy.wait(10000)
        cy.xpath('(//a[contains(@id, "testcheckavailability")])').click() // check Availability
        cy.wait(2000)
        //Book Now
        cy.xpath('(//button[contains(@id, "testbooknow")])').as('book_btn').click({force: true})
        cy.wait(1000)
        cy.get('#card-item > div > div > div.pad-top-10 > div:nth-child(1) > label > span').click()
        cy.wait(3000)
        cy.xpath('(//a[contains(@id, "testproceed")])').as('PayU_btn').click()


    })
    })