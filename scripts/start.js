'use strict';


  var merchantAPI = require('../index.js');
  merchantAPI.start({
    port: process.env.PORT || 5000,
    bind: process.env.BIND || '127.0.0.1'
  });
  if (process.env.RPC) {
    merchantAPI.startRPC({
      api_code: process.env.API_CODE
    });
  }

