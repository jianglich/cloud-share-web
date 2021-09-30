<template>
  <div id="article-content">
    <el-row id="order">
      <span class="left-split">热门</span>
      <span class="left-split">最新</span>
      <span>热榜</span>
    </el-row>
    <el-row id="stick-articles">
      <div class="stickArticles" v-for="article in stickArticles" :key="article.id">
        <el-skeleton v-if="article === undefined" :rows="3" animated style="margin-top: 20px"/>
        <div v-else>
          <span class="avatar">
            <span class="avatar-img">
             <el-avatar shape="square" :size="50" :src="article.avatar"></el-avatar>
            </span>
          </span>
          <span class="description">
            <span class="title">
              {{ article.title }}
            </span>
            <span class="date">
              <span class="date-icon">
                <el-icon>
                  <calendar />
                </el-icon>
              </span>
              <span>
                {{ article.date }}
              </span>
            </span>
            <span class="desc">
              {{ article.description }}
            </span>
          </span>
          <span class="other">
            <span class="category">
              <span class="category-icon">
                <el-icon>
                  <paperclip />
                </el-icon>
              </span>
              <span>
                {{ article.category }}
              </span>
            </span>
            <span class="comment">
              <span class="comment-icon">
                <el-icon>
                  <comment />
                </el-icon>
              </span>
              <span>
                {{ article.comment }}
              </span>
            </span>
            </span>
        </div>
      </div>
    </el-row>
    <el-row id="articles" v-for="article in articles" :key="article.id">
      <div class="article">
        <el-skeleton v-if="article === undefined" :rows="2" animated style="margin-top: 15px"/>
        <div v-else>
          <span class="avatar">
            <span class="avatar-img">
             <el-avatar :size="50" :src="article.avatar"></el-avatar>
            </span>
          </span>
          <span class="description">
            <span class="title">
              {{ article.title }}
            </span>
            <span class="date">
              <span class="date-icon">
                <el-icon>
                  <calendar />
                </el-icon>
              </span>
              <span>
               {{ article.date }}
              </span>
            </span>
          </span>
          <span class="other">
            <span class="category">
              <span class="category-icon">
                <el-icon>
                  <paperclip />
                </el-icon>
              </span>
              <span>
                {{ article.category }}
              </span>
            </span>
            <span class="comment">
              <span class="comment-icon">
                <el-icon>
                  <comment />
                </el-icon>
              </span>
              <span>
                {{ article.comment }}
              </span>
            </span>
            </span>
        </div>
      </div>
    </el-row>
    <el-backtop />
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
      height: 72px;
      line-height: 40px;
      border-bottom: solid 1px #e8ecf3;
      margin-bottom: 20px;
      padding-top: 30px;
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
      padding-top: 110px;
      .stickArticles {
        width: 90%;
        height: 180px;
        border: solid 1px #E8ECF3;
        border-radius: 15px;
        margin: 10px 15px;
        text-align: left;
        .avatar {
          display: inline-block;
          width: 13%;
          height: 100%;
          vertical-align: top;
          .avatar-img {
            display: inline-block;
            padding: 25px 0 0 50px;
          }
        }
        .description {
          display: inline-block;
          width: 62%;
          height: 100%;
          padding: 20px 0;
          .title {
            display: inline-block;
            width: 100%;
            height: 35px;
            font-size: 25px;
            font-weight: bold;
          }
          .date {
            width: 100%;
            height: 30px;
            display: inline-block;
            padding-top: 5px;
            .date-icon {
              margin: 0 10px 0 0;
            }
          }
          .desc {
            width: 100%;
            height: 65px;
            text-indent: 30px;
            display: inline-block;
            overflow: hidden;  // 超出的文本隐藏
            text-overflow: ellipsis; //显示省略号
            display: -webkit-box; //作为弹性伸缩盒子模型显示。
            -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
            -webkit-line-clamp: 3;  //显示的行数*/
          }
        }
        .other {
          display: inline-block;
          text-align: right;
          width: 25%;
          height: 150px;
          color: #86909c;
          position: relative;
          top: 15px;
          .category {
            font-size: 17px;
            font-weight: bold;
            display: inline-block;
            width: 40%;
            height: 100%;
            vertical-align: bottom;
            text-align: left;
            .category-icon {
              margin: 10px;
            }
          }
          .comment {
            font-size: 19px;
            font-weight: bold;
            display: inline-block;
            width: 40%;
            height: 100%;
            vertical-align: bottom;
            text-align: left;
            .comment-icon {
              margin: 10px;
            }
          }
        }
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
        .avatar {
          display: inline-block;
          width: 13%;
          height: 100%;
          vertical-align: top;
          .avatar-img {
            display: inline-block;
            padding: 25px 0 0 50px;
          }
        }
        .description {
          width: 62%;
          display: inline-block;
          padding: 25px 0;
          .title {
            width: 100%;
            font-size: 20px;
            display: inline-block;
            font-weight: bold;
          }
          .date {
            width: 100%;
            display: inline-block;
            margin-top: 10px;
            .date-icon {
              margin: 0 10px 0 0;
            }
          }
        }
        .other {
          display: inline-block;
          text-align: right;
          width: 25%;
          height: 80px;
          color: #86909c;
          position: relative;
          top: 25px;
          .category {
            font-size: 17px;
            font-weight: bold;
            display: inline-block;
            width: 40%;
            height: 100%;
            vertical-align: bottom;
            text-align: left;
            .category-icon {
              margin: 10px;
            }
          }
          .comment {
            font-size: 19px;
            font-weight: bold;
            display: inline-block;
            width: 40%;
            height: 100%;
            vertical-align: bottom;
            text-align: left;
            .comment-icon {
              margin: 10px;
            }
          }
        }
      }
    }
  }
</style>
