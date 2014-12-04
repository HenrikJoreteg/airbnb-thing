var Model = require('ampersand-model');


module.exports = Model.extend({
    props: {
        id: 'string',
        content: 'string',
        createdAt: 'date',
        user: 'object'
    }
});
