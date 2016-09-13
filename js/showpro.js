window.onload = function () {
	/*nav下拉菜单*/
	var ohdnavpro = document.getElementById("hd_nav_pro");
	var ohdnavproul = ohdnavpro.getElementsByTagName("ul")[0];
	var ohdnavprolis = ohdnavproul.getElementsByTagName("li");
	var ohdnavbus = document.getElementById("hd_nav_bus");
	var ahdnavpro = document.getElementById("hd_navpro");
	var ahdnavbus = document.getElementById("hd_navbus");
	var ohdnav = document.getElementById("hd_nav");
	var oul = ohdnav.getElementsByTagName("ul")[0];
	var olis = oul.getElementsByTagName("li");
	var ohdnavpronav = document.getElementById("hd_nav_pro_nav");
	var ohdnavpronavul = ohdnavpronav.getElementsByTagName("ul")[0];
	var ohdnavpronavlis = ohdnavpronavul.getElementsByTagName("li");

	for (var i = 0; i < olis.length; i++) {
		olis[i].index = i;
		olis[i].onmouseover = function () {
			this.className = "on";
		}
		olis[i].onmouseout = function () {
			this.className = "";
			olis[0].className = "on";
		}
	}

	for (var i = 0; i < ohdnavprolis.length; i++) {
		ohdnavprolis[i].index = i;
		ohdnavprolis[i].onmouseover = function () {
			for (var j = 0; j < ohdnavprolis.length; j++) {
				ohdnavprolis[j].className = "";
				this.className = "on";
				ohdnavpronavlis[j].className = "";
				ohdnavpronavlis[this.index].className = "on";
			}
		}
	}

	for (var i = 0; i < ohdnavpronavlis.length; i++) {
		ohdnavpronavlis[i].index = i;
		ohdnavpronavlis[i].onmouseover = function () {
			for (var j = 0; j < ohdnavprolis.length; j++) {
				ohdnavprolis[j].className = "";
				ohdnavprolis[this.index].className = "on";
				ohdnavpronavlis[j].className = "";
				ohdnavpronavlis[this.index].className = "on";
			}
		}
	}
	/*产品中心导航栏  鼠标划入*/
	ahdnavpro.onmouseover = function () {
		ohdnavpro.style.display = "block";
		ohdnavpronav.style.display = "block";
		ohdnavprolis[0].className = "on";
	}
	/*旗下企业导航栏  鼠标划入*/
	ahdnavbus.onmouseover = function () {
		ohdnavbus.style.display = "block";
	}
	/*产品中心下拉菜单  鼠标划入*/
	ohdnavpro.onmouseover = function () {
		ohdnavpro.style.display = "block";
		ohdnavpronav.style.display = "block";
		ahdnavpro.className = "on";
	}
	/*旗下企业下拉菜单  鼠标划入*/
	ohdnavbus.onmouseover = function () {
		ohdnavbus.style.display = "block";
		ahdnavbus.className = "on";
	}
	/*产品中心扩展菜单  鼠标划入*/
	ohdnavpronav.onmouseover = function () {
		ohdnavpro.style.display = "block";
		ohdnavpronav.style.display = "block";
		ahdnavpro.className = "on";
	}
	/*产品中心导航栏  鼠标划出*/
	ahdnavpro.onmouseout = function () {
		ohdnavpro.style.display = "none";
		ohdnavpronav.style.display = "none";
	}
	/*旗下企业导航栏  鼠标划出*/
	ahdnavbus.onmouseout = function () {
		ohdnavbus.style.display = "none";
	}
	/*产品中心下拉菜单  划出*/
	ohdnavpro.onmouseout = function () {
		ohdnavpro.style.display = "none";
		ohdnavpronav.style.display = "none";
		ahdnavpro.className = "";
		for (var i = 0; i < ohdnavprolis.length; i++) {
			ohdnavprolis[i].className = "";
		}
		ohdnavprolis[0].className = "on";
	}
	/*旗下企业下拉菜单  划出*/
	ohdnavbus.onmouseout = function () {
		ohdnavbus.style.display = "none";
		ahdnavbus.className = "";
	}
	/*产品中心扩展菜单 划出*/
	ohdnavpronav.onmouseout = function () {
		ohdnavpro.style.display = "none";
		ohdnavpronav.style.display = "none";
		ahdnavpro.className = "";
		for (var i = 0; i < ohdnavprolis.length; i++) {
			ohdnavprolis[i].className = "";
		}
		ohdnavprolis[0].className = "on";
		for (var j = 0; j < ohdnavpronavlis.length; j++) {
			ohdnavpronavlis[j].className = "";
		}
		ohdnavpronavlis[0].className = "on";
	}

	/*myfocus 设置*/
	myFocus.set({
	    id:'boxID',
	    pattern:'mF_kdui',
	    loadIMGTimeout:"0",
	});

	/*实现产品图片轮播*/
	var ozjfbox = document.getElementById("box");
	var ozjfpicScroll = ozjfbox.getElementsByTagName("div")[0];
	var ozjfleft = document.getElementById("left");
	var ozjfright = document.getElementById("right");
	ozjful = ozjfpicScroll.getElementsByTagName("ul")[0];
	var ozjflis = ozjful.getElementsByTagName("li");
	zjfspeed = -1;
	ozjful.innerHTML += ozjful.innerHTML;
	ozjful.innerHTML += ozjful.innerHTML;
	ozjful.style.width = ozjflis.length * ozjflis[0].offsetWidth + "px";
	ozjful.style.left = (- ozjful.offsetWidth / 2) + "px";
	var zjftimer = setInterval(zjfmovePic, 30);
	ozjfleft.onmouseenter = function () {
		zjfspeed = 1;
	};
	ozjfleft.onmouseout = function () {
		zjfspeed = 1;
	};
	ozjfleft.onclick = function () {
		if (zjfspeed < 45) {
			zjfspeed += 15;
		} else {
			zjfspeed = 45;
		}
	};
	ozjfright.onmouseenter = function () {
		zjfspeed = -1;
	};
	ozjfright.onmouseout = function () {
		zjfspeed = -1;
	};
	ozjfright.onclick = function () {
		if (zjfspeed > -45) {
			zjfspeed += -15;
		} else {
			zjfspeed = -45;
		}
	};
	ozjful.onmouseover = function () {
		if (zjfspeed > 0) {
			zjfspeed = 1;
		} else {
			zjfspeed = -1;
		}
		clearInterval(zjftimer);
	};
	ozjful.onmouseout = function () {
		clearInterval(zjftimer);
		zjftimer = setInterval(zjfmovePic, 30);
	};

	/*新闻切换*/
	var obtnt = document.getElementById("btn_t");
	var obtnb = document.getElementById("btn_b");
	var oboxt = document.getElementById("box_t");
	var oboxb = document.getElementById("box_b");
	
	obtnt.onmouseover = function () {
		obtnb.className = "btn btn_b";
		obtnt.className += " on";
		oboxt.style.display = "block";
		oboxb.style.display = "none";
	}
	obtnb.onmouseover = function () {
		obtnt.className = "btn btn_t";
		obtnb.className += " on";
		oboxb.style.display = "block";
		oboxt.style.display = "none";
	}
}

/**
 * 产品图片轮播函数
 * @return {[type]} [description]
 */
function zjfmovePic() {
	if (ozjful.offsetLeft <= (- ozjful.offsetWidth / 2)) {
		ozjful.style.left = 0 + "px";
	}
	if (ozjful.offsetLeft > 0) {
		ozjful.style.left = (- ozjful.offsetWidth / 2) + "px";
	}
	ozjful.style.left = ozjful.offsetLeft + zjfspeed + "px";
}