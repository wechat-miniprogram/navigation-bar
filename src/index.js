const _barHeight = wx.getSystemInfoSync().statusBarHeight

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //  决定navback是否有效
    enable: {
      type: Boolean,
      value: 'true'
    },
    //  可传入改变navbar样式
    bgStyle: {
      type: String,
      value: 'background-color:#000;',
    },
    //  可传入改变navbar title样式
    titleStyle: {
      type: String,
      value: 'color: white;',
    },
    title: {
      type: String,
      value: '微信',
      observer: '_changeTitle',
    },
    //  可传入改变nav back页面数
    delta: {
      type: Number,
      value: 1
    },
    //  决定是否显示loading
    showLoading: {
      type: Boolean,
      value: false
    },
    textStyle: {
      type: String,
      value: 'white',
      observer: '_changeTextStyle'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    barHeight: _barHeight,
    navIconUrl: './images/nav_icon_white.png',
    navTitleStyle: 'color: white;',
    navBgStyle: 'background-color:#000;',
  },

  /**
   * 组件的方法列表
   */
  attach() {
    // eslint-disable-next-line no-console
    console.log(wx.getCurrent)
  },
  methods: {
    //  title监听函数
    _changeTitle() {
      if (this.data.title === '') {
        this.setData({
          title: '微信'
        })
      }
    },
    _changeTextStyle() {
      if (this.data.textStyle === 'black') {
        wx.setNavigationBarColor({
          frontColor: '#000000',
        })
        this.setData({
          navIconUrl: './images/nav_icon_black.png',
          navTitleStyle: 'color: black;',
          navBgStyle: 'background-color:#fff;',
        })
      } else {
        wx.setNavigationBarColor({
          frontColor: '#ffffff',
        })
        this.setData({
          navIconUrl: './images/nav_icon_white.png',
          navTitleStyle: 'color: white;',
          navBgStyle: 'background-color:#000;',
        })
      }
    },
    //  navback监听函数
    _onTap() {
      this.triggerEvent('back', {})
      if (this.data.enable) {
        wx.navigateBack({
          delta: this.data.delta
        })
      }
    }
  }
})
