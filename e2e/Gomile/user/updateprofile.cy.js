const { expect } = require("chai");

describe("Login test", ()=>{
    beforeEach(()=>{
        cy.visit('/')
        });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })

      it("User Profile Test Link", ()=>{

        cy.wait(3000)
        cy.get("#top-login").click()
        cy.xpath('(//input[contains(@type, "email")])[4]').type('mayank19101@gmail.com')
        cy.xpath('(//input[contains(@type, "password")])[5]').type('Test@12345')
        cy.xpath('(//button[contains(@type, "submit")])[2]').click()
        cy.wait(1000)
        cy.xpath('(//button[contains(@class, "sprite user dropdown-toggle")])').click()
        cy.xpath('(//a[contains(@id, "menu-profile")])').click() // Dropdown Profile

        const filePath = 'abhineet.jpg'
        cy.xpath('(//i[contains(@class, "fa fa-pencil")])').attachFile(filePath)
        cy.xpath('(//input[contains(@placeholder, "Name")])[1]').as('name')
        cy.get('@name').clear()
        .type('Mayank Singh Negi')
        .should('have.value', "Mayank Singh Negi")

        cy.xpath('(//select[contains(@name, "gender")])').as('gender')
        cy.get('@gender').select('Male')
        // .select('Female')
        
        //Designation
        cy.xpath('(//input[contains(@type, "text")])[3]').as('designation')
        cy.get('@designation').clear()
        .type('Software Developer')
        .should('have.value', 'Software Developer')

        //Mobile Number
        cy.xpath('(//input[contains(@type, "text")])[4]').as('mobile')
        cy.get('@mobile').clear()
        .type('7830767416')
        .should('have.length', '1')

        //Address
        cy.xpath('(//textarea[contains(@name, "address")])').as('address')
        cy.get('@address').clear()
        .type("Mannat, Land's End, Bandstand, Bandra (West), Mumbai, Maharashtra - 400050.")
        .should('have.value', "Mannat, Land's End, Bandstand, Bandra (West), Mumbai, Maharashtra - 400050.")

        //Current Pass
        cy.xpath('(//input[contains(@type, "password")])[1]').clear().as('cPass')
        cy.get('@cPass').type('Test@12345')
        .should('have.value', 'Test@12345')

        //New Pass
        cy.xpath('(//input[contains(@type, "password")])[2]').clear().as('nPass')
        cy.get('@nPass').type('Test@123456')
        .should('have.value', 'Test@123456')

        //Bisthday
        cy.xpath('(//input[contains(@name, "birthday")])').click()
        cy.wait(5000)
        cy.get('div.xdsoft_label:nth-child(4) > span:nth-child(1)').click()
        cy.wait(5000)
        cy.get('div.xdsoft_label:nth-child(3) > span:nth-child(1)').click()
        cy.wait(5000)
        
        cy.get('.brn').click()
        cy.wait(10000)
        cy.get('#userUpdate_mobileverify > div:nth-child(1) > button:nth-child(4)').click()

      })
    })
