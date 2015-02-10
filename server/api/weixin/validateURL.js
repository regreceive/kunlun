/**
 * Created by extra on 06/02/2015.
 */
'use strict';

var config = require('./config');

module.exports = function(req, res) {
  var signature = req.param('signature');
  var timestamp = req.param('timestamp');
  var nonce = req.param('nonce');
  var echostr = req.param('echostr');

  var str = [config.token, timestamp, nonce].sort().join('');
  var shasum = require('crypto').createHash('sha1');
  shasum.update(str);
  str = shasum.digest('hex');

  if ( str === signature ) {
    res.send(echostr);
  } else {
    res.send("1111111111111");
  }
};
