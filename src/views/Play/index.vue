<template>
  <div class="play">
    <div
      class="song-bg"
      :style="`background-image:url(${
        songIfo && songInfo.al.picUrl
      }?imageView&thumbnail=360y360&quality=75&tostatic=0);`"
    ></div>
    <!-- 播放页头部导航 -->
    <div class="header">
      <van-icon
        name="arrow-left"
        size="20"
        class="left-incon"
        @click="$router.back()"
      ></van-icon>
    </div>

    <!-- 播放页内容容器 -->
    <div class="song-wrapper">
      <div
        class="song-turn ani"
        :style="`animation-play-state:${playState ? 'running' : 'paused'}`"
      >
        <div class="song-img">
          <img
            :src="`${
              songIfo && songInfo.al && songInfo.al.picUrl
            }?imageView&thumbnail=360y360&quality=75&tostatic=0);`"
            style="width: 100%"
          />
        </div>
      </div>
        <!-- 播放盒子 -->
        <div class="start-box" @click="audioStart">
            <span class="song-start" v-show="!playState"></span>
        </div>
        <!-- 播放歌词 -->
        
    </div>
  </div>

</template>