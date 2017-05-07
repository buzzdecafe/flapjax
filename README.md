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
const future = flapjax(config [, decorator]);
```

To use the `future`, please review the [Fluture API](https://github.com/fluture-js/Fluture)



