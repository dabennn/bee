import versionCompare from '../../src/common/versionCompare.js';
const should = require('should');

describe(`test method 'versionCompare'`, function () {
  it('v1 is greater than v2', function () {
    versionCompare('1', '>', '1').should.be.false();
    versionCompare('1', '>', '1.0').should.be.false();
    versionCompare('1', '>', '1.0.0').should.be.false();
    versionCompare('1.0', '>', '1').should.be.false();
    versionCompare('1.0', '>', '1.0').should.be.false();
    versionCompare('1.0.0', '>', '1.0').should.be.false();
    versionCompare('1.1', '>', '1').should.be.true();
    versionCompare('1.1', '>', '1.1.1').should.be.false();
    versionCompare('1.1.0', '>', '1.1').should.be.false();
    versionCompare('0.1.2', '>', '0.1.2.3').should.be.false();
    versionCompare('0.1.2', '>', '0.2.2').should.be.false();
    versionCompare('0.1.2', '>', '1.1.2').should.be.false();
    versionCompare('10.20.30', '>', '10.20.30').should.be.false();
    versionCompare('10.20.30', '>', '10.20.30.0.0.0.1').should.be.false();
    versionCompare('0.10.20.30', '>', '10.20.30').should.be.false();
    versionCompare('9.1.1', '>', '9.1').should.be.true();
    versionCompare('9.1.1', '>', '9.1.0').should.be.true();
    versionCompare('9.1.1', '>', '9.2').should.be.false();
    versionCompare('9.1.1', '>', '9.2.1').should.be.false();
    versionCompare('9.1.1', '>', '9.0.2').should.be.true();
    versionCompare('9.2.1', '>', '9.1.2').should.be.true();
    versionCompare('9.2.1', '>', '9.1').should.be.true();
  });
  it('v1 is greater than or equal v2', function () {
    versionCompare('1', '>=', '1').should.be.true();
    versionCompare('1', '>=', '1.0').should.be.true();
    versionCompare('1', '>=', '1.0.0').should.be.true();
    versionCompare('1.0', '>=', '1').should.be.true();
    versionCompare('1.0', '>=', '1.0').should.be.true();
    versionCompare('1.0.0', '>=', '1.0').should.be.true();
    versionCompare('1.1', '>=', '1').should.be.true();
    versionCompare('1.1', '>=', '1.1.1').should.be.false();
    versionCompare('1.1.0', '>=', '1.1').should.be.true();
    versionCompare('0.1.2', '>=', '0.1.2.3').should.be.false();
    versionCompare('0.1.2', '>=', '0.2.2').should.be.false();
    versionCompare('0.1.2', '>=', '1.1.2').should.be.false();
    versionCompare('10.20.30', '>=', '10.20.30').should.be.true();
    versionCompare('10.20.30', '>=', '10.20.30.0.0.0.1').should.be.false();
    versionCompare('0.10.20.30', '>=', '10.20.30').should.be.false();
    versionCompare('9.1.1', '>=', '9.2').should.be.false();
    versionCompare('9.1.1', '>=', '9.2.1').should.be.false();
    versionCompare('9.1.1', '>=', '9.0.2').should.be.true();
    versionCompare('9.2.1', '>=', '9.1.2').should.be.true();
  });
  it('v1 is equal v2', function () {
    versionCompare('1', '=', '1').should.be.true();
    versionCompare('1', '=', '1.0').should.be.true();
    versionCompare('1', '=', '1.0.0').should.be.true();
    versionCompare('1.0', '=', '1').should.be.true();
    versionCompare('1.0', '=', '1.0').should.be.true();
    versionCompare('1.0.0', '=', '1.0').should.be.true();
    versionCompare('1.1', '=', '1').should.be.false();
    versionCompare('1.1', '=', '1.1.1').should.be.false();
    versionCompare('1.1', '=', '1.1.0').should.be.true();
    versionCompare('1.1.0', '=', '1.1').should.be.true();
    versionCompare('0.1.2', '=', '0.1.2.3').should.be.false();
    versionCompare('0.1.2', '=', '0.2.2').should.be.false();
    versionCompare('0.1.2', '=', '1.1.2').should.be.false();
    versionCompare('10.20.30', '=', '10.20.30').should.be.true();
    versionCompare('10.20.30', '=', '10.20.30.0.0.0.1').should.be.false();
    versionCompare('0.10.20.30', '=', '10.20.30').should.be.false();
    versionCompare('9.1.1', '=', '9.1.1').should.be.true();
    versionCompare('9.1.1', '=', '9.2').should.be.false();
    versionCompare('9.1.1', '=', '9.2.1').should.be.false();
    versionCompare('9.1.1', '=', '9.0.2').should.be.false();
    versionCompare('9.2.1', '=', '9.1.2').should.be.false();
    versionCompare('9.0', '=', '9.0').should.be.true();
  });
  it('v1 is less than v2', function () {
    versionCompare('1', '<', '1').should.be.false();
    versionCompare('1', '<', '1.0').should.be.false();
    versionCompare('1', '<', '1.0.0').should.be.false();
    versionCompare('1.0', '<', '1').should.be.false();
    versionCompare('1.0', '<', '1.0').should.be.false();
    versionCompare('1.0.0', '<', '1.0').should.be.false();
    versionCompare('1.1', '<', '1').should.be.false();
    versionCompare('1.1', '<', '1.1.1').should.be.true();
    versionCompare('1.1.0', '<', '1.1').should.be.false();
    versionCompare('0.1.2', '<', '0.1.2.3').should.be.true();
    versionCompare('0.1.2', '<', '0.1.3').should.be.true();
    versionCompare('0.1.2', '<', '0.2.2').should.be.true();
    versionCompare('0.1.2', '<', '1.1.2').should.be.true();
    versionCompare('10.20.30', '<', '10.20.30').should.be.false();
    versionCompare('10.20.30', '<', '10.20.30.0.0.0.1').should.be.true();
    versionCompare('0.10.20.30', '<', '10.20.30').should.be.true();
    versionCompare('9.1.1', '<', '9.1.2').should.be.true();
    versionCompare('9.1.1', '<', '9.2').should.be.true();
    versionCompare('9.1.1', '<', '9.2.1').should.be.true();
    versionCompare('9.1.1', '<', '9.0.2').should.be.false();
    versionCompare('9.2.1', '<', '9.1.2').should.be.false();
  });
  it('v1 is less than or equal v2', function () {
    versionCompare('1', '<=', '1').should.be.true();
    versionCompare('1', '<=', '1.0').should.be.true();
    versionCompare('1', '<=', '1.0.0').should.be.true();
    versionCompare('1.0', '<=', '1').should.be.true();
    versionCompare('1.0', '<=', '1.0').should.be.true();
    versionCompare('1.0.0', '<=', '1.0').should.be.true();
    versionCompare('1.1', '<=', '1').should.be.false();
    versionCompare('1.1', '<=', '1.1.1').should.be.true();
    versionCompare('1.1.0', '<=', '1.1').should.be.true();
    versionCompare('0.1.2', '<=', '0.1.2.3').should.be.true();
    versionCompare('0.1.2', '<=', '0.2.2').should.be.true();
    versionCompare('0.1.2', '<=', '1.1.2').should.be.true();
    versionCompare('10.20.30', '<=', '10.20.30').should.be.true();
    versionCompare('10.20.30', '<=', '10.20.30.0.0.0.1').should.be.true();

    versionCompare('0.10.20.30', '<=', '10.20.30').should.be.true();
    versionCompare('9.1.1', '<=', '9.2').should.be.true();
    versionCompare('9.1.1', '<=', '9.2.1').should.be.true();
    versionCompare('9.1.1', '<=', '9.0.2').should.be.false();
    versionCompare('9.2.1', '<=', '9.1.2').should.be.false();
  });
})
