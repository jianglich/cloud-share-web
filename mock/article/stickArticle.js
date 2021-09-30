const Mock = require('mockjs');
const utils = require('../utils/utils');

exports.getStickArticle = function getStickArticle(app) {
  // 获取置顶文章信息
  app.get('/article/stickArticles', (rep, res) => {
    // getJsonFile方法定义了如何读取json文件并解析成数据对象
    const json = utils.getJsonFile('./article.json5');
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  });

  // 获取文章信息
  app.get('/article/articles', (rep, res) => {
    let articleArr = [];
    // getJsonFile方法定义了如何读取json文件并解析成数据对象
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 5; i++) {
      const json = utils.getJsonFile('./article.json5');
      articleArr = articleArr.concat(Mock.mock(json).data);
    }

    res.json({
      desc: 'Success',
      error: 0,
      data: articleArr,
    });
  });
};
