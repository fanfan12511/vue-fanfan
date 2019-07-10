<template>
    <div class="index_page">
        <el-container style="height: 100%;">
            <el-header>Header</el-header>
            <el-container>
                <el-aside :span="4" style="background-color:#545c64">
                    <el-row>
                        <el-menu default-active="defaultActive" theme="dark" router>
                            <el-menu-item index="index">
                                <i class="el-icon-menu"></i>
                                <span slot="title">控制台首页</span>
                            </el-menu-item>
                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-document"></i>
                                    <span slot="title">数据管理</span>
                                </template>
                                <el-menu-item index="shopList">
                                    商家列表
                                </el-menu-item>
                                <el-menu-item index="foodList">
                                    食物列表
                                </el-menu-item>
                                <el-menu-item index="cookList">
                                    <!-- <router-link :to="{ name: 'cookList', params: {} }"></router-link> -->
                                    食谱列表
                                </el-menu-item>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title">
                                    <i class="el-icon-message"></i>
                                    <span slot="title">活动可视化管理</span>
                                </template>
                                <el-menu-item index="activeAdd">活动创建</el-menu-item>
                                <el-menu-item index="activeList">活动统计</el-menu-item>
                                <el-menu-item index="activeMenge">活动管理</el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </el-row>
                </el-aside>
                <el-main :span="20">
                    <keep-alive>
                        <router-view/>
                    </keep-alive>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    export default {
        computed:{
            defaultActive: function () {
                return this.$route.path.replace('/','')
            }
        }
    }
</script>
<style>
.index_page{
    height: 100%;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

</style>
