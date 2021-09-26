<template>
  <div id="article-content">
    <el-row id="order">
      <span class="left-split">热门</span>
      <span class="left-split">最新</span>
      <span>热榜</span>
    </el-row>
    <el-row id="stick-articles">
      <div class="stickArticles" v-for="article in stickArticles" :key="article.id">
        <el-skeleton :rows="3" animated style="margin-top: 20px"/>
      </div>
    </el-row>
    <el-row id="articles" v-for="article in articles" :key="article.id">
      <div class="article">
        <el-skeleton :rows="2" animated style="margin-top: 15px"/>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ArticleContent',
  props: {
    stickArticles: Array,
    articles: Array,
  },
};
</script>

<style scoped lang="less">
  #article-content {
    #order {
      font-size: 18px;
      color: #909090;
      height: 40px;
      line-height: 40px;
      border-bottom: solid 1px #e8ecf3;
      margin-bottom: 20px;
      position: fixed;
      width: 90%;
      background-color: white;
      z-index: 99;
      span {
        padding: 0 40px;
      }
      .left-split {
        border-right: 1px solid #e8ecf3;
      }
    }
    #stick-articles {
      padding-top: 80px;
      .stickArticles {
        width: 90%;
        height: 180px;
        border: solid 1px #E8ECF3;
        border-radius: 15px;
        margin: 10px 15px;
        text-align: left;
      }
    }
    #articles {
      .article {
        width: 90%;
        height: 110px;
        border: solid 1px #E8ECF3;
        border-radius: 15px;
        margin: 10px 15px;
        text-align: left;
      }
    }
  }
</style>
