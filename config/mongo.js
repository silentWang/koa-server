const mongoose = require('mongoose');
const options = {}
// username 数据库用户名
// password 数据库密码
// localhost 数据库ip
// dbname 数据库名称
const url = 'mongodb://username:password@localhost:27017/dbname'

module.exports = {
    connect: ()=> {            
        mongoose.connect(url,options)
        let db = mongoose.connection
        db.on('error', console.error.bind(console, '连接错误:'));
        db.once('open', ()=> {
            console.log('mongodb connect suucess');
        })
    }
}