const { expect } = require("chai");

describe("Login test", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it("Product Test Link", () => {
    const productLinks = [
      "cabins-footer",
      // "cabins-footer[2]",
      "cabins-meeting-rooms",
      "cabins-flexible-seats",
      "cabins-fixed-seats",
      "cabins-bulk-meeting",
      "cabins-national-pass",
      "cabins-awfis-roaming",
      "cabins-mobility-solutions"
    ];

    productLinks.forEach((linkId) => {
      cy.scrollTo(0, 3500);
      cy.xpath(`(//a[contains(@id, "${linkId}")])`).click({ multiple: true });
      cy.wait(3000);
    });
  });
});