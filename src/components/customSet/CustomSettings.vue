<template>
  <!-- 个性化设置页面 -->
  <div class="custom-settings">
    <!-- top row -->
    <el-row>
      <el-col :span="24">
        <div class="item-top">
          <span class="top-text">
            <span class="before-span"></span>
            <span>登录页设置</span>
          </span>
          <button>保&nbsp;存</button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="item-input">
          <InputBox title="系统名称"/>
        </div>
        <div class="item-input">
          <InputBox title="企业URL"/>
        </div>
        <div class="item-input">
          <InputBox title="填充方式"/>
        </div>
      </el-col>
      <el-col :span="16 ">
        <div class="bg-img-container">
          <div class="bg-img-text">登录页面背景图片:</div>
          <img class="bg-img" src="@/assets/img/login-bg-img.png"/>
          <!-- <div class="bg-img-choose">选择</div> -->
          <el-upload
            class="bg-img-upload upload-demo"
            action="../../assets/img/login-bg-img.png">
            <div class="bg-img-choose el-upload__text">
              选择
            </div>
          </el-upload>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="item-top">
          <span class="top-text">
            <span class="before-span"></span>
            <span>系统主题设置</span>
          </span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="item-input">
          <InputBox title="填充方式"/>
        </div>
      </el-col>
      <el-col :span="16">
        <div>
          <div class="bg-img-text">系统主题背景图片:</div>
          <img class="bg-img" src="@/assets/img/login-bg-img.png" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "CustomSettings",
  data() {
    return {
      // imgUrl: '/img/login-bg-img.3281967c.png'
    };
  },
  components:{
    InputBox: () => import('../common/InputBox')
  }
};
</script>
<style lang="less" scoped>
.custom-settings{
  width: 100%;
  height: 100%;
  .el-row{
    .item-top{
      height: 60px;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      .top-text{
        font-size: 0.114583rem;
        display: flex;
        align-items: center;
        align-self: center;
        .before-span{
          display: inline-block;
          width: 6px;
          height: 14px;
          background-color: #000;
        }
        span{
          font-size: 16px;
          margin-left: 10px;
        }
      }
      button{
        width: 80px;
        height: 30px;
        background: rgba(0, 102, 204, 1);
        border-radius: 10px;
        border: none;
        font-size: 14px;
        color: #fff;
        outline: none;
        align-self: center;
      }
    }
    /deep/ .item-input{
      width: 240px;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 108px;
      .input-box{
        .title{
          span{
            font-size: 14px;
          }
        }
        .el-input{
          .el-input__inner{

          }
        }
      }
    }
  }
}
</style>
<style scoped>
.bg-img-container {
    position: relative;
}
.bg-img-container .bg-img-upload {
    display: inline;

}

.bg-img-text {
  font-size: 14px;
  height: 0.208333rem;
  line-height: 0.208333rem;
}
.bg-img {
  /* display: block; */
  height: 1.25rem;
  margin-right: .151042rem/* 29/16 */;
}
.bg-img-choose {
  width: 2.5625rem;
  height: 1.25rem;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 102, 204, 1);
  display: inline;
  position: relative;
}
 
</style>