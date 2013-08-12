var mwcKernel       = require('mwc_kernel')
  , pluginSocketIo  = require('mwc_plugin_socket_io')
  , pluginChat      = require('mwc_plugin_chat');

//setting up the config
var mwc = mwcKernel(require('./config.json')[(process.env.NODE_ENV) ? (process.env.NODE_ENV) : 'development']);


mwc.usePlugin(pluginSocketIo);
mwc.usePlugin(pluginChat);

//extend application like mwc_core example
// vvv bad, syntax is outdated
////injecting plugin as an object
//mwc.usePlugin({
//  'extendCore': null, //can be ommited
//  'setAppParameters': null, //can be ommited
//  'setAppMiddlewares': null, //can be ommited
//  'extendAppRoutes': function (core) {
//    core.app.get('/newPlugin', function (req, res) {
//      res.send('New plugin is installed as object');
//    });
//  }
//});

/// ^^^ bad

//it is better to use extendingFunctions, they have more possibilities than one called from plugin

//mwc.extendApp
//mwc.extendMiddleware
//mwc.extendRoutes

//this will help http://ci.monimus.com/docs/#/api



mwc.start('app');//prepare application
mwc.mwc_sio.listenWithSocketIo(process.env.PORT || 3000);

//listening of MWC events. 'Coocoo!' is emmited by mwc_plugin_example every 5 seconds
// MWC.on('Coocoo!',function(message){
//     console.log('Coocoo! Coocoo! '+message);
// });

// MWC.on('honeypot accessed',function(message){
//     console.log('Attention! Somebody tries to hack us! '+message);
// });

//testing custom function defined on line 10
// console.log('Sum of 2 and 2 is ' + MWC.getSum(2, 2));

