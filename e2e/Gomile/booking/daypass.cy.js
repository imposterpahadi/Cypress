
const { expect } = require("chai");

describe("Login test", ()=>{
    beforeEach(()=>{
        cy.visit('/')
        });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })

      it("DAY PASS BOOKING", ()=>{
    cy.contains("Day Pass").click({force: true})
    cy.xpath('(//div[contains(@id, "listing")])').find('.blue-button').eq(3).click();
    cy.xpath('(//input[contains(@id, "datepicker")])').click()
    cy.wait(4000) 
    cy.xpath('(//button[contains(@class, "plusOne")])').click({force: true}) // quantity increase
    // cy.xpath('(//button[contains(@class, "minusOne")])').click() 
    cy.wait(2000)

    cy.xpath('(//a[contains(@id, "testcheckavailability")])').click() 
    cy.xpath('//button[contains(@id, "testbooknow")]').click()
    cy.xpath('//input[contains(@name, "email")]').type('mayank19101@gmail.com');
    cy.xpath('//*[@id="loginfrom"]/div/input[2]').type('Test@12345');
    cy.xpath('(//button[contains(@type, "submit")])[2]').click();
    cy.xpath('(//a[contains(@id, "testproceed")])').click() //Proceed
    cy.wait(9000) 
    cy.wait(4000)

    //feedback screen
    //feedback screen
    //feedback screen
    cy.wait(6000)
    cy.xpath('(//span[contains(@class, "no-back")])[5]').click()
    cy.xpath('(//button[contains(@type, "submit")])[1]').click()
    // cy.xpath('(//span[contains(@class, "cross-cursor float-right")])').click()// cross feedback

    cy.xpath('(//button[contains(@type, "button")])[6]').click() // Close feedback screen

    // Profile Dahsboard View Booking
    cy.xpath('(//button[contains(@class, "sprite user dropdown-toggle")])').click()
    cy.xpath('(//a[contains(@id, "menu-dashboard")])').click()
    cy.xpath('(//a[contains(@id, "view-bookings")])').click() 
    
  })
})