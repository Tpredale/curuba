const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
  title: String,
  categories: String,
  content: String,
  recipeId: String,
  owner: {type: Schema.Types.ObjectId, ref: 'User'}

});

const notes = mongoose.model('notes', notesSchema);

module.exports = notes;