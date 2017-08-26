import Cdp from 'chrome-remote-interface'

async function getPageHTML (url) {
  const client = await Cdp()

  const {Network, Page, Runtime} = client

  try {
    await Promise.all([Network.enable(), Page.enable()])
    await Page.navigate({ url })
    await Page.loadEventFired()

    const result = await Runtime.evaluate({
      expression: 'document.documentElement.outerHTML'
    })

    const html = result.result.value

    return html
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
}

export const render = async (event, context, callback) => {
  const url = event.query && event.query.url
  if (url) {
    const body = await getPageHTML(url)
    callback(null, body)
  } else {
    callback(null, 'URL is missing')
  }
}
