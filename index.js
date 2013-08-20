var mwcKernel       = require('kabam-kernel')
  , pluginSocketIo  = require('mwc_plugin_socket_io')
  , pluginChat      = require('mwc_plugin_chat')
  , express         = require('express')
  , path            = require('path');

//setting up the config
var mwc = mwcKernel(require('./config.json')[(process.env.NODE_ENV) ? (process.env.NODE_ENV) : 'development']);


mwc.usePlugin(pluginSocketIo);
mwc.usePlugin(pluginChat);
mwc.extendMiddleware(function(core){
  return express.static(path.join(__dirname, 'app'));
});
mwc.start('app');//prepare application
mwc.mwc_sio.listenWithSocketIo(process.env.PORT || 80);
