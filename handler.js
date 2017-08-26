const CDP = require('chrome-remote-interface')

module.exports.render = (event, context, callback, chrome) => {
  CDP.Version()
    .then((versionInfo) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          versionInfo,
          chrome,
        }),
      })
    })
    .catch((error) => {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          error,
        }),
      })
    })
}
