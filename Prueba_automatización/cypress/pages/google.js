import { googleConstants } from "../constants"

class Google {
    elements = {
        visitGoogle: () => cy.visit(googleConstants.GOOGLE_PATH),
        getCookiesButton: () => cy.get(googleConstants.REJECT_COOCKIES_BTN).should('be.visible'),
        getSearchInput: () => cy.get(googleConstants.SEARCH_INPUT).should('be.visible'),
        getWikipediaResult: () => cy.contains('h3', googleConstants.WIKIPEDIA_RESULT).should('be.visible'),
    }

    visitGoogleBrowser = () => this.elements.visitGoogle()

    typeOnBrowserInput = () => {
        this.elements.getCookiesButton().click()
        this.elements.getSearchInput().type(googleConstants.MY_SEARCH)
    }

    clickOnWikipediaResult = () => this.elements.getWikipediaResult().click({ force: true })
}

module.exports = new Google()
