<template>
  <div>
    <van-nav-bar
      fixed
      :title="activeTitle"
      :left-arrow="isSearch"
      :leftText="getReturn()"
      @click-left="$router.push('/layout/home')"
    />
    <div style="margin-top:46px,padding-bottom:40px">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" replace to="/layout/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="search" replace to="/layout/search"
        >搜索</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "viewLayout",
  data() {
    return {
      active: 0,
      activeTitle: this.$route.meta.title,
      isSearch: this.$route.meta.isSearch,
      getReturn: function () {
        if (this.isSearch) return "返回";
      },
    };
  },
  methods: {
    // onClickLeft(){
    //   this.$router.back()
    // }
  },
  watch: {
    $route() {
      // console.log(this.$route.path)
      // console.log(window.history.length)
      this.activeTitle = this.$route.meta.title;
      this.isSearch = this.$route.meta.isSearch;
      // if (this.activeTitle == "搜索") {
      //   //     console.log(this.$route.path)
      //   this.isSearch = true;
      // } else {
      //   this.isSearch = false;
      // }
    },
  },
  // methods: {
  //   onClickLeft() {},
  // },
  //   mounted() {
  //   },
};
</script>