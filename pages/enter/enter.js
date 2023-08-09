// pages/show/show.js
Page({
  data: {
    state:1,
    backgroundimage:["http://m.qpic.cn/psc?/V10yHDUp2ytYTs/ruAMsa53pVQWN7FLK88i5gyIiNO7yMtpTBiWkmPr08sHn7MhehpI8wCDQbw2XEIcJgMvvih1aVpeVNKQ6nFfF7oRTjhtnHjz146m*wf.dCc!/b&bo=dwGbAgAAAAADJ.0!&rf=viewer_4","http://m.qpic.cn/psc?/V10yHDUp2ytYTs/ruAMsa53pVQWN7FLK88i5gyIiNO7yMtpTBiWkmPr08tYaH6MERy0tj9UGjAT3C8bNhIKQZn*9kHnpJdJPPwMmMZGkhLdN.*1.ANBhkXMKz4!/b&bo=dwGbAgAAAAADJ.0!&rf=viewer_4","http://m.qpic.cn/psc?/V10yHDUp2ytYTs/ruAMsa53pVQWN7FLK88i5gyIiNO7yMtpTBiWkmPr08un3nL6q5WTW7cu*6VAlMJRo8H9eH9VarSHsdzeNexfSDZNILrBs4eN9m873G0E0CU!/b&bo=dwGbAgAAAAADJ.0!&rf=viewer_4","http://m.qpic.cn/psc?/V10yHDUp2ytYTs/ruAMsa53pVQWN7FLK88i5gyIiNO7yMtpTBiWkmPr08vhlsvvROk7PdNh54v.O12oUx.RcilJfOdK46t6IR9FugOnTuxJs72suKQ1i.dhkeM!/b&bo=dwGbAgAAAAADJ.0!&rf=viewer_4"],
    ismoving:false
  },
  //点击后状态改变
  change(e){
    if(this.data.ismoving==false&&this.data.state<4){
      this.setData({
        // backgroundposition:this.data.backgroundposition-200,
        state:this.data.state+1
      })
      console.log(this.data.state)
    this.setData({
      ismoving:true
    })
    setTimeout(()=>{this.setData({ismoving:false})},1500)
    }else if(this.data.state==4){
      wx.navigateTo({
        url: '../index/index',
      })
    }
  },
  onLoad(options) {

  },
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