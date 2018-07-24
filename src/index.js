const navConf = __wxConfig.global.window
const _navBgColor = navConf.navigationBarBackgroundColor
const _navTextStyle = navConf.navigationBarTextStyle
const _navTitleText = navConf.navigationBarTitleText
const _barHeight = wx.getSystemInfoSync().statusBarHeight

const _navIconUrl = _navTextStyle === 'white' || _navTextStyle === '' ? './images/nav_icon_white.png' : './images/nav_icon_black.png'
const _title = _navTitleText === '' ? 'WeChat' : _navTitleText
const _navBgStyle = _navBgColor === '' ? 'background-color:#000;' : `background-color:${_navBgColor};`
const _navTitleStyle = _navTextStyle === '' ? 'color: white;' : `color:${_navTextStyle};`


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
      value: '',
    },
    //  可传入改变navbar title样式
    titleStyle: {
      type: String,
      value: '',
      observer: '_changeTitleStyle'
    },
    title: {
      type: String,
      value: _title,
      observer: '_changeTitle'
    },
    //  可传入改变nav back页面数
    delta: {
      type: Number,
      value: 1
    },
    //  可传入css类名,设置navbar样式
    bgClass: {
      type: String,
      value: '',
      observer: '_changeBgClass'
    },
    //  可传入css类名，设置navbar title样式
    titleClass: {
      type: String,
      value: '',
      observer: '_changeTitleClass'
    },
    //  决定是否显示loading
    showLoading: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    barHeight: _barHeight,
    navIconUrl: _navIconUrl,
    navBgStyle: _navBgStyle,
    navTitleStyle: _navTitleStyle
  },

  /**
   * 组件的方法列表
   */
  attach() {
    console.log(wx.getCurrent)
  },
  methods: {
    //  title监听函数
    _changeTitle() {
      if (this.data.title === '') {
        this.setData({
          title: _title
        })
      }
    },
    //  bgClass监听函数
    _changeBgClass() {
      if (this.data.bgClass === '') {
        this.setData({
          navBgStyle: _navBgStyle
        })
      } else {
        this.setData({
          navBgStyle: ''
        })
      }
    },
    //  titleClass监听函数
    _changeTitleClass() {
      if (this.data.titleClass === '') {
        this.setData({
          navTitleStyle: _navTitleStyle
        })
      } else {
        this.setData({
          navTitleStyle: ''
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
