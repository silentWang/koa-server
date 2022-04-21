module.exports = class Utils {
    static parseData(data,code = 0){
        let message = 'success'
        if(code != 0){
            message = this.getErrorMsg(code)
        }
        let res = JSON.stringify({data,code,message})
        return res
    }

    static getErrorMsg(code){
        let message = '未知错误'
        switch(code){
            case -1 : message = '参数错误';break
            case 0 : message = 'success';break
            default:break
        }
        return message
    }

}