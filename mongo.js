// From http://stackoverflow.com/questions/24621940/how-to-properly-reuse-connection-to-mongodb-across-nodejs-application-and-module

var MongoClient = require('mongodb').MongoClient;

var _db;

module.exports = {

  connectToServer: function(callback) {
    MongoClient.connect('mongodb://houshuo:houshuo123@ds149040.mlab.com:49040/heroku_lqqwv4fx', function(err, db) {
      _db = db;
      return callback(err);
    });
  },

  getDB: function() {
    return _db;
  }
  
};