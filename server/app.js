const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());

app.listen(app.get('port'), () => console.log('Site started on port ', app.get('port')));