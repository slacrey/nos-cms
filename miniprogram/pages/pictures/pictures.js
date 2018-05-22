 var app=getApp();
 var img_url=app.globalData.url+"/content/list?siteIds=1&count=15&channelIds=76&https=0";
Page({
  data:{
    imgData:[],
    hidden:true,
     page:"",
     hasMore:"false"
  },
  onLoad:function(){
     wx.showToast({
  title: '正在加载...',
  icon: 'loading',
  duration: 10000
});
    var self=this;

    wx.request({
      url: img_url,
      data: {},
      method: 'POST', 
      success: function(res){
         self.setData({
           imgData:res.data.body,
           page:res.data.body.length
         })
        wx.hideToast();
      }
    })
  },

   onReachBottom:function(){
     this.setData({hidden:false});
      var self=this;
      wx.request({
      url: img_url,
      data: {
        first:self.data.page
      },
      method: 'GET', 
      
      success: function(res){
        if(res.data.length==0){
         self.setData({
           hasMore:"true",
            hidden:false
         });
         setTimeout(function(){
    self.setData({
           hasMore:"false",
            hidden:true
         });
         },900)
        }else{
             self.setData({
          imgData:self.data.imgData.concat(res.data.body),
          hidden:true,
          page:self.data.page+res.data.body.length
          });
        }
      }
    })
  }
})