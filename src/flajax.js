// module flajax

import {default as Task} from 'data.task';

const safeParse = xhr => {
  try {
    return JSON.parse(xhr.responsetext);
  } catch (e) {
    return xhr.responseText;
  }
}

const setHeaders = (headers, xhr) => { return xhr; };

export default function flajax(opts) {
  return new Task((reject, resolve) => {

    const onStateChange = xhr => function _onState() {
      if (xhr.readyState === xhr.DONE) {
        xhr.removeEventListener('readystatechange', _onState, false);
    
        if (xhr.status >= 200 && xhr.status < 300) { resolve(safeParse(xhr));} 
        else { reject(safeParse(xhr)); }
      }
    };

    var xhr = new XMLHttpRequest();
    xhr.open(opts.method, opts.url, true);
    xhr.withCredentials = opts.hasOwnProperty('withCredentials');
    xhr = setHeaders(opts.headers, xhr);
    xhr.addEventListener('readystatechange', onStateChange(xhr), false);
    xhr.send();
  });
};


