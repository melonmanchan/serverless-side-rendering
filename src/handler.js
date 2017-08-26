import CPD from 'chrome-remote-interface'

export const render = async (event, context, callback, chrome) => {
  const versionInfo = await CPD.Version()

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      versionInfo,
      chrome,
    }),
  })
}
