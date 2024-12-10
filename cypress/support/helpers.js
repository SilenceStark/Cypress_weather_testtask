export const mockGeolocation = (latitude = 50.4501, longitude = 30.5234) => {
    cy.window().then((win) => {
        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((success) => {
            success({
                coords: {
                    latitude,
                    longitude,
                },
            });
        });

        cy.stub(win.navigator.geolocation, 'watchPosition').callsFake((success) => {
            success({
                coords: {
                    latitude,
                    longitude,
                },
            });
        });
    });
};
