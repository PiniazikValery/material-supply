const express = require('express');
const http = require("http");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const auth_routes = require('./api/routes/auth');
const config = require('config');
const app = express();
const port = process.env.PORT || config.get('application_port');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

//routing section
app.use('/api/user', auth_routes);

//data base section
mongoose.connect(new Buffer.from(config.get('db_config.connection_string'), 'base64').toString('ascii'), {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.log(`Error with db: ${error}`);
});

db.once('open', () => {
  console.log('Server is connected to data base');
});

const server = http.createServer(app);

server.listen(port);
