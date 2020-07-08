<template>
<!-- 菜单设置页面 -->
    <div class="menu-main">
        <MenuLeft />
        <span class="change">
           <img src="../../assets/img/chuansong.png">
        </span>
        <MenuRight />
    </div>
</template>
<script>
export default {
    name: 'MenuMain',
    data(){
        return {

        }
    },
    components: {
        MenuLeft: () => import('./MenuLeft'),
        MenuRight: () => import('./MenuRight')
    }
}
</script>
<style scoped>
.menu-main {
    display: flex;
    justify-content: flex-start;
}
.change{
    display: inline-block;
    width: .666667rem;
    height: .666667rem;
    color: #0066cc;
    text-align: center;
    align-self: center;
}
</style>
