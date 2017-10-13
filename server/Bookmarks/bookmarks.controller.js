const bookmarksService = require('./bookmarks.service');

function postBookmark(bookmark) {
    return bookmarksService.postBookmark(bookmark);
}

function getBookmark(_id) {
    const query = _id || {};
    return bookmarksService.getBookmark(query);
}

function deleteBookmark(_id) {
    return bookmarksService.deleteBookmarks(_id);
}

module.exports = {

    postBookmark,
    getBookmark,
    deleteBookmark,

};