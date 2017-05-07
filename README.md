# Flapjax

Monadic Ajax module

## Usage

```js
// type Config = {
//   url : String,
//   method : String,
//   responseType [OPTIONAL] : String
//   timeout [OPTIONAL] : Number,
//   withCredentials [OPTIONAL] : Bool | undefined
//   headers [OPTIONAL] : { String : String }  
//   events [OPTIONAL] : { 
//     loadstart : (Event) -> (),
//     progress : (Event) -> (),
//     abort : (Event) -> (),
//     error : (Event) -> (),
//     load : (Event) -> (),
//     timeout : (Event) -> (),
//     loadend : (Event) -> (),
//   }
// }
//
// flapjax :: (Config &#x29d8;, (XHR -> XHR)&#x29d9;?) -> Future (&alpha;, &beta;)
const future = flapjax(config [, decorator]);
```

To use the `future`, please review the [Fluture API](https://github.com/fluture-js/Fluture)



