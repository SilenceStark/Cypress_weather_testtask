class CityPage {


    click7DaysTab() {
        cy.get('a')
            .contains("Тиждень")
            .click()
    }

    click10DaysTab() {
        cy.get('a')
            .contains("10 днів")
            .click()
    }
}

export default new CityPage()
