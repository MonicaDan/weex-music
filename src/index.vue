<template>
  <div class="wrapper">
    <div style="background-color:#31c27c;width:750px;height:100px;">
      <text style="color: #dcf5e9;font-size:50px;line-height:100px;text-align:center;">Monica Music</text>
    </div>
    <div style="width:750px;height:82px;background-color:#ffffff;flex-direction:row;">
      <div v-for="(item,index) in title" :key="index" class="topTabItem" @click="jump(item,index)" >
        <text style="line-height:80px;font-size:40px;text-align:center;" :style="{color:currentTabIndex === index? '#31c27c':'#000000'}">{{item.title}}</text>
        <div style="flex:1;height:6px;background-color:#31c27c;" v-if="currentTabIndex===index" >
        </div>
      </div>
    </div>
    <router-view class="routerView"/>
  </div>
</template>

<script>
import BindingX from "weex-bindingx";
import { CommonUtils } from "@/utils/common-utils";
export default {
  name: "App",
  data() {
    return {
      title: [
        {
          title: "推荐",
          path: "/recommend"
        },
        {
          title: "歌手",
          path: "/singer"
        },
        {
          title: "排行",
          path: "/seniorty"
        },
        {
          title: "搜索",
          path: "/search"
        }
      ],
      //设置默认index为0
      currentTabIndex: 0
    };
  },
  created() {
    //返回_newTabIndex 赋值给currentIndex
    this.currentTabIndex = CommonUtils.checkRoutePath(this.title,this.$route.path);
  },
  methods: {
    jump(e, i) {
      this.currentTabIndex = i;
      this.$router.push(e.path);
    }
  }
};
</script>

<style scoped>
.wrapper {
  align-items: center;
  background-color: #f4f4f4;
}
.topTabItem {
  flex: 1;
}
.routerView{
  margin-top: 20px;
}
</style>
