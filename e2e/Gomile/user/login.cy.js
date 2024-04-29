const { expect } = require("chai");

describe("Login test", ()=>{
    beforeEach(()=>{
        cy.visit('/')
        });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    it("User_Login", ()=>{
        cy.visit('/')
        cy.wait(3000)
        cy.get("#top-login").click()
        cy.wait(3000)

        cy.xpath('(//input[contains(@type, "email")])[4]')
        .and('be.enabled')
        .and('be.visible')
        .as('email')
        // .type('mayank19101@gmail.com')
        // .should('have.value', 'mayank19101@gmail.com')
        .type('mayank.negi@awfis.com')
        .should('have.value', 'mayank.negi@awfis.com')
        
        

        cy.xpath('(//input[contains(@type, "password")])[5]')
        .should('be.enabled')
        .should('be.visible')
        .as('pass')
        .type('Test@1234')
        .should('have.value', 'Test@1234')

        let act_text= 'Login'
        cy.get('.width70p-m-auto > h3').then((t)=>{
        let exp_text= t.text()
        if (act_text==exp_text ) {
            expect(act_text).to.equal(exp_text)
            cy.log('You are in Login page') 
        } else {
            cy.log('Invalid page')  
        }
        })
        cy.xpath('(//button[contains(@type, "submit")])[2]')
        .should('be.enabled')
        .should('be.visible')
        .as('lgbt2').click() 

        //Logout
    
        // cy.xpath('(//a[contains(@id, "menu-logout")][1])').click('{ multiple: true }')

       // Forgot Password
        // cy.xpath('//a[contains(@id, "forget")]').click()
        // cy.xpath('(//input[contains(@type, "email")])')
        // .should('be.enabled')
        // .should('be.visible')
        // .as('frgt_email')
        // .type('mayank19101@gmail.com')
        // .should('have.value', 'mayank19101@gmail.com')
    })    
})
        

  
        


    
    