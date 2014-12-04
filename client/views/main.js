var View = require('ampersand-view');
var templates = require('../templates');
var ViewSwitcher = require('ampersand-view-switcher');


module.exports = View.extend({
    template: templates.body,
    autoRender: true,
    initialize: function () {
        this.listenTo(app.router, 'page', this.handlePage);
    },
    render: function () {
        this.renderWithTemplate(this);
        this.pageSwitcher = new ViewSwitcher(this.queryByHook('page-container'));
    },
    handlePage: function (page) {
        this.pageSwitcher.set(page);
    }
});
