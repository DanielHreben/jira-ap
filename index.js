let initAPPromise

function initAP (options) {
  if (initAPPromise) {
    return initAPPromise
  }

  const params = new window.URLSearchParams(window.location.search)
  const baseUrl = params.get('xdm_e') + params.get('cp')

  const script = document.createElement('script')
  script.src = `${baseUrl}/atlassian-connect/all.js`

  if (options) {
    script.setAttribute('data-options', options)
  }

  document.getElementsByTagName('head')[0].appendChild(script)

  initAPPromise = new Promise((resolve, reject) => {
    script.onload = () => resolve(window.AP)
    script.onerror = reject
  })

  return initAPPromise
}

export default initAP
