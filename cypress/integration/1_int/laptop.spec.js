/// <reference types = "cypress" />
let sonyVaioI7ProdDesc = `REVIEW\n \nSony is so confident that the VAIO S is a superior \nultraportable laptop that the company proudly compares the notebook to \nApple's 13-inch MacBook Pro. And in a lot of ways this notebook is \nbetter, thanks to a lighter weight, higher-resolution display, more \nstorage space, and a Blu-ray drive. `;
let dell2017 = '7th Gen Intel Core i7-7500U mobile processor 2.70 GHz with Turbo Boost \nTechnology up to 3.50 GHz, Intel HD Graphics 62015.6 inch Full HD IPS \nTrueLife LED-backlit touchscreen (1920 x 1080), 10-finger multi-touch \nsupport, 360° flip-and-fold design,8GB DDR4 2400 MHz Memory, 1TB 5400 \nRPM HDD, No optical drive, 3 in 1 card reader (SD SDHC SDXC)';
let macBookPro = `Apple has introduced three new versions of its MacBook Pro line, \nincluding a 13-inch and 15-inch model with the Touch Bar, a thin, \nmulti-touch strip display that sits above the MacBook Pro's keyboard. `
describe('e2e test to checkout random phones from home page', () => {

    before('navigate to home page', () => {
        cy.login();
    })

    it('validate random phone price and description', () => {
        //change the parameter to get random phone

        cy.getRandomLaptop(2);
        //change the title of phone if parameter has changed
        cy.checkLaptopCartPriceTitleDesc('Sony vaio i7\n', '$790 *includes tax', sonyVaioI7ProdDesc);
        cy.get('.active > .nav-link').click();

        cy.getRandomLaptop(5);
        cy.checkLaptopCartPriceTitleDesc('2017 Dell 15.6 Inch', '$700 *includes tax', dell2017);
        cy.get('.active > .nav-link').click();

        cy.getRandomLaptop(6);
        cy.checkLaptopCartPriceTitleDesc('MacBook Pro', '$1100 *includes tax', macBookPro);
    })

    it('validate purchase process from cart', () => {
        cy.checkoutFromCart('Eddie', 'Spain', 'Chicago', '12456451616', '12', '2021');
    })

    it('validate success purchase message', () => {
        cy.successPurchaseMsg()
    })


})