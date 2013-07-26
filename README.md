json-config
========

Node.js module to auto load JSON config files based on process.env, and fall back to preset options or defaults

#### Default Usage

```JS
var config = require('json-config')();
// Will require: ./config/local.json
```

#### Override default values

```JS
var config = require('json-config')({
  config_dir: "/path/to/config",
  default_env: "development"
});
// Will require: /path/to/config/development.json
```

## Installation

```
$ npm install json-config
```

===================================

[![Build Status](https://travis-ci.org/jeffandersen/json-config.png?branch=master)](https://travis-ci.org/jeffandersen/json-config)
