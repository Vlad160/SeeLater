const mongoose = require('mongoose');
BookmarkSchema = new mongoose.Schema({
    url: String,
    x: Number,
    y: Number,
});
module.exports = mongoose.model('Bookmarks', BookmarkSchema);