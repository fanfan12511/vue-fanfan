<template>
    <div>
        <h1 class="page_title">食物管理</h1>
        <head-top></head-top>
        <el-table
         :data="foodData"
         style="width: 100%">
         <el-table-column
           prop="date"
           label="日期"
           width="150">
         </el-table-column>
         <el-table-column
           prop="name"
           label="名称"
           width="150">
         </el-table-column>
         <el-table-column
           prop="big_category"
           label="大类">
         </el-table-column>
         <el-table-column
           prop="small_category"
           label="小类">
         </el-table-column>
         <el-table-column
           prop="product"
           label="产地">
         </el-table-column>
         <el-table-column
           prop="source"
           label="出处">
         </el-table-column>
         <el-table-column
           prop="option"
           label="操作">
           <template slot-scope="scope">
               <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
               <el-button type="text" size="small">删除</el-button>
           </template>
         </el-table-column>
       </el-table>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    export default {

        data () {
            return{

                foodData: [{
                    date: '2016-05-02',
                    name: '仙人掌',
                    big_category: '其他类',
                    small_category: '其他',
                    product: '暂无产地',
                    source: '中国食物成分表2004（第二册）'
                  }]
            }
        },
        created() {
            this.initData()
        },
        components:{
            headTop
        },
        methods:{
            initData: function (){
                var that = this;
                this.$axios.post('/user/food').then(function (res) {
                    that.foodData = res.data
                }).catch(function (err) {
                    console.log(err)
                })
            }
        }
    }
</script>
