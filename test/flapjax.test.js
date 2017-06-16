;(function (expect, flapjax) {
  'use strict'

  var maria = {
    method: 'GET',
    url: 'http://localhost:3000/user/maria',
    headers: {
      'Content-type': 'application/json'
    }
  };

  function id(x) { return x; }

  describe('flapjax', function() {
    it('exists', function() {
      expect(flapjax).to.be.a.function;
    });

    it('takes options and returns a Future', function() {
      var future = flapjax(maria);
      expect(future).to.be.an.object;
      expect(future.constructor['@@type']).to.equal("fluture/Future");
    });
    
    it('', function() {
      
    });
  });
})(window.chai.expect, window.flapjax);
