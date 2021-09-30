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
    font-size: 20px;
    color: #86909C;
  }
</style>
