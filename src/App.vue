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
          <ClassifyNav :publishTitle="'吾爱分享'" :categories="categories">
          </ClassifyNav>
        </el-col>
        <!-- 文章区域 -->
        <el-col :span="14">
          <transition name="fade">
            <router-view/>
          </transition>
        </el-col>
        <!-- 右侧空闲区 -->
        <el-col :span="4">
        </el-col>
      </el-row>
    </div>
  </div>

  <el-backtop />
</template>

<script>
import MainHeader from '@/components/header/MainHeader.vue';
import ClassifyNav from '@/components/navigation/ClassifyNav.vue';

import settings from '@/settings/settings';

const {
  siteTitle,
  categories,
} = settings;

const navItems = [
  { id: '1', title: '首页', routerLink: '/' },
  { id: '2', title: '沸点', routerLink: '' },
  { id: '3', title: '资讯', routerLink: '' },
  { id: '4', title: '小册', routerLink: '' },
  { id: '5', title: '活动', routerLink: '' },
];

export default {
  name: 'App',
  data() {
    return {
      siteTitle,
      navItems,
      categories,
    };
  },
  components: {
    MainHeader,
    ClassifyNav,
  },
  methods: {
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
  background-color: #F4F4F5;
  #header {
    padding-bottom: 10px;
    border-bottom: 1px solid #e8ecf3;
  }

  #container {
    margin-top: 58px;
  }
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  display: none;
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity .1s ease;
}

.fade-enter-to,
.fade-leave {
  visibility: visible;
  opacity: 1;
}

</style>
