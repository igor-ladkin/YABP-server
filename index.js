var express = require('express');
var cors = require('cors');
var _ = require('lodash');
var application = express();

var data = require('./data');
var items = data.items;
var about = data.about;

application.use(cors());

application.get('/', function(req, res) {
  var fields = ['id', 'image', 'meta', 'title', 'note'];
  var entries = _.map(items, function(item) { return _.pick(item, fields) });

  setTimeout(function() {
    res.json(entries);
  }, 1000);
});

application.get('/posts/:id', function(req, res) {
  var fields = ['id', 'image', 'meta', 'title', 'description'];
  var entry = _.pick(
    _.find(items, function(item) { return item.id === req.params.id }),
    fields);

  setTimeout(function() {
    res.json(entry);
  }, 1000);
});

application.get('/about', function(req, res) {
  setTimeout(function() {
    res.json(about);
  }, 1000);
});

application.patch('/posts/:id/like', function(req, res) {
  var fields = ['id', 'image', 'meta', 'title', 'note'];

  var item = _.find(items, function(item) { return item.id === req.params.id });
  item.meta.likeCount++;
  var entry = _.pick(item ,fields);

  res.json(entry);
});

application.listen(3001, function() {
  console.log('Server started on port 3001');
});
