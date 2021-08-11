//import { onPhonePage } from '../support/page_objects/phone'
let samsungS6ProductDesc = 'The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\n processor and it comes with 3GB of RAM. The phone packs 32GB of \ninternal storage cannot be expanded. ';
let nexus6ProductDesc = 'The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.';
let sonyXperiaZ5ProdDesc = 'Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone\n comes with a 5.20-inch touchscreen display with a resolution of 1080 \npixels by 1920 pixels at a PPI of 424 pixels per inch.';

describe('e2e test to checkout random phones from home page', () => {

    before('navigate to home page', () => {
        cy.login();
    })

    it('validate random phone price and description', () => {
        //change the parameter to get random phone
        cy.getRandomPhone(1);
        //change the title of phone if parameter has changed
        cy.checkPhoneCartPriceTitleDesc('Samsung galaxy s6', '$360 *includes tax', samsungS6ProductDesc);
        cy.get('.active > .nav-link').click();

        cy.getRandomPhone(3);
        cy.checkPhoneCartPriceTitleDesc('Nexus 6', '$650 *includes tax', nexus6ProductDesc);
        cy.get('.active > .nav-link').click();

        cy.getRandomPhone(6);
        cy.checkPhoneCartPriceTitleDesc('Sony xperia z5', '$320 *includes tax', sonyXperiaZ5ProdDesc);
    })

    it('validate purchase process from cart', () => {
        cy.checkoutFromCart('Eddie', 'Spain', 'Chicago', '12456451616', '12', '2021');
    })

    it('validate success purchase message', () => {
        cy.successPurchaseMsg()
    })
})