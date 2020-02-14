module.exports = {
    'login com sucesso': (browser) => {
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        browser.resizeWindow(1920, 1080)

        login.with('zumbi@dospalmares.com.br', 'pwd123')
        
        sidebar
            .waitForElementVisible('@userInfo', 3000)
            .assert.containsText('@userInfo', 'Quilombo')
            .end();
    }
}