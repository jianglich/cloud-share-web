<template>
  <el-row id="header-container">
    <el-col id="fav" :span="4">
      <img src="../../../public/logo.png" alt="站点图"/>
      <span>{{ favTitle }}</span>
    </el-col>
    <el-col id="nav" :span="10">
      <span class="nav-item" v-for="item of navItems" :key="item.id">
        <span class="item-title">
          {{ item.title }}
        </span>
      </span>
    </el-col>
    <el-col id="site" :span="10">
      <span id="search">
        <el-autocomplete
          id="search-auto"
          v-model="state"
          :fetch-suggestions="querySearch"
          :clearable="true"
          placeholder="Please input"
          @select="handleSelect"
          style="width: 400px;"
        >
        <template #suffix>
          <i class="el-icon-search el-input__icon" @click="handleIconClick"></i>
        </template>
        <template #default="{ item }">
          <div class="value">{{ item.value }}</div>
          <span class="link">{{ item.link }}</span>
        </template>
      </el-autocomplete>
      </span>
      <span>
        <el-button plain>登录</el-button>
      </span>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    favTitle: String,
    navItems: Array,
  },
};
</script>

<style scoped lang="less">
  #header-container {
    width: 100%;
    z-index: 100;
    height: 70px;
    line-height: 60px;
    position: fixed;
    background-color: white;
    border-bottom: 1px solid #e8ecf3;
    #fav {
      color: #1d2129;
      font-size: 37px;
      font-family: '楷体', Avenir, Helvetica, Arial, sans-serif;
      font-weight: bold;
      text-align: right;
      padding-right: 20px;
      img {
        height: 35px;
        padding-top: 15px;
        position: relative;
        top: 5px;
      }
    }
    #nav {
      text-align: left;
      font-size: 23px;
      color: #86909c;
      padding: 0 0 0 25px;
      .nav-item {
        display: inline-block;
        position: relative;
        top: 5px;
        width: 15%;
        height: 100%;
        .item-title {
          cursor: pointer;
        }
      }
    }
    #site {
      text-align: right;
      padding-right: 150px;
      #search {
        display: inline-block;
        padding-right: 150px;
        #search-auto {
          width: 800px;
        }
      }
    }
  }
</style>
