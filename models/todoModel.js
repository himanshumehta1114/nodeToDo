var mongoose = require('mongoose');

var schema = mongoose.Schema;

var todoSchema = new schema({
    username : String,
    todo : String,
    isDone : Boolean,
    hasAttachment : Boolean
});

var todos = mongoose.model('Todos',todoSchema);

module.exports = todos;