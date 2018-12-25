<template>
  <div>
    <scroller class="scroller">
   <wxc-ep-slider :slider-id="autoSliderId"
                       :card-length='cardLength'
                       ref="wxc-ep-slider"
                       :card-s="cardSize"
                       :interval="interval"
                       :auto-play="true"
                       :select-index="2"
                       @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">
          <!--自动生成demo-->
          <wxc-pan-item v-for="(v,index) in res"
                        :key="index"
                        :ext-id="index"
                        :class="['slider',`slider${index}`]"
                         
                        @wxcPanItemPan="wxcPanItemPan"
                        @wxcPanItemClicked="wxcPanItemClicked(v.linkUrl)"
                        :slot="`card${index}_${autoSliderId}`"
                        :accessible="true"
                        :aria-label="`这里是第${index + 1}个滑块`">
           <image :src="v.picUrl" style="width:700px;height:300px;"></image>
           <!-- <div style="height:20px;width:20px;background-color:red;position:absolute;bottom:50px;border-radius:8px;"></div> -->
          </wxc-pan-item>
        </wxc-ep-slider>
    </scroller>
  </div>
</template>

<style scoped>
  /* .wxc-demo {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
  } */
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
    background-color: #c3413d;
    align-items: center;
    justify-content: center;

    position: relative;
  }
  .slider1 {
    /* background-color: #635147; */
  }
  .slider2 {
    /* background-color: #ffc302; */
  }
  .slider3 {
    /* background-color: #ff9090; */
  }
  .slider4 {
    /* background-color: #546e7a; */
  }
  .more-slider{
    width: 100px;
    height: 300px;
    background-color: #ffc302;
  }
</style>

<script>
  const modal = weex.requireModule('modal');
  const stream =weex.requireModule('stream');
  import { WxcEpSlider, WxcPanItem, BindEnv } from 'weex-ui';
 var navigator = weex.requireModule('navigator')
 
  
  export default {
    components: {   WxcEpSlider, WxcPanItem },
    data: () => ({
        res:"",
      sliderId: 1,
      autoSliderId: 2,
      cardLength: 5,
      interval:2000,
      cardSize: {
        width: 700,
        height: 300,
        spacing: 0,
        scale: 0.8
      }
    }),
    created () {
 
   this.getRecommend();


    },
    methods: {
                            getRecommend(){
                    let  url0='https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1545640606459';
                    stream.fetch({
                        method:'GET',
                        url:url0,
                        type:"json",
                        headers:{"Content-Type":"application/json"}
                    },ret=>{
                        if(ret.ok){
                        this.res=ret.data.data.slider;
                        //动态设置卡片长度:slider的长度
                        this.cardLength=ret.data.data.slider.length;
                        }
                })
            },
      wxcEpSliderCurrentIndexSelected (e) {
//        const index = e.currentIndex;
//        console.log(index);
      },
      onClick () {
        // 手动切换到第2张
        this.$refs['wxc-ep-slider'].manualSetPage(1);
      },
      pullMore () {
        modal.toast({
          message: 'pull more',
          duration: 1
        })
      },
      wxcPanItemPan (e) {
        if (BindEnv.supportsEBForAndroid()) {
          this.$refs['wxc-ep-slider'].clearAutoPlay();
          this.$refs['wxc-ep-slider'].bindExp(e.element)
        }
      },
      wxcPanItemClicked (e) {
  
        // 使用navigator跳轉
        modal.toast({
            message:e
        })
// navigator.push({
//           url:e,
//           animated: "true"
//         }, event => {
//           modal.toast({ message: 'callback: ' + event })
//         })

         
      }
    }
  }
</script>