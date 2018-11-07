<!--
****--@file     ${NAME}
****--@date     ${DATE} ${TIME}
****--@author   YC
****--@describe ${describe}
-->
<template>
    <div>
        
    </div>
</template>
<script>
    /* 当前组件必要引入 */

    // 当前组件引入全局的util
    let Util = null;
    export default {
        name: '${moduleName}',
        data() {
            return {}
        },
        methods: {
            // 初始化请求列表数据
            init() {
                Util = this.\$util;
            }

        },
        created() {
            this.init();
        },
        mounted() {
        },
        components: {}
    }

</script>