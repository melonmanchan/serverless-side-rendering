import CPD from 'chrome-remote-interface'

module.exports.render = async (event, context, callback, chrome) => {
  try {
    const asd = await CPD.Version()
  } catch (error) {
      callback(null, { error })
    return
  }

  CDP.Version()
    .then((versionInfo) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          versionInfo,
          asd,
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
