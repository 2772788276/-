// app.js
App({
  globalData: {
    userInfo: null,
    progress:3,
    message:'',
    token:'',
    baseurl:'http://smalla.kaison.top:8080',
    // 用户报名信息
    name: '',
    academy: '',
    grade: '',
    class: '',
    number: '',
    direction: '',
    phone: '',
    introduction: '',
  },
//接口函数
//登录接口
login(rescode){
    wx.showLoading({
      title: '登录中',
    })
    wx.request({
      url: this.globalData.baseurl+'/wx/user/login',
      method:'get',
      header:{
        'content-Type': 'application/json'
      },
      data:{
        code:rescode
      },
      success:res=>{
        wx.hideLoading()
        this.globalData.token=res.data
        console.log(res.data)
        this.getinfo(res.data)
        this.getsignTime(res.data)
        this.getSwiperImage(res.data)
        this.getProgress(res.data)
       },
       fail:res=>{
         console.log(res)
         wx.showToast({
          title: '请求失败',
          icon:'error'
         })
       }
    })
},
//获取报名信息接口,并储存
getinfo(token){
    wx.showLoading({
      title: '载入信息中',
    })
    wx.request({
      url:this.globalData.baseurl+'/wx/assess/signupinfo',
      method:'get',
      header:{
        'content-Type': 'application/json',
        'token': token
      },
      success:res=>{
        console.log(res.data)
        wx.hideLoading()
        // 渲染个人信息
        let {data}=res.data
        this.setinfo(data)
       },
       fail:res=>{
        wx.showToast({
          title: '请求信息失败',
          icon:'error'
        })
       }
    })
},
// 个人信息储存
setinfo(data){
  if(data.name){
    this.globalData.name=data.name
    this.globalData.academy=data.college
    this.globalData.grade=data.grade
    this.globalData.class=data.major
    this.globalData.number=data.stuId
    this.globalData.direction=this.groupOptionTodirection(data.groupOption)
    this.globalData.phone=data.phone
    this.globalData.introduction=data.introduction
  }
  this.ischangeable()
},
//组别转换
groupOptionTodirection(groupOption){
  let direction;
  switch(groupOption){
    case 0:
    direction='后台组'
    break;
    case 1:
    direction='前端组'
    break;
    case 2:
    direction='AI组'
    break;
    case 3:
    direction='传媒组'
    break;
    case 4:
    direction='机械组'
    break;
    case 5:
    direction='电控组'
    break;
    case 6:
    direction='管理组+后台组'
    break;
    case 7:
    direction='管理组+前端组'
    break;
    case 8:
    direction='管理组+AI组'
    break;
    case 9:
    direction='管理组+机械组'
    break;
    case 10:
    direction='管理组+电控组'
    break;
  }
  return direction;
},
directionTogroupOption(direction){
  let groupOption;
  switch(direction){
    case '后台组':
    groupOption=0
    break;
    case '前端组':
    groupOption=1
    break;
    case 'AI组':
    groupOption=2
    break;
    case '传媒组':
    groupOption=3
    break;
    case '机械组':
    groupOption=4
    break;
    case '电控组':
    groupOption=5
    break;
    case '管理组+后台组':
    groupOption=6
    break;
    case '管理组+前端组':
    groupOption=7
    break;
    case '管理组+AI组':
    groupOption=8
    break;
    case '管理组+机械组':
    groupOption=9
    break;
    case '管理组+电控组':
    groupOption=10
    break;
  }
  return groupOption;
},
// 判断报名表单的状态（是否处于报名时间，是否已报名)
ischangeable(){
  let index = getCurrentPages()
  if(this.name!=''){
    index[0].setData({
    changable:false
    })
  }
},
getsignTime(token){
  wx.request({
    url: this.globalData.baseurl+'/wx/assess/issignup',
    method:'get',
    header:{
      'content-Type': 'application/json',
      'token': token
    },
    success:res=>{
      let index = getCurrentPages()
      index[0].setData({
        signTime:false
      })
     },
     fail:res=>{
      console.log(res)
      wx.showToast({
        title: '请求信息失败',
        icon:'error'
      })
     }
  })
},
// 报名接口
sign(signinfo,token){
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: this.globalData.baseurl+'/wx/assess/signup',
    method:'post',
    header:{
      'content-Type': 'application/json',
      'token': token
    },
    data:{
      name:signinfo.name,
      college:signinfo.college,
      grade:signinfo.grade,
      major:signinfo.major,
      stuId:signinfo.stuId,
      phone:signinfo.phone,
      groupOption:signinfo.groupOption,
      introduction:signinfo.introduction
    },
    success:res=>{
      let index = getCurrentPages()
      index.setData({
        changable:false
      })
      this.setinfo(signinfo)
      wx.hideLoading()
      wx.showToast({
        title: '报名成功',
        icon:'success'
      })
     },
     fail:res=>{
      wx.hideLoading()
      wx.showToast({
        title: '网络错误',
        icon:'error'
      })
     }
  })
},
// 修改报名信息接口
changeSignInfo(changeInfo,token){
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: this.globalData.baseurl+'/wx/assess/signup',
    method:'put',
    header:{
      'content-Type': 'application/json',
      'token': token
    },
    data:{
      name:changeInfo.name,
      college:changeInfo.college,
      grade:changeInfo.grade,
      major:changeInfo.major,
      stuId:changeInfo.stuId,
      phone:changeInfo.phone,
      groupOption:changeInfo.groupOption,
      introduction:changeInfo.introduction
    },
    success:res=>{
      console.log(res)
      wx.hideLoading()
      if(res.data.code==403){
        wx.showToast({
          title: '此时间不可修改',
          icon:'error'
        })
      }else{
        this.setinfo(changeInfo)
        // 显示修改之后的值
        let info = getCurrentPages()
        info[info.length-1].setData({
          ['now.name']:this.globalData.name,
          ['now.academy']:this.globalData.academy,
          ['now.grade']:this.globalData.grade,
          ['now.class']:this.globalData.class,
          ['now.number']:this.globalData.number,
          ['now.direction']:this.globalData.direction,
          ['now.phone']:this.globalData.phone,
          ['now.introduction']:this.globalData.introduction
      })
        wx.showToast({
          title: '修改成功',
          icon:'success'
        })
      }
     },
     fail:res=>{
      console.log(res)
      wx.showToast({
        title: '网络错误',
        icon:'error'
      })
     }
  })
},
// 获取轮播图接口
getSwiperImage(token){
  wx.request({
    url: this.globalData.baseurl+'/web/swiper',
    method:'get',
    header:{
      'content-Type': 'application/json',
      'token': token
    },
    success:res=>{
      // 将返回值的url转为数组
      let url=[]
      for(let i=0;i<res.data.data.length;i++){
        url[i]=res.data.data[i].url
      }
      let index = getCurrentPages()
      index[0].setData({
        swiperImg:[...index[0].data.swiperImg,...url]
      })
     },
     fail:res=>{
      console.log(res)
      wx.showToast({
        title: '请求信息失败',
        icon:'error'
      })
     }
  })
},
// 获取当前考核进度
getProgress(token){
  wx.request({
    url: this.globalData.baseurl+'/wx/assess',
    method:'get',
    header:{
      'content-Type': 'application/json',
      'token': token
    },
    success:res=>{
      this.globalData.progress=res.data.data.length-1
      let page = getCurrentPages()
      page[0].setData({
        progress:res.data.data.length-1
      })
      this.globalData.message=res.data.data
     },
     fail:res=>{
      console.log(res)
     }
  })
},
})