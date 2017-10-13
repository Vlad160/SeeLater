const Bookmarks = require('../models/Bookmark');

function postBookmark(bookmarkForPost) {
    const bookmark = new Bookmarks(bookmarkForPost);
    return bookmark.save()
}

function getBookmark(query) {

    return Bookmarks.find(query)

}

function deleteBookmarks(query) {

    return Bookmarks.remove(query);
}

module.exports = {
    postBookmark,
    getBookmark,
    deleteBookmarks
};
