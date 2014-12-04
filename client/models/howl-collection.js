var Collection = require('ampersand-rest-collection');
var Howl = require('./howl');


module.exports = Collection.extend({
    model: Howl,
    initialize: function () {
        var self = this;
        this.fetch();

        setInterval(function () {
            self.fetch();
        }, 5000);
    },
    url: 'http://wolves.technology/howls',
    ajaxConfig: function () {
        return {
            headers: {
                'Auth-Token': app.me.token
            }
        }
    },
    comparator: function (model) {
        return -model.createdAt;
    }
});
