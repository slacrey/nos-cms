'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  baseUrl: '"http://127.0.0.1:8080/jeecmsv8f"',
  appId:'"3452032801248943"',
  aesKey:'"mrDqopO3FhAV6jkH"',
  ivKey:'"DqtrEqFGYj6Whfii"',
  appKey:'"fwUbZOa6Dl6pcTt7imS7ZNLPDEKNPZYi"',
})
