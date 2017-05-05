# Flapjax

Monadic Ajax module

## Usage

```js
// type Config = {
//   method: String
//   url: String
//   ...
//   headers: {
//     String : String
//   }
// }

// flapjax :: Config -> (XHR -> XHR)? -> Task (&alpha;, &beta;)
const task = flapjax(config [, decorator]);
```

To use the task, please review the [Task API](http://origamitower.github.io/folktale/en/folktale.data.task.html).



