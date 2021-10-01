<template>
  <div id="site-blog-info">
    {{ siteCopyright }}
  </div>
</template>

<script>
export default {
  name: 'SiteBlogInfo',
  props: {
    siteCopyright: String,
  },
};
</script>

<style scoped>
  #site-blog-info {
    margin-top: 10px;
    width: 90%;
    height: 35px;
    font-size: 20px;
    color: #86909C;
    background-color: white;
    padding-top: 10px;
    border: solid 1px #E8ECF3;
  }
</style>
