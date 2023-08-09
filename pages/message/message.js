// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grades:[
      {id:0,title:'报名',grade:''},
      {id:1,title:'一轮面试',grade:''},
      {id:2,title:'一轮考核',grade:''},
      {id:3,title:'二轮考核',grade:''},
      {id:4,title:'最终答辩',grade:''}
    ],
    progress:0,
    deg:0
  },
back(){
  wx.navigateBack({
    delta: 0,
    success: (res) => {},
    fail: (res) => {},
    complete: (res) => {},
  })
},
  onLoad(options) {
    let App=getApp()
    this.setData({
      progress:App.globalData.progress,
      deg:60*(App.globalData.progress+1)
    })
    // 考核过程及结果
    for(let i=0;i<App.globalData.message.length;i++){
      if(App.globalData.message[i].pass==true && App.globalData.message[i].score==null){
        this.setData({
          ['grades['+i+'].grade']:"已完成"
        })
      }else if(App.globalData.message[i].pass==false && App.globalData.message[i].score==null){
        this.setData({
          ['grades['+i+'].grade']:"未通过"
        })
      }else if(App.globalData.message[i].assess.contentUrl!="null" && App.globalData.message[i].score==null){
        this.setData({
          ['grades['+i+'].grade']:"正在进行"
        })
      }else if(App.globalData.message[i].pass=true && App.globalData.message[i].score!=null){
        this.setData({
          ['grades['+i+'].grade']:App.globalData.message[i].score+'分'
        })
      }else if(App.globalData.message[i].pass=false && App.globalData.message[i].score!=null){
        this.setData({
          ['grades['+i+'].grade']:'未通过'
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})