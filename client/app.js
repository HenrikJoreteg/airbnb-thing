var MainView = require('./views/main');
var domready = require('domready');
var Router = require('./router');
var Howls = require('./models/howl-collection');
var Me = require('./models/me');


window.app = {
    init: function () {
        this.router = new Router();
        this.me = new Me();
        this.howls = new Howls();

        domready(function () {
            this.view = new MainView({
                el: document.body
            });

            this.router.history.start({pushState: true});
        }.bind(this));
    }
};

window.app.init();
