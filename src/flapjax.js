// module flajax

import Future from 'fluture/es5';

const setHeaders = (headers, xhr) => { 
  Object.keys(headers).forEach(k => {
    xhr.setRequestHeader(k, headers[k]);
  });
  return xhr; 
};

const eventNames = [
  'loadstart', 
  'progress', 
  'abort', 
  'error', 
  'load', 
  'timeout', 
  'loadend' 
];

const setEvents = (events, xhr) => {
  eventNames.forEach(name => {
    if (events[name]) {
      xhr.addEventListener(name, events[name]);
    }
  });
  return xhr;
};

const id = x => x;


// type opts = {
//   url : String,
//   method : String,
//   timeout : Number,
//   withCredentials : Bool | undefined
//   ...
//   headers : { String : String }
//   events : { 
//     loadstart : Function (Event) -> (),
//     progress : Function (Event) -> (),
//     abort : Function (Event) -> (),
//     error : Function (Event) -> (),
//     load : Function (Event) -> (),
//     timeout : Function (Event) -> (),
//     loadend : Function (Event) -> (),
//   }
// }
//
// flajax :: (Object. (XHR -> XHR)) -> Task ((a -> ()), (b -> ())) -> ()
export default function flapjax(opts, dec) {
  const decorator = dec || id;
  return new Future((reject, resolve) => {

    const onStateChange = xhr => function _onState() {
      if (xhr.readyState === xhr.DONE) {
        xhr.removeEventListener('readystatechange', _onState, false);
    
        if (xhr.status >= 200 && xhr.status < 300) { resolve(xhr);} 
        else { reject(xhr); }
      }
    };

    var xhr = new XMLHttpRequest();
    xhr.open(opts.method, opts.url, true);
    xhr.withCredentials = !!opts.withCredentials;
    xhr.timeout = opts.timeout || 0;
    xhr.responseType = opts.responseType || "text";
    xhr = setHeaders(opts.headers || {}, xhr);
    xhr = setEvents(opts.events || {}, xhr);
    xhr.addEventListener('readystatechange', onStateChange(xhr), false);
    xhr = decorator(xhr);
    xhr.send();
  });
};

