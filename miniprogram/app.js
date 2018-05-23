//app.js
App({
    showModel: function () {
        wx.showToast({
            title: '正在加载....',
            icon: 'loading',
            duration: 5000
        })
    },
    globalData: {
        url: "http://127.0.0.1:8080/api/front",
        userInfo: null,
        appId: "3452032801248943",
        appKey: "fwUbZOa6Dl6pcTt7imS7ZNLPDEKNPZYi",
        aesKey: "mrDqopO3FhAV6jkH",
        ivKey: "DqtrEqFGYj6Whfii",
        demos: "https://d2.jeecms.com"
    },
    globalDatavote: {
        url: "http://127.0.0.1:8080/api/member",
        userInfo: null,
        appId: "3452032801248943",
        appKey: "fwUbZOa6Dl6pcTt7imS7ZNLPDEKNPZYi",
        aesKey: "mrDqopO3FhAV6jkH",
        ivKey: "DqtrEqFGYj6Whfii"
    },
    globalDataCollect: {
        url: "http://127.0.0.1:8080/api/member",
        userInfo: null,
        appId: "3452032801248943",
        appKey: "fwUbZOa6Dl6pcTt7imS7ZNLPDEKNPZYi",
        aesKey: "mrDqopO3FhAV6jkH",
        ivKey: "DqtrEqFGYj6Whfii"
    },
    globalDataComment: {
        url: "http://127.0.0.1:8080/api/member",
        userInfo: null,
        appId: "3452032801248943",
        appKey: "fwUbZOa6Dl6pcTt7imS7ZNLPDEKNPZYi",
        aesKey: "mrDqopO3FhAV6jkH",
        ivKey: "DqtrEqFGYj6Whfii"
    }
})