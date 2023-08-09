// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    // 轮播图部分数据
    swiperImg: ["http://m.qpic.cn/psc?/V10yHDUp2ytYTs/ruAMsa53pVQWN7FLK88i5uHRfRwkN13dMGuo18j5jVDCvCVxBGfuP77SeAwI7LWuLWHhgJs1b9EvnIcx2c1yj*m7J4eV10y0J2lRLY5AVuU!/b&bo=9gODAgAAAAADVwY!&rf=viewer_4", "http://m.qpic.cn/psc?/V10yHDUp2ytYTs/ruAMsa53pVQWN7FLK88i5uHRfRwkN13dMGuo18j5jVABALo6zzzKYTHnYeWJHaLMy96XaiN3eOiDrOINvuET*DepdkoZD7VDCjmeDsV1ddw!/b&bo=OASsAgAAAAABF6I!&rf=viewer_4"],
    noImg: false,
    logo:"https://gitee.com/mnshhhh/a-image/raw/master/img/group/202307181852196.jpg",
    //tabbar部分数据
    index: 0,
    tabBar: [{
        name: '首页',
        icon: 'icon-home',
      },
      {
        name: '方向',
        icon: 'icon-fangxiang',
      },
      {
        name: '报名',
        icon: 'icon-zhifeiji',
      },
      {
        name: '我的',
        icon: 'icon-bussiness-man',
      }
    ],
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
      curName: "请选择"
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
      curName: "请选择",
    },
    //报名状态
    signTime: true,
    changable:true,
    //报名信息
    name: '',
    academy: '',
    grades: '',
    class: '',
    number: '',
    directions: '',
    phone: '',
    introduction: '',
    //个人信息部分数据
    mineImg: 'https://gitee.com/mnshhhh/a-image/raw/master/img/group/202307181852196.jpg',
    mineName: '请登录',
    enableclick:true,
    mineThings: [{
        url: "../info/info",
        icon: "icon-sign",
        title: "报名信息"
      },
      {
        url: "../note/note",
        icon: "icon-info",
        title: "通知公告"
      },
      {
        url: "../message/message",
        icon: "icon-text",
        title: "考核信息"
      },
      {
        url: "../feedback/feedback",
        icon: "icon-question",
        title: "问题反馈"
      }
    ],
    directionGroup: [{
        nav: "../direction/media/media",
        url: "https://gitee.com/mnshhhh/a-image/raw/master/img/group/202307181852198.png",
        title: "传媒组",
        top: "21%",
        left: "37%",
        scale: "0.90"
      },
      {
        nav: "../direction/ai/ai",
        url: "https://gitee.com/mnshhhh/a-image/raw/master/img/group/202307181852192.png",
        title: "AI组",
        top: "31%",
        left: "5%",
        scale: "0.90"
      },
      {
        nav: "../direction/technic/technic",
        url: "https://gitee.com/mnshhhh/a-image/raw/master/img/group/202307181852194.png",
        title: "机械组",
        top: "22%",
        left: "70%",
        scale: "1"
      },
      {
        nav: "../direction/back/back",
        url: "https://gitee.com/mnshhhh/a-image/raw/master/img/group/202307181852193.png",
        title: "后台组",
        top: "53%",
        left: "0%",
        scale: "0.78"
      },
      {
        nav: "../direction/electronic/electronic",
        url: "https://gitee.com/mnshhhh/a-image/raw/master/img/group/202307181852190.png",
        title: "电控组",
        top: "44%",
        left: "70%",
        scale: "0.85"
      },
      {
        nav: "../direction/front/front",
        url: "https://gitee.com/mnshhhh/a-image/raw/master/img/group/202307181852195.png",
        title: "前端组",
        top: "65%",
        left: "28%",
        scale: "0.75"
      },
      {
        nav: "../direction/manage/manage",
        url: "https://gitee.com/mnshhhh/a-image/raw/master/img/group/202307181852197.png",
        title: "管理组",
        top: "63%",
        left: "60%",
        scale: "0.85"
      }
    ],
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    // 考核进度
    progress:0
  },

  goto(e) {
    if (e.currentTarget.dataset.index != this.data.index) {
      this.setData({
        index: e.currentTarget.dataset.index
      })
    }
  },
  isnoImg: function () {
    if (this.data.swiperImg == '' || this.data.swiperImg == []) {
      this.setData({
        noImg: true
      })
    } else {
      this.setData({
        noImg: false
      })
    }
  },
  //获取表单内容
  inputvalue: function (e) {
    if (e.currentTarget.dataset.type == "name") {
      this.setData({
        name: e.detail.value
      })
    }
    if (e.currentTarget.dataset.type == "academy") {
      this.setData({
        academy: e.detail.value
      })
    }
    if (e.currentTarget.dataset.type == "grade") {
      this.setData({
        grades: e.detail.select,
        ['grade.curName']:e.detail.select
      })
    }
    if (e.currentTarget.dataset.type == "class") {
      this.setData({
        class: e.detail.value
      })
    }
    if (e.currentTarget.dataset.type == "number") {
      this.setData({
        number: e.detail.value
      })
    }
    if (e.currentTarget.dataset.type == "direction") {
      this.setData({
        directions: e.detail.select,
        ['direction.curName']:e.detail.select
      })
    }
    if (e.currentTarget.dataset.type == "phone") {
      this.setData({
        phone: e.detail.value
      })
    }
    if (e.currentTarget.dataset.type == "introduction") {
      this.setData({
        introduction: e.detail.value
      })
    }
  },
  checkform: function () {
    if (this.data.name == '' || this.data.academy == '' || this.data.grades == '请选择' || this.data.class == '' || this.data.number == '' || this.data.directions == '请选择') {
      wx.showToast({
        title: '没写全哈',
        icon: 'error'
      })
      return
    } else if (!(/^1[34578]\d{9}$/.test(this.data.phone))) {
      wx.showToast({
        title: '手机号码出错',
        icon: 'error'
      })
      return
    } else if (this.data.introduction == '') {
      wx.showToast({
        title: '个人简介写点',
        icon: 'error'
      })
      return
    }
    console.log("报名成功")
    //  wx.showLoading({
    //    title: '',
    //    mask: true,
    //    success: (res) => {},
    //    fail: (res) => {},
    //    complete: (res) => {},
    //  })
  },
 getUserProfile(){
    if(this.data.hasUserInfo==false && this.data.enableclick==true){
    this.setData({
      enableclick:false
    })
    wx.getUserProfile({
      desc: '用于完善用户资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          mineImg: res.userInfo.avatarUrl,
          mineName: res.userInfo.nickName,
          hasUserInfo: true,
          enableclick: true
        })
        wx.login({
          success (res) {
            app.login(res.code)
          },
          fail(){
            wx.showToast({
              title: '网络错误',
              icon: 'error'
            })
          }
        })
      },
    }) 
  }
},
// 报名点击事件
signclick(){
  let app=getApp()
  let index=this
  let signinfo={
    name:index.data.name,
    college:index.data.academy,
    grade:index.data.grades,
    major:index.data.class,
    stuId:index.data.number,
    phone:index.data.phone,
    groupOption:app.directionTogroupOption(index.data.directions),
    introduction:index.data.introduction
  }
  sign(signinfo,app.globalData.token)
},
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  onshow() {
    this.isnoImg()
  },

})