var express = require('express')
var app = express()
let login = true

app.all('*', (req, res, next) => {
    if (!login) {
        let result = {
            err: 504,
            msg: '未登录',
        }
        return res.send(result)
    }
    next()
})

//定义方法
app.get('/', (req, res) => {
    res.send('hello world')
})

//响应接口
app.get('/list/product', (req, res) => {
    let result = {
        err: 0,
        msg: '操作成功',
        data: {
            "id": '1',
            "name": "huawei",
            "price": "1999",
            "title": 'rongyao1',
        }
    }
    res.send(result)
})

app.listen(3000, () => {
    console.log('running 3000....')
})