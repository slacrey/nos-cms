var app=getApp();
var video_url= app.globalData.url+"/content/list?siteIds=1&count=15&channelIds=77&https=0";
Page({
  data:{
     videoData:[],
     baseurl: app.globalData.demos,
  },
   onLoad:function(options){
      app.showModel();
      var self=this;
      wx.request({
        url: video_url,
        data: {},
        method: 'POST', 
        success: function(res){
          self.setData({
              videoData:res.data.body
          })
          wx.hideToast();
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
  },

 
})
