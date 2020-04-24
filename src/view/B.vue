<template>
<div>
    我是第二个界面
    <router-link to="/D">跳转D页面</router-link>
    <router-link to="/A">回去</router-link>
<router-view> </router-view>
</div>
</template>

<script>
export default {
    name:'B',
    data(){
        return{

        }
    }
}
</script>>