<template>
  <div id="header">
    <MainHeader :favTitle="favTitle" :navItems="navItems"></MainHeader>
  </div>

  <div id="container">
    <el-row>
      <el-col :span="2">
      </el-col>
      <el-col :span="4">
        <ClassifyNav :publishTitle="'吾爱分享'" :subjects="subjects" :categories="categories">
        </ClassifyNav>
      </el-col>
      <el-col :span="14">
        <ArticleContent :stickArticles="stickArticles" :articles="articles"></ArticleContent>
        <SiteBlogInfo :siteInfo="siteInfo"></SiteBlogInfo>
      </el-col>
    </el-row>
  </div>
  <!--  <router-view/>-->
</template>

<script>
import MainHeader from '@/components/header/MainHeader.vue';
import ClassifyNav from '@/components/navigation/ClassifyNav.vue';
import ArticleContent from '@/components/content/ArticleContent.vue';
import SiteBlogInfo from '@/components/bottom/SiteBlogInfo.vue';
import categoryImgFilms from '../public/categories/films.png';
import categoryImgPicture from '../public/categories/picture.png';
import categoryImgSoftware from '../public/categories/software.png';
import categoryImgGame from '../public/categories/game.png';
import categoryImgMusic from '../public/categories/music.png';
import categoryImgAnime from '../public/categories/anime.png';
import categoryImgBook from '../public/categories/book.png';
import categoryImgStudy from '../public/categories/study.png';
import categoryImgHelp from '../public/categories/help.png';
import categoryImgOther from '../public/categories/others.png';

const favTitle = '云盘引擎';
const navItems = [
  { id: '1', title: '首页' },
  { id: '2', title: '沸点' },
  { id: '3', title: '资讯' },
  { id: '4', title: '小册' },
  { id: '5', title: '活动' },
];

const subjects = [
  { id: '1', title: '主题' },
  { id: '2', title: '标签' },
];

const categories = [
  { id: '1', title: '影  视', imgUri: categoryImgFilms },
  { id: '2', title: '图  片', imgUri: categoryImgPicture },
  { id: '3', title: '软  件', imgUri: categoryImgSoftware },
  { id: '4', title: '游  戏', imgUri: categoryImgGame },
  { id: '5', title: '音  乐', imgUri: categoryImgMusic },
  { id: '6', title: '动  漫', imgUri: categoryImgAnime },
  { id: '7', title: '书  籍', imgUri: categoryImgBook },
  { id: '8', title: '学  习', imgUri: categoryImgStudy },
  { id: '9', title: '求  助', imgUri: categoryImgHelp },
  { id: '10', title: '其  他', imgUri: categoryImgOther },
];

const stickArticles = [
  {},
  {},
];

const articles = [
  {},
  {},
  {},
  {},
  {},
  {},
];

const siteInfo = 'Copyright © 云盘引擎 【云时代, 爱上云, 分享云】';

export default {
  name: 'App',
  data() {
    return {
      favTitle,
      navItems,
      subjects,
      categories,
      stickArticles,
      articles,
      siteInfo,
    };
  },
  components: {
    MainHeader,
    ClassifyNav,
    ArticleContent,
    SiteBlogInfo,
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

#header {
  padding-bottom: 10px;
  border-bottom: 1px solid #e8ecf3;
}

#container {
  margin-top: 90px;
}
</style>
