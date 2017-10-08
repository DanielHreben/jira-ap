# jira-ap
Load Jira AP JS API dynamically

```javascript
import initAP from 'AP'

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