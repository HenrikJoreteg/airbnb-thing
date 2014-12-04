var View = require('ampersand-view');
var templates = require('../templates');
var ViewSwitcher = require('ampersand-view-switcher');


module.exports = View.extend({
    template: templates.body,
    autoRender: true,
    events: {
        'click a[href]': 'handleLinkClick'
    },
    initialize: function () {
        this.listenTo(app.router, 'page', this.handlePage);
    },
    render: function () {
        this.renderWithTemplate(this);
        this.pageSwitcher = new ViewSwitcher(this.queryByHook('page-container'));
    },
    handlePage: function (page) {
        this.pageSwitcher.set(page);
    },
    handleLinkClick: function (event) {
        var target = event.target;
        var isLocal = target.origin === location.origin;
        
        if (isLocal && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
            app.router.history.navigate(target.pathname, {trigger: true});
            event.preventDefault();
        }
    }
});
