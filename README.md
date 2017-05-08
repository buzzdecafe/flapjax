# Flapjax

Monadic Ajax module

## Usage

```js
// type Config = {
//   url : String,
//   method : String,
//   responseType [OPTIONAL] : String
//   timeout [OPTIONAL] : Number,
//   withCredentials [OPTIONAL] : Bool
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
// flapjax :: Config -> Future XHR
const future = flapjax(config);
```

To use the `future`, please review the [Fluture API](https://github.com/fluture-js/Fluture)



