<template>
  <div>
    <p class="title">推荐歌单</p>
    <van-row gutter="10">
      <van-col
        span="8"
        v-for="item in recommondList"
        :index="item.id"
        :key="item.id"
        ><van-image width="100%" height="3rem" :src="item.picUrl" />
        <p class="song_name">
          {{ item.name }}
        </p>
      </van-col>
    </van-row>
    <p class="title">最新音乐</p>
      <song-item
        :songname="songList.name"
        :author="songList.song.artists[0].name"
        v-for="songList in newSongList"
        :key="songList.id"
      ></song-item>
      <!-- <van-cell
        :title="songList.name"
        :label="songList.song.artists[0].name"
        center
        v-for="songList in newSongList"
        :key="songList.id"
        :id="songList.id"
      >
        < 使用 right-icon 插槽来自定义右侧图标 -->
       <!-- <template #right-icon>
          <van-icon name="play-circle-o" class="search-icon" />
        </template>
      </van-cell> -->
  </div>
</template>
<script>
// import { recommendMusicAPI } from "@/api";
import { newsongAPI, recommondMusicAPI } from "@/api";
import SongItem from "@/components/SongItem.vue";
export default {
  name: "viewHome",
  components: {
    SongItem,
  },
  data() {
    return {
      recommondList: [],
      newSongList: [],
    };
  },
  async created() {
    const res = await recommondMusicAPI({ limit: 6 });
    this.recommondList = res.data.result;

    const resNewSong = await newsongAPI({ limit: 6 });
    this.newSongList = resNewSong.data.result;
  },
};
</script>
<style scoped>
.title {
  padding: 0.25rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
.song_name {
  font-size: 0.3375rem;
  padding: 0 0.075rem;
  height: 0.75rem;
  margin-bottom: 0.25rem;
  word-break: break-all;
  text-overflow: ellipsis;
  /* display: -webkit-box;
  -webkit-line-clamp: 2; */
  overflow: hidden;
}
.custom-title {
  margin-right: 4px;
  vertical-align: middle;
}

.search-icon {
  font-size: 16px;
  line-height: inherit;
}
</style>