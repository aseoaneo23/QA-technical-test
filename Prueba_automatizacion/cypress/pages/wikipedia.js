import { wikipediaConstants } from "../constants"

class Wikipedia {
    elements = {
        checkUrl :() => cy.url().should('eq', wikipediaConstants.EXPECTED_PATH),
        getSectiobutton : () => cy.get(wikipediaConstants.HISTORY_SECTION_BTN).should('be.visible'),
        getInformationP : () => cy.contains('p',wikipediaConstants.INFO_KEYWORDS).should('be.visible')
    }

    checkOnWikipediaPage = () => this.elements.checkUrl()
    
    clickOnHistorySection = () => this.elements.getSectiobutton().click()

    searchTheYear = () => {
        this.checkOnWikipediaPage()
        this.clickOnHistorySection()
    }

    checkTheInformation = () =>{
        this.elements.getInformationP()
    }

    doAScreenshot = () => cy.screenshot('Captura Wikipedia', {capture: "viewport"})

}

module.exports = new Wikipedia()