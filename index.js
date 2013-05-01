var fs = require('fs');

var config =  {
  load: function(opts) {
    if (!opts) opts = {};

    var CONFIG_DIR = process.env.CONFIG_DIR || opts.config_dir || __dirname + '/../config/';
    var CONFIG_ENV = process.env.NODE_ENV || opts.default_env || 'local';
    var CONFIG_PATH = CONFIG_DIR + CONFIG_ENV + '.json';

    try {
      var configJSON = fs.readFileSync(CONFIG_PATH, 'utf-8');
    } catch(e) {
      throw new Error('Cannot load config file: ' + CONFIG_PATH);
    }

    try {
      var configData = JSON.parse(configJSON);
    } catch(e) {
      throw new Error('Invalid config JSON: ' + CONFIG_PATH);
    }

    return configData;
  }
};

module.exports = config.load;
