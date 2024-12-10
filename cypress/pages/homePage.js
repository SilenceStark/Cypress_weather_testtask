class HomePage {
    visit() {
        cy.visit('/')
    }

    searchCity(city) {
        cy.get("input[type='search']")
            .type(city)
            .should('have.value', city)
    }

    clickOnCity(city) {
        cy.intercept('GET', '**/stats/visit/**')
            .as('weatherData');

        cy.get("span")
            .contains(city)
            .click()

        cy.wait('@weatherData')
            .its('response.statusCode')
            .should('eq', 200)
    }
}

export default new HomePage()
