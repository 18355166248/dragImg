//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: false,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    x: 0,
    y: 0,
    selectList: [{
      url: '/assets/images/prolist/pic1.png',
      txt: '有机椰汁水',
      txt2: '为肌肤提供营养',
      x: 0,
      y: 0,
      x1: 157,
      x2: 207,
      y1: 317,
      y2: 377
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
        console.log(res)
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
    var val = this.data.selectList[event.currentTarget.dataset.index]
    var x = event.changedTouches[0].clientX
    var y = event.changedTouches[0].clientY
    if (val.x1 < x && x < val.x2 && val.y1 < y && y < val.y2) {
      console.log(event.target)
    } else {
      var selectList = this.data.selectList
      val.x = 0
      val.y = 0
      selectList[event.currentTarget.dataset.index] = val
      this.setData({
        selectList
      })
    }
    wx.createIntersectionObserver().relativeToViewport().observe('#swiper-item1', (res) => {
      console.log(res)
      res.id // 目标节点 id
      res.dataset // 目标节点 dataset
      res.intersectionRatio // 相交区域占目标节点的布局区域的比例
      res.intersectionRect // 相交区域
      res.intersectionRect.left // 相交区域的左边界坐标
      res.intersectionRect.top // 相交区域的上边界坐标
      res.intersectionRect.width // 相交区域的宽度
      res.intersectionRect.height // 相交区域的高度
    })
    console.log('结束')
  }
})