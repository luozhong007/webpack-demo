<!--
    多语言国际化测试页面
    User: luozhong
    Date: 2017/4/11
    Time: 10:08
    email:luozhong0521@163.com
-->
<template>
    <div id="languageTestPage">
        <h3>多语言国际化测试页面</h3>
        <p v-for="item in detectItem">a</p>
        <button @click="aaa">ssss</button>
        <ol>
            <li>t{姓名}</li>
            <li>t{性别}</li>
            <li>t{年龄}</li>
            <li>t{专业}</li>
        </ol>
    </div>
</template>

<script>
    export default{
        route: {
            data(){

            }
        },
        data(){
            return {
                "detectItemNo": 0,
                "detectItem": {}
            }
        },
        methods: {
            //点击添加条件
            aaa(){
                this.detectItemNo ++ ;
                let key = `item${this.detectItemNo}`;

                this.$set(this.detectItem,key,{});
                console.log(this.detectItem);
            },
            //点击删除
            handleDelete(){

            }
        },
        components: {
        }
    }
</script>