 <template>
  <div>
    <slider class="slider" interval="5000" auto-play="true">
      <div class="slider-item" v-for="(v,index) in res" :key="index">
        <image class="slider-item-img"  :src="v.picUrl"></image>
      </div>
    </slider>
    <div style="width:750px;height:60px;">
      <text class="division-title">热门歌单推荐</text>
    </div>
    <list class="song-list">
      <cell v-for="(item,index) in lists" :key="index">
        <div class="cell-item">
          <div class="item-left">
            <image :src="item.cover" class="item-left-img"></image>
          </div>
          <div class="item-right">
            <text class="font-30">{{item.title}}</text>
            <text class="font-30" style="margin-top:20px;">播放量:{{item.listen_num}}</text>
          </div>
        </div>
      </cell>
    </list>
  </div>
</template>

<style scoped>
.scroller {
  flex: 1;
}
.wrapper {
  padding-top: 40px;
}
.text {
  font-size: 32px;
  color: #333333;
}
.btn {
  width: 250px;
  height: 80px;
  margin-left: 250px;
  margin-bottom: 40px;
  margin-top: 40px;
  background-color: #635147;
  align-items: center;
  justify-content: center;
}
.btn-text {
  font-size: 30px;
  color: #ffffff;
}
.slider {
  width: 700px;
  height: 300px;
  align-items: center;
  justify-content: center;
  align-self: center;
  position: relative;
}
.slider-item {
  width: 700px;
  height: 700px;
  position: relative;
}
.slider-item-img {
  width: 700px;
  height: 300px;
}
.division-title {
  text-align: center;
  font-size: 40px;
  color: #31c27c;
  line-height: 60px;
}
.song-list {
  width: 750px;
  padding-top: 20px;
}
.cell-item {
  width: 710px;
  height: 200px;
  flex-direction: row;
  margin-bottom: 20px;
  background-color: #ffffff;
  position: relative;
  align-self: center;
}
.item-left {
  width: 150px;
  height: 150px;
  margin-left: 20px;
  margin-top: 25px;
}
.item-left-img {
  width: 150px;
  height: 150px;
}
.item-right {
  padding-left: 20px;
  margin-top: 35px;
  height: 150px;
}
.font-30 {
  font-size: 30px;
}
</style>

<script>
const modal = weex.requireModule("modal");
const stream = weex.requireModule("stream");
import { WxcEpSlider, WxcPanItem, BindEnv } from "weex-ui";
var navigator = weex.requireModule("navigator");

export default {
  components: { WxcEpSlider, WxcPanItem },
  data: () => ({
    res: "",
    lists: "",
  }),
  created() {
    this.getRecommendFocus();
    this.getRecommendLists();
  },
  methods: {
    getRecommendFocus() {
      let url0 =
        "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1545640606459";
      stream.fetch(
        {
          method: "GET",
          url: url0,
          type: "json",
          headers: { "Content-Type": "application/json" }
        },
        ret => {
          if (ret.ok) {
            this.res = ret.data.data.slider;
          }
        }
      );
    },
    getRecommendLists() {
      let url1 =
        "https://u.y.qq.com/cgi-bin/musicu.fcg?-=recom2854640476131396&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%7D%2C%22category%22%3A%7B%22method%22%3A%22get_hot_category%22%2C%22param%22%3A%7B%22qq%22%3A%22%22%7D%2C%22module%22%3A%22music.web_category_svr%22%7D%2C%22recomPlaylist%22%3A%7B%22method%22%3A%22get_hot_recommend%22%2C%22param%22%3A%7B%22async%22%3A1%2C%22cmd%22%3A2%7D%2C%22module%22%3A%22playlist.HotRecommendServer%22%7D%2C%22playlist%22%3A%7B%22method%22%3A%22get_playlist_by_category%22%2C%22param%22%3A%7B%22id%22%3A8%2C%22curPage%22%3A1%2C%22size%22%3A40%2C%22order%22%3A5%2C%22titleid%22%3A8%7D%2C%22module%22%3A%22playlist.PlayListPlazaServer%22%7D%2C%22new_song%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewSong%22%2C%22param%22%3A%7B%22type%22%3A0%7D%7D%2C%22new_album%22%3A%7B%22module%22%3A%22music.web_album_library%22%2C%22method%22%3A%22get_album_by_tags%22%2C%22param%22%3A%7B%22area%22%3A1%2C%22company%22%3A-1%2C%22genre%22%3A-1%2C%22type%22%3A-1%2C%22year%22%3A-1%2C%22sort%22%3A2%2C%22get_tags%22%3A1%2C%22sin%22%3A0%2C%22num%22%3A40%2C%22click_albumid%22%3A0%7D%7D%2C%22toplist%22%3A%7B%22module%22%3A%22music.web_toplist_svr%22%2C%22method%22%3A%22get_toplist_index%22%2C%22param%22%3A%7B%7D%7D%2C%22focus%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetFocus%22%2C%22param%22%3A%7B%7D%7D%7D";
      stream.fetch(
        {
          method: "GET",
          url: url1,
          type: "json",
          headers: { "Content-Type": "application/json" }
        },
        ret => {
          if (ret.ok) {
            this.lists = ret.data.recomPlaylist.data.v_hot;
          }
        }
      );
    },
  }
};
</script> 

 