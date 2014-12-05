var Model = require('ampersand-model');
var moment = require('moment');


module.exports = Model.extend({
    props: {
        id: 'string',
        content: 'string',
        createdAt: 'date',
        user: 'object'
    },
    derived: {
        timeAgo: {
            deps: ['createdAt'],
            fn: function () {
                return moment(this.createdAt).fromNow();
            }
        }
    },
    ajaxConfig: function () {
        return {
            headers: {
                'Auth-Token': app.me.token
            }
        }
    }
});
