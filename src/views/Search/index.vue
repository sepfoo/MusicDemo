<template>
  <div>
    <van-search
      v-model="value"
      shape="round"
      placeholder="请输入搜索关键词"
      style="margin-top: 46px"
    />
    <div class="search_wrap" v-if="searchResultList.length === 0">
      <p class="hot_title">热门搜索</p>

      <ul class="hot_name_wrap">
        <li
          class="hot_item"
          v-for="(item, index) in searchHotList"
          :key="index"
          @click="hotBtn(item.first)"
        >
          {{ item.first }}
        </li>
      </ul>
    </div>
    <div class="hot_search" v-else>
      <p class="hot_title">最佳匹配</p>

      <song-item
        :songname="iteme.name"
        :author="iteme.ar[0].name"
        center
        v-for="iteme in searchResultList"
        :key="iteme.id"
      ></song-item>
    </div>
  </div>
</template>
<script>
import { searchHotAPI, searchResultAPI } from "@/api";
import SongItem from "@/components/SongItem.vue";

export default {
  name: "viewSearch",
  components: {
    SongItem,
  },
  data() {
    return {
      value: "",
      searchHotList: [],
      searchResultList: [],
      timer: null,
    };
  },
  async created() {
    const searchhot = await searchHotAPI();
    // this.searchHotList = searchhot.data;
    // console.log(this.searchHotList);
    // console.log(searchhot.data.result)

    this.searchHotList = searchhot.data.result.hots;

    // console.log(this.searchHotList)
  },
  methods: {
    async hotBtn(e) {
      this.value = e;
      const res = await searchResultAPI({
        type: 1,
        keywords: this.value,
        limit: 6,
      });
      console.log(res.data);
      this.searchResultList = res.data.result.songs;
      console.log(this.searchResultList);

      setTimeout(() => {
        clearTimeout(this.timer);
      });
    },
  },
  watch: {
    value(val) {
      clearTimeout(this.timer);
      if (val.length === 0) return (this.searchResultList = []);
      this.timer = setTimeout(async () => {
        const res = await searchResultAPI({
          type: 1,
          keywords: val,
        });
        console.log(res.data);
        this.searchResultList = res.data.result.songs;
        console.log(this.searchResultList);
      }, 500);

      //   console.log(this.value)
      //   console.log(searchResultAPI)
    },
  },
  //防抖：n秒内执行一次，函数在n秒内再次执行则从新计数
  //节流：间隔n秒执行一次
};
</script>
<style scoped>
.search_wrap {
  padding: 0.266667rem;
}
.hot_search {
  padding: 0.27rem;
}

.hot_title {
  font-size: 0.32rem;
  color: #666;
}

.hot_name_wrap {
  margin: 0.27rem 0;
}

.hot_item {
  display: inline-block;
  height: 0.85333rem;
  margin-right: 0.21333rem;
  margin-bottom: 0.21333rem;
  padding: 0 0.37333rem;
  font-size: 0.37333rem;
  line-height: 0.85333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.85333rem;
  border: 1px solid #ccc;
}
</style>
