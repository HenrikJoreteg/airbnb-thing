var View = require('ampersand-view');
var templates = require('../templates');
var HowlView = require('../views/howl-detail');


module.exports = View.extend({
    template: templates.pages.howls,
    render: function () {
        this.renderWithTemplate();
        this.renderCollection(app.howls, HowlView, this.queryByHook('howls-container'));
    }
});
