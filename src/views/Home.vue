<template>
  <div class="home">
    <ArticleContent @loadMoreArticles="loadMoreArticles" :stickArticles="stickArticles"
                    :articles="articles">
    </ArticleContent>
    <SiteBlogInfo :siteCopyright="siteCopyright"></SiteBlogInfo>
  </div>
</template>

<script>
import ArticleContent from '@/components/content/ArticleList.vue';
import SiteBlogInfo from '@/components/bottom/SiteBlogInfo.vue';

import { getStickArticles, getArticles } from '@/api/article/article';
import settings from '@/settings/settings';

const { siteCopyright } = settings;

// 置顶文章
let stickArticles;

// 文章
let articles;

export default {
  name: 'Home',
  data() {
    return {
      stickArticles,
      articles,
      siteCopyright,
    };
  },
  components: {
    ArticleContent,
    SiteBlogInfo,
  },
  created() {
    // 加载置顶文章
    this.preStickArticles(2);
    // 加载文章
    this.preArticles(10);
  },
  methods: {
    /**
     * 预加载置顶文章
     * @param count 加载文章数量
     */
    preStickArticles(count) {
      const that = this;

      getStickArticles(count).then((res) => {
        that.stickArticles = res.data.data;
      });
    },
    /**
     * 预加载文章
     * @param count 加载文章数量
     */
    preArticles(count) {
      const that = this;

      getArticles(count).then((res) => {
        that.articles = res.data.data;
      });
    },
    loadMoreArticles() {
      const that = this;

      getArticles(5).then((res) => {
        that.articles = that.articles.concat(res.data.data);
      });
    },
  },
};
</script>

<style scoped lang="less">
</style>
