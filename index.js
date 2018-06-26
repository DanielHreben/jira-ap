var initAPPromise

function initAP (options) {
  if (initAPPromise) {
    return initAPPromise
  }

  var params = new window.URLSearchParams(window.location.search)
  var baseUrl = params.get('xdm_e') + params.get('cp')

  var script = document.createElement('script')
  script.src = baseUrl + '/atlassian-connect/all.js'

  if (options) {
    const formattedOptions = Object.keys(options)
      .map(function (key) { return key + ':' + options[key] })
      .join(';')

    script.setAttribute('data-options', formattedOptions)
  }

  document.getElementsByTagName('head')[0].appendChild(script)

  initAPPromise = new Promise(function (resolve, reject) {
    script.onload = function () {
      resolve(window.AP)
    }

    script.onerror = reject
  })

  return initAPPromise
}

module.exports = initAP
