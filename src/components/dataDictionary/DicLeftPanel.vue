<template>
    <div class="left-tree">
        <el-tree
          class="tree"
          :props="defaultProps"
          :data="treeData"
          node-key="id"
          @node-click="handleNodeClick"
          highlight-current
          :default-expand-all="false"
          :expand-on-click-node="false">
          <span class="content" slot-scope="{ node, data}">
              <span :id="data.id">{{node.label}}</span>
              <i class="el-icon-more" @mousedown="handleMousedown"></i>
          </span>
        </el-tree>
        <div 
          v-show="isShowTooltips" 
          ref="tooltips" class="tooltips" 
          @mouseleave="handleMouseleave"
          @mouseenter="handleMouseEnter">
            <span class="add">新增字典分类</span>
            <span class="add">新增数据字典</span>
            <span class='delete'>删除</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DicLeftPanel',
    props:{
        treeData: Array
    },
    data(){
        return {
            defaultProps:{
                label: 'category_name',
                children: 'children'
            },
            clientX: '',
            ClientY: '',
            isShowTooltips: false,
            setTimeout: null
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
            console.log(this.$refs.tooltips);
            this.$refs.tooltips.style.position = 'absolute';
            this.$refs.tooltips.style.left = (this.clientX - 110) + 'px';
            this.$refs.tooltips.style.top = this.clientY + 'px';
        }
    }
}
</script>
<style lang="less" scoped>
.left-tree{
    width: 300px;
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
                font-size: 16px;
                line-height: 40px;
            }
        }
    }
    .tooltips{
        width: 100px;
        height: 90px;
        font-size: 12px;
        background-color: #fff;
        box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.03);
        font-family:Microsoft YaHei;
        .add{
            display: block;
            width: 100px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            color:rgba(101,101,101,1);
        }
        .delete{
            display: block;
            width: 100px;
            height: 30px;
            line-height: 30px;
            padding-left: 12px;
            color:rgba(101,101,101,1);
        }
        .add:hover,.delete:hover{
            background:rgba(233,243,253,1);
            color: #0066cc;
        }
    }
}
.left-tree::-webkit-scrollbar{
    display: none;
}
</style>