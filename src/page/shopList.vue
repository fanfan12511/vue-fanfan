<template>
    <div class="fillcontain">
        <h1 class="page_title">店铺列表</h1>
        <head-top></head-top>
        <div class="table_container">
          <el-table
            :data="shopData"
            style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="店铺ID">
                      <span>{{ props.row.shopId }}</span>
                    </el-form-item>
                    <el-form-item label="店铺评分">
                      <span>{{ props.row.shopSort }}</span>
                    </el-form-item>
                    <el-form-item label="店铺名称">
                        <span>{{ props.row.shopName }}</span>
                    </el-form-item>
                    <el-form-item label="店铺地址">
                        <span>{{ props.row.shopAddress }}</span>
                    </el-form-item>
                    <el-form-item label="店铺分类">
                        <span>{{ props.row.shopCategory }}</span>
                    </el-form-item>
                    <el-form-item label="销售量">
                        <span>{{ props.row.shopNum }}</span>
                    </el-form-item>
                    <el-form-item label="店铺介绍">
                        <span>{{ props.row.shopDesc }}</span>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <span>{{ props.row.shopPhone }}</span>
                    </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column
              label="店铺名称"
              prop="shopName">
            </el-table-column>
            <el-table-column
              label="商品地址"
              prop="shopAddress">
            </el-table-column>
            <el-table-column
              label="店铺介绍"
              prop="shopDesc">
            </el-table-column>
            <el-table-column
              prop="option"
              label="操作">
              <template slot-scope="scope">
                  <el-button @click="handleEdit(scope.$index, scope.row)" size="small">编辑</el-button>
                  <el-button type="danger" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination background layout="prev, pager, next":total="1000"></el-pagination>
          <!-- 编辑弹出层 -->
          <el-dialog title ="修改店铺信息" :visible.sync="dialogFormVisible">
              <el-form :model="selectTable">
                  <el-form-item label="店铺名称" label-width="100px">
                    <el-input v-model="selectTable.shopName" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="详细地址" label-width="100px">
                      <el-autocomplete
                        v-model="selectTable.shopAddress"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入地址"
                        style="width: 100%;"
                      ></el-autocomplete>
                      <span>当前城市：杭州</span>
                  </el-form-item>
                  <el-form-item label="店铺介绍" label-width="100px">
                    <el-input v-model="selectTable.shopDesc" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="联系电话" label-width="100px">
                    <el-input v-model="selectTable.shopPhone" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="店铺分类" label-width="100px">
                    <el-select v-model="selectTable.shopCategory" placeholder="请选择店铺类型">
                      <el-option label="果蔬生鲜" value="shanghai"></el-option>
                      <el-option label="小吃夜宵" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
              </div>
          </el-dialog>
        </div>

    </div>
</template>
<style>
.table_container{
    padding:20px 10px;
}
.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}
.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}

.el-pagination{
    text-align: center;
    margin: 20px 0;
}
</style>

<script>
    import headTop from '../components/headTop'
    export default {
        data () {
            return {
                shopData: [{
                      shopId: '12987122',
                      shopName: '好滋好味鸡蛋仔',
                      shopCategory: '江浙小吃、小吃零食',
                      shopDesc: '荷兰优质淡奶，奶香浓而不腻',
                      shopAddress: '上海市普陀区真北路',
                      shopSort: '4.5',
                      shopNum: '1033',
                      shopPhone: '18833760393'
                    }
                ],
                dialogData:[],
                dialogFormVisible: false,
                selectTable: {},
                formLabelWidth: '120px',
                restaurants: [],
                state: '',
            }

        },
        created() {
            this.initData()
        },
        components: {
            headTop
        },
        methods:{
            initData: function (){
                var that = this;
                this.$axios.post('/user/shop').then(function (res) {
                    that.shopData = res.data
                }).catch(function (err) {
                    console.log(err)
                })
            },
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                  return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },

            loadAll () {
                return [
                    { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                    { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                    { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                    { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                    { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                    { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                    { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                    { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
                    { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
                    { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" }
                ]
            },
            handleEdit (index, row) {
                console.log(index, row);
                this.selectTable = row;
                this.dialogFormVisible = true;

            }
        },
        mounted () {
            this.restaurants = this.loadAll();
        }
    }
</script>
