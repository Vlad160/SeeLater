const Bookmarks = require('./models/Bookmark');

function postBookmark(rawBookmark) {
    const bookmark = new Bookmarks(rawBookmark);
    return bookmark.save()
}

function getAllBookmarks() {
    return Bookmarks.find({});
}

function getBookmark(url) {
    return Bookmarks.find({ url })
}

module.exports = {

    postBookmark: postBookmark,
    getAllBookmarks: getAllBookmarks,
    getBookmark: getBookmark


};