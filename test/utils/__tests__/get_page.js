var expect = require('expect.js');
var getUrl = require('../get_url');

describe('getUrl', function () {
  it('should convert to a url', function () {
    var url = getUrl({
      protocol: 'http',
      hostname: 'localhost',
    }, {
      pathname: 'foo'
    });

    expect(url).to.be('http://localhost/foo');
  });

  it('should convert to a url with port', function () {
    var url = getUrl({
      protocol: 'http',
      hostname: 'localhost',
      port: 9220
    }, {
      pathname: 'foo'
    });

    expect(url).to.be('http://localhost:9220/foo');
  });

  it('should convert to a secure hashed url', function () {
    expect(getUrl({
      protocol: 'https',
      hostname: 'localhost',
    }, {
      pathname: 'foo',
      hash: 'bar'
    })).to.be('https://localhost/foo#bar');
  });
});
