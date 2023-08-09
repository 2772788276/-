// components/circle/circle.js
var App=getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    deg:{
      type:Number,
      value:0
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    status:['报名','一轮面试','一轮考核','二轮考核','最终答辩','通过'],
    move:0,
    start:null
  },
  lifetimes:{
    attached(){
      this.rotate()
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    rotate(){
      this.start=setInterval(() => {
        this.setData({
          move:this.data.move+1
        })
        if(this.data.move>=this.data.deg){
          clearInterval(this.start)
        }
      }, 7);
    }
  }
})
