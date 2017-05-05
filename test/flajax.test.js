;(function (expect, flajax) {
  'use strict'

  var getMaria = {
    method: 'GET',
    url: 'http://localhost:3000/users/maria',
    headers: {
      'Content-type': 'application/json'
    }
  };

  function id(x) { return x; }

  describe('Flajax', function() {
    it('exists', function() {
      expect(flajax).to.be.a.function;
    });

    it('takes options and a decorator function and returns a Task', function() {
      expect(flajax(getMaria, id)).to.be.an.object;
    });
  });
})(window.chai.expect, window.flajax);
