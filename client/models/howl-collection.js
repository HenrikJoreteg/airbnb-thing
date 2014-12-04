var Collection = require('ampersand-rest-collection');
var Howl = require('./howl');


module.exports = Collection.extend({
    model: Howl,
    initialize: function () {
        this.fetch();
    },
    url: 'http://wolves.technology/howls',
    ajaxConfig: function () {
        return {
            headers: {
                'Auth-Token': app.me.token
            }
        }
    }
});
