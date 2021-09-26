<template>
  <div id="site-blog-info">
    {{ siteInfo }}
  </div>
</template>

<script>
export default {
  name: 'SiteBlogInfo',
  props: {
    siteInfo: String,
  },
};
</script>

<style scoped>
  #site-blog-info {
    font-size: 20px;
    color: #86909C;
  }
</style>
