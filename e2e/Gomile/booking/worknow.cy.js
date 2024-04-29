const { expect } = require("chai");

describe("Login test", ()=>{
    beforeEach(()=>{
        cy.visit('/')
        })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })

      it("Coworking booking ", ()=>{
        cy.wait(2000)
        cy.get("#top-login").click()
        cy.xpath('(//input[contains(@type, "email")])[4]').type('mayank19101@gmail.com')
        cy.xpath('(//input[contains(@type, "password")])[5]').type('Test@12345')
        cy.xpath('(//button[contains(@type, "submit")])[2]').click()
        cy.wait(1000)
        
        cy.visit('https://gomile.awfis.com/')
        cy.xpath('(//img[contains(@ng-src, "/images/new_banners/second.jpg")])[3]').should('be.visible').and(($img) => {
          const width = $img[0].clientWidth;
          console.log('image-width', width)
          const height = $img[0].clientHeight;
          console.log('image-height', height)
          expect(width).to.be.greaterThan(0); 
          expect(height).to.be.greaterThan(0); 
        });
        cy.xpath('(//input[contains(@id, "name")])[1]').as('Name').type('Sachin Rawat')
        cy.xpath('(//input[contains(@id, "phone")])[1]').as('number').type('7830767416')
        cy.xpath('(//input[contains(@id, "email")])[1]').as('email').type('sachin@gmail.com')
        cy.xpath('(//select[contains(@id, "city")])').select('Delhi');
        cy.xpath('//input[contains(@id, "submit")]').click();
        cy.intercept('POST', 'api/v1/visits').as('postRequest');
        cy.wait('@postRequest').then((interception) => {
        const request = interception.request;
        expect(request.method).to.equal('POST');
        expect(request.body).to.include('city'); 
        expect(request.body).to.include('inv_type');
        expect(request.body).to.include('mobile'); 
        expect(request.body).to.include('email'); 
        expect(request.body).to.include('name'); 

});


  });
});
  



    