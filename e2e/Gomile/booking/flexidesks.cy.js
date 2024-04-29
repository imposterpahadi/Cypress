const { expect } = require("chai");
// const { head } = require("cypress/types/lodash");

describe("Flexi Desks Booking", () => {
  beforeEach(() => {
    cy.visit('/')
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  it("Fixed Desks Booking", () => {
    login();
    selectFlexiDesks();
    bookFlexiDesk();
  });

  function login() {
    cy.get("#top-login").click()
    cy.xpath('(//input[contains(@type, "email")])[4]').as('email')
    cy.get('@email')
    .should('be.enabled')
    .and('be.visible').type('mayank.negi@awfis.com')
    .and('have.value', 'mayank.negi@awfis.com')
    
    cy.xpath('(//input[contains(@type, "password")])[5]').as('pass')
    cy.get('@pass')
    .should('be.enabled')
    .and('be.visible').type('Test@1234')
    .and('have.value', 'Test@1234')
    
    cy.xpath('(//button[contains(@type, "submit")])[2]').as('sbmt')
    cy.get('@sbmt').should('be.enabled').click()
    .should('have.css', 'background-color', 'rgb(226, 64, 47)');
    cy.wait(2000)
  }
    function selectFlexiDesks() {
    cy.xpath('(//a[contains(@id, "day-pass")])[6]').click({force: true})
    cy.xpath('(//button[contains(@id, "type")])').click();
    cy.xpath('//*[@id="bodyapp"]/div[1]/div/div[1]/div[1]/div/div/div[3]/ul/li[4]/div/ul/li[5]/label/span').click()
    cy.xpath('(//button[contains(@id, "type")])').click();
    cy.xpath('/html/body/div[1]/div/div[1]/div[1]/div/div/div[3]/ul/li[4]/div/ul/li[4]/label/span').click()
    }
   
    function bookFlexiDesk() {
    cy.xpath('(//div[contains(@id, "listing")])').find('.col-md-3 ').eq(3).click();
    cy.xpath('//input[contains(@id, "datepicker")]').click()
    cy.wait(5000)
    cy.xpath('//a[contains(@id, "testcheckavailability")]').click()
    cy.wait(2000)
    cy.xpath('//button[contains(@id, "testbooknow")]').click()
    cy.wait(3000)
    cy.get('#testproceed').click()
    }
  })