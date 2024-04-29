const { expect } = require("chai");

describe("Login test", ()=>{
    beforeEach(()=>{
        cy.visit('/')
        });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })

      it("Location Test Link", ()=>{
     
    // Location - Delhi
    cy.scrollTo(0,3500)
    cy.xpath('(//a[contains(@id, "location-delhi")])').click()
    cy.wait(3000)
    cy.url().as("web_location").should('eq',  'https://gomile.awfis.com/office-space/new-delhi');
    cy.get('@web_location').should('include', 'office-space/new-delhi')
    cy.wait(5000)

    let act_text = 'Coworking Space in New Delhi'
    cy.xpath('(//h1[contains(@class, "margin-0")])').then((m) => {
      let exp_text = m.text();
      exp_text = exp_text.trim() // trip extra space
      exp_text = exp_text.replace(/[\n]/g, "");  // remove \n from string
      expect(act_text).to.equal(exp_text);
      if (exp_text !== act_text) {
        cy.log("You are not in Coworking Space in New Delhi");
      } else { 
        cy.log("Welcome to the Coworking Space in New Delhi");
      }
    })

    //location-Bengaluru 
    cy.scrollTo(0,3500)
    cy.xpath('(//a[contains(@id, "location-Bengaluru")])').click()
    cy.url().as("web_location").should('eq',  'https://gomile.awfis.com/office-space/bengaluru');
    cy.get('@web_location').should('include', 'office-space/bengaluru')
    cy.wait(5000)

    let act_text1 = 'Coworking Space in Bangalore'
    cy.xpath('//*[text()[contains(.,"Coworking Space in Bangalore")]]').then((t) => {
      let exp_text1 = t.text();
      exp_text1 = exp_text1.trim() // trip extra space
      exp_text1 = exp_text1.replace(/[\n]/g, "");  // remove \n from string
      expect(act_text1).to.equal(exp_text1);
      if (exp_text1 !== act_text1) {
        cy.log("You are not in Coworking Space in Bangalore");
      } else { 
        cy.log("Welcome to the Coworking Space in Bangalore");
      }
    })

    //location-hyderabad 
    cy.scrollTo(0,3500)
    cy.xpath('(//a[contains(@id, "location-hyderabad")])').click()
    cy.url().as("web_location").should('eq',  'https://gomile.awfis.com/office-space/hyderabad');
    cy.get('@web_location').should('include', 'office-space/hyderabad')
    cy.wait(5000)

    let act_text2 = 'Coworking Space in Hyderabad'
    cy.xpath('//*[text()[contains(.,"Coworking Space in Hyderabad")]]').then((m) => {
      let exp_text2 = m.text();
      exp_text2 = exp_text2.trim() // trip extra space
      exp_text2 = exp_text2.replace(/[\n]/g, "");  // remove \n from string
      expect(act_text2).to.equal(exp_text2);
      if (exp_text2 !== act_text2) {
        cy.log("You are not in Coworking Space in Hyderabad");
      } else { 
        cy.log("Welcome to the Coworking Space in Hyderabad");
      }
    })

    //location-Mumbai 
    cy.scrollTo(0,3500)
    cy.xpath('(//a[contains(@id, "location-mumbai")])').click()
    cy.url().as("web_location").should('eq',  'https://gomile.awfis.com/office-space/mumbai');
    cy.get('@web_location').should('include', 'office-space/mumbai')
    cy.wait(5000)


    let act_text3 = 'Coworking Space in Mumbai'
    cy.xpath('//*[text()[contains(.,"Coworking Space in Mumbai")]]').then((m) => {
      let exp_text3 = m.text();
      exp_text3 = exp_text3.trim() // trip extra space
      exp_text3 = exp_text3.replace(/[\n]/g, "");  // remove \n from string
      expect(act_text3).to.equal(exp_text3);
      if (exp_text3 !== act_text3) {
        cy.log("You are not in Coworking Space in Mumbai");
      } else { 
        cy.log("Welcome to the Coworking Space in Mumbai");
      }
    })

     //location-Gurgaon 
     cy.scrollTo(0,3500)
     cy.xpath('(//a[contains(@id, "location-gurgaon")])').click()
     cy.url().as("web_location").should('eq',  'https://gomile.awfis.com/office-space/gurgaon');
     cy.get('@web_location').should('include', 'office-space/gurgaon')
     cy.wait(5000)

     let act_text4 = 'Coworking Space in Gurgaon'
     cy.xpath('//*[text()[contains(.,"Coworking Space in Gurgaon")]]').then((m) => {
       let exp_text4 = m.text();
       exp_text4 = exp_text4.trim() // trip extra space
       exp_text4 = exp_text4.replace(/[\n]/g, "");  // remove \n from string
       expect(act_text4).to.equal(exp_text4);
       if (exp_text4 !== act_text4) {
         cy.log("You are not in Coworking Space in Gurgaon");
       } else { 
         cy.log("Welcome to the Coworking Space in Gurgaon");
       }
     })
     
     //location-noida 
     cy.scrollTo(0,3500)
     cy.xpath('(//a[contains(@id, "location-noida")])').click()
     cy.url().as("web_location").should('eq',  'https://gomile.awfis.com/office-space/noida');
     cy.get('@web_location').should('include', 'office-space/noida')
     cy.wait(5000)

     let act_text5 = 'Coworking Space in Noida'
     cy.xpath('//*[text()[contains(.,"Coworking Space in Noida")]]').then((m) => {
       let exp_text5 = m.text();
       exp_text5 = exp_text5.trim() // trip extra space
       exp_text5 = exp_text5.replace(/[\n]/g, "");  // remove \n from string
       expect(act_text5).to.equal(exp_text5);
       if (exp_text5 !== act_text5) {
         cy.log("You are not in Coworking Space in Noida");
       } else { 
         cy.log("Welcome to the Coworking Space in Noida");
       }
     })

      //location-kolkata 
      cy.scrollTo(0,3500)
      cy.xpath('(//a[contains(@id, "location-kolkata")])').click()
      cy.url().as("web_location").should('eq',  'https://gomile.awfis.com/office-space/kolkata');
      cy.get('@web_location').should('include', 'office-space/kolkata')
      cy.wait(5000)

      let act_text6 = 'Coworking Space in Kolkata'
     cy.xpath('//*[text()[contains(.,"Coworking Space in Kolkata")]]').then((m) => {
       let exp_text6 = m.text();
       exp_text6 = exp_text6.trim() // trip extra space
       exp_text6 = exp_text6.replace(/[\n]/g, "");  // remove \n from string
       expect(act_text6).to.equal(exp_text6);
       if (exp_text6 !== act_text6) {
         cy.log("You are not in Coworking Space in Kolkata");
       } else { 
         cy.log("Welcome to the Coworking Space in Kolkata");
       }
     })

      //location-pune
      // cy.scrollTo(0,3500)
      // cy.xpath('(//a[contains(@id, "location-pune")])').click()
      // cy.url().as("web_location").should('eq',  'https://gomile.awfis.com/office-space/pune');
      // cy.get('@web_location').should('include', 'pune')
      // cy.wait(5000)


    //location-indore
    cy.scrollTo(0,3500)
      cy.xpath('(//a[contains(@id, "location-indore")])').click()
      cy.url().as("web_location").should('eq',  'https://gomile.awfis.com/office-space/indore');
      cy.get('@web_location').should('include', 'office-space/indore')
      cy.wait(5000)

      let act_text7 = 'Coworking Space in Indore'
     cy.xpath('//*[text()[contains(.,"Coworking Space in Indore")]]').then((m) => {
       let exp_text7 = m.text();
       exp_text7 = exp_text7.trim() // trip extra space
       exp_text7 = exp_text7.replace(/[\n]/g, "");  // remove \n from string
       expect(act_text7).to.equal(exp_text7);
       if (exp_text7 !== act_text7) {
         cy.log("You are not in Coworking Space in Indore");
       } else { 
         cy.log("Welcome to the Coworking Space in Indore");
       }
     })

      //location-chennai
      cy.scrollTo(0,3500)
      cy.xpath('(//a[contains(@id, "location-chennai")])').click()
      cy.url().as("web_location").should('eq',  'https://gomile.awfis.com/office-space/chennai');
      cy.get('@web_location').should('include', 'office-space/chennai')
      cy.wait(5000)

      let act_text8 = 'Coworking Space in Chennai'
     cy.xpath('//*[text()[contains(.,"Coworking Space in Chennai")]]').then((m) => {
       let exp_text8 = m.text();
       exp_text8 = exp_text8.trim() // trip extra space
       exp_text8 = exp_text8.replace(/[\n]/g, "");  // remove \n from string
       expect(act_text8).to.equal(exp_text8);
       if (exp_text8 !== act_text8) {
         cy.log("You are not inCoworking Space in Chennai");
       } else { 
         cy.log("Welcome to theCoworking Space in Chennai");
       }
     })

      //location-ahmedabad
      cy.scrollTo(0,3500)
      cy.xpath('(//a[contains(@id, "location-ahmedabad")])').click()
      cy.url().as("web_location").should('eq',  'https://gomile.awfis.com/office-space/ahmedabad');
      cy.get('@web_location').should('include', 'office-space/ahmedabad')
      cy.wait(5000)

      let act_text9 = 'Coworking Space in Ahmedabad'
      cy.xpath('//*[text()[contains(.,"Coworking Space in Ahmedabad")]]').then((m) => {
        let exp_text9 = m.text();
        exp_text9 = exp_text9.trim() // trip extra space
        exp_text9 = exp_text9.replace(/[\n]/g, "");  // remove \n from string
        expect(act_text9).to.equal(exp_text9);
        if (exp_text9 !== act_text9) {
          cy.log("You are not in Coworking Space in Ahmedabad");
        } else { 
          cy.log("Welcome to the Coworking Space in Ahmedabad");
        }
      })

      //location-bhubaneswar
      cy.scrollTo(0,3500)
      cy.xpath('(//a[contains(@id, "location-bhubaneswar")])').click()
      cy.url().as("web_location").should('eq',  'https://gomile.awfis.com/office-space/bhubaneswar');
      cy.get('@web_location').should('include', 'office-space/bhubaneswar')
      cy.wait(5000)

      let act_text10 = 'Coworking Space in Bhubaneswar'
      cy.xpath('//*[text()[contains(.,"Coworking Space in Bhubaneswar")]]').then((m) => {
        let exp_text10 = m.text();
        exp_text10 = exp_text10.trim() // trip extra space
        exp_text10 = exp_text10.replace(/[\n]/g, "");  // remove \n from string
        expect(act_text10).to.equal(exp_text10);
        if (exp_text10 !== act_text10) {
          cy.log("You are not inCoworking Space in Bhubaneswar");
        } else { 
          cy.log("Welcome to theCoworking Space in Bhubaneswar");
        }
      })

      //location-kochi
      cy.scrollTo(0,3500)
      cy.xpath('(//a[contains(@id, "location-kochi")])').click()
      cy.url().as("web_location").should('eq',  'https://gomile.awfis.com/office-space/kochi');
      cy.get('@web_location').should('include', 'office-space/kochi')
      cy.wait(5000)

      let act_text11 = 'Coworking Space in Kochi'
      cy.xpath('//*[text()[contains(.,"Coworking Space in Kochi")]]').then((m) => {
        let exp_text11 = m.text();
        exp_text11 = exp_text11.trim() // trip extra space
        exp_text11 = exp_text11.replace(/[\n]/g, "");  // remove \n from string
        expect(act_text11).to.equal(exp_text11);
        if (exp_text11 !== act_text11) {
          cy.log("You are not in Coworking Space in Kochi");
        } else { 
          cy.log("Welcome to the Coworking Space in Kochi");
        }
      })

      //location-jaipur
      cy.scrollTo(0,3500)
      cy.xpath('(//a[contains(@id, "location-jaipur")])').click()
      cy.url().as("web_location").should('eq',  'https://gomile.awfis.com/office-space/jaipur');
      cy.get('@web_location').should('include', 'office-space/jaipur')
      cy.wait(5000)

      let act_text12 = 'Coworking Space in Jaipur'
      cy.xpath('//*[text()[contains(.,"Coworking Space in Jaipur")]]').then((m) => {
        let exp_text12 = m.text();
        exp_text12 = exp_text12.trim() // trip extra space
        exp_text12 = exp_text12.replace(/[\n]/g, "");  // remove \n from string
        expect(act_text12).to.equal(exp_text12);
        if (exp_text12 !== act_text12) {
          cy.log("You are not in Coworking Space in Jaipur");
        } else { 
          cy.log("Welcome to theCoworking Space in Jaipur");
        }
      })

      //location-nagpur
      cy.scrollTo(0,3500)
      cy.xpath('(//a[contains(@id, "location-nagpur")])').click()
      cy.url().as("web_location").should('eq',  'https://gomile.awfis.com/office-space/nagpur');
      cy.get('@web_location').should('include', 'office-space/nagpur')
      cy.wait(5000)

      let act_text13 = 'Office Spaces on Rent in Nagpur Coworking'
      cy.xpath('//*[text()[contains(.,"Office Spaces on Rent in Nagpur Coworking")]]').then((m) => {
        let exp_text13 = m.text();
        exp_text13 = exp_text13.trim() // trip extra space
        exp_text13 = exp_text13.replace(/[\n]/g, "");  // remove \n from string
        expect(act_text13).to.equal(exp_text13);
        if (exp_text13 !== act_text13) {
          cy.log("You are not in Office Spaces on Rent in Nagpur Coworking");
        } else { 
          cy.log("Welcome to the Office Spaces on Rent in Nagpur Coworking");
        }
      })

      //location-lucknow
      cy.scrollTo(0,3500)
      cy.xpath('(//a[contains(@id, "location-lucknow")])').click()
      cy.url().as("web_location").should('eq',  'https://gomile.awfis.com/office-space/lucknow');
      cy.get('@web_location').should('include', 'office-space/lucknow')
      cy.wait(5000)

      let act_text14 = 'Coworking Space in Lucknow'
      cy.xpath('//*[text()[contains(.,"Coworking Space in Lucknow")]]').then((m) => {
        let exp_text14 = m.text();
        exp_text14 = exp_text14.trim() // trip extra space
        exp_text14 = exp_text14.replace(/[\n]/g, "");  // remove \n from string
        expect(act_text14).to.equal(exp_text14);
        if (exp_text14 !== act_text14) {
          cy.log("You are not in Coworking Space in Lucknow");
        } else { 
          cy.log("Welcome to the Coworking Space in Lucknow");
        }
      })

      })
    })