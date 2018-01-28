const should = require('chai').should();

describe('HelloWorld', function () {
  const helloWorld = 'ello luv';
  it ('should equal "ello luv"', function () {
    helloWorld.should.equal('ello luv');
  });
});