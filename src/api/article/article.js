/** *************************************
 *                文章Api
 ************************************** */
import axios from 'axios';

/**
 * 获取置顶文章信息
 * @param count 置顶文章数量
 * @returns {Promise<AxiosResponse<any>>}
 */
export async function getStickArticles(count) {
  // eslint-disable-next-line no-return-await
  return await axios.get('/article/stickArticles', {
    count,
  });
}

export async function getArticles(count) {
  // eslint-disable-next-line no-return-await
  return await axios.get('/article/articles', {
    count,
  });
}
