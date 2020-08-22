<template>
    <div class="left-tree">
        <div class="default-top">
            <span>目录</span>
            <i @mousedown.stop="handleDefaultShow" class="el-icon-plus"></i>
        </div>
        <div 
          v-show="isShowDefaultAdd" 
          class="default-add"
          @mouseenter="defaultAddMouseEnter"
          @mouseleave="defaultAddMouseLeave">
            <span @click.stop="addFirstClass">新增字典分类</span>
            <span @click.stop="addFirstDictionary">新增数据字典</span>
        </div>
        <el-tree
          class="tree"
          :props="defaultProps"
          :data="treeData"
          node-key="id"
          @node-click="handleNodeClick"
          highlight-current
          :default-expand-all="false"
          :expand-on-click-node="false">
          <span @mouseenter="handleShowIcon" @mouseleave="handleCloseIcon" class="content" slot-scope="{ node, data}">
              <span :fatherId="data.father_id" :leaf="data.leaf" :id="data.id">{{node.label}}</span>
              <i class="el-icon-more" @mousedown="handleMousedown"></i>
          </span>
        </el-tree>
        <div 
          v-show="isShowTooltips" 
          ref="tooltips" class="tooltips" 
          @mouseleave="handleMouseleave"
          @mouseenter="handleMouseEnter">
            <span @click.stop="handleAddDicClass" v-show="isShowDictionaryClass" class="align-left">新增字典分类</span>
            <!-- <span @click.stop="handleAddChildClass" v-show="isShowChildClass" class="align-left">新增子分类</span> -->
            <span @click.stop="handleAddDictionary" v-show="isShowDictionay" class="align-left">新增数据字典</span>
            <span @click="dleteNode" class='align-left'>删除</span>
        </div>
    </div>
