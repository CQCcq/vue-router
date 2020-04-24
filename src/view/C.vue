<template>
    <div>
        <div>
            <router-link to="/A">回去</router-link>
            <router-link to="/D">进入D页面</router-link>
            我是第三个界面
            
        </div>
        <router-view></router-view>
    </div>
</template>>

<script>
export default {
    name:'C',
    data(){
        return{

        }
    }
}
</script>>