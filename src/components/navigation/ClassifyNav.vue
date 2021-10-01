<template>
  <div id="classify-nav">
    <el-row id="publish">
      <div class="button">
        <el-button style="width: 200px;" type="primary" plain>{{ publishTitle }}</el-button>
      </div>
    </el-row>

    <el-row id="info">
      <div class="content">

      </div>
    </el-row>

    <el-row id="categories">
      <div class="cate-content">
        <div class="category" v-for="category in categories" :key="category.id">
        <span class="cate-back">
          <img class="category-img" :src="category.imgUri" alt="分类图片"/>
          <span>
            {{ category.title }}
          </span>
        </span>
        </div>
      </div>
    </el-row>

    <el-row>
      <span id="about">
        {{ '关注小站官方微信公众平台【云盘引擎】不迷路' }}
      </span>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ClassifyNav',
  data() {
    return {
    };
  },
  props: {
    publishTitle: String,
    subjects: Array,
    categories: Array,
  },
  beforeMount() {
  },
};
</script>

<style scoped lang="less">
#classify-nav {
  position: fixed;
  #publish {
    border: solid 1px #E8ECF3;
    .button {
      display: inline-block;
      width: 360px;
      height: 56px;
      padding-top: 15px;
      background-color: white;
    }
  }

  #info {
    margin-top: 27px;
    border: solid 1px #E8ECF3;
    .content {
      display: inline-block;
      width: 360px;
      height: 160px;
      background-color: white;
    }
  }

  #categories {
    border: solid 1px #E8ECF3;
    margin-top: 20px;
    .cate-content {
      width: 360px;
      background-color: white;
      padding: 40px 0;
      .category {
        width: 90%;
        display: inline-block;
        text-align: left;
        margin-left: 30px;
        line-height: 40px;
        position: relative;
        left: -10px;
        color: #86909c;
        background-color: white;
        :hover {
          color: #1d2129;
          background-color: #ECF5FF;
        }
        .cate-back {
          display: inline-block;
          font-size: 19px;
          font-weight: 600;
          padding: 10px 0 10px 70px;
          width: 250px;
          cursor: pointer;
          text-align: left;
          .category-img {
            margin-right: 30px;
            width: 25px;
            height: 25px;
            position: relative;
            top: 5px;
          }
        }
      }
    }
  }

  #about {
    font-size: 15px;
    font-weight: bold;
    display: inline-block;
    width: 360px;
    height: 60px;
    position: relative;
    text-align: center;
    margin-top: 10px;
    padding-top: 15px;
    color: #86909C;
    background-color: white;
  }
}
</style>
