<template>
    <div class="banner-bar">
        <div class="item-top">
            <span class="top-text">
                <span class="before-span"></span>
                <span style="margin-left: .078125rem">{{bannerText}}</span>
            </span>
            <span v-if="showDisappear" class="disappear">隐藏信息</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'BannerBar',
    props:{
        bannerText: String,
        showDisappear: Boolean
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped>
.banner-bar{
    .item-top{
    height: .3125rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .3125rem;
    .top-text{
        font-size: .114583rem;
        display: flex;
        vertical-align: center;
        align-self: center;
        .before-span{
            display: inline-block;
            width: .03125rem;
            height: .114583rem;
            background-color: #000;
        }
    }
    .disappear{
            font-size: .083333rem;
            color: #0066cc;
        } 
}
}
</style>