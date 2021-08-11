/// <reference types="cypress" />
export class PhonePage {

    phoneRandomCheckout(){
    cy.get("[onclick='byCat('phone')']").should('have.text','Phones');
    return this;
    }


}
export default PhonePage