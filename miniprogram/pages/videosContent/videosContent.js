// pages/videosContent/videosContent.js
var app = getApp();
var video_url = app.globalData.url + "/content/list";
Page({
  data: {
    videos: {},
    upsImg: "../../icons/ups.png",
    ups: "",
    collectImg: "../../icons/collect.png",
    operate: 1,
    baseurl: app.globalData.demos
  },
  onLoad: function (options) {
    var self = this;
    app.showModel();
    wx.request({
      url: video_url,
      data: {
        siteIds: 1,
        channelIds: 77,
        https: 0,
        ids: options.id,
        sessionKey: wx.getStorageSync('sessionKey'),
        appId: app.globalData.appId
      },
      method: 'GET',
      success: function (res) {
        //收藏
        if (res.data.body[0].hasCollect == true) {
          self.setData(
            {
              collectImg: "../../icons/collect-active.png",
              operate: 0
            })
        }
        self.setData({
          videos: res.data.body[0],
          ups: res.data.body[0].ups
        });
        wx.hideToast();
      }
    })
  },
  getCommentList: function () {
    wx.navigateTo({
      url: '../comments/comments?id=' + this.data.videos.id
    })
  },
  up: function () {//点赞
    var app = getApp();
    var rand = require('../../utils/random.js');
    var sign = require('../../utils/sign.js');
    var id = this.data.videos.id;//内容id
    var appId = app.globalDataCollect.appId;//appid;
    var nonce_str = rand.getRand();//获取随机数
    var sessionKey=wx.getStorageSync('sessionKey');
    var postParams = [];
    postParams[0] = ["id", id];
    postParams[1] = ["appId", appId];
    postParams[2] = ["nonce_str", nonce_str];
    postParams[3]=["sessionKey",sessionKey];
    var signVal = sign.createSign(postParams, app.globalDataCollect.appKey);//签名     
    var self = this;
    wx.request({
      url: app.globalDataCollect.url + '/content/up?id=' + id + "&appId=" + appId + "&nonce_str=" + nonce_str + "&sign=" + signVal+"&sessionKey="+sessionKey,
      data: {},
      method: 'POST',
      success: function (res) {
        if (res.data.code == 200) {
          self.setData({
            ups: self.data.ups + 1,
            upsImg: "../../icons/ups-active.png"
          });
          setTimeout(function () {
            self.setData({
              upsImg: "../../icons/ups.png"
            });
          }, 200)
        }
      }
    })
  },
  collect: function () {//收藏
    var app = getApp();
    var rand = require('../../utils/random.js');
    var sign = require('../../utils/sign.js');
    var operate = this.data.operate;//0取消收藏1收藏
    var id = this.data.videos.id;//内容id
    var appId = app.globalData.appId;//appid;
    var nonce_str = rand.getRand();//获取随机数
    var sessionKey = wx.getStorageSync('sessionKey');//sessionKey
    var postParams = [];
    postParams[0] = ["id", id];
    postParams[1] = ["appId", appId];
    postParams[2] = ["nonce_str", nonce_str];
    postParams[3] = ["sessionKey", sessionKey];
    postParams[4] = ["operate", operate];
    var signVal = sign.createSign(postParams, app.globalData.appKey);//签名     

    var self = this;

    if (sessionKey == "" || sessionKey == null) {
      wx.showModal({
        title: "提示",
        content: "收藏需要登录，是否登录?",
        success: function (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: "../login/login"
            })
          }
        }
      })
    } else {
      wx.request({
        url: app.globalDataCollect.url + '/content/collect',
        data: {
          id: id,
          operate: operate,
          appId: appId,
          nonce_str: nonce_str,
          sign: signVal,
          sessionKey: sessionKey
        },
        method: 'GET',
        success: function (res) {
          if (res.data.code == 200) {
            if (self.data.operate == 1) {
              self.setData({
                collectImg: "../../icons/collect-active.png",
                operate: 0
              })
            } else {
              self.setData({
                collectImg: "../../icons/collect.png",
                operate: 1
              })
            }
          }
        }
      })
    }
  }
})