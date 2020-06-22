<template>
    <div class="pro-management">
        <header>
            <QuerySelect />
        </header>
    </div>
</template>
<script>
export default {
    name: 'ProjectManagement',
    data(){
        return{

        }
    },
    components:{
        QuerySelect: () => import('../../common/QuerySelect')
    }
}
</script>
<style scoped>
header {
    padding-top: .133333rem;
}
</style>