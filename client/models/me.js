var Model = require('ampersand-model');


module.exports = Model.extend({
    initialize: function () {
        if (localStorage.token) {
            this.token = localStorage.token;
        }

        this.on('change:token', this.handleTokenChange, this);
    },
    session: {
        token: 'string'
    },
    handleTokenChange: function () {
        localStorage.token = this.token;
    },
    derived: {
        loggedIn: {
            deps: ['token'],
            fn: function () {
                return !!this.token;
            }
        }
    }
});
