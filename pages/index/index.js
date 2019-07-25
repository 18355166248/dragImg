//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    indicatorDots: false,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    areaList1: [{
      url: '/assets/images/pro1/pro_1_01'
    }, {
      url: '/assets/images/pro1/pro_1_02'
    }, {
      url: '/assets/images/pro1/pro_1_03'
    }, {
      url: '/assets/images/pro1/pro_1_04'
    }, {
      url: '/assets/images/pro1/pro_1_05'
    }, {
      url: '/assets/images/pro1/pro_1_06'
    }],
    selectList: [{
      url: '/assets/images/prolist/pic1.png',
      txt: '有机椰汁水',
      txt2: '为肌肤提供营养',
      x: 0,
      y: 0
    }, {
      url: '/assets/images/prolist/pic2.png',
      txt: '阿尔卑斯玫瑰',
      txt2: '排除毒素与污染物',
      x: 0,
      y: 0
    }, {
      url: '/assets/images/prolist/pic3.png',
      txt: '针叶樱桃',
      txt2: '富含维生素C,提亮肤色',
      x: 0,
      y: 0
    }, {
      url: '/assets/images/prolist/pic4.png',
      txt: '有机苦橙花',
      txt2: '柔嫩肌肤',
      x: 0,
      y: 0
    }, {
      url: '/assets/images/prolist/pic5.png',
      txt: '有机枸杞子',
      txt2: '提供能量',
      x: 0,
      y: 0
    }, {
      url: '/assets/images/prolist/pic6.png',
      txt: '有机无花果',
      txt2: '补水保湿',
      x: 0,
      y: 0
    }, {
      url: '/assets/images/prolist/pic7.png',
      txt: '有机绣线菊',
      txt2: '净化肌肤',
      x: 0,
      y: 0
    }, {
      url: '/assets/images/prolist/pic8.png',
      txt: '辣木',
      txt2: '温和去除彩妆与污染物',
      x: 0,
      y: 0
    }]
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  touchEnd(event) {
    var index = event.currentTarget.dataset.index
    const bool = true
    this._observer = wx.createIntersectionObserver(this)
    this._observer
      .relativeTo('#movable' + index)
      .observe('#swiper-item' + index, (res) => {
        if (res.intersectionRatio > 0.5) {
          console.log('进入')
        } else {
          console.log('没进入')
          bool = false
        }
      })
    setTimeout(() => {
      if (!bool) {
        var val = this.data.selectList[index]
        var selectList = this.data.selectList
        val.x = 0
        val.y = 0
        selectList[index] = val
        this.setData({
          selectList
        })
      }
      console.log('结束')
    }, 100)
    // wx.createIntersectionObserver(this, {}).relativeTo('#movable' + index).relativeToViewport().observe('#swiper-item' + index, (res) => {
    //   if (res.intersectionRatio > 0.5) {
    //     console.log('进入')
    //   } else {
    //     console.log('没进入')


    //   }
    // })
  }
})