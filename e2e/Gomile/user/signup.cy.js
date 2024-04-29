describe("Sign-Up", ()=>{
    it("Signingup User", ()=>{
        cy.visit('/')
        // cy.viewport(2560, 1600 );
        cy.get("#top-signup").click()
        cy.url().should('include', 'http')
        .and('eq','https://gomile.awfis.com/')
        .and('contain', 'gomile.awfis')
        .and('not.eq', 'http://13.126.253.245:9002/7637637626276')

        //Signup Screen
        cy.get('input[id=ID_name]').type('Suman') 
        cy.get('input[id=ID_lmobile]').type('7878787878')   
        cy.get('input[id=ID_email]').type('sumit001@gmail.com')
        cy.get('input[id=password]').type('Test@12345')
        cy.get('input[id=cnfpassword]').type('Test@12345')
        cy.get('.mpadbot0 > span').click()
        cy.xpath('(//button[contains(@type, "submit")])[2]').click({ force: true });
        cy.wait(30000)
        // cy.xpath('(//button[contains(@class, "blue-button")])[9]').clear()
        cy.xpath('(//button[contains(@class, "blue-button")])[9]').click()

        // Dashboard
        let exp_url = window.location.origin + "/";
        cy.url().then((url) => {
            console.log("url:>> ", url);
          if (url == exp_url) {
            cy.log('Welcome to  Dashboard');
          } else {
            cy.log('Not in  Dashboard');
          }
        });
                 
    })
    
})