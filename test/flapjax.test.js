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

  describe('Flajax', function() {
    it('exists', function() {
      expect(flapjax).to.be.a.function;
    });

    it('takes options and returns a Task', function() {
      var task = flapjax(maria);
      expect(task).to.be.an.object;
      ['fork', 'cleanup', 'ap', 'bimap', 'cata', 'chain', 'concat',
       'empty', 'fold', 'map', 'of', 'orElse', 'rejected',
       'rejectedMap', 'swap'].forEach(function(method) {
        expect(task[method]).to.be.a.function;
      });
    });
    
    it('takes an optional decorator function from XHR-> XHR', function(done) {
      function dec(xhr) {
        xhr.withCredentials = true;
        return xhr;
      }
      flapjax(maria, dec).fork(
        function(x) {
          expect(x.withCredentials).to.be.true;
          done();
        },
        function(x) {
          expect(x.withCredentials).to.be.true;
          done();
        });
    });
  });
})(window.chai.expect, window.flapjax);
