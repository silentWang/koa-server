const router = require('koa-router')()
const Joi = require('joi')
const Utils = require('./../utils')
const Users = require('./../../model/users')
router.prefix('/api')

let handleData = (ctx,data)=>{
    let schema = Joi.object().keys({
        username:Joi.string().required(),
        sex:Joi.string().required(),
        age:Joi.number().required()
    })
    let result = schema.validate(data)
    let code = 0;
    if(result.error){
        code = -1
    }
    else{
        // 存储
        // Users.create(data)
    }
    console.log(Utils.parseData('',code))
    ctx.body = Utils.parseData('',code)
}


router.get('/login',async (ctx,next)=>{
    // ctx.request.query 可以获取get参数
    // ctx.params 可以获取RESTful api 格式匹配的路由
    handleData(ctx,ctx.query)
})

router.post('/login',async (ctx,next)=>{
    // ctx.request.body 可以获取post参数
    handleData(ctx,ctx.request.body)
})

module.exports = router