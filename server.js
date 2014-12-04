var hapi = require('hapi');
var moonboots = require('moonboots_hapi');
var templatizer = require('templatizer');


var server = hapi.createServer(3000, '0.0.0.0');

server.pack.register({
    plugin: moonboots,
    options: {
        appPath: '/{p*}',
        moonboots: {
            main: __dirname + '/client/app.js',
            developmentMode: true,
            beforeBuildJS: function () {
                templatizer(__dirname + '/templates', __dirname + '/client/templates.js');
            },
            stylesheets: [
                __dirname + '/node_modules/bootstrap/dist/css/bootstrap.css'
            ]
        }
    }   
}, function () {
    server.start();
});
