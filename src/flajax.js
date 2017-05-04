// module flajax

import * as Task from 'data.task';

const safeParse = xhr => {
  try {
    return JSON.parse(xhr.responsetext);
  } catch (e) {
    return xhr.responseText;
  }
}

export function flajax(opts) {
  return new Task((reject, resolve) => {

    const onStateChange = xhr => function _onState() {
      if (xhr.readyState === xhr.DONE) {
        xhr.removeEventListener('readystatechange', _onState, false);
    
        if (xhr.status >= 200 && xhr.status < 300) { resolve(safeParse(xhr));} 
        else { reject(safeParse(xhr)); }
      }
    };

    var xhr = new XMLHttpRequest();
    xhr.open(type, opts.url, true);
    xhr.withCredentials = opts.hasOwnProperty('withCredentials');
    setHeaders(xhr, opts.headers);
    xhr.addEventListener('readystatechange', onStateChange(xhr), false);
    xhr.send();

  });
};


