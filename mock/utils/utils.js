const path = require('path');
const json5 = require('json5');
const fs = require('fs');

/**
 * 读取并解析 json5 文件
 * @param filePath 文件路径
 * @returns {any}
 */
exports.getJsonFile = function getJsonFile(filePath) {
  // 读取指定json文件
  const json = fs.readFileSync(path.resolve(__dirname, '../json5/', filePath), 'utf-8');
  // 解析并返回
  return json5.parse(json);
};
