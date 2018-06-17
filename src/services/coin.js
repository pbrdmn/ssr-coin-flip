require('es6-promise').polyfill()
require('isomorphic-fetch')

export default async function getCoin() {
  // fetch coin from an api
  const coin = await fetch('https://brd.mn/coin/')
    .then(response => response.json())
    .catch((err) => {
      console.error(err)
      return { face: 'UKNOWN' }
    })
  return coin
}
