const stickArticle = require('./article/stickArticle');

// eslint-disable-next-line func-names
module.exports = function (app) {
  // 监听http请求
  if (process.env.MOCK === 'true') {
    stickArticle.getStickArticle(app);
  }
};
