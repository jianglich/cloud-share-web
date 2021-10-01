<template>
  <div id="article-detail">
    <div id="article">
      <div id="article-info">
        <span class="author-via">
          <el-avatar shape="square" :size="60" :src="squareUrl"></el-avatar>
        </span>
        <span class="author-nickname">
          {{ '引擎君' }}
        </span>
        <span class="create-date">
          {{ '2021-02-30' }}
        </span>
      </div>
      <div id="title">
        {{ '“程序员必懂小知识”创作挑战，专治写作困难症！' }}
      </div>
      <div id="content">
        {{ `   相信所有技术人都知道技术输出很重要，可遇到的“困难”也不少：下不去笔、没有时间、坚持不下来、肝不动了……
  眼看着掘金的很多活动，却有心无力无法参加。思想没滑坡，但问题确实也挺多。怎么办？
  别担心，“程序员必懂小知识”创作挑战，专门为写作困难症同学设计，解决你的一切写作问题，轻轻松松拿大奖！
  这一次，我们不需要长篇大论、不圈定艰深的话题，你只需要上点“小菜”。
  你可以分享：对程序员很重要的小知识点、实践及踩坑经验、发现的好用的技术工具、刷题找到了独特的思路，等等。
  如果用三个关键词形容本活动的内容要求，就是“具体、实用、有趣”。比如：

  你发现了一个有趣的组件库，和大家分享下它的功能和注意事项；
  工作中踩的一个坑，做个场景复现和复盘；
  实现了一个有趣的特效动画，分享出实现思路和代码；
  算法题、笔试题的解题经验；
  ……

  希望你养成随手记录的习惯，字数不要求很多，有了灵感立即写 ， 积少成多，日拱一卒。
  这样慢慢地让点成势，相信再困难的写作顽疾也被治愈了！

  作者：掘金酱
  链接：https://juejin.cn/post/7008476801634680869
  来源：稀土掘金
  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。` }}
      </div>
    </div>

    <div id="comments">
      <div id="comment-count">
        全部评论 （{{ comments.length }}）
      </div>
      <div class="comment" v-for="comment in comments" :key="comment.id">
        <span class="buddha">
          <el-avatar :size="50" :src="circleUrl"></el-avatar>
        </span>
        <span class="nickname">
          {{ comment.nickname }}
        </span>
        <span class="description">
          {{ comment.description }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
const comments = [
  {
    id: '1', nickname: 'nickname1', description: 'XXXXXX', likes: 11,
  },
  {
    id: '2', nickname: 'nickname1', description: 'XXXXXX', likes: 12,
  },
  {
    id: '3', nickname: 'nickname1', description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', likes: 13,
  },
  {
    id: '4', nickname: 'nickname1', description: 'XXXXXX', likes: 14,
  },
];

export default {
  name: 'Article',
  data() {
    return {
      comments,
    };
  },
};
</script>

<style scoped lang="less">
#article-detail {
  margin-top: 20px;
  text-align: left;

  #article {
    background-color: white;

    #article-info {
      text-align: left;
      height: 140px;
      border-bottom: solid 1px #F4F4F5;
      .author-via {
        display: inline-block;
        padding: 40px 0 0 50px;
      }
      .author-nickname {
        display: inline-block;
        width: 300px;
        height: 30px;
        font-weight: bold;
        font-size: 20px;
        padding: 0 0 0 40px;
        position: relative;
        top: -40px;
      }
      .create-date {
        position: relative;
        left: -300px;
        font-size: 17px;
        color: #909399;
        top: -2px;
      }
    }

    #title {
      font-size: 30px;
      font-weight: bold;
      padding: 20px 50px;
    }

    #content {
      display: inline-block;
      font-size: 20px;
      letter-spacing: 3px;
      word-spacing: 10px;
      padding: 20px 60px;
      line-height: 40px;
      white-space: pre-wrap;
    }
  }

  #comments {
    margin-top: 20px;
    background-color: white;
    #comment-count {
      font-size: 20px;
      padding: 25px 70px;
      border-bottom: solid 1px #F4F4F5;
    }
    .comment {
      border-bottom: solid 1px #F4F4F5;
      padding: 15px 70px;
      .buddha {
      }
      .nickname {
        font-size: 22px;
        font-weight: bold;
        display: inline-block;
        width: 100px;
        height: 40px;
        position: relative;
        top: -20px;
        left: 20px;
      }
      .description {
        left: 72px;
        display: block;
        position: relative;
        width: 850px;
        text-indent: 30px;
        word-wrap: break-word;
      }
    }
  }
}
</style>
