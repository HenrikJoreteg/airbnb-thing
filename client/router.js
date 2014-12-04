var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var HowlsPage = require('./pages/howls');
var qs = require('qs');


module.exports = Router.extend({
    routes: {
        '': 'home',
        'howls': 'howls',
        'login': 'login',
        'auth/callback': 'authCallback'
    },

    home: function () {
        this.trigger('page', new HomePage());
    },

    howls: function () {
        this.trigger('page', new HowlsPage({
            model: app.me
        }));
    },

    login: function () {
        var baseUrl = 'http://wolves.technology/authorize?';
        var query = {
            redirect_uri: window.location.origin + '/auth/callback'
        };

        window.location = baseUrl + qs.stringify(query);
    },
    authCallback: function () {
        var hash = window.location.hash.slice(1);
        var token = qs.parse(hash).access_token;

        app.me.token = token;
        this.redirectTo('/');
    }
});










