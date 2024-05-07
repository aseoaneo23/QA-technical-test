import google from "../../pages/google"
import wikipedia from "../../pages/wikipedia"

Given('an user in the Google page', () => {
    google.visitGoogleBrowser()
})

Given('the user searches "Automatización"', () => {
    google.typeOnBrowserInput()
})

Given('the user accesses to Wikipedia result', () => {
    google.clickOnWikipediaResult()
})

When('the user searches the year of the first automatic process', () => {
    wikipedia.searchTheYear()
})

Then('the user should be able to see the relevant information', () => {
    wikipedia.checkTheInformation()
    wikipedia.doAScreenshot()
})