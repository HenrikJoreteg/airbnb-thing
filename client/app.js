var MainView = require('./views/main');
var domready = require('domready');
var Router = require('./router');
var Howls = require('./models/howl-collection');


window.app = {
    init: function () {
        this.router = new Router();

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
