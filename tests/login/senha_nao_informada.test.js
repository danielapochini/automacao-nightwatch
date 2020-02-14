module.exports = {
    'senha não informada': (browser) => {
        let login = browser.page.login()
        login
            .with('teste@teste.com', '')
            .expectAlertInfo('Opps. Cadê a senha?')
    }
}