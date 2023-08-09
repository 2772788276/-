// pages/info/info.js
Page({
  data: {
    now:{
      name:'',
      academy:'',
      grade:'',
      class:'',
      number:'',
      direction:'',
      phone:'',
      introduction:''
    }, 
    change:{
      name:'',
      academy:'',
      grade:'',
      class:'',
      number:'',
      direction:'',
      phone:'',
      introduction:''
    },
    show:false,
     // 下拉框部分数组
     grade: {
      curfId: 0,
      grades: [{
          name: "请选择",
          id: 0
        },
        {
          name: "2020",
          id: 1
        },
        {
          name: "2021",
          id: 2
        },
        {
          name: "2022",
          id: 3
        },
        {
          name: "2023",
          id: 4
        },
      ],
    },
    direction: {
      curfId: 0,
      directions: [
        {
          name: "后台组",
          id: 0
        },
        {
          name: "前端组",
          id: 1
        },
        {
          name: "AI组",
          id: 2
        },
        {
          name: "传媒组",
          id: 3
        },
        {
          name: "机械组",
          id: 4
        },
        {
          name: "电控组",
          id: 5
        },
        {
          name: "管理组+后台组",
          id: 6
        },
        {
          name: "管理组+前端组",
          id: 7
        },
        {
          name: "管理组+AI组",
          id: 8
        },
        {
          name: "管理组+机械组",
          id: 9
        },
        {
          name: "管理组+电控组",
          id: 10
        }
      ],
    },
  },
  back(){
    wx.navigateBack({
      delta: 0,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },
   //获取表单内容
   inputvalue: function (e) {
    if (e.currentTarget.dataset.type == "name") {
      this.setData({
        ['change.name']: e.detail.value
      })
    }
    if (e.currentTarget.dataset.type == "academy") {
      this.setData({
        ['change.academy']: e.detail.value
      })
    }
    if (e.currentTarget.dataset.type == "grade") {
      this.setData({
        ['change.grade']: e.detail.select
      })
    }
    if (e.currentTarget.dataset.type == "class") {
      this.setData({
        ['change.class']: e.detail.value
      })
    }
    if (e.currentTarget.dataset.type == "number") {
      this.setData({
        ['change.number']: e.detail.value
      })
    }
    if (e.currentTarget.dataset.type == "direction") {
      this.setData({
        ['change.direction']: e.detail.select
      })
    }
    if (e.currentTarget.dataset.type == "phone") {
      this.setData({
        ['change.phone']: e.detail.value
      })
    }
    if (e.currentTarget.dataset.type == "introduction") {
      this.setData({
        ['change.introduction']: e.detail.value
      })
    }
  },
  checkform: function () {
    if (this.data.now.name == '' || this.data.now.academy == '' || this.data.now.grades == '请选择' || this.data.now.class == '' || this.data.now.number == '' || this.data.now.directions == '请选择') {
      wx.showToast({
        title: '没写全哈',
        icon: 'error'
      })
      return
    } else if (!(/^1[34578]\d{9}$/.test(this.data.now.phone))) {
      wx.showToast({
        title: '手机号码出错',
        icon: 'error'
      })
      return
    } else if (this.data.now.introduction == '') {
      wx.showToast({
        title: '个人简介写点',
        icon: 'error'
      })
      return
    }
  },
  // 修改信息
  changeinfo(){
    let app=getApp()
    let changeinfo=this.data.change
    changeinfo.direction=app.directionTogroupOption(changeinfo.direction)
    console.log(changeinfo)
    app.changeSignInfo(changeinfo,app.globalData.token)
    this.setData({
      show:false,
    })
  },
  // 初始化数据
  initinfo(target){
    let app=getApp()
    this.setData({
      [''+target+'.name']:app.globalData.name,
      [''+target+'.academy']:app.globalData.academy,
      [''+target+'.grade']:app.globalData.grade,
      [''+target+'.class']:app.globalData.class,
      [''+target+'.number']:app.globalData.number,
      [''+target+'.direction']:app.globalData.direction,
      [''+target+'.phone']:app.globalData.phone,
      [''+target+'.introduction']:app.globalData.introduction
    })
  },
  onLoad(){
    this.initinfo('now')
    this.initinfo('change')
  }
})