module.exports = {
    'e-mail não informado': (browser) => {
        let login = browser.page.login()
        login
            .with('', '123abc')
            .expectAlertInfo('Opps. Cadê o email?')
    }
    
}