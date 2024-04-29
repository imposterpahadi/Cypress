const { expect } = require("chai");

describe("Fixed Desks Booking", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it("Fixed Desks Booking", () => {
    login();
    selectFixedDesks();
    bookFixedDesk();
  });

  function login() {
    cy.get("#top-login").click();
    cy.xpath('(//input[contains(@type, "email")])[4]').type('mayank19101@gmail.com');
    cy.xpath('(//input[contains(@type, "password")])[5]').type('Test@12345');
    cy.xpath('(//button[contains(@type, "submit")])[2]').click();
    cy.wait(2000);
  }

  function selectFixedDesks() {
    cy.get('#book-space-after-login > b').click();
    cy.xpath('(//a[contains(@id, "cabins-after-login")])').click();
    cy.xpath('(//button[contains(@id, "type")])').click();

    // Select the desired fixed desks
    cy.get('#bodyapp > div:nth-child(1) > div > div.height-100 > div.filter-holder > div > div > div.col-md-6.col-sm-12.col-xs-12 > ul > li:nth-child(4) > div > ul > li:nth-child(2) > label > span').click();
    cy.xpath('(//button[contains(@id, "type")])').click();
    cy.get('#bodyapp > div:nth-child(1) > div > div.height-100 > div.filter-holder > div > div > div.col-md-6.col-sm-12.col-xs-12 > ul > li:nth-child(4) > div > ul > li:nth-child(1) > label > span').as('fixed_desks').click();
  }

  function bookFixedDesk() {
    cy.xpath('(//div[contains(@id, "listing")])').find('.col-md-3 ').eq(3).click();
    cy.xpath('(//select[contains(@id, "dur")])').select('Weekly');
    cy.wait(5000);
    cy.xpath('(//a[contains(@id, "testcheckavailability")])').click();
    cy.xpath('(//button[contains(@id, "testbooknow")])').click();
    cy.wait(3000);
    cy.xpath('//*[@id="testproceed"]').click();
  }
});
