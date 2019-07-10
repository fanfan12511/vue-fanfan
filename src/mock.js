
const Mock = require('mockjs')
// 获取ock.Random对象
const Random = Mock.Random
// mock 一组食物的数据
const foodData = function () {
    let Data = [];
    for (let i = 0; i < 10; i++) {
        let data = {
            date: Random.date(),
            name: Random.ctitle(5),
            big_category: '其他类',
            small_category: '其他',
            product: Random.county(true),
            source: '中国食物成分表2004（第二册）'
        }
        Data.push(data)
    }
    return Data
}
// mock 一组店铺的数据
const shopData = function (){
    let Data = [];
    for (let i = 0; i < 8; i++) {
        let data = {
            shopId: Random.integer(100),
            shopName: Random.cword(4,8),
            shopCategory: '江浙小吃、小吃零食',
            shopDesc: Random.cparagraph(1),
            shopAddress: Random.county(true),
            shopSort: Random.float(3, 4, 1, 1),
            shopNum: Random.natural(0, 8000),
            shopPhone: Random.integer(8)
        }
        Data.push(data)
    }
    return Data
}

Mock.mock('/user/food', 'post', foodData );

Mock.mock('/user/shop', 'post', shopData)
