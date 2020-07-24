<template>
    <div class="login">
        <img class="bg-img" src="../assets/img/yunying.png">
        <div class="content">
            <div class="logo">
                <img class="content-img" src="../assets/img/qiyuan.png">
            </div>
            <TextField
                type='text'
                name='user'
                class="account"
                imgURL= 'http://47.111.232.105:5000/img/zhanghao.png'
                placeholder='请输入您的账号'
                :error='error.account'
                v-model="user.username"
            />
            <TextField
                type='password'
                name='password'
                class="password"
                imgURL= 'http://47.111.232.105/img/mima.png'
                placeholder='请输入您的密码'
                :error='error.password'
                v-model="user.password"
            />
            <div class="submit" @click="submitHandel">
                <button>登&nbsp;录</button>
            </div>
        </div>
    </div>
</template>
<script>
import TextField from './common/TextField'
import { post } from '../utils/http'
import { loginAPI } from '../utils/apiList'
import jwtDecode from 'jwt-decode'
export default {
    name:'Login',
    data(){
        return{
            user:{
                username:'',
                password:''
            },
            error:{
                account:'',
                password:''
            }
        }
    },
    methods:{
        submitHandel(){
            // 每次点击之后清空error的值
            this.error.account = '';
            this.error.password = '';
            // 点击后判断输入框的值是否为空
            if(this.user.username === ''){
                this.error.account = '账号不能为空';
            }else if(this.user.username.indexOf(' ') !== -1){
                this.error.account = '您输入的格式不对';
            }
            if(this.user.password === ''){
                this.error.password = '密码不能为空';
            }else if(this.user.password.indexOf(' ') !== -1){
                this.error.password = '您输入的格式不对';
            }else if(this.user.password.length < 6) {
                this.error.password = '密码不能少于8位'
            }
            if (!this.error.account && !this.error.password){
                post(loginAPI, { username: 'testUser001', password: 'aabbcc123'})
                    .then(res => {
                        console.log(res);
                        // // 存储token
                        // localStorage.setItem('token', res.token);
                        // 把tokenid存储到cookie里面，让后端读取
                        document.cookie = "token=" + res.tokenid;

                        //分发action，更改store里面的state
                        this.$store.dispatch('setIsAuthorization', !this.isEmpty(res.token));
                        this.$store.dispatch('setUser', {username: 'testUser001', password: 'aabbcc123'});

                        // 页面跳转
                        this.$router.push({
                            path: '/Home'
                        })
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
        isEmpty(value){
            return (
                value === undefined || value === null ||
                (typeof value === 'object' && Object.keys(value).length === 0) ||
                (typeof value === 'string' && value.trim().length === 0)
            );
        }
    },
    components:{
        TextField
    }
}
</script>
<style lang="less" scoped>
.login{
    position: absolute;
    width: 100%;
    height: 100%;
    .bg-img{
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .content{
        position: absolute;
        top: 19%;
        right: 12.5%;
        width: 29.6%;
        height: 61.8%;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 40px 0px rgba(0,44,156,0.1);
        border-radius:20px;
        z-index: 666;
        .logo{
            width: 100%;
            display: flex;
            justify-content: center;
            .content-img{
                width: 50px;
                height: 50px;
                margin-top: 60px;
            }
        }
        /deep/ .account{
            position: absolute;
            left: 8.7%;
            top: 34.2%;
            img{
                width: 4.3%;
                height: 28.6%;
                position: absolute;
                left: 6.4%;
                top: 35.7%;
            }
        }
        /deep/ .password{
            position: absolute;
            left: 8.7%;
            top: 54.2%;
            img{
                width: 5%;
                height: 33%;
                position: absolute;
                left: 6.4%;
                top: 32.8%;
            }
        }
        .submit{
            position: absolute;
            left: 22.8%;
            bottom: 50px;
            width:54.4%;
            height: 9.2%;
            button{
                width:100%;
                height:100%;
                background:rgba(0,102,204,1);
                border-radius:20px;
                font-family:Microsoft YaHei;
                color:rgba(255,255,255,1);
                outline: none;
                border: none;
                font-size: 20px;
            }
        }
    }
}
</style>