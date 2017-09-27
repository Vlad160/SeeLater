const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/admin');

const mongodb = mongoose.connection;

mongodb.on('error', console.error.bind(console, 'Connection error:'));

mongodb.once('open', () => {
    console.log('Connected to db');
});
app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());

const Bookmarks = require('./models/Bookmark');

app.post('/bookmark', (req, res) => {

    const bookmark = new Bookmarks(req.body);
    console.log(req.body);
    bookmark.save()
        .then(() => console.log('Saved!'));
    res.status(200)
        .send();

});

app.get('/bookmark', (req, res) => {
    Bookmarks.find({})
        .then(bookmarks => {
            console.log(bookmarks);
            res.json(bookmarks);
            console.log('Send!');
        });

});
app.listen(app.get('port'), () => console.log('Site started on port ', app.get('port')));