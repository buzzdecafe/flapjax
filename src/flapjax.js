// module flajax

import {default as Task} from 'data.task';


const setHeaders = (headers, xhr) => { 
  Object.keys(headers).forEach(k => {
    xhr.setRequestHeader(k, headers[k]);
  });
  return xhr; 
};

const id = x => x;

// type opts = {
//   url : String,
//   method: String.
//   withCredentials: Bool | undefined
//   headers: { String : String }
// }
//
// flajax :: (Object. (XHR -> XHR)) -> Task ((a -> ()), (b -> ())) -> ()
export default function flapjax(opts, dec) {
  const decorator = dec || id;
  return new Task((reject, resolve) => {

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
    xhr = setHeaders(opts.headers, xhr);
    xhr.addEventListener('readystatechange', onStateChange(xhr), false);
    xhr = decorator(xhr);
    xhr.send();
  });
};


