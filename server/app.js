const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const bookmarksController = require('./BookmarksController');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/admin');

const mongodb = mongoose.connection;

mongodb.on('error', console.error.bind(console, 'Connection error:'));

mongodb.once('open', () => {
    console.log('Connected to db');
});
app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());


app.post('/bookmark', (req, res) => {

    const bookmark = req.body;
    console.log(req.body);
    bookmarksController.postBookmark(bookmark)
        .then(() => {
            console.log('Saved!');
            res.status(200).send();
        })
        .catch(error => res.status(500).send())

});

app.get('/bookmark', (req, res) => {

    let bookmarksRequest;
    console.log(req.query);
    if (req.query['url']) {
        bookmarksRequest = bookmarksController.getBookmark(req.query['url']);
    }
    else {
        bookmarksRequest = bookmarksController.getAllBookmarks();
    }
    bookmarksRequest
        .then(bookmarks => {
            console.log(bookmarks);
            res.json(bookmarks);
            console.log('Send!');
        });

});

app.listen(app.get('port'), () => console.log('Site started on port ', app.get('port')));