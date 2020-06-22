<template>
    <div class="main">
        <SaveTemplate />
        <ImportTemplate />
    </div>
</template>
<script>
export default {
    name: 'TaskDecomposition',
    data(){
        return {
            
        }
    },
    components:{
        SaveTemplate: () => import('../../common/SaveTemplate'),
        ImportTemplate: () => import('../../common/ImportTemplate')
    }
}
</script>
<style scoped>

</style>