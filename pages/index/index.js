// pages/index/index.js
import initComputed from '../../utils/wxComputed.min.js'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg',
      'http://img1.qunarzz.com/piao/fusion/1810/6e/4a5551bbb189d902.jpg_750x200_25257467.jpg',
      'http://img1.qunarzz.com/piao/fusion/1811/6c/b1b8677dc1886d02.jpg_750x200_1931f6c4.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    iconList: [
      {
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门景点'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '厦门必游'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
        desc: '鼓浪屿'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
        desc: '自然风光'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
        desc: '游乐场'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
        desc: '两江夜游'
      }, {
        id: '0008',
        imgUrl: 'https://img1.qunarzz.com/piao/fusion/1811/1d/c46140e32fffa502.png',
        desc: '去哪臻选'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ee/5114069893722102.png',
        desc: '观音山'
      }, {
        id: '0010',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
        desc: '全部玩乐'
      }
    ],
    iconautoplay: false,
    recommendList: [
      {
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/fe/fe517fa5a183e4bca3.img.jpg_200x200_1afe21c0.jpg',
        title: '厦门老院子景区',
        desc: '老院子民俗文化风情园',
        price: 90,
        area: '集美区'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/07/f64ee5eac69abd5eb0ce05cc23a4fff2.jpg_200x200_3db01488.jpg',
        title: '海沧大桥',
        desc: '热门景点',
        price: 90,
        area: '海沧区'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201301/16/da805420caba882393835fbb.jpg_200x200_dedcd1ed.jpg',
        title: '厦门老院子景区',
        desc: '热门景点',
        price: 98,
        area: '集美区'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201301/16/da805420caba882393835fbb.jpg_200x200_dedcd1ed.jpg',
        title: '金光胡',
        desc: '享受爽透的森林浴',
        price: 24.2,
        area: '同安区'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/12/fb819f24470ff6699cd5e1da68990989.jpg_200x200_0b4ffefb.jpg',
        title: '顶上生态风景区',
        desc: '优美的山地风光、藏水聚气的宜人环境',
        price: 11.7,
        area: '同安区'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1805/7d/7dca9c37a87479eba3.img.jpg_200x200_f62f78bd.jpg',
        title: '世茂云上厦门观光厅',
        desc: '超高速电梯只要45秒便可直达55F观光厅',
        price: 50,
        area: '集美区'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/18/492cfc1f774d2fbb63d975ae1317c9da.water.jpg_200x200_48c84db4.jpg',
        title: '厦门观音山梦幻海岸',
        desc: '过山车等32项游乐设备畅玩到底',
        price: 90,
        area: '思明区'
      }
    ],

    weekendList: [
      {
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/69/3f535648c26681.jpg_r_640x214_146b5b8e.jpg',
        title: '秋意浓，来厦门',
        desc: '这里的秋，多了一点柔情'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1711/15/1cdd5ee885686b.jpg_r_640x214_46768064.jpg',
        title: '厦门必游TOP10',
        desc: '来厦门感受一把小资情调'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1511/8f/bf3a40e4afcf29.jpg_r_640x214_90225212.jpg',
        title: '泉心泉意',
        desc: '这个秋冬不干燥，养生休闲一举两得'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b3/671f666cc7845a.jpg_r_640x214_f977f30c.jpg',
        title: '帆船游艇出海',
        desc: '乘风破浪，直挂云帆济沧海'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/81/b178edc1197700.jpg_r_640x214_9acee897.jpg',
        title: '厦门娱乐万岁',
        desc: '不登鼓浪屿的新玩法'
      }
    ]
  },

  // 类vue计算属性
  computed: {
    iconpages() {
      const pages = [];
      this.data.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8); // 定义当前页码
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  },
  enterRouter: function () {
    wx.navigateTo({
      url: '../details/details',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    initComputed(this)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})