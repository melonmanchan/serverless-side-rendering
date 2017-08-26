if (!global._babelPolyfill) {
   require('babel-polyfill');
}

const CDP = require('chrome-remote-interface')

const render = async (event, context, cb, chrome) => {
  try {
    const version = await CDP.Version()
    cb(null, { statusCode: 200,
              body: JSON.stringify({
                version,
                chrome,
              }),
    })
  } catch (e) {
    cb(null, {
      statusCode: 500,
      body: JSON.stringify({
        error,
      }),
    })
  }
};

module.exports.render = render
