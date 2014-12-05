var View = require('ampersand-view');
var templates = require('../templates');


module.exports = View.extend({
    bindings: {
        'model.timeAgo': {
            type: 'text',
            hook: 'time-ago'
        }
    },
    template: templates.includes.howlDetail
});
