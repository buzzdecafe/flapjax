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


// flajax :: Object -> Future XHR
export default function flapjax(opts) {
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
    xhr.send(opts.body);
    
    return () => {
      if (xhr.readyState < xhr.DONE) {
        xhr.abort();
      }
    };
  });
};

