<template>
  <div id="app-vue">
    <div id="header">
      <MainHeader :siteTitle="siteTitle" :navItems="navItems"></MainHeader>
    </div>

    <div id="container">
      <el-row>
        <!-- 左侧空闲区 -->
        <el-col :span="1">
        </el-col>
        <!-- 侧边导航栏 -->
        <el-col :span="5">
          <ClassifyNav :publishTitle="'吾爱分享'" :subjects="subjects" :categories="categories">
          </ClassifyNav>
        </el-col>
        <!-- 文章区域 -->
        <el-col :span="14">
          <ArticleContent :stickArticles="stickArticles" :articles="articles"></ArticleContent>
          <SiteBlogInfo :siteCopyright="siteCopyright"></SiteBlogInfo>
        </el-col>
        <!-- 右侧空闲区 -->
        <el-col :span="4">
        </el-col>
      </el-row>
    </div>
    <!--  <router-view/>-->
  </div>
</template>

<script>
import MainHeader from '@/components/header/MainHeader.vue';
import ClassifyNav from '@/components/navigation/ClassifyNav.vue';
import ArticleContent from '@/components/content/ArticleContent.vue';
import SiteBlogInfo from '@/components/bottom/SiteBlogInfo.vue';
import settings from '@/settings/settings';

import { getStickArticles, getArticles } from '@/api/article/article';

const {
  siteTitle,
  siteCopyright,
  categories,
} = settings;

const navItems = [
  { id: '1', title: '首页' },
  { id: '2', title: '沸点' },
  { id: '3', title: '资讯' },
  { id: '4', title: '小册' },
  { id: '5', title: '活动' },
];

// 置顶文章
let stickArticles;

// 文章
let articles;

const subjects = [
  { id: '1', title: '主题' },
  { id: '2', title: '标签' },
];

export default {
  name: 'App',
  data() {
    return {
      siteTitle,
      navItems,
      subjects,
      categories,
      stickArticles,
      articles,
      siteCopyright,
    };
  },
  components: {
    MainHeader,
    ClassifyNav,
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
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app-vue {
  background-color: #F4F5F5;
  #header {
    padding-bottom: 10px;
    border-bottom: 1px solid #e8ecf3;
  }

  #container {
    margin-top: 58px;
  }
}
</style>
