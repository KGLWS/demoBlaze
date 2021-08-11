/// <reference types="@bahmutov/cy-api" />
import '@bahmutov/cy-api/support'
const baseUrl = 'https://www.demoblaze.com';
const randomIndex = arr => Math.floor(Math.random() * arr.length);

context('Redirect calls', () => {
    it('validate it redirects from main laptop page into description of laptop', () => {
        cy.api({
            method: "GET",
            url: `${baseUrl}/css/fonts/Lato-Regular.woff2`,
        }).then(({
            status
        }) => {
            expect(status).to.eq(200);
        })
    })

    it('validate response returns items of products', () => {
        cy.api({
            method: "GET",
            url: `https://api.demoblaze.com/entries`,
        }).then(({
            body,
            status

        }) => {
            expect(status).to.eq(200);
            let resp=(JSON.stringify(body))
                expect(resp.length).to.be.gt(0);
                expect(Object.keys(body).toString()).to.eq('Items,LastEvaluatedKey')
        
        })
    })
})