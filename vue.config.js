const mock = require('./mock/index');

module.exports = {
  devServer: {
    before: mock, // 配置mock, 使其生效
  },
};
