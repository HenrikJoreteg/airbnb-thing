var Model = require('ampersand-model');
var moment = require('moment');


module.exports = Model.extend({
    props: {
        id: 'string',
        content: 'string',
        createdAt: 'date',
        user: 'object'
    },
    ajaxConfig: function () {
        return {
            headers: {
                'Auth-Token': app.me.token
            }
        }
    }
});
