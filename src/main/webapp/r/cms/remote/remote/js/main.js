// js document
function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    }
    else {
        return getComputedStyle(obj, false)[name];
    }
}

function move(obj, json, fnEnd) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var bStop = true;
        for (attr in json) {
            var cur = 0;
            if (attr == 'opacity') {
                cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);

            }
            else {
                cur = parseInt(getStyle(obj, attr));
            }

            var speed = (json[attr] - cur) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (cur != json[attr])
                bStop = false;

            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
                obj.style.opacity = (cur + speed) / 100;
            }
            else {
                obj.style[attr] = cur + speed + 'px';
            }
        }
        if (bStop) {
            clearInterval(obj.timer);
            if (fnEnd) fnEnd();
        }
    }, 30);
}
(function () {
    var oDiv = document.getElementById("j_turn");
    var aBtn = oDiv.getElementsByTagName("ol")[0].getElementsByTagName("li");
    var oUl = oDiv.getElementsByTagName("ul")[0];
    var now = 0;
    for (var i = 0; i < aBtn.length; i++) {
        aBtn[i].index = i;
        aBtn[i].onclick = function () {
            now = this.index
            tab();
        }
    }
    function tab() {
        for (var j = 0; j < aBtn.length; j++) {
            aBtn[j].className = "";
        }
        aBtn[now].className = 'actived';
        move(oUl, {top: -360 * now});
    }

    function next() {
        now++;
        if (now == aBtn.length) {
            now = 0;
        }
        tab();
    }

    var timer = setInterval(next, 5000);
    oDiv.onmouseover = function () {
        clearInterval(timer);
    };
    oDiv.onmouseout = function () {
        timer = setInterval(next, 3000)
    }
})();

function setContentTab(name, curr, n) {
    for (i = 1; i <= n; i++) {
        var menu = document.getElementById(name + i);
        var cont = document.getElementById("con_" + name + "_" + i);
        menu.className = i == curr ? "up" : "";
        if (i == curr) {
            cont.style.display = "block";
        } else {
            cont.style.display = "none";
        }
    }
}















