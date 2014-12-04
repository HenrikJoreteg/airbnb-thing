var MainView = require('./views/main');
var domready = require('domready');


window.app = {
    init: function () {
        domready(function () {
            this.view = new MainView({
                el: document.body
            });
        }.bind(this));
    }
};

window.app.init();
