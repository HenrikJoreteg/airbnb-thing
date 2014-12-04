var View = require('ampersand-view');
var templates = require('../templates');
var HowlView = require('../views/howl-detail');


module.exports = View.extend({
    template: templates.pages.howls,
    events: {
        'click [data-hook=action-howl]': 'handleHowlClick'
    },
    render: function () {
        this.renderWithTemplate();
        this.renderCollection(app.howls, HowlView, this.queryByHook('howls-container'));
    },
    handleHowlClick: function () {
        var textarea = this.queryByHook('new-howl');
        var val = textarea.value;

        if (val) {
            var model = app.howls.create({
                content: val,
                createdAt: new Date()
            }, {
                error: function () {
                    app.howls.remove(model);
                    textarea.value = val;
                    alert('it broke');
                }
            });

            textarea.value = '';
        }
    }
});
