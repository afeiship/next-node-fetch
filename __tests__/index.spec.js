(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxNodeFetch = require('../src/next-node-fetch');

  describe('NxNodeFetch.methods', function() {
    test('fetch:get https://www.baidu.com', function(done) {
      NxNodeFetch.get('https://www.baidu.com', null, { responseType: 'text' }).then((res) => {
        expect(res.includes('www.baidu.com')).toBe(true);
        done();
      });
    });

    test('fetch:get github-api', function(done) {
      NxNodeFetch.get('https://api.github.com/users/afeiship').then((res) => {
        expect(typeof res).toBe('object');
        expect(res.login).toBe('afeiship');
        // console.log(res);
        done();
      });
    });

  });
})();
