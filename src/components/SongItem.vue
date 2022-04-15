<template>
  <van-cell
    :title="songname"
    :label="author"
    center
  >
    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
    <template #right-icon>
      <van-icon name="play-circle-o" class="search-icon" />
    </template>
  </van-cell>
</template>
<script>
export default {
    name:'song-item',
    props:{
        songname:String,//歌曲名称
        author:String,
        id:Number

    }
}
</script>
<style scoped>
.search-icon {
  font-size: 16px;
  line-height: inherit;
}
</style>