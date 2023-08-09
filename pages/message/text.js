// pages/message/text.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    pdf:[]
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
    wx.showLoading({
      title: '加载中',
    })
   let App=getApp()
   for(let i=0;i<App.globalData.message.length;i++){
     if(App.globalData.message[i].assess.contentUrl!="null"){
      this.setData({
       ['pdf['+i+'].url']:App.globalData.message[i].assess.contentUrl,
       ['pdf['+i+'].title']:App.globalData.message[i].assess.name
      })
     }
   }
  },

  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.hideLoading()
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