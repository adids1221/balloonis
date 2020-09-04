const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

app.use((req, res, next) => {
    console.log('Session: ', req.session);
    next();
});

// Require our routes into the application.
require('./server/routes')(app);

// Handles any requests that don't match the ones above
app.use('/static', express.static(path.join(__dirname, 'client/build/static')));
app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;