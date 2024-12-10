import homePage from '../pages/homePage'
import cityPage from '../pages/cityPage'
import forecastPage from '../pages/forecastPage'


const Kyiv = 'Київ';
const sevenDays = 7;
const tenDays = 10;

describe('Weather forecast for Kyiv', () => {
    beforeEach(() => {
        cy.mockGeolocation(50.4501, 30.5234);
        homePage.visit()
    })

    it('should navigate through weather tabs and check responses and data', () => {
        homePage.searchCity(Kyiv)
        homePage.clickOnCity(Kyiv)

        // cityPage.checkResponse()

        // Крок 4: Перемикаємось на вкладку 7 днів
        cityPage.click7DaysTab()

        // Перевіряємо для кожного дня на вкладці 7 днів
        forecastPage.checkDailyForecast(sevenDays)

        // Крок 5: Перемикаємось на вкладку 10 днів
        cityPage.click10DaysTab()

        // Перевіряємо для кожного дня на вкладці 10 днів
        forecastPage.checkDailyForecast(tenDays)
    })
})
