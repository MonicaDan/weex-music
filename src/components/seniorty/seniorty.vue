<template>
 <div>
   <list>
        <cell v-for="(item ,index) in topList" :key="index">
            <div style="width:710px;height:200px;flex-direction:row;margin-bottom:20px;background-color:#ffffff;position:relative; align-self: center;"> 
                <wxc-icon name="more" :style="{color:'#c0c0c0'}" style="height:50px;width:50px;position:absolute;top:80px;left:650px; "></wxc-icon> 
            <!-- 左側 -->
                <div>
                    <image :src="item.picUrl" @click="jump(item.linkUrl)" style="width:200px;height:200px;"></image> 
                    <!-- <text class="listen_count"> {{item.listenCount}}</text>   -->
                </div>
            <!-- 右側 -->
                <div style="padding-left:20px;">
                    <text style="font-size:35px;line-height:50px;padding-left:20px;padding-top:6px;">{{item.topTitle}}</text>
                    <div style="padding-top:10px;">
                        <div v-for="(e,key) in (item.songList)" :key="key" style="flex-direction:row;margin-top:6px;width:460px;lines:1;">
                            <text class="font-30"  style="color:#7f7f7f">  {{key+1}} </text>
                            <text class="font-30">  {{e.songname}}</text>
                            <text style="color:#7f7f7f" class="font-30"> - {{e.singername}}</text>
                        </div>
                    </div>
                  
                </div>
            </div>
          
           
    
        </cell> 
   </list>
  
</div>
</template>
<script>
const stream = weex.requireModule('stream');
const modal = weex.requireModule('modal');
import {WxcIcon} from 'weex-ui'
export default {
    data(){
        return {
            topList:""
        }
    },
    components:{
        WxcIcon
    },
    created(){
        this.getSeniorty();
    },
    methods:{
                    getSeniorty(){
                    let  url0= 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1545648584419'
                    stream.fetch({
                        method:'GET',
                        url:url0,
                        type:"json",
                        headers:{"Content-Type":"application/json"}
                    },ret=>{
                        if(ret.ok){
                        this.topList=ret.data.data.topList;
                        }else{
                          
                        }
                })
            },
    }
}
</script>
<style scoped>
.font-30{
    font-size: 30px;
   
}
</style>