</template>
<script>
import {post} from '@/utils/http'
import { insertAPI, dictionaryDeletetAPI } from '@/utils/apiList'
export default {
    name: 'DicLeftPanel',
    props:{
        treeData: Array
    },
    inject: ['reload'],
    data(){
        return {
            defaultProps:{
                label: 'category_name',
                children: 'children'
            },
            clientX: '',
            ClientY: '',
            isShowTooltips: false,
            isShowDefaultAdd: false,
            isShowDictionaryClass: false,// 新增字典分类
            isShowDictionay: false, //新增数据字典
            setTimeout: null,
            nodeId: null, //树形菜单的node的id
            nodeLeaf: null, //树形菜单的leaf
            nodeFatherId: null, 
        }
    },
    methods:{
        // 点击树形数据的node节点时触发的函数
        handleNodeClick(data, node){
            this.$store.dispatch('setDictionaryTreeData', data);
        },
        // 监听鼠标点击后触发tooltips的显示
        handleMousedown(e){
            this.clientX = e.clientX;
            this.clientY = e.clientY;
            this.getTooltips();
            this.isShowTooltips = true;
            this.setTimeout = setTimeout(() => {
                this.isShowTooltips = false;
            }, 1000);
        },
        // 监听鼠标进入tooltips
        handleMouseleave(){
            this.isShowTooltips = false;
        },
        handleMouseEnter(){
            this.isShowTooltips = true;
            // 清除定时器
            clearTimeout(this.setTimeout);
        },
        // 设置tooltips盒子的位置为鼠标的相对位置
        getTooltips(){
            this.$refs.tooltips.style.position = 'absolute';
            this.$refs.tooltips.style.left = (this.clientX - 110) + 'px';
            this.$refs.tooltips.style.top = this.clientY + 'px';
        },
        // 树形菜单最顶上的目录，点击➕图标出来的菜单
        handleDefaultShow(e){
            this.isShowDefaultAdd = true;
            this.setTimeout =  setTimeout(() => {
                this.isShowDefaultAdd = false;
            }, 1000);
        },
        // 树形菜单最顶上的目录，点击➕图标出来的菜单
        defaultAddMouseEnter(e){
            clearTimeout(this.setTimeout);
        },
        // 树形菜单最顶上的目录，点击➕图标出来的菜单
        defaultAddMouseLeave(e){
            this.isShowDefaultAdd = false;
        },
        // 显示鼠标菜单
        handleShowIcon(e){
            this.nodeLeaf = e.target.getElementsByTagName('span')[0].getAttribute('leaf');
            this.nodeId = e.target.getElementsByTagName('span')[0].getAttribute('id');
            this.nodeFatherId = e.target.getElementsByTagName('span')[0].getAttribute('fatherid');
            if(this.nodeLeaf == '0'){
                this.isShowDictionaryClass = true;
                this.isShowDictionay = true;
            }else {
                this.isShowDictionay = false;
                this.isShowDictionaryClass = false;
            }
            let showIcon = e.target.getElementsByTagName('i')[0];
            showIcon.style.visibility = 'visible';
        },
        // 隐藏鼠标菜单
        handleCloseIcon(e){
            let showIcon = e.target.getElementsByTagName('i')[0];
            showIcon.style.visibility = 'hidden';
        },
        // 点击新增一级菜单
        addFirstClass(){
            post(
                insertAPI,
                {
                    category_name: '新增字典分类',
                    father_id: 0,
                    leaf: 0
                }
            ).then(res => {
                console.log(res);
                this.reload();
            })
        },
        // 点击新增一级数据字典
        addFirstDictionary(){
            post(
                insertAPI,
                {
                    category_name: '新增数据字典',
                    father_id: 0,
                    leaf: 1
                }
            ).then(res => {
                console.log(res);
                this.reload();
            }).catch(err => console.log(err))
        },
        // 点击菜单新增字典分类
        handleAddDicClass(e){
            post(
                insertAPI,
                {
                    category_name: '新增字典分类',
                    father_id: Number(this.nodeId),
                    leaf: 0,
                }
            ).then(res => {
                console.log(res);
                this.reload();
            }).catch(err => console.log(err))
        },
        // 新增数据字典
        handleAddDictionary(){
            post(
                insertAPI,
                {
                    category_name: '新增数据字典',
                    father_id: Number(this.nodeId),
                    leaf: 1,
                }
            ).then(res => {
                console.log(res);
                this.reload();
            })
        },
        // 删除
        dleteNode(){
            post(dictionaryDeletetAPI, {"id":this.nodeId})
            .then(res => {
                console.log(res);
                this.reload();
            })
            .catch(err => console.log(err));
        }
    }
}
</script>
<style lang="less" scoped>
.left-tree{
    .default-top{
        height: 20px;
        font-size: 14px;
        color: #606266;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 12px;
        i{
            font-size: 16px;
        }
    }
    width: 200px;
    height: 100%;
    box-shadow:0px 0px 15px 0px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
    /deep/ .el-tree-node__content{
        height: 40px;
        .content{
            width: 275px;
            height: 40px;
            line-height: 40px;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            padding: 0 10px 0 5px;
            box-sizing: border-box;
            i{
                width: 20px;
                height: 20px;
                font-size: 14px;
                line-height: 40px;
                visibility: hidden;
            }
        }
    }
    .tooltips{
        width: 100px;
        // height: 90px;
        font-size: 12px;
        background-color: #fff;
        box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.03);
        font-family:Microsoft YaHei;
        // .add{
        //     display: block;
        //     width: 100px;
        //     height: 30px;
        //     line-height: 30px;
        //     text-align: center;
        //     color:rgba(101,101,101,1);
        // }
        .align-left{
            display: block;
            width: 100%;
            height: 30px;
            line-height: 30px;
            padding-left: 12px;
            color:rgba(101,101,101,1);
            box-sizing: border-box;
        }
        .align-left:hover{
            background:rgba(233,243,253,1);
            color: #0066cc;
        }
    }
    .default-add{
        z-index: 99999;
        width: 100px;
        position: absolute;
        left: 270px;
        top: 210px;
        font-size: 12px;
        background-color: #fff;
        box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.03);
        span{
            display: block;
            width: 100%;
            height: 30px;
            line-height: 30px;
            padding-left: 12px;
            color:rgba(101,101,101,1);
            box-sizing: border-box;
        }
        span:hover{
            background:rgba(233,243,253,1);
            color: #0066cc;
        }
    }
}
.left-tree::-webkit-scrollbar{
    display: none;
}
</style>