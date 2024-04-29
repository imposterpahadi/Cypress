const { expect } = require("chai");

describe("Mobility Package booking", () => {
  beforeEach(() => {
    cy.visit('/')
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  it("Mobility Package booking ", () => {
    
      cy.get("#top-login").click()
      cy.xpath('(//input[contains(@type, "email")])[4]').type('mayank19101@gmail.com')
      cy.xpath('(//input[contains(@type, "password")])[5]').type('Test@12345')
      cy.xpath('(//button[contains(@type, "submit")])[2]').click()
      cy.wait(2000)
    const numberOfIterations = [
      "(//button[contains(@ng-click, \"memberPlanSetPriceAwfis(meetingHoursAwfismember[0].product_id,'Personal Plan')\")])", 
      "(//button[contains(@ng-click, \"memberPlanSetPriceAwfis(meetingHoursAwfismember[1].product_id,'PRO Plan')\")])", 
      "(//button[contains(@ng-click, \"memberPlanSetPriceAwfis(meetingHoursAwfismember[2].product_id, 'Enterprise Plan')\")])"
    ];
    for (let i = 0; i < numberOfIterations.length; i++) {
      cy.wait(1000)
      cy.get('#book-space-after-login > b').click();
      cy.xpath('(//a[contains(@id, "awfis-roaming-after-login")])').click()
      cy.url().should('eq', 'https://gomile.awfis.com/awfis-now')

      cy.scrollTo(0, 880)
      cy.get('#tool3').click();

      //Personal Plan
      cy.xpath(numberOfIterations[i]).as('btn1').click();
      cy.wait(2000)
      // cy.xpath(' (//input[contains(@type, "text")])[1]').click()
      // cy.wait(5000)
      cy.get('#wfhModel > div > form > div.text-center > button').click({ force: true })
      cy.wait(5000)
      cy.get('#cityIDVO').select(['Uttarakhand']);
      cy.wait(2000)
      cy.xpath('(//a[contains(@id, "skip-gst")])[1]').click()
      cy.xpath('//*[@id="testproceed"]').click()

      cy.wait(6000)
      cy.xpath('(//span[contains(@class, "no-back")])[5]').click()
      cy.xpath('(//button[contains(@type, "submit")])[1]').click()
      // cy.xpath('(//span[contains(@class, "cross-cursor float-right")])').click()// cross feedback

      cy.xpath('(//button[contains(@type, "button")])[6]').click()

    }

  })
})