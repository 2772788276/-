
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pdf:{
      type:Array
    }
  },
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    load(e){
     let url=e.currentTarget.dataset.url
      wx.downloadFile({
        // 示例 url，并非真实存在
        url: url,
        header: {
          'Content-Type': 'application/pdf',
        },
        success: function (res) {
          console.log(res)
          const filePath = res.tempFilePath
          console.log(filePath)
          wx.openDocument({
            filePath: filePath,
            fileType: 'pdf',
            success: function (res) {
              console.log('打开文档成功')
            },
            fail(err) {
              console.log(err);
            }
          })
        }
      })
    }
  }
})
