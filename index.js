const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const application = express();

const { prepareStats, processSearch } = require('./helpers');
const data = require('./data');
const items = data.items;
const about = data.about;
const POSTS_PER_PAGE = 3;

application.use(cors());

application.get('/posts', function(req, res) {
  const fields = ['id', 'image', 'meta', 'title', 'note'];
  const pages =
    _.chain(items)
     .map(function(item) { return _.pick(item, fields) })
     .chunk(POSTS_PER_PAGE)
     .value();

  const requestedPage = Number(req.query.page - 1) || 0;
  const entries = pages[requestedPage];
  const count = items.length;

  setTimeout(function() {
    res.json({
      entries: entries,
      stats: prepareStats(items),
    });
  }, 1000);
});

application.get('/posts/:id', function(req, res) {
  const fields = ['id', 'image', 'meta', 'title', 'description'];
  const entry = _.pick(
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

application.post('/posts/:id/like', function(req, res) {
  const fields = ['id', 'meta'];

  const item = _.find(items, function(item) { return item.id === req.params.id });
  item.meta.likeCount++;
  const entry = _.pick(item ,fields);

  res.json(entry);
});

application.get('/search', function(req, res) {
  const q = req.query.q;
  const results = processSearch(items, q);

  setTimeout(function() {
    res.json(results);
  }, 1000);
})

application.listen(3001, function() {
  console.log('Server started on port 3001');
});
