var Model = require('ampersand-model');
var moment = require('moment');


module.exports = Model.extend({
    initialize: function () {
        this.updateTimeAgo();
    },
    props: {
        id: 'string',
        content: 'string',
        createdAt: 'date',
        user: 'object'
    },
    session: {
        timeAgo: 'string'
    },
    updateTimeAgo: function () {
        this.timeAgo = moment(this.createdAt).fromNow();
    },
    ajaxConfig: function () {
        return {
            headers: {
                'Auth-Token': app.me.token
            }
        }
    }
});
