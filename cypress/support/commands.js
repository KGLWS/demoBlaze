// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types = "cypress" />

// const moment = require('moment-timezone');
// const purchaseDate = moment.tz('America/Chicago');

Cypress.Commands.add('login', () => {
    cy.clearCookies();
    cy.visit('/');
    cy.get('#login2').click();
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-header > #logInModalLabel').should('have.text', 'Log in');
    cy.wait(2000)
    cy.get('#loginusername', {
        timeout: 12000
    }).click({
        force: true
    }).type(`${Cypress.env("USERNAME")}`);
    cy.get('#loginpassword', {
        timeout: 1000
    }).type(`${Cypress.env("PASSWORD")}`);
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.get('#nameofuser').should('have.text', 'Welcome EM');
})

//Phones functions
Cypress.Commands.add("navigateToHomePage", () => {
    cy.clearCookies();
    cy.visit('https://www.demoblaze.com/');
})

Cypress.Commands.add('getRandomPhone', (randomPhone) => {
    cy.get(`:nth-child(${randomPhone}) > .card > .card-block > .card-title > .hrefch`).click();
})

Cypress.Commands.add('checkPhoneCartPriceTitleDesc', (phoneTitle, price, prodDesc) => {
    cy.get('.name').should('have.text', phoneTitle)
    cy.get('.price-container').should('have.text', price)
    cy.get('strong').should('have.text', 'Product description')
    cy.get('#more-information > p').should('have.text', prodDesc)
})

Cypress.Commands.add('checkoutFromCart', (name, country, city, creditCard, month, year) => {
    cy.get('.col-sm-12 > .btn').should('have.text', 'Add to cart').click()
    cy.get('#cartur').click();
    cy.get('.col-lg-1 > .btn').should('have.text', 'Place Order').click();
    cy.get('#orderModalLabel').should('have.text', 'Place order');
    cy.get('#totalm').should('contain', 'Total:');
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > .form-control-label').should('have.text', 'Name:');
    cy.get('#name').type(name);
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(3) > .form-control-label').should('have.text', 'Country:');
    cy.get('#country').type(country);
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(4) > .form-control-label').should('have.text', 'City:');
    cy.get('#city').type(city)
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(5) > .form-control-label').should('have.text', 'Credit card:');
    cy.get('#card').type(creditCard)
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(6) > .form-control-label').should('have.text', 'Month:');
    cy.get('#month').type(month)
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(7) > .form-control-label').should('have.text', 'Year:');
    cy.get('#year').type(year)
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
})

Cypress.Commands.add('successPurchaseMsg', () => {
    cy.get('.sweet-alert > h2').should('have.text', 'Thank you for your purchase!');
    cy.get('.lead').invoke('text').then((txt) => {
        //let customerInfo = txt.substring(3,10)
        // let splitted =customerInfo.split();
        //cy.log(customerInfo)
        cy.get('.lead').should('contain.text', 'Name: Eddie');
        cy.get('.confirm').click();
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
    })
})



//Laptops functions
Cypress.Commands.add('getRandomLaptop', (randomLaptop) => {
    cy.get(`[onclick="byCat('notebook')"]`).click();
    cy.wait(2000);
    cy.get(`:nth-child(${randomLaptop}) > .card > :nth-child(1) > .card-img-top`).click();
    //cy.xpath('//a[text()="MacBook Pro"]').click()
})

Cypress.Commands.add('checkLaptopCartPriceTitleDesc', (laptopTitle, price, prodDesc) => {
    cy.get('.name').should('have.text', laptopTitle)
    cy.get('.price-container').should('have.text', price)
    cy.get('strong').should('have.text', 'Product description')
    cy.get('#more-information > p').should('have.text', prodDesc)
});