<template>
  <div id="classify-nav">
    <el-row id="publish">
      <el-button style="width: 200px;" type="primary" plain>{{ publishTitle }}</el-button>
    </el-row>

    <el-row id="subjects">
      <span class="subject" v-for="subject in subjects" :key="subject.id">
        <reading style="width: 1em; height: 1em; margin-right: 8px;"/>
        <span class="subject-title">
          {{ subject.title }}
        </span>
      </span>
    </el-row>

    <el-row id="categories">
      <div class="category" v-for="category in categories" :key="category.id">
        <span class="cate-back">
          <img class="category-img" :src="category.imgUri" alt="分类图片"/>
          <span>
            {{ category.title }}
          </span>
        </span>
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
  margin-top: 30px;
  position: fixed;
  #publish {
    left: 60px;
  }
  #subjects {
    text-align: center;
    padding-top: 20px;
    left: 25px;
    .subject {
      padding-top: 30px;
      font-size: 17px;
      display: inline-block;
      width: 100px;
      cursor: pointer;
      margin: 0 15px;
      .subject-title {
        position: relative;
        top: -3px;
      }
    }
  }

  #categories {
    .category {
      display: block;
      width: 100%;
      text-align: left;
      margin-left: 60px;
      margin-top: 20px;
      line-height: 40px;
      cursor: pointer;
      .cate-back {
        display: inline-block;
        padding: 10px 30px;
        width: 200px;
        background-color: white;
        border-radius: 8px;
        border: solid 1px #E8ECF3;
        .category-img {
          margin-right: 20px;
          width: 25px;
          height: 25px;
          position: relative;
          top: 5px;
        }
      }
    }
  }

  #about {
    font-size: 15px;
    font-weight: bold;
    display: inline-block;
    width: 200px;
    text-align: left;
    margin-left: 60px;
    margin-top: 60px;
  }
}
</style>
