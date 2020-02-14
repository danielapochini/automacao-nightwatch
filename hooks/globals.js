module.exports = {
    afterEach: (browser, done) => {
        browser.end()
        done()
    },
}