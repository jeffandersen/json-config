var assert = require("assert");
var config;

describe('json-config autoload', function() {
  beforeEach(function(done) {
    if (process.env.NODE_ENV) delete process.env.NODE_ENV;
    if (process.env.CONFIG_DIR) delete process.env.CONFIG_DIR;

    done();
  });
  it('should return env local when no env var is passed', function() {

    console.log(process.cwd());
    config = require('../index')({
      config_dir: process.cwd() + '/test/config/'
    });

    assert.deepEqual(config, {
      'env': 'local'
    });
  });
  it('should return env production when process.env.NODE_ENV is set to production', function() {

    process.env.NODE_ENV = 'production';

    config = require('../index')({
      config_dir: process.cwd() + '/test/config/'
    });

    assert.deepEqual(config, {
      'env': 'production'
    });
  });
  it('should error should a file contains invalid JSON', function() {

    try {
      config = require('../index')({
        config_dir: process.cwd() + '/test/config/',
        default_env: 'invalid'
      });
    } catch(e) {
      config = null;
    }

    assert.equal(null, config);
  });
  it('should error should a file cannot be found', function() {

    try {
      config = require('../index')();
    } catch(e) {
      config = null;
    }

    assert.equal(null, config);
  });
});
