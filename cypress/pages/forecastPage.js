

class ForecastPage {
    checkDailyForecast(daysToCheck) {
        for (let i = 1; i < daysToCheck; i++) {
            const targetDate = new Date();
            targetDate.setDate(targetDate.getDate() + i);
            const targetDateFormatted = targetDate.toISOString().split('T')[0];
            cy.intercept('GET', '**/stats/visit/**').as('weatherRequest');
            cy.get(`a[href*="${targetDateFormatted}"]`).click();
            cy.wait('@weatherRequest').its('response.statusCode').should('eq', 200);
            cy.get(`a[href*="${targetDateFormatted}"]`)
                .should('contain.text', targetDate.toLocaleDateString('uk-UA', { weekday: 'long' }))
                .and('contain.text', targetDate.getDate())
                .and('contain.text', targetDate.toLocaleDateString('uk-UA', { month: 'long' }).slice(0,3));
        }
    }
}

export default new ForecastPage()
