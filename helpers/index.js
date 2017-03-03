var _ = require('lodash');

function nameFromTitle(title) {
  return title.split('. ')[1].replace('.', '');
}

function prepareLikes(items) {
  return _.reduce(
    items,
    (likes, item) => _.merge(likes, { [item.id]: [nameFromTitle(item.title), Number(item.meta.likeCount)] }),
    {}
  );
}

function prepareStats(items) {
  return {
    likes: prepareLikes(items),
    count: items.length,
  };
}

function processSearch(items, q) {
  const re = new RegExp(_.escapeRegExp(q), 'i');
  const indexText = item => _.join(_.at(item, ['title', 'note', 'description']), ' ');
  const isMatch = item => re.test(indexText(item));

  return _.filter(items, isMatch).map(item => _.pick(item, ['id', 'image', 'title']));
}

module.exports = { prepareStats, processSearch };
