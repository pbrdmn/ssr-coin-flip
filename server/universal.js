const path = require('path')
const fs = require('fs')

const React = require('react')
const { Provider } = require('react-redux')
const { renderToString } = require('react-dom/server')
const { StaticRouter } = require('react-router-dom')

const { default: configureStore } = require('../src/store')
const { default: App } = require('../src/containers/App')
const { default: getCoin } = require('../src/services/coin')

module.exports = async function universalLoader(req, res) {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html')

  const coin = await getCoin()
  const state = (req.url === '/') ? { coin } : {}

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('read err', err)
      return res.status(404).end()
    }

    const context = {}
    const store = configureStore(state)
    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter
          location={req.url}
          context={context}
        >
          <App />
        </StaticRouter>
      </Provider>)

    if (context.url) {
      // Somewhere a `<Redirect>` was rendered
      res.redirect(301, context.url)
    } else {
      // we're good, send the response
      const RenderedApp = htmlData
        .replace('SSR_CONTENT', markup)
        .replace('SSR_STATE', JSON.stringify(state))
      res.send(RenderedApp)
    }
  })
}

