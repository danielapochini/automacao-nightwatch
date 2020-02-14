module.exports = {

    before: (browser) => {
        browser.resizeWindow(1920,1080)
    },

    after: (browser) => {
        browser.end();
    },

    'senha incorreta': (browser) => {
        let login = browser.page.login()
        login
            .with('zumbi@dospalmares.com.br', '123abc')
            .waitForElementVisible('@alertDanger', 3000)
            .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')
    },
    'não cadastrado': (browser) => {
        let login = browser.page.login()
        login
            .with('404@yahoo.com', '123abc')    
            .waitForElementVisible('@alertDanger', 3000)
            .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')
    },
    'e-mail não informado': (browser) => {
        let login = browser.page.login()
        login
            .with('', '123abc')
            .waitForElementVisible('@alertInfo', 3000)
            .assert.containsText('@alertInfo', 'Opps. Cadê o email?')
    },
    'senha não informada': (browser) => {
        let login = browser.page.login()
        login
            .with('teste@teste.com', '')
            .waitForElementVisible('@alertInfo', 3000)
            .assert.containsText('@alertInfo', 'Opps. Cadê a senha?')
    }
}