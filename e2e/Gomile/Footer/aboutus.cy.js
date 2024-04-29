const { expect } = require("chai");

describe("Login test", ()=>{
    beforeEach(()=>{
        cy.visit('/')
        });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })

      it("About Us Test Link", ()=>{
        cy.scrollTo(0, 3500)
        cy.xpath('(//a[contains(@id, "about-us-footer")])').click()
        cy.url().as("meetroom_url").should('eq', 'https://gomile.awfis.com/about-us');
        cy.get('@meetroom_url').should('include', 'about-us')
        cy.wait(2000)

        cy.scrollTo(0, 3500)
        cy.xpath('(//a[contains(@id, "contact-us-footer")])').click()
        cy.url().as("meetroom_url").should('eq', 'https://gomile.awfis.com/contact-us');
        cy.get('@meetroom_url').should('include', 'contact-us')
        cy.wait(2000)

        cy.scrollTo(0,3500)
        cy.xpath('(//a[contains(@id, "footercareer")])').click()
        cy.url().as("meetroom_url").should('eq',  'https://gomile.awfis.com/careers');
        cy.get('@meetroom_url').should('include', 'careers')
        cy.wait(2000)

        cy.scrollTo(0,3500)
        cy.xpath('(//a[contains(@id, "press-footer")])').click()
        cy.url().as("meetroom_url").should('eq',  'https://gomile.awfis.com/press/');
        cy.get('@meetroom_url').should('include', 'press')
        cy.wait(2000)

        cy.scrollTo(0,3500)
        cy.xpath('(//a[contains(@id, "legal-footer")])').click()
        cy.url().as("meetroom_url").should('eq',   'https://gomile.awfis.com/legal-policy');
        cy.get('@meetroom_url').should('include', 'legal')
        cy.wait(2000)


        cy.scrollTo(0,3500)
        cy.xpath('(//a[contains(@id, "blog-footer")])').click()
        cy.url().as("meetroom_url").should('eq',  'https://gomile.awfis.com/inspiration/');
        cy.get('@meetroom_url').should('include', 'inspiration')
        cy.wait(2000)

        // cy.scrollTo(0,3500)
        // cy.xpath('(//a[contains(@id, "rewards-footer")])').click()
        // cy.url().as("meetroom_url").should('eq',   'https://gomile.awfis.com/inspiration/' );
        // cy.get('@meetroom_url').should('include', 'inspiration')
        // cy.wait(2000)

        cy.scrollTo(0,3500)
        cy.xpath('(//a[contains(@id, "request-a-visit-footer")])').click()
        cy.url().as("meetroom_url").should('eq',  'https://gomile.awfis.com/#banner-form');
        cy.get('@meetroom_url').should('include', 'banner-form')
        cy.wait(2000)

        // find-your-space-footer

        cy.scrollTo(0,3500)
        cy.xpath('(//a[contains(@id, "find-your-space-footer")])').click()
        cy.url().as("meetroom_url").should('eq',  'https://gomile.awfis.com/office-space');
        cy.get('@meetroom_url').should('include', 'office-space')
        cy.wait(2000)

        //sitemap-footer
        cy.scrollTo(0,3500)
        cy.xpath('(//a[contains(@id, "sitemap-footer")])').click()
        cy.url().as("meetroom_url").should('eq',  'https://gomile.awfis.com/sitemap');
        cy.get('@meetroom_url').should('include', 'sitemap')
        cy.wait(2000)
      })
    })