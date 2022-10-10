const { connect, connection } = require('mongoose');

connect('mongodb://localhost/socialNetworkingApi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
