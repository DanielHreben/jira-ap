# jira-ap

[![Greenkeeper badge](https://badges.greenkeeper.io/DanielHreben/jira-ap.svg)](https://greenkeeper.io/)
Load Jira AP JS API dynamically

```javascript
import initAP from 'jira-ap'

initAP({sizeToParent: true}).then(AP => {
  AP.flag.create({
    title: 'Successfully created a flag.',
    body: 'This is a flag.',
    type: 'success',
    actions: {
      'actionkey': 'Click me'
    }
  })
})
```

Code based on this article https://developer.atlassian.com/static/connect/docs/latest/concepts/javascript-api.html#all.js

You may need some polyfills:
  * [url-search-params-polyfill](https://www.npmjs.com/package/url-search-params-polyfill)
  * [promise-polyfill](https://www.npmjs.com/package/promise-polyfill)
