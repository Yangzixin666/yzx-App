export default {
    recommend: '/api/home/index/recom?token=1ec949a15fb709370f',
    login: '/api/home/user/pwdlogin?token=1ec949a15fb709370f',//登录
    swiperImgs: '/api/home/index/slide?token=1ec949a15fb709370f',//轮播
    fiveNavs: '/api/home/index/nav?token=1ec949a15fb709370f',//搜索
    reg: '/api/home/user/reg?token=1ec949a15fb709370f',//注册
    code: '/api/vcode/chkcode?token=1ec949a15fb709370f',//验证码
    userinfo:'api/user/myinfo/userinfo/uid/'+
    	localStorage.getItem('uid')+'?token=1ec949a15fb709370f',//用户信息
    out:'api/home/user/safeout?token=1ec949a15fb709370f',//退出
    recomGoods: '/api/home/index/goodsLevel?token=1ec949a15fb709370f', //首页标题推荐
    goodsLeft:'/api/home/category/menu?token=1ec949a15fb709370f',//分类左侧列表
    goodsRight:'/api/home/category/show?token=1ec949a15fb709370f',//分类右侧列表
    colection:'/api/user/fav/index?token=1ec949a15fb709370f',//获取收藏数据
    changePassword:'/api/home/user/modpwd?token=1ec949a15fb709370f',//修改密码
    iphone:'/api/user/myinfo/updatecellphone?token=1ec949a15fb709370f',//绑定手机号
    headUpdate:'/api/user/myinfo/formdatahead?token=1ec949a15fb709370f',//头像上传
    picture:'/userfiles/head/',//返回图片接口
    updateInfo:'/api/user/myinfo/updateuser?token=1ec949a15fb709370f',//修改用户
    userdel:'/api/user/fav/del?token=1ec949a15fb709370f',//删除收藏
}