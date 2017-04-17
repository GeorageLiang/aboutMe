/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2)
	__webpack_require__(6)
	__webpack_require__(21)

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(3);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (undefined) {
	buf.push("<!DOCTYPE html><html>" + (null == (jade_interp = __webpack_require__(5).call(this, locals)) ? "" : jade_interp) + "<body><div class=\"swiper-container\"><div class=\"swiper-wrapper\"><div id=\"s1\" class=\"swiper-slide\"><a class=\"logo\"></a><div class=\"man\"><img src=\"imgs/me1.png\"></div><div class=\"bottom-mask\"></div><div class=\"txt txt1\"><h1 swiper-animate-effect=\"fadeInUp\" swiper-animate-duration=\"1s\" swiper-animate-delay=\"0.3s\" class=\"ani\">梁皓叙</h1><p swiper-animate-effect=\"fadeInUp\" swiper-animate-duration=\"1s\" swiper-animate-delay=\"0.6s\" class=\"ani\">1992.02.23 | 汉族 | 前端工程师</p></div><div class=\"arrow\"><em class=\"icon-next\"></em></div></div><div id=\"s2\" class=\"swiper-slide\"><div class=\"bg\"></div><div class=\"txt txt2\"><img src=\"imgs/bg2.png\" swiper-animate-effect=\"fadeIn\" swiper-animate-duration=\"1s\" swiper-animate-delay=\"0.2s\" class=\"bottom-mask ani\"><h2 swiper-animate-effect=\"fadeInUp\" swiper-animate-duration=\"1s\" swiper-animate-delay=\"0.4s\" class=\"ani\">简介</h2><div class=\"intro\"><p swiper-animate-effect=\"flipInY\" swiper-animate-duration=\"2s\" swiper-animate-delay=\"0.6s\" class=\"intro_item ani\"><span class=\"intro_key\">姓名</span><span class=\"intro_val\">梁皓叙</span></p><p swiper-animate-effect=\"flipInY\" swiper-animate-duration=\"2s\" swiper-animate-delay=\"0.8s\" class=\"intro_item ani\"><span class=\"intro_key\">英文名</span><span class=\"intro_val\">Geo</span></p><p swiper-animate-effect=\"flipInY\" swiper-animate-duration=\"2s\" swiper-animate-delay=\"1s\" class=\"intro_item ani\"><span class=\"intro_key\">个人信息</span><span class=\"intro_val\">1992.02.23 | 双鱼座 | A型</span></p><p swiper-animate-effect=\"flipInY\" swiper-animate-duration=\"2s\" swiper-animate-delay=\"1.2s\" class=\"intro_item ani\"><span class=\"intro_key\">从事职业</span><span class=\"intro_val\">前端工程师</span></p><p swiper-animate-effect=\"flipInY\" swiper-animate-duration=\"2s\" swiper-animate-delay=\"1.4s\" class=\"intro_item ani\"><span class=\"intro_key\">我的自述</span><span class=\"intro_val\">喜欢思考，喜欢不同，爱前端，拒绝平庸，拥抱热情</span></p><p swiper-animate-effect=\"flipInY\" swiper-animate-duration=\"2s\" swiper-animate-delay=\"1.6s\" class=\"intro_item ani\"><span class=\"intro_key\">我的爱好</span><span class=\"intro_val\">运动，TED，Github，掘金，知乎</span></p></div></div><div class=\"arrow\"><em class=\"icon-next\"></em></div></div><div id=\"s3\" class=\"swiper-slide\"><div class=\"time-mask\"></div><div class=\"time-line\"></div><div class=\"time-board\"><div swiper-animate-effect=\"fadeInUp\" swiper-animate-duration=\"1s\" swiper-animate-delay=\"0s\" class=\"time-board_item ani\"><div class=\"time-part\"><div class=\"dot\"></div><div class=\"day\">7月</div><div class=\"year\">2014</div></div><div class=\"time-event\"><p>2010.09 - 2014.06 哈尔滨</p><p>黑龙江大学 本科</p><p>软件工程</p></div></div><div swiper-animate-effect=\"fadeInUp\" swiper-animate-duration=\"1s\" swiper-animate-delay=\"0.3s\" class=\"time-board_item ani\"><div class=\"time-part\"><div class=\"dot\"></div><div class=\"day\">9月</div><div class=\"year\">2014</div></div><div class=\"time-event\"><p>2014.09 - 2016.03 杭州</p><p>个推</p><p>前端开发工程师</p></div></div><div swiper-animate-effect=\"fadeInUp\" swiper-animate-duration=\"1s\" swiper-animate-delay=\"0.6s\" class=\"time-board_item ani\"><div class=\"time-part\"><div class=\"dot\"></div><div class=\"day\">5月</div><div class=\"year\">2016</div></div><div class=\"time-event\"><p>2016.05 - 2017.05 广州</p><p>4399</p><p>前端开发工程师</p></div></div><div swiper-animate-effect=\"fadeInUp\" swiper-animate-duration=\"1s\" swiper-animate-delay=\"0.8s\" class=\"time-board_item ani\"><div class=\"time-part\"><div class=\"dot\"></div><div class=\"day\"> 5月</div><div class=\"year\">2017</div></div><div class=\"time-event\"><p>2017.07 - 至今</p><p>休整待业</p></div></div></div><div class=\"arrow\"><em class=\"icon-next\"></em></div></div><div id=\"s4\" class=\"swiper-slide\"><h2 swiper-animate-effect=\"bounceIn\" swiper-animate-duration=\"1s\" swiper-animate-delay=\"0s\" class=\"ani\">我的技能</h2><ul swiper-animate-effect=\"bounceIn\" swiper-animate-duration=\"1s\" swiper-animate-delay=\"0.3s\" class=\"menu ani\"><li class=\"btn\">FE-Basic</li><li class=\"btn\">FE-Advanced</li><li class=\"btn\">Common</li><li class=\"btn\">Tools</li></ul><div id=\"holder\" swiper-animate-effect=\"bounceIn\" swiper-animate-duration=\"1s\" swiper-animate-delay=\"0.6s\" class=\"ani\"></div><div id=\"techs\"></div><div class=\"arrow\"><em class=\"icon-next\"></em></div></div><div id=\"s5\" class=\"swiper-slide\"><h2 swiper-animate-effect=\"flipInX\" swiper-animate-duration=\"2s\" swiper-animate-delay=\"0s\" class=\"ani\">我的项目</h2><div swiper-animate-effect=\"flipInX\" swiper-animate-duration=\"2s\" swiper-animate-delay=\"0.3s\" class=\"project ani\"><a href=\"https://dev.getui.com/dos4.0/index.html#login\" class=\"project_name icon-project\">个推开发者平台/应景推送</a><p class=\"icon-star\">个推开发者平台的开发和维护</p><p class=\"icon-star\">平台基于Backbone Jquery Bootstrap RequireJs Handlebars mock underscore 以及其他第三方插件开发</p></div><div swiper-animate-effect=\"flipInX\" swiper-animate-duration=\"2s\" swiper-animate-delay=\"0.6s\" class=\"project ani\"><a href=\"\" class=\"project_name icon-project\">个推运营平台</a><p class=\"icon-star\">个推内部运营平台的功能开发，nodeJS controller层开发和部分Angular组件封装</p><p class=\"icon-star\">平台基于Angular1 LESS nodeJs java gulp 前端通过ajax请求，node接收，通过thrift连接node和java</p></div><div swiper-animate-effect=\"flipInX\" swiper-animate-duration=\"2s\" swiper-animate-delay=\"0.9s\" class=\"project ani\"><a href=\"http://detect.getui.com/\" class=\"project_name icon-project\">个推网络检测工具</a><p class=\"icon-star\">前端静态页面以及中间层node的开发</p><p class=\"icon-star\">使用了Jquery handlebars css3 nodejs</p></div><div swiper-animate-effect=\"flipInX\" swiper-animate-duration=\"2s\" swiper-animate-delay=\"1.2s\" class=\"project ani\"><a href=\"http://georageliang.github.io/\" class=\"project_name icon-project\">个人Blog</a><p class=\"icon-star\"><a href=\"http://georageliang.github.io/\">基于Jekyll框架开发的个人博客</a></p><p class=\"icon-star\"><a href=\"http://hblog.geoliang.top//\">新blog</a></p><p class=\"icon-star\">主要使用了Jekyll Jquery css3 markdown和第三方插件，并修复了首页动画插件的清除的问题/基于Hexo的博客</p></div><div swiper-animate-effect=\"flipInX\" swiper-animate-duration=\"2s\" swiper-animate-delay=\"1.5s\" class=\"project ani\"><a href=\"http://hblog.geoliang.top/\" class=\"project_name icon-project\">个人简历</a><p class=\"icon-star\">一个基于swiper开发的个人简历，中间参考了百度百科,Eric emptystack,使用了Raphael jade sass webPack flex</p></div><div swiper-animate-effect=\"flipInX\" swiper-animate-duration=\"2s\" swiper-animate-delay=\"1.8s\" class=\"project ani\"><a href=\"http://geo_liang.coding.me/parallax/\" class=\"project_name icon-project\">静态页面</a><p class=\"icon-star\">参考parallax官网页面制作，使用parallax制作</p></div><div swiper-animate-effect=\"flipInX\" swiper-animate-duration=\"2s\" swiper-animate-delay=\"2.1s\" class=\"project ani\"><a href=\"https://github.com/GeorageLiang/work_ladder\" class=\"project_name icon-project\">work_ladder</a><p class=\"icon-star\">基于业务搭建的页面重构自动化开发环境，npm script，jade，sass，es6，browser-sync，精灵图，图片压缩，打包，字体文件转换等</p></div><div class=\"arrow\"><em class=\"icon-next\"></em></div></div><div id=\"s6\" class=\"swiper-slide\"><h2 swiper-animate-effect=\"rubberBand\" swiper-animate-duration=\"2s\" swiper-animate-delay=\"0s\" class=\"ani\">Contact Me</h2><section><p><em class=\"icon-phone\"></em><a href=\"tel:15669971343\" swiper-animate-effect=\"pulse\" swiper-animate-duration=\"4s\" swiper-animate-delay=\"0s\" swiper-animate-iteration-count=\"infinite\" class=\"tel ani\">156 6997 1343</a></p><p><em class=\"icon-weibo\"></em><a href=\"tel:15669971343\">奥特蛋 Geo</a></p><p><em class=\"icon-email\"></em><a href=\"tel:15669971343\">117 069 1438@qq.com</a></p><p><em class=\"icon-github\"></em><a href=\"https://github.com/GeorageLiang\">GeorageLiang</a></p></section><div class=\"arrow\"><em class=\"icon-prev\"></em></div></div></div></div></body></html>");}.call(this,"undefined" in locals_for_with?locals_for_with.undefined: false?undefined:undefined));;return buf.join("");
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	exports.merge = function merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = merge(attrs, a[i]);
	    }
	    return attrs;
	  }
	  var ac = a['class'];
	  var bc = b['class'];

	  if (ac || bc) {
	    ac = ac || [];
	    bc = bc || [];
	    if (!Array.isArray(ac)) ac = [ac];
	    if (!Array.isArray(bc)) bc = [bc];
	    a['class'] = ac.concat(bc).filter(nulls);
	  }

	  for (var key in b) {
	    if (key != 'class') {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Filter null `val`s.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 * @api private
	 */

	function nulls(val) {
	  return val != null && val !== '';
	}

	/**
	 * join array as classes.
	 *
	 * @param {*} val
	 * @return {String}
	 */
	exports.joinClasses = joinClasses;
	function joinClasses(val) {
	  return (Array.isArray(val) ? val.map(joinClasses) :
	    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
	    [val]).filter(nulls).join(' ');
	}

	/**
	 * Render the given classes.
	 *
	 * @param {Array} classes
	 * @param {Array.<Boolean>} escaped
	 * @return {String}
	 */
	exports.cls = function cls(classes, escaped) {
	  var buf = [];
	  for (var i = 0; i < classes.length; i++) {
	    if (escaped && escaped[i]) {
	      buf.push(exports.escape(joinClasses([classes[i]])));
	    } else {
	      buf.push(joinClasses(classes[i]));
	    }
	  }
	  var text = joinClasses(buf);
	  if (text.length) {
	    return ' class="' + text + '"';
	  } else {
	    return '';
	  }
	};


	exports.style = function (val) {
	  if (val && typeof val === 'object') {
	    return Object.keys(val).map(function (style) {
	      return style + ':' + val[style];
	    }).join(';');
	  } else {
	    return val;
	  }
	};
	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = function attr(key, val, escaped, terse) {
	  if (key === 'style') {
	    val = exports.style(val);
	  }
	  if ('boolean' == typeof val || null == val) {
	    if (val) {
	      return ' ' + (terse ? key : key + '="' + key + '"');
	    } else {
	      return '';
	    }
	  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
	    if (JSON.stringify(val).indexOf('&') !== -1) {
	      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
	                   'will be escaped to `&amp;`');
	    };
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will eliminate the double quotes around dates in ' +
	                   'ISO form after 2.0.0');
	    }
	    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
	  } else if (escaped) {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + exports.escape(val) + '"';
	  } else {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + val + '"';
	  }
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} escaped
	 * @return {String}
	 */
	exports.attrs = function attrs(obj, terse){
	  var buf = [];

	  var keys = Object.keys(obj);

	  if (keys.length) {
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i]
	        , val = obj[key];

	      if ('class' == key) {
	        if (val = joinClasses(val)) {
	          buf.push(' ' + key + '="' + val + '"');
	        }
	      } else {
	        buf.push(exports.attr(key, val, false, terse));
	      }
	    }
	  }

	  return buf.join('');
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	var jade_encode_html_rules = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};
	var jade_match_html = /[&<>"]/g;

	function jade_encode_char(c) {
	  return jade_encode_html_rules[c] || c;
	}

	exports.escape = jade_escape;
	function jade_escape(html){
	  var result = String(html).replace(jade_match_html, jade_encode_char);
	  if (result === '' + html) return html;
	  else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the jade in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @api private
	 */

	exports.rethrow = function rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(4).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Jade') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};

	exports.DebugItem = function DebugItem(lineno, filename) {
	  this.lineno = lineno;
	  this.filename = filename;
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(3);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (title) {
	title = "aboutMe"
	buf.push("<head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><meta name=\"renderer\" content=\"webkit\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no\"><meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\"><meta name=\"apple-touch-fullscreen\" content=\"yes\"><meta name=\"apple-mobile-web-app-capable\" content=\"yes\"><!--uc强制竖屏--><meta name=\"screen-orientation\" content=\"portrait\"><!--QQ强制竖屏--><meta name=\"x5-orientation\" content=\"portrait\"><meta content=\"True\" name=\"HandheldFriendly\"><meta name=\"format-detection\" content=\"telephone=no, email=no\"><title>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</title></head>");}.call(this,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(22);
	__webpack_require__(25);
	var swiperAnimateCache = __webpack_require__(26).swiperAnimateCache;
	var swiperAnimate = __webpack_require__(26).swiperAnimate;

	__webpack_require__(27);
	__webpack_require__(29);
	var painting = __webpack_require__(30);

	//window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", () => {
	//    if (window.orientation === 180 || window.orientation === 0) {
	//        $('body,html').animate({ scrollTop: 665 }, 5500);
	//    }
	//    if (window.orientation === 90 || window.orientation === -90 ){
	//        alert('竖屏体验最佳');
	//    }
	//}, false);
	//
	//var ua = navigator.userAgent.toLowerCase();
	//if (/iphone|ipad|ipod/.test(ua)) {
	//
	//} else if (/android/.test(ua)) {
	//
	//}
	//

	$(document).ready(function () {
	    var mySwiper = new Swiper('.swiper-container', {
	        // 如果需要分页器
	        direction: 'vertical',
	        speed: 800,
	        onInit: function onInit(swiper) {
	            painting.paintingline1("s1");
	            painting.paintingTr("s1");
	            $('.man').addClass('showUpIn');

	            particlesJS.load('s4', 'assets/particle.json', function () {});
	            particlesJS.load('s5', 'assets/particle.json', function () {});
	            particlesJS.load('s6', 'assets/particle.json', function () {});

	            swiperAnimateCache(swiper); //隐藏动画元素
	            swiperAnimate(swiper); //初始化完成开始动画
	        },
	        onSlideChangeEnd: function onSlideChangeEnd(swiper) {
	            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	            switch (mySwiper.realIndex) {
	                case 0:
	                    painting.clean();
	                    painting.paintingline1("s1");
	                    painting.paintingTr("s1");
	                    $('.man').addClass('showUpIn');
	                    break;
	                case 1:
	                    $('.man').removeClass('showUpIn');
	                    painting.clean();
	                    painting.paintingline2("s2");
	                    break;
	                case 2:
	                    painting.clean();

	                    break;
	                case 3:
	                    painting.clean();
	                    painting.paintMap(function () {});
	                    break;
	                case 4:
	                    painting.clean();
	                    break;
	                case 5:
	                    painting.clean();
	                    break;
	            }
	        }
	    });
	});
	$(window).load(function () {});

	//
	//$('.add').on('click',() =>{
	//    $('.pop1').removeClass('hide');
	//})
	//$('.pop__close').on('click',()=>{
	//   $('.pop').addClass('hide');
	//})

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/*! jQuery v1.10.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
	//@ sourceMappingURL=jquery-1.10.1.min.map
	*/
	(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.1",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=lt(),k=lt(),E=lt(),S=!1,A=function(){return 0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=bt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+xt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return At(e.replace(z,"$1"),t,n,i)}function st(e){return K.test(e+"")}function lt(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function ut(e){return e[b]=!0,e}function ct(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function pt(e,t,n){e=e.split("|");var r,i=e.length,a=n?null:t;while(i--)(r=o.attrHandle[e[i]])&&r!==t||(o.attrHandle[e[i]]=a)}function ft(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function dt(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function ht(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:t}function gt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function yt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function vt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.parentWindow;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.frameElement&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ct(function(e){return e.innerHTML="<a href='#'></a>",pt("type|href|height|width",dt,"#"===e.firstChild.getAttribute("href")),pt(B,ft,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),r.input=ct(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),pt("value",ht,r.attributes&&r.input),r.getElementsByTagName=ct(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ct(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ct(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=st(n.querySelectorAll))&&(ct(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ct(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=st(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ct(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=st(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},r.sortDetached=ct(function(e){return 1&e.compareDocumentPosition(n.createElement("div"))}),A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return gt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?gt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:ut,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=bt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?ut(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return at(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:ut(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:vt(function(){return[0]}),last:vt(function(e,t){return[t-1]}),eq:vt(function(e,t,n){return[0>n?n+t:n]}),even:vt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:vt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:vt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:vt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=mt(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=yt(n);function bt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function xt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function wt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function Tt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Ct(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function Nt(e,t,n,r,i,o){return r&&!r[b]&&(r=Nt(r)),i&&!i[b]&&(i=Nt(i,o)),ut(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||St(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:Ct(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=Ct(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=Ct(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function kt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=wt(function(e){return e===t},s,!0),p=wt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[wt(Tt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return Nt(l>1&&Tt(f),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&kt(e.slice(l,r)),i>r&&kt(e=e.slice(r)),i>r&&xt(e))}f.push(n)}return Tt(f)}function Et(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=Ct(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?ut(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=bt(e)),n=t.length;while(n--)o=kt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Et(i,r))}return o};function St(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function At(e,t,n,i){var a,s,u,c,p,f=bt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&xt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}o.pseudos.nth=o.pseudos.eq;function jt(){}jt.prototype=o.filters=o.pseudos,o.setFilters=new jt,r.sortStable=b.split("").sort(A).join("")===b,p(),[0,0].sort(A),r.detectDuplicates=S,x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!u||(n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)
	}),n=s=l=u=r=o=null,t}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=x(this),l=t,u=e.match(T)||[];while(o=u[a++])l=r?l:!s.hasClass(o),s[l?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
	u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"=="function"&&__webpack_require__(24)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return x}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))})(window);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)(module)))

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 24 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Swiper 3.4.2
	 * Most modern mobile touch slider and framework with hardware accelerated transitions
	 * 
	 * http://www.idangero.us/swiper/
	 * 
	 * Copyright 2017, Vladimir Kharlampidi
	 * The iDangero.us
	 * http://www.idangero.us/
	 * 
	 * Licensed under MIT
	 * 
	 * Released on: March 10, 2017
	 */
	!function(){"use strict";var e,a=function(s,i){function r(e){return Math.floor(e)}function n(){var e=T.params.autoplay,a=T.slides.eq(T.activeIndex);a.attr("data-swiper-autoplay")&&(e=a.attr("data-swiper-autoplay")||T.params.autoplay),T.autoplayTimeoutId=setTimeout(function(){T.params.loop?(T.fixLoop(),T._slideNext(),T.emit("onAutoplay",T)):T.isEnd?i.autoplayStopOnLast?T.stopAutoplay():(T._slideTo(0),T.emit("onAutoplay",T)):(T._slideNext(),T.emit("onAutoplay",T))},e)}function o(a,t){var s=e(a.target);if(!s.is(t))if("string"==typeof t)s=s.parents(t);else if(t.nodeType){var i;return s.parents().each(function(e,a){a===t&&(i=t)}),i?t:void 0}if(0!==s.length)return s[0]}function l(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,s=new t(function(e){e.forEach(function(e){T.onResize(!0),T.emit("onObserverUpdate",T,e)})});s.observe(e,{attributes:void 0===a.attributes||a.attributes,childList:void 0===a.childList||a.childList,characterData:void 0===a.characterData||a.characterData}),T.observers.push(s)}function p(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!T.params.allowSwipeToNext&&(T.isHorizontal()&&39===a||!T.isHorizontal()&&40===a))return!1;if(!T.params.allowSwipeToPrev&&(T.isHorizontal()&&37===a||!T.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(T.container.parents("."+T.params.slideClass).length>0&&0===T.container.parents("."+T.params.slideActiveClass).length)return;var s={left:window.pageXOffset,top:window.pageYOffset},i=window.innerWidth,r=window.innerHeight,n=T.container.offset();T.rtl&&(n.left=n.left-T.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+T.width,n.top],[n.left,n.top+T.height],[n.left+T.width,n.top+T.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=s.left&&p[0]<=s.left+i&&p[1]>=s.top&&p[1]<=s.top+r&&(t=!0)}if(!t)return}T.isHorizontal()?(37!==a&&39!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!T.rtl||37===a&&T.rtl)&&T.slideNext(),(37===a&&!T.rtl||39===a&&T.rtl)&&T.slidePrev()):(38!==a&&40!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&T.slideNext(),38===a&&T.slidePrev()),T.emit("onKeyPress",T,a)}}function d(e){var a=0,t=0,s=0,i=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(a=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(a=t,t=0),s=10*a,i=10*t,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(s=e.deltaX),(s||i)&&e.deltaMode&&(1===e.deltaMode?(s*=40,i*=40):(s*=800,i*=800)),s&&!a&&(a=s<1?-1:1),i&&!t&&(t=i<1?-1:1),{spinX:a,spinY:t,pixelX:s,pixelY:i}}function u(e){e.originalEvent&&(e=e.originalEvent);var a=0,t=T.rtl?-1:1,s=d(e);if(T.params.mousewheelForceToAxis)if(T.isHorizontal()){if(!(Math.abs(s.pixelX)>Math.abs(s.pixelY)))return;a=s.pixelX*t}else{if(!(Math.abs(s.pixelY)>Math.abs(s.pixelX)))return;a=s.pixelY}else a=Math.abs(s.pixelX)>Math.abs(s.pixelY)?-s.pixelX*t:-s.pixelY;if(0!==a){if(T.params.mousewheelInvert&&(a=-a),T.params.freeMode){var i=T.getWrapperTranslate()+a*T.params.mousewheelSensitivity,r=T.isBeginning,n=T.isEnd;if(i>=T.minTranslate()&&(i=T.minTranslate()),i<=T.maxTranslate()&&(i=T.maxTranslate()),T.setWrapperTransition(0),T.setWrapperTranslate(i),T.updateProgress(),T.updateActiveIndex(),(!r&&T.isBeginning||!n&&T.isEnd)&&T.updateClasses(),T.params.freeModeSticky?(clearTimeout(T.mousewheel.timeout),T.mousewheel.timeout=setTimeout(function(){T.slideReset()},300)):T.params.lazyLoading&&T.lazy&&T.lazy.load(),T.emit("onScroll",T,e),T.params.autoplay&&T.params.autoplayDisableOnInteraction&&T.stopAutoplay(),0===i||i===T.maxTranslate())return}else{if((new window.Date).getTime()-T.mousewheel.lastScrollTime>60)if(a<0)if(T.isEnd&&!T.params.loop||T.animating){if(T.params.mousewheelReleaseOnEdges)return!0}else T.slideNext(),T.emit("onScroll",T,e);else if(T.isBeginning&&!T.params.loop||T.animating){if(T.params.mousewheelReleaseOnEdges)return!0}else T.slidePrev(),T.emit("onScroll",T,e);T.mousewheel.lastScrollTime=(new window.Date).getTime()}return e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function c(a,t){a=e(a);var s,i,r,n=T.rtl?-1:1;s=a.attr("data-swiper-parallax")||"0",i=a.attr("data-swiper-parallax-x"),r=a.attr("data-swiper-parallax-y"),i||r?(i=i||"0",r=r||"0"):T.isHorizontal()?(i=s,r="0"):(r=s,i="0"),i=i.indexOf("%")>=0?parseInt(i,10)*t*n+"%":i*t*n+"px",r=r.indexOf("%")>=0?parseInt(r,10)*t+"%":r*t+"px",a.transform("translate3d("+i+", "+r+",0px)")}function m(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof a))return new a(s,i);var h={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,zoom:!1,zoomMax:3,zoomMin:1,zoomToggle:!0,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,mousewheelEventsTarged:"container",hashnav:!1,hashnavWatchState:!1,history:!1,replaceState:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",normalizeSlideIndex:!0,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",paginationClickableClass:"swiper-pagination-clickable",paginationModifierClass:"swiper-pagination-",lazyLoadingClass:"swiper-lazy",lazyStatusLoadingClass:"swiper-lazy-loading",lazyStatusLoadedClass:"swiper-lazy-loaded",lazyPreloaderClass:"swiper-lazy-preloader",notificationClass:"swiper-notification",preloaderClass:"preloader",zoomContainerClass:"swiper-zoom-container",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},g=i&&i.virtualTranslate;i=i||{};var f={};for(var v in i)if("object"!=typeof i[v]||null===i[v]||(i[v].nodeType||i[v]===window||i[v]===document||void 0!==t&&i[v]instanceof t||"undefined"!=typeof jQuery&&i[v]instanceof jQuery))f[v]=i[v];else{f[v]={};for(var w in i[v])f[v][w]=i[v][w]}for(var y in h)if(void 0===i[y])i[y]=h[y];else if("object"==typeof i[y])for(var x in h[y])void 0===i[y][x]&&(i[y][x]=h[y][x]);var T=this;if(T.params=i,T.originalParams=f,T.classNames=[],void 0!==e&&void 0!==t&&(e=t),(void 0!==e||(e=void 0===t?window.Dom7||window.Zepto||window.jQuery:t))&&(T.$=e,T.currentBreakpoint=void 0,T.getActiveBreakpoint=function(){if(!T.params.breakpoints)return!1;var e,a=!1,t=[];for(e in T.params.breakpoints)T.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var s=0;s<t.length;s++)(e=t[s])>=window.innerWidth&&!a&&(a=e);return a||"max"},T.setBreakpoint=function(){var e=T.getActiveBreakpoint();if(e&&T.currentBreakpoint!==e){var a=e in T.params.breakpoints?T.params.breakpoints[e]:T.originalParams,t=T.params.loop&&a.slidesPerView!==T.params.slidesPerView;for(var s in a)T.params[s]=a[s];T.currentBreakpoint=e,t&&T.destroyLoop&&T.reLoop(!0)}},T.params.breakpoints&&T.setBreakpoint(),T.container=e(s),0!==T.container.length)){if(T.container.length>1){var b=[];return T.container.each(function(){b.push(new a(this,i))}),b}T.container[0].swiper=T,T.container.data("swiper",T),T.classNames.push(T.params.containerModifierClass+T.params.direction),T.params.freeMode&&T.classNames.push(T.params.containerModifierClass+"free-mode"),T.support.flexbox||(T.classNames.push(T.params.containerModifierClass+"no-flexbox"),T.params.slidesPerColumn=1),T.params.autoHeight&&T.classNames.push(T.params.containerModifierClass+"autoheight"),(T.params.parallax||T.params.watchSlidesVisibility)&&(T.params.watchSlidesProgress=!0),T.params.touchReleaseOnEdges&&(T.params.resistanceRatio=0),["cube","coverflow","flip"].indexOf(T.params.effect)>=0&&(T.support.transforms3d?(T.params.watchSlidesProgress=!0,T.classNames.push(T.params.containerModifierClass+"3d")):T.params.effect="slide"),"slide"!==T.params.effect&&T.classNames.push(T.params.containerModifierClass+T.params.effect),"cube"===T.params.effect&&(T.params.resistanceRatio=0,T.params.slidesPerView=1,T.params.slidesPerColumn=1,T.params.slidesPerGroup=1,T.params.centeredSlides=!1,T.params.spaceBetween=0,T.params.virtualTranslate=!0),"fade"!==T.params.effect&&"flip"!==T.params.effect||(T.params.slidesPerView=1,T.params.slidesPerColumn=1,T.params.slidesPerGroup=1,T.params.watchSlidesProgress=!0,T.params.spaceBetween=0,void 0===g&&(T.params.virtualTranslate=!0)),T.params.grabCursor&&T.support.touch&&(T.params.grabCursor=!1),T.wrapper=T.container.children("."+T.params.wrapperClass),T.params.pagination&&(T.paginationContainer=e(T.params.pagination),T.params.uniqueNavElements&&"string"==typeof T.params.pagination&&T.paginationContainer.length>1&&1===T.container.find(T.params.pagination).length&&(T.paginationContainer=T.container.find(T.params.pagination)),"bullets"===T.params.paginationType&&T.params.paginationClickable?T.paginationContainer.addClass(T.params.paginationModifierClass+"clickable"):T.params.paginationClickable=!1,T.paginationContainer.addClass(T.params.paginationModifierClass+T.params.paginationType)),(T.params.nextButton||T.params.prevButton)&&(T.params.nextButton&&(T.nextButton=e(T.params.nextButton),T.params.uniqueNavElements&&"string"==typeof T.params.nextButton&&T.nextButton.length>1&&1===T.container.find(T.params.nextButton).length&&(T.nextButton=T.container.find(T.params.nextButton))),T.params.prevButton&&(T.prevButton=e(T.params.prevButton),T.params.uniqueNavElements&&"string"==typeof T.params.prevButton&&T.prevButton.length>1&&1===T.container.find(T.params.prevButton).length&&(T.prevButton=T.container.find(T.params.prevButton)))),T.isHorizontal=function(){return"horizontal"===T.params.direction},T.rtl=T.isHorizontal()&&("rtl"===T.container[0].dir.toLowerCase()||"rtl"===T.container.css("direction")),T.rtl&&T.classNames.push(T.params.containerModifierClass+"rtl"),T.rtl&&(T.wrongRTL="-webkit-box"===T.wrapper.css("display")),T.params.slidesPerColumn>1&&T.classNames.push(T.params.containerModifierClass+"multirow"),T.device.android&&T.classNames.push(T.params.containerModifierClass+"android"),T.container.addClass(T.classNames.join(" ")),T.translate=0,T.progress=0,T.velocity=0,T.lockSwipeToNext=function(){T.params.allowSwipeToNext=!1,T.params.allowSwipeToPrev===!1&&T.params.grabCursor&&T.unsetGrabCursor()},T.lockSwipeToPrev=function(){T.params.allowSwipeToPrev=!1,T.params.allowSwipeToNext===!1&&T.params.grabCursor&&T.unsetGrabCursor()},T.lockSwipes=function(){T.params.allowSwipeToNext=T.params.allowSwipeToPrev=!1,T.params.grabCursor&&T.unsetGrabCursor()},T.unlockSwipeToNext=function(){T.params.allowSwipeToNext=!0,T.params.allowSwipeToPrev===!0&&T.params.grabCursor&&T.setGrabCursor()},T.unlockSwipeToPrev=function(){T.params.allowSwipeToPrev=!0,T.params.allowSwipeToNext===!0&&T.params.grabCursor&&T.setGrabCursor()},T.unlockSwipes=function(){T.params.allowSwipeToNext=T.params.allowSwipeToPrev=!0,T.params.grabCursor&&T.setGrabCursor()},T.setGrabCursor=function(e){T.container[0].style.cursor="move",T.container[0].style.cursor=e?"-webkit-grabbing":"-webkit-grab",T.container[0].style.cursor=e?"-moz-grabbin":"-moz-grab",T.container[0].style.cursor=e?"grabbing":"grab"},T.unsetGrabCursor=function(){T.container[0].style.cursor=""},T.params.grabCursor&&T.setGrabCursor(),T.imagesToLoad=[],T.imagesLoaded=0,T.loadImage=function(e,a,t,s,i,r){function n(){r&&r()}var o;e.complete&&i?n():a?(o=new window.Image,o.onload=n,o.onerror=n,s&&(o.sizes=s),t&&(o.srcset=t),a&&(o.src=a)):n()},T.preloadImages=function(){function e(){void 0!==T&&null!==T&&T&&(void 0!==T.imagesLoaded&&T.imagesLoaded++,T.imagesLoaded===T.imagesToLoad.length&&(T.params.updateOnImagesReady&&T.update(),T.emit("onImagesReady",T)))}T.imagesToLoad=T.container.find("img");for(var a=0;a<T.imagesToLoad.length;a++)T.loadImage(T.imagesToLoad[a],T.imagesToLoad[a].currentSrc||T.imagesToLoad[a].getAttribute("src"),T.imagesToLoad[a].srcset||T.imagesToLoad[a].getAttribute("srcset"),T.imagesToLoad[a].sizes||T.imagesToLoad[a].getAttribute("sizes"),!0,e)},T.autoplayTimeoutId=void 0,T.autoplaying=!1,T.autoplayPaused=!1,T.startAutoplay=function(){return void 0===T.autoplayTimeoutId&&(!!T.params.autoplay&&(!T.autoplaying&&(T.autoplaying=!0,T.emit("onAutoplayStart",T),void n())))},T.stopAutoplay=function(e){T.autoplayTimeoutId&&(T.autoplayTimeoutId&&clearTimeout(T.autoplayTimeoutId),T.autoplaying=!1,T.autoplayTimeoutId=void 0,T.emit("onAutoplayStop",T))},T.pauseAutoplay=function(e){T.autoplayPaused||(T.autoplayTimeoutId&&clearTimeout(T.autoplayTimeoutId),T.autoplayPaused=!0,0===e?(T.autoplayPaused=!1,n()):T.wrapper.transitionEnd(function(){T&&(T.autoplayPaused=!1,T.autoplaying?n():T.stopAutoplay())}))},T.minTranslate=function(){return-T.snapGrid[0]},T.maxTranslate=function(){return-T.snapGrid[T.snapGrid.length-1]},T.updateAutoHeight=function(){var e,a=[],t=0;if("auto"!==T.params.slidesPerView&&T.params.slidesPerView>1)for(e=0;e<Math.ceil(T.params.slidesPerView);e++){var s=T.activeIndex+e;if(s>T.slides.length)break;a.push(T.slides.eq(s)[0])}else a.push(T.slides.eq(T.activeIndex)[0]);for(e=0;e<a.length;e++)if(void 0!==a[e]){var i=a[e].offsetHeight;t=i>t?i:t}t&&T.wrapper.css("height",t+"px")},T.updateContainerSize=function(){var e,a;e=void 0!==T.params.width?T.params.width:T.container[0].clientWidth,a=void 0!==T.params.height?T.params.height:T.container[0].clientHeight,0===e&&T.isHorizontal()||0===a&&!T.isHorizontal()||(e=e-parseInt(T.container.css("padding-left"),10)-parseInt(T.container.css("padding-right"),10),a=a-parseInt(T.container.css("padding-top"),10)-parseInt(T.container.css("padding-bottom"),10),T.width=e,T.height=a,T.size=T.isHorizontal()?T.width:T.height)},T.updateSlidesSize=function(){T.slides=T.wrapper.children("."+T.params.slideClass),T.snapGrid=[],T.slidesGrid=[],T.slidesSizesGrid=[];var e,a=T.params.spaceBetween,t=-T.params.slidesOffsetBefore,s=0,i=0;if(void 0!==T.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*T.size),T.virtualSize=-a,T.rtl?T.slides.css({marginLeft:"",marginTop:""}):T.slides.css({marginRight:"",marginBottom:""});var n;T.params.slidesPerColumn>1&&(n=Math.floor(T.slides.length/T.params.slidesPerColumn)===T.slides.length/T.params.slidesPerColumn?T.slides.length:Math.ceil(T.slides.length/T.params.slidesPerColumn)*T.params.slidesPerColumn,"auto"!==T.params.slidesPerView&&"row"===T.params.slidesPerColumnFill&&(n=Math.max(n,T.params.slidesPerView*T.params.slidesPerColumn)));var o,l=T.params.slidesPerColumn,p=n/l,d=p-(T.params.slidesPerColumn*p-T.slides.length);for(e=0;e<T.slides.length;e++){o=0;var u=T.slides.eq(e);if(T.params.slidesPerColumn>1){var c,m,h;"column"===T.params.slidesPerColumnFill?(m=Math.floor(e/l),h=e-m*l,(m>d||m===d&&h===l-1)&&++h>=l&&(h=0,m++),c=m+h*n/l,u.css({"-webkit-box-ordinal-group":c,"-moz-box-ordinal-group":c,"-ms-flex-order":c,"-webkit-order":c,order:c})):(h=Math.floor(e/p),m=e-h*p),u.css("margin-"+(T.isHorizontal()?"top":"left"),0!==h&&T.params.spaceBetween&&T.params.spaceBetween+"px").attr("data-swiper-column",m).attr("data-swiper-row",h)}"none"!==u.css("display")&&("auto"===T.params.slidesPerView?(o=T.isHorizontal()?u.outerWidth(!0):u.outerHeight(!0),T.params.roundLengths&&(o=r(o))):(o=(T.size-(T.params.slidesPerView-1)*a)/T.params.slidesPerView,T.params.roundLengths&&(o=r(o)),T.isHorizontal()?T.slides[e].style.width=o+"px":T.slides[e].style.height=o+"px"),T.slides[e].swiperSlideSize=o,T.slidesSizesGrid.push(o),T.params.centeredSlides?(t=t+o/2+s/2+a,0===s&&0!==e&&(t=t-T.size/2-a),0===e&&(t=t-T.size/2-a),Math.abs(t)<.001&&(t=0),i%T.params.slidesPerGroup==0&&T.snapGrid.push(t),T.slidesGrid.push(t)):(i%T.params.slidesPerGroup==0&&T.snapGrid.push(t),T.slidesGrid.push(t),t=t+o+a),T.virtualSize+=o+a,s=o,i++)}T.virtualSize=Math.max(T.virtualSize,T.size)+T.params.slidesOffsetAfter;var g;if(T.rtl&&T.wrongRTL&&("slide"===T.params.effect||"coverflow"===T.params.effect)&&T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}),T.support.flexbox&&!T.params.setWrapperSize||(T.isHorizontal()?T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}):T.wrapper.css({height:T.virtualSize+T.params.spaceBetween+"px"})),T.params.slidesPerColumn>1&&(T.virtualSize=(o+T.params.spaceBetween)*n,T.virtualSize=Math.ceil(T.virtualSize/T.params.slidesPerColumn)-T.params.spaceBetween,T.isHorizontal()?T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}):T.wrapper.css({height:T.virtualSize+T.params.spaceBetween+"px"}),T.params.centeredSlides)){for(g=[],e=0;e<T.snapGrid.length;e++)T.snapGrid[e]<T.virtualSize+T.snapGrid[0]&&g.push(T.snapGrid[e]);T.snapGrid=g}if(!T.params.centeredSlides){for(g=[],e=0;e<T.snapGrid.length;e++)T.snapGrid[e]<=T.virtualSize-T.size&&g.push(T.snapGrid[e]);T.snapGrid=g,Math.floor(T.virtualSize-T.size)-Math.floor(T.snapGrid[T.snapGrid.length-1])>1&&T.snapGrid.push(T.virtualSize-T.size)}0===T.snapGrid.length&&(T.snapGrid=[0]),0!==T.params.spaceBetween&&(T.isHorizontal()?T.rtl?T.slides.css({marginLeft:a+"px"}):T.slides.css({marginRight:a+"px"}):T.slides.css({marginBottom:a+"px"})),T.params.watchSlidesProgress&&T.updateSlidesOffset()}},T.updateSlidesOffset=function(){for(var e=0;e<T.slides.length;e++)T.slides[e].swiperSlideOffset=T.isHorizontal()?T.slides[e].offsetLeft:T.slides[e].offsetTop},T.currentSlidesPerView=function(){var e,a,t=1;if(T.params.centeredSlides){var s,i=T.slides[T.activeIndex].swiperSlideSize;for(e=T.activeIndex+1;e<T.slides.length;e++)T.slides[e]&&!s&&(i+=T.slides[e].swiperSlideSize,t++,i>T.size&&(s=!0));for(a=T.activeIndex-1;a>=0;a--)T.slides[a]&&!s&&(i+=T.slides[a].swiperSlideSize,t++,i>T.size&&(s=!0))}else for(e=T.activeIndex+1;e<T.slides.length;e++)T.slidesGrid[e]-T.slidesGrid[T.activeIndex]<T.size&&t++;return t},T.updateSlidesProgress=function(e){if(void 0===e&&(e=T.translate||0),0!==T.slides.length){void 0===T.slides[0].swiperSlideOffset&&T.updateSlidesOffset();var a=-e;T.rtl&&(a=e),T.slides.removeClass(T.params.slideVisibleClass);for(var t=0;t<T.slides.length;t++){var s=T.slides[t],i=(a+(T.params.centeredSlides?T.minTranslate():0)-s.swiperSlideOffset)/(s.swiperSlideSize+T.params.spaceBetween);if(T.params.watchSlidesVisibility){var r=-(a-s.swiperSlideOffset),n=r+T.slidesSizesGrid[t];(r>=0&&r<T.size||n>0&&n<=T.size||r<=0&&n>=T.size)&&T.slides.eq(t).addClass(T.params.slideVisibleClass)}s.progress=T.rtl?-i:i}}},T.updateProgress=function(e){void 0===e&&(e=T.translate||0);var a=T.maxTranslate()-T.minTranslate(),t=T.isBeginning,s=T.isEnd;0===a?(T.progress=0,T.isBeginning=T.isEnd=!0):(T.progress=(e-T.minTranslate())/a,T.isBeginning=T.progress<=0,T.isEnd=T.progress>=1),T.isBeginning&&!t&&T.emit("onReachBeginning",T),T.isEnd&&!s&&T.emit("onReachEnd",T),T.params.watchSlidesProgress&&T.updateSlidesProgress(e),T.emit("onProgress",T,T.progress)},T.updateActiveIndex=function(){var e,a,t,s=T.rtl?T.translate:-T.translate;for(a=0;a<T.slidesGrid.length;a++)void 0!==T.slidesGrid[a+1]?s>=T.slidesGrid[a]&&s<T.slidesGrid[a+1]-(T.slidesGrid[a+1]-T.slidesGrid[a])/2?e=a:s>=T.slidesGrid[a]&&s<T.slidesGrid[a+1]&&(e=a+1):s>=T.slidesGrid[a]&&(e=a);T.params.normalizeSlideIndex&&(e<0||void 0===e)&&(e=0),t=Math.floor(e/T.params.slidesPerGroup),t>=T.snapGrid.length&&(t=T.snapGrid.length-1),e!==T.activeIndex&&(T.snapIndex=t,T.previousIndex=T.activeIndex,T.activeIndex=e,T.updateClasses(),T.updateRealIndex())},T.updateRealIndex=function(){T.realIndex=parseInt(T.slides.eq(T.activeIndex).attr("data-swiper-slide-index")||T.activeIndex,10)},T.updateClasses=function(){T.slides.removeClass(T.params.slideActiveClass+" "+T.params.slideNextClass+" "+T.params.slidePrevClass+" "+T.params.slideDuplicateActiveClass+" "+T.params.slideDuplicateNextClass+" "+T.params.slideDuplicatePrevClass);var a=T.slides.eq(T.activeIndex);a.addClass(T.params.slideActiveClass),i.loop&&(a.hasClass(T.params.slideDuplicateClass)?T.wrapper.children("."+T.params.slideClass+":not(."+T.params.slideDuplicateClass+')[data-swiper-slide-index="'+T.realIndex+'"]').addClass(T.params.slideDuplicateActiveClass):T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+T.realIndex+'"]').addClass(T.params.slideDuplicateActiveClass));var t=a.next("."+T.params.slideClass).addClass(T.params.slideNextClass);T.params.loop&&0===t.length&&(t=T.slides.eq(0),t.addClass(T.params.slideNextClass));var s=a.prev("."+T.params.slideClass).addClass(T.params.slidePrevClass);if(T.params.loop&&0===s.length&&(s=T.slides.eq(-1),s.addClass(T.params.slidePrevClass)),i.loop&&(t.hasClass(T.params.slideDuplicateClass)?T.wrapper.children("."+T.params.slideClass+":not(."+T.params.slideDuplicateClass+')[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicateNextClass):T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicateNextClass),s.hasClass(T.params.slideDuplicateClass)?T.wrapper.children("."+T.params.slideClass+":not(."+T.params.slideDuplicateClass+')[data-swiper-slide-index="'+s.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicatePrevClass):T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+s.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicatePrevClass)),T.paginationContainer&&T.paginationContainer.length>0){var r,n=T.params.loop?Math.ceil((T.slides.length-2*T.loopedSlides)/T.params.slidesPerGroup):T.snapGrid.length;if(T.params.loop?(r=Math.ceil((T.activeIndex-T.loopedSlides)/T.params.slidesPerGroup),r>T.slides.length-1-2*T.loopedSlides&&(r-=T.slides.length-2*T.loopedSlides),r>n-1&&(r-=n),r<0&&"bullets"!==T.params.paginationType&&(r=n+r)):r=void 0!==T.snapIndex?T.snapIndex:T.activeIndex||0,"bullets"===T.params.paginationType&&T.bullets&&T.bullets.length>0&&(T.bullets.removeClass(T.params.bulletActiveClass),T.paginationContainer.length>1?T.bullets.each(function(){e(this).index()===r&&e(this).addClass(T.params.bulletActiveClass)}):T.bullets.eq(r).addClass(T.params.bulletActiveClass)),"fraction"===T.params.paginationType&&(T.paginationContainer.find("."+T.params.paginationCurrentClass).text(r+1),T.paginationContainer.find("."+T.params.paginationTotalClass).text(n)),"progress"===T.params.paginationType){var o=(r+1)/n,l=o,p=1;T.isHorizontal()||(p=o,l=1),T.paginationContainer.find("."+T.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+l+") scaleY("+p+")").transition(T.params.speed)}"custom"===T.params.paginationType&&T.params.paginationCustomRender&&(T.paginationContainer.html(T.params.paginationCustomRender(T,r+1,n)),T.emit("onPaginationRendered",T,T.paginationContainer[0]))}T.params.loop||(T.params.prevButton&&T.prevButton&&T.prevButton.length>0&&(T.isBeginning?(T.prevButton.addClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.disable(T.prevButton)):(T.prevButton.removeClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.enable(T.prevButton))),T.params.nextButton&&T.nextButton&&T.nextButton.length>0&&(T.isEnd?(T.nextButton.addClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.disable(T.nextButton)):(T.nextButton.removeClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.enable(T.nextButton))))},T.updatePagination=function(){if(T.params.pagination&&T.paginationContainer&&T.paginationContainer.length>0){var e="";if("bullets"===T.params.paginationType){for(var a=T.params.loop?Math.ceil((T.slides.length-2*T.loopedSlides)/T.params.slidesPerGroup):T.snapGrid.length,t=0;t<a;t++)e+=T.params.paginationBulletRender?T.params.paginationBulletRender(T,t,T.params.bulletClass):"<"+T.params.paginationElement+' class="'+T.params.bulletClass+'"></'+T.params.paginationElement+">";T.paginationContainer.html(e),T.bullets=T.paginationContainer.find("."+T.params.bulletClass),T.params.paginationClickable&&T.params.a11y&&T.a11y&&T.a11y.initPagination()}"fraction"===T.params.paginationType&&(e=T.params.paginationFractionRender?T.params.paginationFractionRender(T,T.params.paginationCurrentClass,T.params.paginationTotalClass):'<span class="'+T.params.paginationCurrentClass+'"></span> / <span class="'+T.params.paginationTotalClass+'"></span>',T.paginationContainer.html(e)),"progress"===T.params.paginationType&&(e=T.params.paginationProgressRender?T.params.paginationProgressRender(T,T.params.paginationProgressbarClass):'<span class="'+T.params.paginationProgressbarClass+'"></span>',T.paginationContainer.html(e)),"custom"!==T.params.paginationType&&T.emit("onPaginationRendered",T,T.paginationContainer[0])}},T.update=function(e){function a(){T.rtl,T.translate;t=Math.min(Math.max(T.translate,T.maxTranslate()),T.minTranslate()),T.setWrapperTranslate(t),T.updateActiveIndex(),T.updateClasses()}if(T){T.updateContainerSize(),T.updateSlidesSize(),T.updateProgress(),T.updatePagination(),T.updateClasses(),T.params.scrollbar&&T.scrollbar&&T.scrollbar.set();var t;if(e){T.controller&&T.controller.spline&&(T.controller.spline=void 0),T.params.freeMode?(a(),T.params.autoHeight&&T.updateAutoHeight()):(("auto"===T.params.slidesPerView||T.params.slidesPerView>1)&&T.isEnd&&!T.params.centeredSlides?T.slideTo(T.slides.length-1,0,!1,!0):T.slideTo(T.activeIndex,0,!1,!0))||a()}else T.params.autoHeight&&T.updateAutoHeight()}},T.onResize=function(e){T.params.onBeforeResize&&T.params.onBeforeResize(T),T.params.breakpoints&&T.setBreakpoint();var a=T.params.allowSwipeToPrev,t=T.params.allowSwipeToNext;T.params.allowSwipeToPrev=T.params.allowSwipeToNext=!0,T.updateContainerSize(),T.updateSlidesSize(),("auto"===T.params.slidesPerView||T.params.freeMode||e)&&T.updatePagination(),T.params.scrollbar&&T.scrollbar&&T.scrollbar.set(),T.controller&&T.controller.spline&&(T.controller.spline=void 0);var s=!1;if(T.params.freeMode){var i=Math.min(Math.max(T.translate,T.maxTranslate()),T.minTranslate());T.setWrapperTranslate(i),T.updateActiveIndex(),T.updateClasses(),T.params.autoHeight&&T.updateAutoHeight()}else T.updateClasses(),s=("auto"===T.params.slidesPerView||T.params.slidesPerView>1)&&T.isEnd&&!T.params.centeredSlides?T.slideTo(T.slides.length-1,0,!1,!0):T.slideTo(T.activeIndex,0,!1,!0);T.params.lazyLoading&&!s&&T.lazy&&T.lazy.load(),T.params.allowSwipeToPrev=a,T.params.allowSwipeToNext=t,T.params.onAfterResize&&T.params.onAfterResize(T)},T.touchEventsDesktop={start:"mousedown",move:"mousemove",end:"mouseup"},window.navigator.pointerEnabled?T.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled&&(T.touchEventsDesktop={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}),T.touchEvents={start:T.support.touch||!T.params.simulateTouch?"touchstart":T.touchEventsDesktop.start,move:T.support.touch||!T.params.simulateTouch?"touchmove":T.touchEventsDesktop.move,end:T.support.touch||!T.params.simulateTouch?"touchend":T.touchEventsDesktop.end},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===T.params.touchEventsTarget?T.container:T.wrapper).addClass("swiper-wp8-"+T.params.direction),T.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",s="container"===T.params.touchEventsTarget?T.container[0]:T.wrapper[0],r=T.support.touch?s:document,n=!!T.params.nested;if(T.browser.ie)s[t](T.touchEvents.start,T.onTouchStart,!1),r[t](T.touchEvents.move,T.onTouchMove,n),r[t](T.touchEvents.end,T.onTouchEnd,!1);else{if(T.support.touch){var o=!("touchstart"!==T.touchEvents.start||!T.support.passiveListener||!T.params.passiveListeners)&&{passive:!0,capture:!1};s[t](T.touchEvents.start,T.onTouchStart,o),s[t](T.touchEvents.move,T.onTouchMove,n),s[t](T.touchEvents.end,T.onTouchEnd,o)}(i.simulateTouch&&!T.device.ios&&!T.device.android||i.simulateTouch&&!T.support.touch&&T.device.ios)&&(s[t]("mousedown",T.onTouchStart,!1),document[t]("mousemove",T.onTouchMove,n),document[t]("mouseup",T.onTouchEnd,!1))}window[t]("resize",T.onResize),T.params.nextButton&&T.nextButton&&T.nextButton.length>0&&(T.nextButton[a]("click",T.onClickNext),T.params.a11y&&T.a11y&&T.nextButton[a]("keydown",T.a11y.onEnterKey)),T.params.prevButton&&T.prevButton&&T.prevButton.length>0&&(T.prevButton[a]("click",T.onClickPrev),T.params.a11y&&T.a11y&&T.prevButton[a]("keydown",T.a11y.onEnterKey)),T.params.pagination&&T.params.paginationClickable&&(T.paginationContainer[a]("click","."+T.params.bulletClass,T.onClickIndex),T.params.a11y&&T.a11y&&T.paginationContainer[a]("keydown","."+T.params.bulletClass,T.a11y.onEnterKey)),(T.params.preventClicks||T.params.preventClicksPropagation)&&s[t]("click",T.preventClicks,!0)},T.attachEvents=function(){T.initEvents()},T.detachEvents=function(){T.initEvents(!0)},T.allowClick=!0,T.preventClicks=function(e){T.allowClick||(T.params.preventClicks&&e.preventDefault(),T.params.preventClicksPropagation&&T.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},T.onClickNext=function(e){e.preventDefault(),T.isEnd&&!T.params.loop||T.slideNext()},T.onClickPrev=function(e){e.preventDefault(),T.isBeginning&&!T.params.loop||T.slidePrev()},T.onClickIndex=function(a){a.preventDefault();var t=e(this).index()*T.params.slidesPerGroup;T.params.loop&&(t+=T.loopedSlides),T.slideTo(t)},
	T.updateClickedSlide=function(a){var t=o(a,"."+T.params.slideClass),s=!1;if(t)for(var i=0;i<T.slides.length;i++)T.slides[i]===t&&(s=!0);if(!t||!s)return T.clickedSlide=void 0,void(T.clickedIndex=void 0);if(T.clickedSlide=t,T.clickedIndex=e(t).index(),T.params.slideToClickedSlide&&void 0!==T.clickedIndex&&T.clickedIndex!==T.activeIndex){var r,n=T.clickedIndex,l="auto"===T.params.slidesPerView?T.currentSlidesPerView():T.params.slidesPerView;if(T.params.loop){if(T.animating)return;r=parseInt(e(T.clickedSlide).attr("data-swiper-slide-index"),10),T.params.centeredSlides?n<T.loopedSlides-l/2||n>T.slides.length-T.loopedSlides+l/2?(T.fixLoop(),n=T.wrapper.children("."+T.params.slideClass+'[data-swiper-slide-index="'+r+'"]:not(.'+T.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){T.slideTo(n)},0)):T.slideTo(n):n>T.slides.length-l?(T.fixLoop(),n=T.wrapper.children("."+T.params.slideClass+'[data-swiper-slide-index="'+r+'"]:not(.'+T.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){T.slideTo(n)},0)):T.slideTo(n)}else T.slideTo(n)}};var S,C,z,M,E,P,I,k,L,D,B="input, select, textarea, button, video",H=Date.now(),G=[];T.animating=!1,T.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var X,A;T.onTouchStart=function(a){if(a.originalEvent&&(a=a.originalEvent),(X="touchstart"===a.type)||!("which"in a)||3!==a.which){if(T.params.noSwiping&&o(a,"."+T.params.noSwipingClass))return void(T.allowClick=!0);if(!T.params.swipeHandler||o(a,T.params.swipeHandler)){var t=T.touches.currentX="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,s=T.touches.currentY="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY;if(!(T.device.ios&&T.params.iOSEdgeSwipeDetection&&t<=T.params.iOSEdgeSwipeThreshold)){if(S=!0,C=!1,z=!0,E=void 0,A=void 0,T.touches.startX=t,T.touches.startY=s,M=Date.now(),T.allowClick=!0,T.updateContainerSize(),T.swipeDirection=void 0,T.params.threshold>0&&(k=!1),"touchstart"!==a.type){var i=!0;e(a.target).is(B)&&(i=!1),document.activeElement&&e(document.activeElement).is(B)&&document.activeElement.blur(),i&&a.preventDefault()}T.emit("onTouchStart",T,a)}}}},T.onTouchMove=function(a){if(a.originalEvent&&(a=a.originalEvent),!X||"mousemove"!==a.type){if(a.preventedByNestedSwiper)return T.touches.startX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,void(T.touches.startY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY);if(T.params.onlyExternal)return T.allowClick=!1,void(S&&(T.touches.startX=T.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,T.touches.startY=T.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,M=Date.now()));if(X&&T.params.touchReleaseOnEdges&&!T.params.loop)if(T.isHorizontal()){if(T.touches.currentX<T.touches.startX&&T.translate<=T.maxTranslate()||T.touches.currentX>T.touches.startX&&T.translate>=T.minTranslate())return}else if(T.touches.currentY<T.touches.startY&&T.translate<=T.maxTranslate()||T.touches.currentY>T.touches.startY&&T.translate>=T.minTranslate())return;if(X&&document.activeElement&&a.target===document.activeElement&&e(a.target).is(B))return C=!0,void(T.allowClick=!1);if(z&&T.emit("onTouchMove",T,a),!(a.targetTouches&&a.targetTouches.length>1)){if(T.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,T.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,void 0===E){var t;T.isHorizontal()&&T.touches.currentY===T.touches.startY||!T.isHorizontal()&&T.touches.currentX===T.touches.startX?E=!1:(t=180*Math.atan2(Math.abs(T.touches.currentY-T.touches.startY),Math.abs(T.touches.currentX-T.touches.startX))/Math.PI,E=T.isHorizontal()?t>T.params.touchAngle:90-t>T.params.touchAngle)}if(E&&T.emit("onTouchMoveOpposite",T,a),void 0===A&&(T.touches.currentX===T.touches.startX&&T.touches.currentY===T.touches.startY||(A=!0)),S){if(E)return void(S=!1);if(A){T.allowClick=!1,T.emit("onSliderMove",T,a),a.preventDefault(),T.params.touchMoveStopPropagation&&!T.params.nested&&a.stopPropagation(),C||(i.loop&&T.fixLoop(),I=T.getWrapperTranslate(),T.setWrapperTransition(0),T.animating&&T.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),T.params.autoplay&&T.autoplaying&&(T.params.autoplayDisableOnInteraction?T.stopAutoplay():T.pauseAutoplay()),D=!1,!T.params.grabCursor||T.params.allowSwipeToNext!==!0&&T.params.allowSwipeToPrev!==!0||T.setGrabCursor(!0)),C=!0;var s=T.touches.diff=T.isHorizontal()?T.touches.currentX-T.touches.startX:T.touches.currentY-T.touches.startY;s*=T.params.touchRatio,T.rtl&&(s=-s),T.swipeDirection=s>0?"prev":"next",P=s+I;var r=!0;if(s>0&&P>T.minTranslate()?(r=!1,T.params.resistance&&(P=T.minTranslate()-1+Math.pow(-T.minTranslate()+I+s,T.params.resistanceRatio))):s<0&&P<T.maxTranslate()&&(r=!1,T.params.resistance&&(P=T.maxTranslate()+1-Math.pow(T.maxTranslate()-I-s,T.params.resistanceRatio))),r&&(a.preventedByNestedSwiper=!0),!T.params.allowSwipeToNext&&"next"===T.swipeDirection&&P<I&&(P=I),!T.params.allowSwipeToPrev&&"prev"===T.swipeDirection&&P>I&&(P=I),T.params.threshold>0){if(!(Math.abs(s)>T.params.threshold||k))return void(P=I);if(!k)return k=!0,T.touches.startX=T.touches.currentX,T.touches.startY=T.touches.currentY,P=I,void(T.touches.diff=T.isHorizontal()?T.touches.currentX-T.touches.startX:T.touches.currentY-T.touches.startY)}T.params.followFinger&&((T.params.freeMode||T.params.watchSlidesProgress)&&T.updateActiveIndex(),T.params.freeMode&&(0===G.length&&G.push({position:T.touches[T.isHorizontal()?"startX":"startY"],time:M}),G.push({position:T.touches[T.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),T.updateProgress(P),T.setWrapperTranslate(P))}}}}},T.onTouchEnd=function(a){if(a.originalEvent&&(a=a.originalEvent),z&&T.emit("onTouchEnd",T,a),z=!1,S){T.params.grabCursor&&C&&S&&(T.params.allowSwipeToNext===!0||T.params.allowSwipeToPrev===!0)&&T.setGrabCursor(!1);var t=Date.now(),s=t-M;if(T.allowClick&&(T.updateClickedSlide(a),T.emit("onTap",T,a),s<300&&t-H>300&&(L&&clearTimeout(L),L=setTimeout(function(){T&&(T.params.paginationHide&&T.paginationContainer.length>0&&!e(a.target).hasClass(T.params.bulletClass)&&T.paginationContainer.toggleClass(T.params.paginationHiddenClass),T.emit("onClick",T,a))},300)),s<300&&t-H<300&&(L&&clearTimeout(L),T.emit("onDoubleTap",T,a))),H=Date.now(),setTimeout(function(){T&&(T.allowClick=!0)},0),!S||!C||!T.swipeDirection||0===T.touches.diff||P===I)return void(S=C=!1);S=C=!1;var i;if(i=T.params.followFinger?T.rtl?T.translate:-T.translate:-P,T.params.freeMode){if(i<-T.minTranslate())return void T.slideTo(T.activeIndex);if(i>-T.maxTranslate())return void(T.slides.length<T.snapGrid.length?T.slideTo(T.snapGrid.length-1):T.slideTo(T.slides.length-1));if(T.params.freeModeMomentum){if(G.length>1){var r=G.pop(),n=G.pop(),o=r.position-n.position,l=r.time-n.time;T.velocity=o/l,T.velocity=T.velocity/2,Math.abs(T.velocity)<T.params.freeModeMinimumVelocity&&(T.velocity=0),(l>150||(new window.Date).getTime()-r.time>300)&&(T.velocity=0)}else T.velocity=0;T.velocity=T.velocity*T.params.freeModeMomentumVelocityRatio,G.length=0;var p=1e3*T.params.freeModeMomentumRatio,d=T.velocity*p,u=T.translate+d;T.rtl&&(u=-u);var c,m=!1,h=20*Math.abs(T.velocity)*T.params.freeModeMomentumBounceRatio;if(u<T.maxTranslate())T.params.freeModeMomentumBounce?(u+T.maxTranslate()<-h&&(u=T.maxTranslate()-h),c=T.maxTranslate(),m=!0,D=!0):u=T.maxTranslate();else if(u>T.minTranslate())T.params.freeModeMomentumBounce?(u-T.minTranslate()>h&&(u=T.minTranslate()+h),c=T.minTranslate(),m=!0,D=!0):u=T.minTranslate();else if(T.params.freeModeSticky){var g,f=0;for(f=0;f<T.snapGrid.length;f+=1)if(T.snapGrid[f]>-u){g=f;break}u=Math.abs(T.snapGrid[g]-u)<Math.abs(T.snapGrid[g-1]-u)||"next"===T.swipeDirection?T.snapGrid[g]:T.snapGrid[g-1],T.rtl||(u=-u)}if(0!==T.velocity)p=T.rtl?Math.abs((-u-T.translate)/T.velocity):Math.abs((u-T.translate)/T.velocity);else if(T.params.freeModeSticky)return void T.slideReset();T.params.freeModeMomentumBounce&&m?(T.updateProgress(c),T.setWrapperTransition(p),T.setWrapperTranslate(u),T.onTransitionStart(),T.animating=!0,T.wrapper.transitionEnd(function(){T&&D&&(T.emit("onMomentumBounce",T),T.setWrapperTransition(T.params.speed),T.setWrapperTranslate(c),T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd()}))})):T.velocity?(T.updateProgress(u),T.setWrapperTransition(p),T.setWrapperTranslate(u),T.onTransitionStart(),T.animating||(T.animating=!0,T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd()}))):T.updateProgress(u),T.updateActiveIndex()}return void((!T.params.freeModeMomentum||s>=T.params.longSwipesMs)&&(T.updateProgress(),T.updateActiveIndex()))}var v,w=0,y=T.slidesSizesGrid[0];for(v=0;v<T.slidesGrid.length;v+=T.params.slidesPerGroup)void 0!==T.slidesGrid[v+T.params.slidesPerGroup]?i>=T.slidesGrid[v]&&i<T.slidesGrid[v+T.params.slidesPerGroup]&&(w=v,y=T.slidesGrid[v+T.params.slidesPerGroup]-T.slidesGrid[v]):i>=T.slidesGrid[v]&&(w=v,y=T.slidesGrid[T.slidesGrid.length-1]-T.slidesGrid[T.slidesGrid.length-2]);var x=(i-T.slidesGrid[w])/y;if(s>T.params.longSwipesMs){if(!T.params.longSwipes)return void T.slideTo(T.activeIndex);"next"===T.swipeDirection&&(x>=T.params.longSwipesRatio?T.slideTo(w+T.params.slidesPerGroup):T.slideTo(w)),"prev"===T.swipeDirection&&(x>1-T.params.longSwipesRatio?T.slideTo(w+T.params.slidesPerGroup):T.slideTo(w))}else{if(!T.params.shortSwipes)return void T.slideTo(T.activeIndex);"next"===T.swipeDirection&&T.slideTo(w+T.params.slidesPerGroup),"prev"===T.swipeDirection&&T.slideTo(w)}}},T._slideTo=function(e,a){return T.slideTo(e,a,!0,!0)},T.slideTo=function(e,a,t,s){void 0===t&&(t=!0),void 0===e&&(e=0),e<0&&(e=0),T.snapIndex=Math.floor(e/T.params.slidesPerGroup),T.snapIndex>=T.snapGrid.length&&(T.snapIndex=T.snapGrid.length-1);var i=-T.snapGrid[T.snapIndex];if(T.params.autoplay&&T.autoplaying&&(s||!T.params.autoplayDisableOnInteraction?T.pauseAutoplay(a):T.stopAutoplay()),T.updateProgress(i),T.params.normalizeSlideIndex)for(var r=0;r<T.slidesGrid.length;r++)-Math.floor(100*i)>=Math.floor(100*T.slidesGrid[r])&&(e=r);return!(!T.params.allowSwipeToNext&&i<T.translate&&i<T.minTranslate())&&(!(!T.params.allowSwipeToPrev&&i>T.translate&&i>T.maxTranslate()&&(T.activeIndex||0)!==e)&&(void 0===a&&(a=T.params.speed),T.previousIndex=T.activeIndex||0,T.activeIndex=e,T.updateRealIndex(),T.rtl&&-i===T.translate||!T.rtl&&i===T.translate?(T.params.autoHeight&&T.updateAutoHeight(),T.updateClasses(),"slide"!==T.params.effect&&T.setWrapperTranslate(i),!1):(T.updateClasses(),T.onTransitionStart(t),0===a||T.browser.lteIE9?(T.setWrapperTranslate(i),T.setWrapperTransition(0),T.onTransitionEnd(t)):(T.setWrapperTranslate(i),T.setWrapperTransition(a),T.animating||(T.animating=!0,T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd(t)}))),!0)))},T.onTransitionStart=function(e){void 0===e&&(e=!0),T.params.autoHeight&&T.updateAutoHeight(),T.lazy&&T.lazy.onTransitionStart(),e&&(T.emit("onTransitionStart",T),T.activeIndex!==T.previousIndex&&(T.emit("onSlideChangeStart",T),T.activeIndex>T.previousIndex?T.emit("onSlideNextStart",T):T.emit("onSlidePrevStart",T)))},T.onTransitionEnd=function(e){T.animating=!1,T.setWrapperTransition(0),void 0===e&&(e=!0),T.lazy&&T.lazy.onTransitionEnd(),e&&(T.emit("onTransitionEnd",T),T.activeIndex!==T.previousIndex&&(T.emit("onSlideChangeEnd",T),T.activeIndex>T.previousIndex?T.emit("onSlideNextEnd",T):T.emit("onSlidePrevEnd",T))),T.params.history&&T.history&&T.history.setHistory(T.params.history,T.activeIndex),T.params.hashnav&&T.hashnav&&T.hashnav.setHash()},T.slideNext=function(e,a,t){if(T.params.loop){if(T.animating)return!1;T.fixLoop();T.container[0].clientLeft;return T.slideTo(T.activeIndex+T.params.slidesPerGroup,a,e,t)}return T.slideTo(T.activeIndex+T.params.slidesPerGroup,a,e,t)},T._slideNext=function(e){return T.slideNext(!0,e,!0)},T.slidePrev=function(e,a,t){if(T.params.loop){if(T.animating)return!1;T.fixLoop();T.container[0].clientLeft;return T.slideTo(T.activeIndex-1,a,e,t)}return T.slideTo(T.activeIndex-1,a,e,t)},T._slidePrev=function(e){return T.slidePrev(!0,e,!0)},T.slideReset=function(e,a,t){return T.slideTo(T.activeIndex,a,e)},T.disableTouchControl=function(){return T.params.onlyExternal=!0,!0},T.enableTouchControl=function(){return T.params.onlyExternal=!1,!0},T.setWrapperTransition=function(e,a){T.wrapper.transition(e),"slide"!==T.params.effect&&T.effects[T.params.effect]&&T.effects[T.params.effect].setTransition(e),T.params.parallax&&T.parallax&&T.parallax.setTransition(e),T.params.scrollbar&&T.scrollbar&&T.scrollbar.setTransition(e),T.params.control&&T.controller&&T.controller.setTransition(e,a),T.emit("onSetTransition",T,e)},T.setWrapperTranslate=function(e,a,t){var s=0,i=0;T.isHorizontal()?s=T.rtl?-e:e:i=e,T.params.roundLengths&&(s=r(s),i=r(i)),T.params.virtualTranslate||(T.support.transforms3d?T.wrapper.transform("translate3d("+s+"px, "+i+"px, 0px)"):T.wrapper.transform("translate("+s+"px, "+i+"px)")),T.translate=T.isHorizontal()?s:i;var n,o=T.maxTranslate()-T.minTranslate();n=0===o?0:(e-T.minTranslate())/o,n!==T.progress&&T.updateProgress(e),a&&T.updateActiveIndex(),"slide"!==T.params.effect&&T.effects[T.params.effect]&&T.effects[T.params.effect].setTranslate(T.translate),T.params.parallax&&T.parallax&&T.parallax.setTranslate(T.translate),T.params.scrollbar&&T.scrollbar&&T.scrollbar.setTranslate(T.translate),T.params.control&&T.controller&&T.controller.setTranslate(T.translate,t),T.emit("onSetTranslate",T,T.translate)},T.getTranslate=function(e,a){var t,s,i,r;return void 0===a&&(a="x"),T.params.virtualTranslate?T.rtl?-T.translate:T.translate:(i=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=i.transform||i.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),r=new window.WebKitCSSMatrix("none"===s?"":s)):(r=i.MozTransform||i.OTransform||i.MsTransform||i.msTransform||i.transform||i.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=r.toString().split(",")),"x"===a&&(s=window.WebKitCSSMatrix?r.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(s=window.WebKitCSSMatrix?r.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),T.rtl&&s&&(s=-s),s||0)},T.getWrapperTranslate=function(e){return void 0===e&&(e=T.isHorizontal()?"x":"y"),T.getTranslate(T.wrapper[0],e)},T.observers=[],T.initObservers=function(){if(T.params.observeParents)for(var e=T.container.parents(),a=0;a<e.length;a++)l(e[a]);l(T.container[0],{childList:!1}),l(T.wrapper[0],{attributes:!1})},T.disconnectObservers=function(){for(var e=0;e<T.observers.length;e++)T.observers[e].disconnect();T.observers=[]},T.createLoop=function(){T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass).remove();var a=T.wrapper.children("."+T.params.slideClass);"auto"!==T.params.slidesPerView||T.params.loopedSlides||(T.params.loopedSlides=a.length),T.loopedSlides=parseInt(T.params.loopedSlides||T.params.slidesPerView,10),T.loopedSlides=T.loopedSlides+T.params.loopAdditionalSlides,T.loopedSlides>a.length&&(T.loopedSlides=a.length);var t,s=[],i=[];for(a.each(function(t,r){var n=e(this);t<T.loopedSlides&&i.push(r),t<a.length&&t>=a.length-T.loopedSlides&&s.push(r),n.attr("data-swiper-slide-index",t)}),t=0;t<i.length;t++)T.wrapper.append(e(i[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass));for(t=s.length-1;t>=0;t--)T.wrapper.prepend(e(s[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass))},T.destroyLoop=function(){T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass).remove(),T.slides.removeAttr("data-swiper-slide-index")},T.reLoop=function(e){var a=T.activeIndex-T.loopedSlides;T.destroyLoop(),T.createLoop(),T.updateSlidesSize(),e&&T.slideTo(a+T.loopedSlides,0,!1)},T.fixLoop=function(){var e;T.activeIndex<T.loopedSlides?(e=T.slides.length-3*T.loopedSlides+T.activeIndex,e+=T.loopedSlides,T.slideTo(e,0,!1,!0)):("auto"===T.params.slidesPerView&&T.activeIndex>=2*T.loopedSlides||T.activeIndex>T.slides.length-2*T.params.slidesPerView)&&(e=-T.slides.length+T.activeIndex+T.loopedSlides,e+=T.loopedSlides,T.slideTo(e,0,!1,!0))},T.appendSlide=function(e){if(T.params.loop&&T.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&T.wrapper.append(e[a]);else T.wrapper.append(e);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0)},T.prependSlide=function(e){T.params.loop&&T.destroyLoop();var a=T.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&T.wrapper.prepend(e[t]);a=T.activeIndex+e.length}else T.wrapper.prepend(e);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0),T.slideTo(a,0,!1)},T.removeSlide=function(e){T.params.loop&&(T.destroyLoop(),T.slides=T.wrapper.children("."+T.params.slideClass));var a,t=T.activeIndex;if("object"==typeof e&&e.length){for(var s=0;s<e.length;s++)a=e[s],T.slides[a]&&T.slides.eq(a).remove(),a<t&&t--;t=Math.max(t,0)}else a=e,T.slides[a]&&T.slides.eq(a).remove(),a<t&&t--,t=Math.max(t,0);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0),T.params.loop?T.slideTo(t+T.loopedSlides,0,!1):T.slideTo(t,0,!1)},T.removeAllSlides=function(){for(var e=[],a=0;a<T.slides.length;a++)e.push(a);T.removeSlide(e)},T.effects={fade:{setTranslate:function(){for(var e=0;e<T.slides.length;e++){var a=T.slides.eq(e),t=a[0].swiperSlideOffset,s=-t;T.params.virtualTranslate||(s-=T.translate);var i=0;T.isHorizontal()||(i=s,s=0);var r=T.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:r}).transform("translate3d("+s+"px, "+i+"px, 0px)")}},setTransition:function(e){if(T.slides.transition(e),T.params.virtualTranslate&&0!==e){var a=!1;T.slides.transitionEnd(function(){if(!a&&T){a=!0,T.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)T.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var a=0;a<T.slides.length;a++){var t=T.slides.eq(a),s=t[0].progress;T.params.flip.limitRotation&&(s=Math.max(Math.min(t[0].progress,1),-1));var i=t[0].swiperSlideOffset,r=-180*s,n=r,o=0,l=-i,p=0;if(T.isHorizontal()?T.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(s))+T.slides.length,T.params.flip.slideShadows){var d=T.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),u=T.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===u.length&&(u=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"right":"bottom")+'"></div>'),t.append(u)),d.length&&(d[0].style.opacity=Math.max(-s,0)),u.length&&(u[0].style.opacity=Math.max(s,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(a){if(T.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a),T.params.virtualTranslate&&0!==a){var t=!1;T.slides.eq(T.activeIndex).transitionEnd(function(){if(!t&&T&&e(this).hasClass(T.params.slideActiveClass)){t=!0,T.animating=!1;for(var a=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<a.length;s++)T.wrapper.trigger(a[s])}})}}},cube:{setTranslate:function(){var a,t=0;T.params.cube.shadow&&(T.isHorizontal()?(a=T.wrapper.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),T.wrapper.append(a)),a.css({height:T.width+"px"})):(a=T.container.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),T.container.append(a))));for(var s=0;s<T.slides.length;s++){var i=T.slides.eq(s),r=90*s,n=Math.floor(r/360);T.rtl&&(r=-r,n=Math.floor(-r/360));var o=Math.max(Math.min(i[0].progress,1),-1),l=0,p=0,d=0;s%4==0?(l=4*-n*T.size,d=0):(s-1)%4==0?(l=0,d=4*-n*T.size):(s-2)%4==0?(l=T.size+4*n*T.size,d=T.size):(s-3)%4==0&&(l=-T.size,d=3*T.size+4*T.size*n),T.rtl&&(l=-l),T.isHorizontal()||(p=l,l=0);var u="rotateX("+(T.isHorizontal()?0:-r)+"deg) rotateY("+(T.isHorizontal()?r:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(o<=1&&o>-1&&(t=90*s+90*o,T.rtl&&(t=90*-s-90*o)),i.transform(u),T.params.cube.slideShadows){var c=T.isHorizontal()?i.find(".swiper-slide-shadow-left"):i.find(".swiper-slide-shadow-top"),m=T.isHorizontal()?i.find(".swiper-slide-shadow-right"):i.find(".swiper-slide-shadow-bottom");0===c.length&&(c=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"left":"top")+'"></div>'),i.append(c)),0===m.length&&(m=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"right":"bottom")+'"></div>'),i.append(m)),c.length&&(c[0].style.opacity=Math.max(-o,0)),m.length&&(m[0].style.opacity=Math.max(o,0))}}if(T.wrapper.css({"-webkit-transform-origin":"50% 50% -"+T.size/2+"px","-moz-transform-origin":"50% 50% -"+T.size/2+"px","-ms-transform-origin":"50% 50% -"+T.size/2+"px","transform-origin":"50% 50% -"+T.size/2+"px"}),T.params.cube.shadow)if(T.isHorizontal())a.transform("translate3d(0px, "+(T.width/2+T.params.cube.shadowOffset)+"px, "+-T.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+T.params.cube.shadowScale+")");else{var h=Math.abs(t)-90*Math.floor(Math.abs(t)/90),g=1.5-(Math.sin(2*h*Math.PI/360)/2+Math.cos(2*h*Math.PI/360)/2),f=T.params.cube.shadowScale,v=T.params.cube.shadowScale/g,w=T.params.cube.shadowOffset;a.transform("scale3d("+f+", 1, "+v+") translate3d(0px, "+(T.height/2+w)+"px, "+-T.height/2/v+"px) rotateX(-90deg)")}var y=T.isSafari||T.isUiWebView?-T.size/2:0;T.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(T.isHorizontal()?0:t)+"deg) rotateY("+(T.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),T.params.cube.shadow&&!T.isHorizontal()&&T.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var a=T.translate,t=T.isHorizontal()?-a+T.width/2:-a+T.height/2,s=T.isHorizontal()?T.params.coverflow.rotate:-T.params.coverflow.rotate,i=T.params.coverflow.depth,r=0,n=T.slides.length;r<n;r++){var o=T.slides.eq(r),l=T.slidesSizesGrid[r],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*T.params.coverflow.modifier,u=T.isHorizontal()?s*d:0,c=T.isHorizontal()?0:s*d,m=-i*Math.abs(d),h=T.isHorizontal()?0:T.params.coverflow.stretch*d,g=T.isHorizontal()?T.params.coverflow.stretch*d:0;Math.abs(g)<.001&&(g=0),Math.abs(h)<.001&&(h=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var f="translate3d("+g+"px,"+h+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(f),o[0].style.zIndex=1-Math.abs(Math.round(d)),T.params.coverflow.slideShadows){var v=T.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=T.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===v.length&&(v=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"left":"top")+'"></div>'),o.append(v)),0===w.length&&(w=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),v.length&&(v[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(T.browser.ie){T.wrapper[0].style.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},T.lazy={initialImageLoaded:!1,loadImageInSlide:function(a,t){if(void 0!==a&&(void 0===t&&(t=!0),0!==T.slides.length)){var s=T.slides.eq(a),i=s.find("."+T.params.lazyLoadingClass+":not(."+T.params.lazyStatusLoadedClass+"):not(."+T.params.lazyStatusLoadingClass+")");!s.hasClass(T.params.lazyLoadingClass)||s.hasClass(T.params.lazyStatusLoadedClass)||s.hasClass(T.params.lazyStatusLoadingClass)||(i=i.add(s[0])),0!==i.length&&i.each(function(){var a=e(this);a.addClass(T.params.lazyStatusLoadingClass);var i=a.attr("data-background"),r=a.attr("data-src"),n=a.attr("data-srcset"),o=a.attr("data-sizes");T.loadImage(a[0],r||i,n,o,!1,function(){if(void 0!==T&&null!==T&&T){if(i?(a.css("background-image",'url("'+i+'")'),a.removeAttr("data-background")):(n&&(a.attr("srcset",n),a.removeAttr("data-srcset")),o&&(a.attr("sizes",o),a.removeAttr("data-sizes")),r&&(a.attr("src",r),a.removeAttr("data-src"))),a.addClass(T.params.lazyStatusLoadedClass).removeClass(T.params.lazyStatusLoadingClass),s.find("."+T.params.lazyPreloaderClass+", ."+T.params.preloaderClass).remove(),T.params.loop&&t){var e=s.attr("data-swiper-slide-index");if(s.hasClass(T.params.slideDuplicateClass)){var l=T.wrapper.children('[data-swiper-slide-index="'+e+'"]:not(.'+T.params.slideDuplicateClass+")");T.lazy.loadImageInSlide(l.index(),!1)}else{var p=T.wrapper.children("."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');T.lazy.loadImageInSlide(p.index(),!1)}}T.emit("onLazyImageReady",T,s[0],a[0])}}),T.emit("onLazyImageLoad",T,s[0],a[0])})}},load:function(){var a,t=T.params.slidesPerView;if("auto"===t&&(t=0),T.lazy.initialImageLoaded||(T.lazy.initialImageLoaded=!0),T.params.watchSlidesVisibility)T.wrapper.children("."+T.params.slideVisibleClass).each(function(){T.lazy.loadImageInSlide(e(this).index())});else if(t>1)for(a=T.activeIndex;a<T.activeIndex+t;a++)T.slides[a]&&T.lazy.loadImageInSlide(a);else T.lazy.loadImageInSlide(T.activeIndex);if(T.params.lazyLoadingInPrevNext)if(t>1||T.params.lazyLoadingInPrevNextAmount&&T.params.lazyLoadingInPrevNextAmount>1){var s=T.params.lazyLoadingInPrevNextAmount,i=t,r=Math.min(T.activeIndex+i+Math.max(s,i),T.slides.length),n=Math.max(T.activeIndex-Math.max(i,s),0);for(a=T.activeIndex+t;a<r;a++)T.slides[a]&&T.lazy.loadImageInSlide(a);for(a=n;a<T.activeIndex;a++)T.slides[a]&&T.lazy.loadImageInSlide(a)}else{var o=T.wrapper.children("."+T.params.slideNextClass);o.length>0&&T.lazy.loadImageInSlide(o.index());var l=T.wrapper.children("."+T.params.slidePrevClass);l.length>0&&T.lazy.loadImageInSlide(l.index())}},onTransitionStart:function(){T.params.lazyLoading&&(T.params.lazyLoadingOnTransitionStart||!T.params.lazyLoadingOnTransitionStart&&!T.lazy.initialImageLoaded)&&T.lazy.load()},onTransitionEnd:function(){T.params.lazyLoading&&!T.params.lazyLoadingOnTransitionStart&&T.lazy.load()}},T.scrollbar={isTouched:!1,setDragPosition:function(e){var a=T.scrollbar,t=T.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=t-a.track.offset()[T.isHorizontal()?"left":"top"]-a.dragSize/2,i=-T.minTranslate()*a.moveDivider,r=-T.maxTranslate()*a.moveDivider;s<i?s=i:s>r&&(s=r),s=-s/a.moveDivider,T.updateProgress(s),T.setWrapperTranslate(s,!0)},dragStart:function(e){var a=T.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),T.params.scrollbarHide&&a.track.css("opacity",1),T.wrapper.transition(100),a.drag.transition(100),T.emit("onScrollbarDragStart",T)},dragMove:function(e){var a=T.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),T.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),T.emit("onScrollbarDragMove",T))},dragEnd:function(e){var a=T.scrollbar;a.isTouched&&(a.isTouched=!1,T.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),T.emit("onScrollbarDragEnd",T),T.params.scrollbarSnapOnRelease&&T.slideReset())},draggableEvents:function(){return T.params.simulateTouch!==!1||T.support.touch?T.touchEvents:T.touchEventsDesktop}(),enableDraggable:function(){var a=T.scrollbar,t=T.support.touch?a.track:document;e(a.track).on(a.draggableEvents.start,a.dragStart),e(t).on(a.draggableEvents.move,a.dragMove),e(t).on(a.draggableEvents.end,a.dragEnd)},disableDraggable:function(){var a=T.scrollbar,t=T.support.touch?a.track:document;e(a.track).off(a.draggableEvents.start,a.dragStart),e(t).off(a.draggableEvents.move,a.dragMove),e(t).off(a.draggableEvents.end,a.dragEnd)},set:function(){if(T.params.scrollbar){var a=T.scrollbar;a.track=e(T.params.scrollbar),T.params.uniqueNavElements&&"string"==typeof T.params.scrollbar&&a.track.length>1&&1===T.container.find(T.params.scrollbar).length&&(a.track=T.container.find(T.params.scrollbar)),a.drag=a.track.find(".swiper-scrollbar-drag"),0===a.drag.length&&(a.drag=e('<div class="swiper-scrollbar-drag"></div>'),a.track.append(a.drag)),a.drag[0].style.width="",a.drag[0].style.height="",a.trackSize=T.isHorizontal()?a.track[0].offsetWidth:a.track[0].offsetHeight,a.divider=T.size/T.virtualSize,a.moveDivider=a.divider*(a.trackSize/T.size),a.dragSize=a.trackSize*a.divider,T.isHorizontal()?a.drag[0].style.width=a.dragSize+"px":a.drag[0].style.height=a.dragSize+"px",a.divider>=1?a.track[0].style.display="none":a.track[0].style.display="",T.params.scrollbarHide&&(a.track[0].style.opacity=0)}},setTranslate:function(){if(T.params.scrollbar){var e,a=T.scrollbar,t=(T.translate,a.dragSize);e=(a.trackSize-a.dragSize)*T.progress,T.rtl&&T.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):e<0?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),T.isHorizontal()?(T.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(T.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),T.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){T.params.scrollbar&&T.scrollbar.drag.transition(e)}},T.controller={LinearSpline:function(e,a){var t=function(){var e,a,t;return function(s,i){for(a=-1,e=s.length;e-a>1;)s[t=e+a>>1]<=i?a=t:e=t;return e}}();this.x=e,this.y=a,this.lastIndex=e.length-1;var s,i;this.x.length;this.interpolate=function(e){return e?(i=t(this.x,e),s=i-1,(e-this.x[s])*(this.y[i]-this.y[s])/(this.x[i]-this.x[s])+this.y[s]):0}},getInterpolateFunction:function(e){T.controller.spline||(T.controller.spline=T.params.loop?new T.controller.LinearSpline(T.slidesGrid,e.slidesGrid):new T.controller.LinearSpline(T.snapGrid,e.snapGrid))},setTranslate:function(e,t){function s(a){e=a.rtl&&"horizontal"===a.params.direction?-T.translate:T.translate,"slide"===T.params.controlBy&&(T.controller.getInterpolateFunction(a),r=-T.controller.spline.interpolate(-e)),r&&"container"!==T.params.controlBy||(i=(a.maxTranslate()-a.minTranslate())/(T.maxTranslate()-T.minTranslate()),r=(e-T.minTranslate())*i+a.minTranslate()),T.params.controlInverse&&(r=a.maxTranslate()-r),a.updateProgress(r),a.setWrapperTranslate(r,!1,T),a.updateActiveIndex()}var i,r,n=T.params.control;if(Array.isArray(n))for(var o=0;o<n.length;o++)n[o]!==t&&n[o]instanceof a&&s(n[o]);else n instanceof a&&t!==n&&s(n)},setTransition:function(e,t){function s(a){a.setWrapperTransition(e,T),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){r&&(a.params.loop&&"slide"===T.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var i,r=T.params.control;if(Array.isArray(r))for(i=0;i<r.length;i++)r[i]!==t&&r[i]instanceof a&&s(r[i]);else r instanceof a&&t!==r&&s(r)}},T.hashnav={onHashCange:function(e,a){var t=document.location.hash.replace("#","");t!==T.slides.eq(T.activeIndex).attr("data-hash")&&T.slideTo(T.wrapper.children("."+T.params.slideClass+'[data-hash="'+t+'"]').index())},attachEvents:function(a){var t=a?"off":"on";e(window)[t]("hashchange",T.hashnav.onHashCange)},setHash:function(){
	if(T.hashnav.initialized&&T.params.hashnav)if(T.params.replaceState&&window.history&&window.history.replaceState)window.history.replaceState(null,null,"#"+T.slides.eq(T.activeIndex).attr("data-hash")||"");else{var e=T.slides.eq(T.activeIndex),a=e.attr("data-hash")||e.attr("data-history");document.location.hash=a||""}},init:function(){if(T.params.hashnav&&!T.params.history){T.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=T.slides.length;a<t;a++){var s=T.slides.eq(a),i=s.attr("data-hash")||s.attr("data-history");if(i===e&&!s.hasClass(T.params.slideDuplicateClass)){var r=s.index();T.slideTo(r,0,T.params.runCallbacksOnInit,!0)}}T.params.hashnavWatchState&&T.hashnav.attachEvents()}},destroy:function(){T.params.hashnavWatchState&&T.hashnav.attachEvents(!0)}},T.history={init:function(){if(T.params.history){if(!window.history||!window.history.pushState)return T.params.history=!1,void(T.params.hashnav=!0);T.history.initialized=!0,this.paths=this.getPathValues(),(this.paths.key||this.paths.value)&&(this.scrollToSlide(0,this.paths.value,T.params.runCallbacksOnInit),T.params.replaceState||window.addEventListener("popstate",this.setHistoryPopState))}},setHistoryPopState:function(){T.history.paths=T.history.getPathValues(),T.history.scrollToSlide(T.params.speed,T.history.paths.value,!1)},getPathValues:function(){var e=window.location.pathname.slice(1).split("/"),a=e.length;return{key:e[a-2],value:e[a-1]}},setHistory:function(e,a){if(T.history.initialized&&T.params.history){var t=T.slides.eq(a),s=this.slugify(t.attr("data-history"));window.location.pathname.includes(e)||(s=e+"/"+s),T.params.replaceState?window.history.replaceState(null,null,s):window.history.pushState(null,null,s)}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,a,t){if(a)for(var s=0,i=T.slides.length;s<i;s++){var r=T.slides.eq(s),n=this.slugify(r.attr("data-history"));if(n===a&&!r.hasClass(T.params.slideDuplicateClass)){var o=r.index();T.slideTo(o,e,t)}}else T.slideTo(0,e,t)}},T.disableKeyboardControl=function(){T.params.keyboardControl=!1,e(document).off("keydown",p)},T.enableKeyboardControl=function(){T.params.keyboardControl=!0,e(document).on("keydown",p)},T.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},T.params.mousewheelControl&&(T.mousewheel.event=navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e="onwheel"in document;if(!e){var a=document.createElement("div");a.setAttribute("onwheel","return;"),e="function"==typeof a.onwheel}return!e&&document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0&&(e=document.implementation.hasFeature("Events.wheel","3.0")),e}()?"wheel":"mousewheel"),T.disableMousewheelControl=function(){if(!T.mousewheel.event)return!1;var a=T.container;return"container"!==T.params.mousewheelEventsTarged&&(a=e(T.params.mousewheelEventsTarged)),a.off(T.mousewheel.event,u),T.params.mousewheelControl=!1,!0},T.enableMousewheelControl=function(){if(!T.mousewheel.event)return!1;var a=T.container;return"container"!==T.params.mousewheelEventsTarged&&(a=e(T.params.mousewheelEventsTarged)),a.on(T.mousewheel.event,u),T.params.mousewheelControl=!0,!0},T.parallax={setTranslate:function(){T.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){c(this,T.progress)}),T.slides.each(function(){var a=e(this);a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){c(this,Math.min(Math.max(a[0].progress,-1),1))})})},setTransition:function(a){void 0===a&&(a=T.params.speed),T.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=e(this),s=parseInt(t.attr("data-swiper-parallax-duration"),10)||a;0===a&&(s=0),t.transition(s)})}},T.zoom={scale:1,currentScale:1,isScaling:!1,gesture:{slide:void 0,slideWidth:void 0,slideHeight:void 0,image:void 0,imageWrap:void 0,zoomMax:T.params.zoomMax},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var a=e.targetTouches[0].pageX,t=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-a,2)+Math.pow(i-t,2))},onGestureStart:function(a){var t=T.zoom;if(!T.support.gestures){if("touchstart"!==a.type||"touchstart"===a.type&&a.targetTouches.length<2)return;t.gesture.scaleStart=t.getDistanceBetweenTouches(a)}if(!(t.gesture.slide&&t.gesture.slide.length||(t.gesture.slide=e(this),0===t.gesture.slide.length&&(t.gesture.slide=T.slides.eq(T.activeIndex)),t.gesture.image=t.gesture.slide.find("img, svg, canvas"),t.gesture.imageWrap=t.gesture.image.parent("."+T.params.zoomContainerClass),t.gesture.zoomMax=t.gesture.imageWrap.attr("data-swiper-zoom")||T.params.zoomMax,0!==t.gesture.imageWrap.length)))return void(t.gesture.image=void 0);t.gesture.image.transition(0),t.isScaling=!0},onGestureChange:function(e){var a=T.zoom;if(!T.support.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.gesture.scaleMove=a.getDistanceBetweenTouches(e)}a.gesture.image&&0!==a.gesture.image.length&&(T.support.gestures?a.scale=e.scale*a.currentScale:a.scale=a.gesture.scaleMove/a.gesture.scaleStart*a.currentScale,a.scale>a.gesture.zoomMax&&(a.scale=a.gesture.zoomMax-1+Math.pow(a.scale-a.gesture.zoomMax+1,.5)),a.scale<T.params.zoomMin&&(a.scale=T.params.zoomMin+1-Math.pow(T.params.zoomMin-a.scale+1,.5)),a.gesture.image.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var a=T.zoom;!T.support.gestures&&("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2)||a.gesture.image&&0!==a.gesture.image.length&&(a.scale=Math.max(Math.min(a.scale,a.gesture.zoomMax),T.params.zoomMin),a.gesture.image.transition(T.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(a.gesture.slide=void 0))},onTouchStart:function(e,a){var t=e.zoom;t.gesture.image&&0!==t.gesture.image.length&&(t.image.isTouched||("android"===e.device.os&&a.preventDefault(),t.image.isTouched=!0,t.image.touchesStart.x="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,t.image.touchesStart.y="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY))},onTouchMove:function(e){var a=T.zoom;if(a.gesture.image&&0!==a.gesture.image.length&&(T.allowClick=!1,a.image.isTouched&&a.gesture.slide)){a.image.isMoved||(a.image.width=a.gesture.image[0].offsetWidth,a.image.height=a.gesture.image[0].offsetHeight,a.image.startX=T.getTranslate(a.gesture.imageWrap[0],"x")||0,a.image.startY=T.getTranslate(a.gesture.imageWrap[0],"y")||0,a.gesture.slideWidth=a.gesture.slide[0].offsetWidth,a.gesture.slideHeight=a.gesture.slide[0].offsetHeight,a.gesture.imageWrap.transition(0),T.rtl&&(a.image.startX=-a.image.startX),T.rtl&&(a.image.startY=-a.image.startY));var t=a.image.width*a.scale,s=a.image.height*a.scale;if(!(t<a.gesture.slideWidth&&s<a.gesture.slideHeight)){if(a.image.minX=Math.min(a.gesture.slideWidth/2-t/2,0),a.image.maxX=-a.image.minX,a.image.minY=Math.min(a.gesture.slideHeight/2-s/2,0),a.image.maxY=-a.image.minY,a.image.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,a.image.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!a.image.isMoved&&!a.isScaling){if(T.isHorizontal()&&Math.floor(a.image.minX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x<a.image.touchesStart.x||Math.floor(a.image.maxX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x>a.image.touchesStart.x)return void(a.image.isTouched=!1);if(!T.isHorizontal()&&Math.floor(a.image.minY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y<a.image.touchesStart.y||Math.floor(a.image.maxY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y>a.image.touchesStart.y)return void(a.image.isTouched=!1)}e.preventDefault(),e.stopPropagation(),a.image.isMoved=!0,a.image.currentX=a.image.touchesCurrent.x-a.image.touchesStart.x+a.image.startX,a.image.currentY=a.image.touchesCurrent.y-a.image.touchesStart.y+a.image.startY,a.image.currentX<a.image.minX&&(a.image.currentX=a.image.minX+1-Math.pow(a.image.minX-a.image.currentX+1,.8)),a.image.currentX>a.image.maxX&&(a.image.currentX=a.image.maxX-1+Math.pow(a.image.currentX-a.image.maxX+1,.8)),a.image.currentY<a.image.minY&&(a.image.currentY=a.image.minY+1-Math.pow(a.image.minY-a.image.currentY+1,.8)),a.image.currentY>a.image.maxY&&(a.image.currentY=a.image.maxY-1+Math.pow(a.image.currentY-a.image.maxY+1,.8)),a.velocity.prevPositionX||(a.velocity.prevPositionX=a.image.touchesCurrent.x),a.velocity.prevPositionY||(a.velocity.prevPositionY=a.image.touchesCurrent.y),a.velocity.prevTime||(a.velocity.prevTime=Date.now()),a.velocity.x=(a.image.touchesCurrent.x-a.velocity.prevPositionX)/(Date.now()-a.velocity.prevTime)/2,a.velocity.y=(a.image.touchesCurrent.y-a.velocity.prevPositionY)/(Date.now()-a.velocity.prevTime)/2,Math.abs(a.image.touchesCurrent.x-a.velocity.prevPositionX)<2&&(a.velocity.x=0),Math.abs(a.image.touchesCurrent.y-a.velocity.prevPositionY)<2&&(a.velocity.y=0),a.velocity.prevPositionX=a.image.touchesCurrent.x,a.velocity.prevPositionY=a.image.touchesCurrent.y,a.velocity.prevTime=Date.now(),a.gesture.imageWrap.transform("translate3d("+a.image.currentX+"px, "+a.image.currentY+"px,0)")}}},onTouchEnd:function(e,a){var t=e.zoom;if(t.gesture.image&&0!==t.gesture.image.length){if(!t.image.isTouched||!t.image.isMoved)return t.image.isTouched=!1,void(t.image.isMoved=!1);t.image.isTouched=!1,t.image.isMoved=!1;var s=300,i=300,r=t.velocity.x*s,n=t.image.currentX+r,o=t.velocity.y*i,l=t.image.currentY+o;0!==t.velocity.x&&(s=Math.abs((n-t.image.currentX)/t.velocity.x)),0!==t.velocity.y&&(i=Math.abs((l-t.image.currentY)/t.velocity.y));var p=Math.max(s,i);t.image.currentX=n,t.image.currentY=l;var d=t.image.width*t.scale,u=t.image.height*t.scale;t.image.minX=Math.min(t.gesture.slideWidth/2-d/2,0),t.image.maxX=-t.image.minX,t.image.minY=Math.min(t.gesture.slideHeight/2-u/2,0),t.image.maxY=-t.image.minY,t.image.currentX=Math.max(Math.min(t.image.currentX,t.image.maxX),t.image.minX),t.image.currentY=Math.max(Math.min(t.image.currentY,t.image.maxY),t.image.minY),t.gesture.imageWrap.transition(p).transform("translate3d("+t.image.currentX+"px, "+t.image.currentY+"px,0)")}},onTransitionEnd:function(e){var a=e.zoom;a.gesture.slide&&e.previousIndex!==e.activeIndex&&(a.gesture.image.transform("translate3d(0,0,0) scale(1)"),a.gesture.imageWrap.transform("translate3d(0,0,0)"),a.gesture.slide=a.gesture.image=a.gesture.imageWrap=void 0,a.scale=a.currentScale=1)},toggleZoom:function(a,t){var s=a.zoom;if(s.gesture.slide||(s.gesture.slide=a.clickedSlide?e(a.clickedSlide):a.slides.eq(a.activeIndex),s.gesture.image=s.gesture.slide.find("img, svg, canvas"),s.gesture.imageWrap=s.gesture.image.parent("."+a.params.zoomContainerClass)),s.gesture.image&&0!==s.gesture.image.length){var i,r,n,o,l,p,d,u,c,m,h,g,f,v,w,y,x,T;void 0===s.image.touchesStart.x&&t?(i="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,r="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(i=s.image.touchesStart.x,r=s.image.touchesStart.y),s.scale&&1!==s.scale?(s.scale=s.currentScale=1,s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),s.gesture.slide=void 0):(s.scale=s.currentScale=s.gesture.imageWrap.attr("data-swiper-zoom")||a.params.zoomMax,t?(x=s.gesture.slide[0].offsetWidth,T=s.gesture.slide[0].offsetHeight,n=s.gesture.slide.offset().left,o=s.gesture.slide.offset().top,l=n+x/2-i,p=o+T/2-r,c=s.gesture.image[0].offsetWidth,m=s.gesture.image[0].offsetHeight,h=c*s.scale,g=m*s.scale,f=Math.min(x/2-h/2,0),v=Math.min(T/2-g/2,0),w=-f,y=-v,d=l*s.scale,u=p*s.scale,d<f&&(d=f),d>w&&(d=w),u<v&&(u=v),u>y&&(u=y)):(d=0,u=0),s.gesture.imageWrap.transition(300).transform("translate3d("+d+"px, "+u+"px,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+s.scale+")"))}},attachEvents:function(a){var t=a?"off":"on";if(T.params.zoom){var s=(T.slides,!("touchstart"!==T.touchEvents.start||!T.support.passiveListener||!T.params.passiveListeners)&&{passive:!0,capture:!1});T.support.gestures?(T.slides[t]("gesturestart",T.zoom.onGestureStart,s),T.slides[t]("gesturechange",T.zoom.onGestureChange,s),T.slides[t]("gestureend",T.zoom.onGestureEnd,s)):"touchstart"===T.touchEvents.start&&(T.slides[t](T.touchEvents.start,T.zoom.onGestureStart,s),T.slides[t](T.touchEvents.move,T.zoom.onGestureChange,s),T.slides[t](T.touchEvents.end,T.zoom.onGestureEnd,s)),T[t]("touchStart",T.zoom.onTouchStart),T.slides.each(function(a,s){e(s).find("."+T.params.zoomContainerClass).length>0&&e(s)[t](T.touchEvents.move,T.zoom.onTouchMove)}),T[t]("touchEnd",T.zoom.onTouchEnd),T[t]("transitionEnd",T.zoom.onTransitionEnd),T.params.zoomToggle&&T.on("doubleTap",T.zoom.toggleZoom)}},init:function(){T.zoom.attachEvents()},destroy:function(){T.zoom.attachEvents(!0)}},T._plugins=[];for(var Y in T.plugins){var O=T.plugins[Y](T,T.params[Y]);O&&T._plugins.push(O)}return T.callPlugins=function(e){for(var a=0;a<T._plugins.length;a++)e in T._plugins[a]&&T._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},T.emitterEventListeners={},T.emit=function(e){T.params[e]&&T.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(T.emitterEventListeners[e])for(a=0;a<T.emitterEventListeners[e].length;a++)T.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);T.callPlugins&&T.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},T.on=function(e,a){return e=m(e),T.emitterEventListeners[e]||(T.emitterEventListeners[e]=[]),T.emitterEventListeners[e].push(a),T},T.off=function(e,a){var t;if(e=m(e),void 0===a)return T.emitterEventListeners[e]=[],T;if(T.emitterEventListeners[e]&&0!==T.emitterEventListeners[e].length){for(t=0;t<T.emitterEventListeners[e].length;t++)T.emitterEventListeners[e][t]===a&&T.emitterEventListeners[e].splice(t,1);return T}},T.once=function(e,a){e=m(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),T.off(e,t)};return T.on(e,t),T},T.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(a){13===a.keyCode&&(e(a.target).is(T.params.nextButton)?(T.onClickNext(a),T.isEnd?T.a11y.notify(T.params.lastSlideMessage):T.a11y.notify(T.params.nextSlideMessage)):e(a.target).is(T.params.prevButton)&&(T.onClickPrev(a),T.isBeginning?T.a11y.notify(T.params.firstSlideMessage):T.a11y.notify(T.params.prevSlideMessage)),e(a.target).is("."+T.params.bulletClass)&&e(a.target)[0].click())},liveRegion:e('<span class="'+T.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=T.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){T.params.nextButton&&T.nextButton&&T.nextButton.length>0&&(T.a11y.makeFocusable(T.nextButton),T.a11y.addRole(T.nextButton,"button"),T.a11y.addLabel(T.nextButton,T.params.nextSlideMessage)),T.params.prevButton&&T.prevButton&&T.prevButton.length>0&&(T.a11y.makeFocusable(T.prevButton),T.a11y.addRole(T.prevButton,"button"),T.a11y.addLabel(T.prevButton,T.params.prevSlideMessage)),e(T.container).append(T.a11y.liveRegion)},initPagination:function(){T.params.pagination&&T.params.paginationClickable&&T.bullets&&T.bullets.length&&T.bullets.each(function(){var a=e(this);T.a11y.makeFocusable(a),T.a11y.addRole(a,"button"),T.a11y.addLabel(a,T.params.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},destroy:function(){T.a11y.liveRegion&&T.a11y.liveRegion.length>0&&T.a11y.liveRegion.remove()}},T.init=function(){T.params.loop&&T.createLoop(),T.updateContainerSize(),T.updateSlidesSize(),T.updatePagination(),T.params.scrollbar&&T.scrollbar&&(T.scrollbar.set(),T.params.scrollbarDraggable&&T.scrollbar.enableDraggable()),"slide"!==T.params.effect&&T.effects[T.params.effect]&&(T.params.loop||T.updateProgress(),T.effects[T.params.effect].setTranslate()),T.params.loop?T.slideTo(T.params.initialSlide+T.loopedSlides,0,T.params.runCallbacksOnInit):(T.slideTo(T.params.initialSlide,0,T.params.runCallbacksOnInit),0===T.params.initialSlide&&(T.parallax&&T.params.parallax&&T.parallax.setTranslate(),T.lazy&&T.params.lazyLoading&&(T.lazy.load(),T.lazy.initialImageLoaded=!0))),T.attachEvents(),T.params.observer&&T.support.observer&&T.initObservers(),T.params.preloadImages&&!T.params.lazyLoading&&T.preloadImages(),T.params.zoom&&T.zoom&&T.zoom.init(),T.params.autoplay&&T.startAutoplay(),T.params.keyboardControl&&T.enableKeyboardControl&&T.enableKeyboardControl(),T.params.mousewheelControl&&T.enableMousewheelControl&&T.enableMousewheelControl(),T.params.hashnavReplaceState&&(T.params.replaceState=T.params.hashnavReplaceState),T.params.history&&T.history&&T.history.init(),T.params.hashnav&&T.hashnav&&T.hashnav.init(),T.params.a11y&&T.a11y&&T.a11y.init(),T.emit("onInit",T)},T.cleanupStyles=function(){T.container.removeClass(T.classNames.join(" ")).removeAttr("style"),T.wrapper.removeAttr("style"),T.slides&&T.slides.length&&T.slides.removeClass([T.params.slideVisibleClass,T.params.slideActiveClass,T.params.slideNextClass,T.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),T.paginationContainer&&T.paginationContainer.length&&T.paginationContainer.removeClass(T.params.paginationHiddenClass),T.bullets&&T.bullets.length&&T.bullets.removeClass(T.params.bulletActiveClass),T.params.prevButton&&e(T.params.prevButton).removeClass(T.params.buttonDisabledClass),T.params.nextButton&&e(T.params.nextButton).removeClass(T.params.buttonDisabledClass),T.params.scrollbar&&T.scrollbar&&(T.scrollbar.track&&T.scrollbar.track.length&&T.scrollbar.track.removeAttr("style"),T.scrollbar.drag&&T.scrollbar.drag.length&&T.scrollbar.drag.removeAttr("style"))},T.destroy=function(e,a){T.detachEvents(),T.stopAutoplay(),T.params.scrollbar&&T.scrollbar&&T.params.scrollbarDraggable&&T.scrollbar.disableDraggable(),T.params.loop&&T.destroyLoop(),a&&T.cleanupStyles(),T.disconnectObservers(),T.params.zoom&&T.zoom&&T.zoom.destroy(),T.params.keyboardControl&&T.disableKeyboardControl&&T.disableKeyboardControl(),T.params.mousewheelControl&&T.disableMousewheelControl&&T.disableMousewheelControl(),T.params.a11y&&T.a11y&&T.a11y.destroy(),T.params.history&&!T.params.replaceState&&window.removeEventListener("popstate",T.history.setHistoryPopState),T.params.hashnav&&T.hashnav&&T.hashnav.destroy(),T.emit("onDestroy"),e!==!1&&(T=null)},T.init(),T}};a.prototype={isSafari:function(){var e=window.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1,lteIE9:function(){var e=document.createElement("div");return e.innerHTML="<!--[if lte IE 9]><i></i><![endif]-->",1===e.getElementsByTagName("i").length}()},device:function(){var e=window.navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),i=!t&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return{ios:t||i||s,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}(),passiveListener:function(){var e=!1;try{var a=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassiveListener",null,a)}catch(e){}return e}(),gestures:function(){return"ongesturestart"in window}()},plugins:{}};for(var t=(function(){var e=function(e){var a=this,t=0;for(t=0;t<e.length;t++)a[t]=e[t];return a.length=e.length,this},a=function(a,t){var s=[],i=0;if(a&&!t&&a instanceof e)return a;if(a)if("string"==typeof a){var r,n,o=a.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),0!==o.indexOf("<td")&&0!==o.indexOf("<th")||(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),n=document.createElement(l),n.innerHTML=a,i=0;i<n.childNodes.length;i++)s.push(n.childNodes[i])}else for(r=t||"#"!==a[0]||a.match(/[ .<>:~]/)?(t||document).querySelectorAll(a):[document.getElementById(a.split("#")[1])],i=0;i<r.length;i++)r[i]&&s.push(r[i])}else if(a.nodeType||a===window||a===document)s.push(a);else if(a.length>0&&a[0].nodeType)for(i=0;i<a.length;i++)s.push(a[i]);return new e(s)};return e.prototype={addClass:function(e){if(void 0===e)return this;for(var a=e.split(" "),t=0;t<a.length;t++)for(var s=0;s<this.length;s++)this[s].classList.add(a[t]);return this},removeClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var s=0;s<this.length;s++)this[s].classList.remove(a[t]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var s=0;s<this.length;s++)this[s].classList.toggle(a[t]);return this},attr:function(e,a){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var t=0;t<this.length;t++)if(2===arguments.length)this[t].setAttribute(e,a);else for(var s in e)this[t][s]=e[s],this[t].setAttribute(s,e[s]);return this},removeAttr:function(e){for(var a=0;a<this.length;a++)this[a].removeAttribute(e);return this},data:function(e,a){if(void 0!==a){for(var t=0;t<this.length;t++){var s=this[t];s.dom7ElementDataStorage||(s.dom7ElementDataStorage={}),s.dom7ElementDataStorage[e]=a}return this}if(this[0]){var i=this[0].getAttribute("data-"+e);return i?i:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}},transform:function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this},on:function(e,t,s,i){function r(e){var i=e.target;if(a(i).is(t))s.call(i,e);else for(var r=a(i).parents(),n=0;n<r.length;n++)a(r[n]).is(t)&&s.call(r[n],e)}var n,o,l=e.split(" ");for(n=0;n<this.length;n++)if("function"==typeof t||t===!1)for("function"==typeof t&&(s=arguments[1],i=arguments[2]||!1),o=0;o<l.length;o++)this[n].addEventListener(l[o],s,i);else for(o=0;o<l.length;o++)this[n].dom7LiveListeners||(this[n].dom7LiveListeners=[]),this[n].dom7LiveListeners.push({listener:s,liveListener:r}),this[n].addEventListener(l[o],r,i);return this},off:function(e,a,t,s){for(var i=e.split(" "),r=0;r<i.length;r++)for(var n=0;n<this.length;n++)if("function"==typeof a||a===!1)"function"==typeof a&&(t=arguments[1],s=arguments[2]||!1),this[n].removeEventListener(i[r],t,s);else if(this[n].dom7LiveListeners)for(var o=0;o<this[n].dom7LiveListeners.length;o++)this[n].dom7LiveListeners[o].listener===t&&this[n].removeEventListener(i[r],this[n].dom7LiveListeners[o].liveListener,s);return this},once:function(e,a,t,s){function i(n){t(n),r.off(e,a,i,s)}var r=this;"function"==typeof a&&(a=!1,t=arguments[1],s=arguments[2]),r.on(e,a,i,s)},trigger:function(e,a){for(var t=0;t<this.length;t++){var s;try{s=new window.CustomEvent(e,{detail:a,bubbles:!0,cancelable:!0})}catch(t){s=document.createEvent("Event"),s.initEvent(e,!0,!0),s.detail=a}this[t].dispatchEvent(s)}return this},transitionEnd:function(e){function a(r){if(r.target===this)for(e.call(this,r),t=0;t<s.length;t++)i.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<s.length;t++)i.on(s[t],a);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],a=e.getBoundingClientRect(),t=document.body,s=e.clientTop||t.clientTop||0,i=e.clientLeft||t.clientLeft||0,r=window.pageYOffset||e.scrollTop,n=window.pageXOffset||e.scrollLeft;return{top:a.top+r-s,left:a.left+n-i}}return null},css:function(e,a){var t;if(1===arguments.length){if("string"!=typeof e){for(t=0;t<this.length;t++)for(var s in e)this[t].style[s]=e[s];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(t=0;t<this.length;t++)this[t].style[e]=a;return this}return this},each:function(e){for(var a=0;a<this.length;a++)e.call(this[a],a,this[a]);return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a++)this[a].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var a=0;a<this.length;a++)this[a].textContent=e;return this},is:function(t){if(!this[0])return!1;var s,i;if("string"==typeof t){var r=this[0];if(r===document)return t===document;if(r===window)return t===window;if(r.matches)return r.matches(t);if(r.webkitMatchesSelector)return r.webkitMatchesSelector(t);if(r.mozMatchesSelector)return r.mozMatchesSelector(t);if(r.msMatchesSelector)return r.msMatchesSelector(t);for(s=a(t),i=0;i<s.length;i++)if(s[i]===this[0])return!0;return!1}if(t===document)return this[0]===document;if(t===window)return this[0]===window;if(t.nodeType||t instanceof e){for(s=t.nodeType?[t]:t,i=0;i<s.length;i++)if(s[i]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],a=0;null!==(e=e.previousSibling);)1===e.nodeType&&a++;return a}},eq:function(a){if(void 0===a)return this;var t,s=this.length;return a>s-1?new e([]):a<0?(t=s+a,new e(t<0?[]:[this[t]])):new e([this[a]])},append:function(a){var t,s;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a;i.firstChild;)this[t].appendChild(i.firstChild)}else if(a instanceof e)for(s=0;s<a.length;s++)this[t].appendChild(a[s]);else this[t].appendChild(a);return this},prepend:function(a){var t,s;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a,s=i.childNodes.length-1;s>=0;s--)this[t].insertBefore(i.childNodes[s],this[t].childNodes[0])}else if(a instanceof e)for(s=0;s<a.length;s++)this[t].insertBefore(a[s],this[t].childNodes[0]);else this[t].insertBefore(a,this[t].childNodes[0]);return this},insertBefore:function(e){for(var t=a(e),s=0;s<this.length;s++)if(1===t.length)t[0].parentNode.insertBefore(this[s],t[0]);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[s].cloneNode(!0),t[i])},insertAfter:function(e){for(var t=a(e),s=0;s<this.length;s++)if(1===t.length)t[0].parentNode.insertBefore(this[s],t[0].nextSibling);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[s].cloneNode(!0),t[i].nextSibling)},next:function(t){return new e(this.length>0?t?this[0].nextElementSibling&&a(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var s=[],i=this[0];if(!i)return new e([]);for(;i.nextElementSibling;){var r=i.nextElementSibling;t?a(r).is(t)&&s.push(r):s.push(r),i=r}return new e(s)},prev:function(t){return new e(this.length>0?t?this[0].previousElementSibling&&a(this[0].previousElementSibling).is(t)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(t){var s=[],i=this[0];if(!i)return new e([]);for(;i.previousElementSibling;){var r=i.previousElementSibling;t?a(r).is(t)&&s.push(r):s.push(r),i=r}return new e(s)},parent:function(e){for(var t=[],s=0;s<this.length;s++)e?a(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode);return a(a.unique(t))},parents:function(e){for(var t=[],s=0;s<this.length;s++)for(var i=this[s].parentNode;i;)e?a(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return a(a.unique(t))},find:function(a){for(var t=[],s=0;s<this.length;s++)for(var i=this[s].querySelectorAll(a),r=0;r<i.length;r++)t.push(i[r]);return new e(t)},children:function(t){for(var s=[],i=0;i<this.length;i++)for(var r=this[i].childNodes,n=0;n<r.length;n++)t?1===r[n].nodeType&&a(r[n]).is(t)&&s.push(r[n]):1===r[n].nodeType&&s.push(r[n]);return new e(a.unique(s))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,t,s=this;for(e=0;e<arguments.length;e++){var i=a(arguments[e]);for(t=0;t<i.length;t++)s[s.length]=i[t],s.length++}return s}},a.fn=e.prototype,a.unique=function(e){for(var a=[],t=0;t<e.length;t++)a.indexOf(e[t])===-1&&a.push(e[t]);return a},a}()),s=["jQuery","Zepto","Dom7"],i=0;i<s.length;i++)window[s[i]]&&function(e){e.fn.swiper=function(t){var s;return e(this).each(function(){var e=new a(this,t);s||(s=e)}),s}}(window[s[i]]);var r;r=void 0===t?window.Dom7||window.Zepto||window.jQuery:t,r&&("transitionEnd"in r.fn||(r.fn.transitionEnd=function(e){function a(r){if(r.target===this)for(e.call(this,r),t=0;t<s.length;t++)i.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<s.length;t++)i.on(s[t],a);return this}),"transform"in r.fn||(r.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in r.fn||(r.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this}),"outerWidth"in r.fn||(r.fn.outerWidth=function(e){
	return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null})),window.Swiper=a}(), true?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
	//# sourceMappingURL=maps/swiper.min.js.map


/***/ },
/* 26 */
/***/ function(module, exports) {

	function swiperAnimate(a){clearSwiperAnimate();var b=a.slides[a.activeIndex].querySelectorAll(".ani");for(i=0;i<b.length;i++)b[i].style.visibility="visible",effect=b[i].attributes["swiper-animate-effect"]?b[i].attributes["swiper-animate-effect"].value:"",b[i].className=b[i].className+"  "+effect+" "+"animated",style=b[i].attributes["style"].value,duration=b[i].attributes["swiper-animate-duration"]?b[i].attributes["swiper-animate-duration"].value:"",duration&&(style=style+"animation-duration:"+duration+";-webkit-animation-duration:"+duration+";"),delay=b[i].attributes["swiper-animate-delay"]?b[i].attributes["swiper-animate-delay"].value:"",delay&&(style=style+"animation-delay:"+delay+";-webkit-animation-delay:"+delay+";"),b[i].setAttribute("style",style)}function clearSwiperAnimate(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["swiper-animate-style-cache"]&&allBoxes[i].setAttribute("style",allBoxes[i].attributes["swiper-animate-style-cache"].value),allBoxes[i].style.visibility="hidden",allBoxes[i].className=allBoxes[i].className.replace("animated"," "),allBoxes[i].attributes["swiper-animate-effect"]&&(effect=allBoxes[i].attributes["swiper-animate-effect"].value,allBoxes[i].className=allBoxes[i].className.replace(effect," "))}
	function swiperAnimateCache(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["style"]?allBoxes[i].setAttribute("swiper-animate-style-cache",allBoxes[i].attributes["style"].value):allBoxes[i].setAttribute("swiper-animate-style-cache"," "),allBoxes[i].style.visibility="hidden"};
	module.exports = {
	    "swiperAnimateCache":swiperAnimateCache,
	    "swiperAnimate":swiperAnimate
	}





/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// ┌────────────────────────────────────────────────────────────────────┐ \\
	// │ Raphaël 2.1.4 - JavaScript Vector Library                          │ \\
	// ├────────────────────────────────────────────────────────────────────┤ \\
	// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
	// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
	// ├────────────────────────────────────────────────────────────────────┤ \\
	// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
	// └────────────────────────────────────────────────────────────────────┘ \\
	// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	// 
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	// 
	// http://www.apache.org/licenses/LICENSE-2.0
	// 
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	// ┌────────────────────────────────────────────────────────────┐ \\
	// │ Eve 0.4.2 - JavaScript Events Library                      │ \\
	// ├────────────────────────────────────────────────────────────┤ \\
	// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
	// └────────────────────────────────────────────────────────────┘ \\


	// ┌─────────────────────────────────────────────────────────────────────┐ \\
	// │ "Raphaël 2.1.2" - JavaScript Vector Library                         │ \\
	// ├─────────────────────────────────────────────────────────────────────┤ \\
	// │ Copyright (c) 2008-2011 Dmitry Baranovskiy (http://raphaeljs.com)   │ \\
	// │ Copyright (c) 2008-2011 Sencha Labs (http://sencha.com)             │ \\
	// │ Licensed under the MIT (http://raphaeljs.com/license.html) license. │ \\
	// └─────────────────────────────────────────────────────────────────────┘ \\


	(function (glob, factory) {
	    // AMD support
	    if (true) {
	        // Define as an anonymous module
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(28)], __WEBPACK_AMD_DEFINE_RESULT__ = function( eve ) {
	            return factory(glob, eve);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        // Browser globals (glob is window)
	        // Raphael adds itself to window
	        factory(glob, glob.eve || (typeof require == "function" && require('eve')) );
	    }
	}(this, function (window, eve) {
	    /*\
	     * Raphael
	     [ method ]
	     **
	     * Creates a canvas object on which to draw.
	     * You must do this first, as all future calls to drawing methods
	     * from this instance will be bound to this canvas.
	     > Parameters
	     **
	     - container (HTMLElement|string) DOM element or its ID which is going to be a parent for drawing surface
	     - width (number)
	     - height (number)
	     - callback (function) #optional callback function which is going to be executed in the context of newly created paper
	     * or
	     - x (number)
	     - y (number)
	     - width (number)
	     - height (number)
	     - callback (function) #optional callback function which is going to be executed in the context of newly created paper
	     * or
	     - all (array) (first 3 or 4 elements in the array are equal to [containerID, width, height] or [x, y, width, height]. The rest are element descriptions in format {type: type, <attributes>}). See @Paper.add.
	     - callback (function) #optional callback function which is going to be executed in the context of newly created paper
	     * or
	     - onReadyCallback (function) function that is going to be called on DOM ready event. You can also subscribe to this event via Eve’s “DOMLoad” event. In this case method returns `undefined`.
	     = (object) @Paper
	     > Usage
	     | // Each of the following examples create a canvas
	     | // that is 320px wide by 200px high.
	     | // Canvas is created at the viewport’s 10,50 coordinate.
	     | var paper = Raphael(10, 50, 320, 200);
	     | // Canvas is created at the top left corner of the #notepad element
	     | // (or its top right corner in dir="rtl" elements)
	     | var paper = Raphael(document.getElementById("notepad"), 320, 200);
	     | // Same as above
	     | var paper = Raphael("notepad", 320, 200);
	     | // Image dump
	     | var set = Raphael(["notepad", 320, 200, {
	     |     type: "rect",
	     |     x: 10,
	     |     y: 10,
	     |     width: 25,
	     |     height: 25,
	     |     stroke: "#f00"
	     | }, {
	     |     type: "text",
	     |     x: 30,
	     |     y: 40,
	     |     text: "Dump"
	     | }]);
	    \*/
	    function R(first) {
	        if (R.is(first, "function")) {
	            return loaded ? first() : eve.on("raphael.DOMload", first);
	        } else if (R.is(first, array)) {
	            return R._engine.create[apply](R, first.splice(0, 3 + R.is(first[0], nu))).add(first);
	        } else {
	            var args = Array.prototype.slice.call(arguments, 0);
	            if (R.is(args[args.length - 1], "function")) {
	                var f = args.pop();
	                return loaded ? f.call(R._engine.create[apply](R, args)) : eve.on("raphael.DOMload", function () {
	                    f.call(R._engine.create[apply](R, args));
	                });
	            } else {
	                return R._engine.create[apply](R, arguments);
	            }
	        }
	    }
	    R.version = "2.1.2";
	    R.eve = eve;
	    var loaded,
	        separator = /[, ]+/,
	        elements = {circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1},
	        formatrg = /\{(\d+)\}/g,
	        proto = "prototype",
	        has = "hasOwnProperty",
	        g = {
	            doc: document,
	            win: window
	        },
	        oldRaphael = {
	            was: Object.prototype[has].call(g.win, "Raphael"),
	            is: g.win.Raphael
	        },
	        Paper = function () {
	            /*\
	             * Paper.ca
	             [ property (object) ]
	             **
	             * Shortcut for @Paper.customAttributes
	            \*/
	            /*\
	             * Paper.customAttributes
	             [ property (object) ]
	             **
	             * If you have a set of attributes that you would like to represent
	             * as a function of some number you can do it easily with custom attributes:
	             > Usage
	             | paper.customAttributes.hue = function (num) {
	             |     num = num % 1;
	             |     return {fill: "hsb(" + num + ", 0.75, 1)"};
	             | };
	             | // Custom attribute “hue” will change fill
	             | // to be given hue with fixed saturation and brightness.
	             | // Now you can use it like this:
	             | var c = paper.circle(10, 10, 10).attr({hue: .45});
	             | // or even like this:
	             | c.animate({hue: 1}, 1e3);
	             |
	             | // You could also create custom attribute
	             | // with multiple parameters:
	             | paper.customAttributes.hsb = function (h, s, b) {
	             |     return {fill: "hsb(" + [h, s, b].join(",") + ")"};
	             | };
	             | c.attr({hsb: "0.5 .8 1"});
	             | c.animate({hsb: [1, 0, 0.5]}, 1e3);
	            \*/
	            this.ca = this.customAttributes = {};
	        },
	        paperproto,
	        appendChild = "appendChild",
	        apply = "apply",
	        concat = "concat",
	        supportsTouch = ('ontouchstart' in g.win) || g.win.DocumentTouch && g.doc instanceof DocumentTouch, //taken from Modernizr touch test
	        E = "",
	        S = " ",
	        Str = String,
	        split = "split",
	        events = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[split](S),
	        touchMap = {
	            mousedown: "touchstart",
	            mousemove: "touchmove",
	            mouseup: "touchend"
	        },
	        lowerCase = Str.prototype.toLowerCase,
	        math = Math,
	        mmax = math.max,
	        mmin = math.min,
	        abs = math.abs,
	        pow = math.pow,
	        PI = math.PI,
	        nu = "number",
	        string = "string",
	        array = "array",
	        toString = "toString",
	        fillString = "fill",
	        objectToString = Object.prototype.toString,
	        paper = {},
	        push = "push",
	        ISURL = R._ISURL = /^url\(['"]?(.+?)['"]?\)$/i,
	        colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
	        isnan = {"NaN": 1, "Infinity": 1, "-Infinity": 1},
	        bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
	        round = math.round,
	        setAttribute = "setAttribute",
	        toFloat = parseFloat,
	        toInt = parseInt,
	        upperCase = Str.prototype.toUpperCase,
	        availableAttrs = R._availableAttrs = {
	            "arrow-end": "none",
	            "arrow-start": "none",
	            blur: 0,
	            "clip-rect": "0 0 1e9 1e9",
	            cursor: "default",
	            cx: 0,
	            cy: 0,
	            fill: "#fff",
	            "fill-opacity": 1,
	            font: '10px "Arial"',
	            "font-family": '"Arial"',
	            "font-size": "10",
	            "font-style": "normal",
	            "font-weight": 400,
	            gradient: 0,
	            height: 0,
	            href: "http://raphaeljs.com/",
	            "letter-spacing": 0,
	            opacity: 1,
	            path: "M0,0",
	            r: 0,
	            rx: 0,
	            ry: 0,
	            src: "",
	            stroke: "#000",
	            "stroke-dasharray": "",
	            "stroke-linecap": "butt",
	            "stroke-linejoin": "butt",
	            "stroke-miterlimit": 0,
	            "stroke-opacity": 1,
	            "stroke-width": 1,
	            target: "_blank",
	            "text-anchor": "middle",
	            title: "Raphael",
	            transform: "",
	            width: 0,
	            x: 0,
	            y: 0
	        },
	        availableAnimAttrs = R._availableAnimAttrs = {
	            blur: nu,
	            "clip-rect": "csv",
	            cx: nu,
	            cy: nu,
	            fill: "colour",
	            "fill-opacity": nu,
	            "font-size": nu,
	            height: nu,
	            opacity: nu,
	            path: "path",
	            r: nu,
	            rx: nu,
	            ry: nu,
	            stroke: "colour",
	            "stroke-opacity": nu,
	            "stroke-width": nu,
	            transform: "transform",
	            width: nu,
	            x: nu,
	            y: nu
	        },
	        whitespace = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,
	        commaSpaces = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
	        hsrg = {hs: 1, rg: 1},
	        p2s = /,?([achlmqrstvxz]),?/gi,
	        pathCommand = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
	        tCommand = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
	        pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,
	        radial_gradient = R._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,
	        eldata = {},
	        sortByKey = function (a, b) {
	            return a.key - b.key;
	        },
	        sortByNumber = function (a, b) {
	            return toFloat(a) - toFloat(b);
	        },
	        fun = function () {},
	        pipe = function (x) {
	            return x;
	        },
	        rectPath = R._rectPath = function (x, y, w, h, r) {
	            if (r) {
	                return [["M", x + r, y], ["l", w - r * 2, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, h - r * 2], ["a", r, r, 0, 0, 1, -r, r], ["l", r * 2 - w, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, r * 2 - h], ["a", r, r, 0, 0, 1, r, -r], ["z"]];
	            }
	            return [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
	        },
	        ellipsePath = function (x, y, rx, ry) {
	            if (ry == null) {
	                ry = rx;
	            }
	            return [["M", x, y], ["m", 0, -ry], ["a", rx, ry, 0, 1, 1, 0, 2 * ry], ["a", rx, ry, 0, 1, 1, 0, -2 * ry], ["z"]];
	        },
	        getPath = R._getPath = {
	            path: function (el) {
	                return el.attr("path");
	            },
	            circle: function (el) {
	                var a = el.attrs;
	                return ellipsePath(a.cx, a.cy, a.r);
	            },
	            ellipse: function (el) {
	                var a = el.attrs;
	                return ellipsePath(a.cx, a.cy, a.rx, a.ry);
	            },
	            rect: function (el) {
	                var a = el.attrs;
	                return rectPath(a.x, a.y, a.width, a.height, a.r);
	            },
	            image: function (el) {
	                var a = el.attrs;
	                return rectPath(a.x, a.y, a.width, a.height);
	            },
	            text: function (el) {
	                var bbox = el._getBBox();
	                return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
	            },
	            set : function(el) {
	                var bbox = el._getBBox();
	                return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
	            }
	        },
	        /*\
	         * Raphael.mapPath
	         [ method ]
	         **
	         * Transform the path string with given matrix.
	         > Parameters
	         - path (string) path string
	         - matrix (object) see @Matrix
	         = (string) transformed path string
	        \*/
	        mapPath = R.mapPath = function (path, matrix) {
	            if (!matrix) {
	                return path;
	            }
	            var x, y, i, j, ii, jj, pathi;
	            path = path2curve(path);
	            for (i = 0, ii = path.length; i < ii; i++) {
	                pathi = path[i];
	                for (j = 1, jj = pathi.length; j < jj; j += 2) {
	                    x = matrix.x(pathi[j], pathi[j + 1]);
	                    y = matrix.y(pathi[j], pathi[j + 1]);
	                    pathi[j] = x;
	                    pathi[j + 1] = y;
	                }
	            }
	            return path;
	        };

	    R._g = g;
	    /*\
	     * Raphael.type
	     [ property (string) ]
	     **
	     * Can be “SVG”, “VML” or empty, depending on browser support.
	    \*/
	    R.type = (g.win.SVGAngle || g.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML");
	    if (R.type == "VML") {
	        var d = g.doc.createElement("div"),
	            b;
	        d.innerHTML = '<v:shape adj="1"/>';
	        b = d.firstChild;
	        b.style.behavior = "url(#default#VML)";
	        if (!(b && typeof b.adj == "object")) {
	            return (R.type = E);
	        }
	        d = null;
	    }
	    /*\
	     * Raphael.svg
	     [ property (boolean) ]
	     **
	     * `true` if browser supports SVG.
	    \*/
	    /*\
	     * Raphael.vml
	     [ property (boolean) ]
	     **
	     * `true` if browser supports VML.
	    \*/
	    R.svg = !(R.vml = R.type == "VML");
	    R._Paper = Paper;
	    /*\
	     * Raphael.fn
	     [ property (object) ]
	     **
	     * You can add your own method to the canvas. For example if you want to draw a pie chart,
	     * you can create your own pie chart function and ship it as a Raphaël plugin. To do this
	     * you need to extend the `Raphael.fn` object. You should modify the `fn` object before a
	     * Raphaël instance is created, otherwise it will take no effect. Please note that the
	     * ability for namespaced plugins was removed in Raphael 2.0. It is up to the plugin to
	     * ensure any namespacing ensures proper context.
	     > Usage
	     | Raphael.fn.arrow = function (x1, y1, x2, y2, size) {
	     |     return this.path( ... );
	     | };
	     | // or create namespace
	     | Raphael.fn.mystuff = {
	     |     arrow: function () {…},
	     |     star: function () {…},
	     |     // etc…
	     | };
	     | var paper = Raphael(10, 10, 630, 480);
	     | // then use it
	     | paper.arrow(10, 10, 30, 30, 5).attr({fill: "#f00"});
	     | paper.mystuff.arrow();
	     | paper.mystuff.star();
	    \*/
	    R.fn = paperproto = Paper.prototype = R.prototype;
	    R._id = 0;
	    R._oid = 0;
	    /*\
	     * Raphael.is
	     [ method ]
	     **
	     * Handful of replacements for `typeof` operator.
	     > Parameters
	     - o (…) any object or primitive
	     - type (string) name of the type, i.e. “string”, “function”, “number”, etc.
	     = (boolean) is given value is of given type
	    \*/
	    R.is = function (o, type) {
	        type = lowerCase.call(type);
	        if (type == "finite") {
	            return !isnan[has](+o);
	        }
	        if (type == "array") {
	            return o instanceof Array;
	        }
	        return  (type == "null" && o === null) ||
	                (type == typeof o && o !== null) ||
	                (type == "object" && o === Object(o)) ||
	                (type == "array" && Array.isArray && Array.isArray(o)) ||
	                objectToString.call(o).slice(8, -1).toLowerCase() == type;
	    };

	    function clone(obj) {
	        if (typeof obj == "function" || Object(obj) !== obj) {
	            return obj;
	        }
	        var res = new obj.constructor;
	        for (var key in obj) if (obj[has](key)) {
	            res[key] = clone(obj[key]);
	        }
	        return res;
	    }

	    /*\
	     * Raphael.angle
	     [ method ]
	     **
	     * Returns angle between two or three points
	     > Parameters
	     - x1 (number) x coord of first point
	     - y1 (number) y coord of first point
	     - x2 (number) x coord of second point
	     - y2 (number) y coord of second point
	     - x3 (number) #optional x coord of third point
	     - y3 (number) #optional y coord of third point
	     = (number) angle in degrees.
	    \*/
	    R.angle = function (x1, y1, x2, y2, x3, y3) {
	        if (x3 == null) {
	            var x = x1 - x2,
	                y = y1 - y2;
	            if (!x && !y) {
	                return 0;
	            }
	            return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
	        } else {
	            return R.angle(x1, y1, x3, y3) - R.angle(x2, y2, x3, y3);
	        }
	    };
	    /*\
	     * Raphael.rad
	     [ method ]
	     **
	     * Transform angle to radians
	     > Parameters
	     - deg (number) angle in degrees
	     = (number) angle in radians.
	    \*/
	    R.rad = function (deg) {
	        return deg % 360 * PI / 180;
	    };
	    /*\
	     * Raphael.deg
	     [ method ]
	     **
	     * Transform angle to degrees
	     > Parameters
	     - rad (number) angle in radians
	     = (number) angle in degrees.
	    \*/
	    R.deg = function (rad) {
	        return Math.round ((rad * 180 / PI% 360)* 1000) / 1000;
	    };
	    /*\
	     * Raphael.snapTo
	     [ method ]
	     **
	     * Snaps given value to given grid.
	     > Parameters
	     - values (array|number) given array of values or step of the grid
	     - value (number) value to adjust
	     - tolerance (number) #optional tolerance for snapping. Default is `10`.
	     = (number) adjusted value.
	    \*/
	    R.snapTo = function (values, value, tolerance) {
	        tolerance = R.is(tolerance, "finite") ? tolerance : 10;
	        if (R.is(values, array)) {
	            var i = values.length;
	            while (i--) if (abs(values[i] - value) <= tolerance) {
	                return values[i];
	            }
	        } else {
	            values = +values;
	            var rem = value % values;
	            if (rem < tolerance) {
	                return value - rem;
	            }
	            if (rem > values - tolerance) {
	                return value - rem + values;
	            }
	        }
	        return value;
	    };

	    /*\
	     * Raphael.createUUID
	     [ method ]
	     **
	     * Returns RFC4122, version 4 ID
	    \*/
	    var createUUID = R.createUUID = (function (uuidRegEx, uuidReplacer) {
	        return function () {
	            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(uuidRegEx, uuidReplacer).toUpperCase();
	        };
	    })(/[xy]/g, function (c) {
	        var r = math.random() * 16 | 0,
	            v = c == "x" ? r : (r & 3 | 8);
	        return v.toString(16);
	    });

	    /*\
	     * Raphael.setWindow
	     [ method ]
	     **
	     * Used when you need to draw in `&lt;iframe>`. Switched window to the iframe one.
	     > Parameters
	     - newwin (window) new window object
	    \*/
	    R.setWindow = function (newwin) {
	        eve("raphael.setWindow", R, g.win, newwin);
	        g.win = newwin;
	        g.doc = g.win.document;
	        if (R._engine.initWin) {
	            R._engine.initWin(g.win);
	        }
	    };
	    var toHex = function (color) {
	        if (R.vml) {
	            // http://dean.edwards.name/weblog/2009/10/convert-any-colour-value-to-hex-in-msie/
	            var trim = /^\s+|\s+$/g;
	            var bod;
	            try {
	                var docum = new ActiveXObject("htmlfile");
	                docum.write("<body>");
	                docum.close();
	                bod = docum.body;
	            } catch(e) {
	                bod = createPopup().document.body;
	            }
	            var range = bod.createTextRange();
	            toHex = cacher(function (color) {
	                try {
	                    bod.style.color = Str(color).replace(trim, E);
	                    var value = range.queryCommandValue("ForeColor");
	                    value = ((value & 255) << 16) | (value & 65280) | ((value & 16711680) >>> 16);
	                    return "#" + ("000000" + value.toString(16)).slice(-6);
	                } catch(e) {
	                    return "none";
	                }
	            });
	        } else {
	            var i = g.doc.createElement("i");
	            i.title = "Rapha\xebl Colour Picker";
	            i.style.display = "none";
	            g.doc.body.appendChild(i);
	            toHex = cacher(function (color) {
	                i.style.color = color;
	                return g.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
	            });
	        }
	        return toHex(color);
	    },
	    hsbtoString = function () {
	        return "hsb(" + [this.h, this.s, this.b] + ")";
	    },
	    hsltoString = function () {
	        return "hsl(" + [this.h, this.s, this.l] + ")";
	    },
	    rgbtoString = function () {
	        return this.hex;
	    },
	    prepareRGB = function (r, g, b) {
	        if (g == null && R.is(r, "object") && "r" in r && "g" in r && "b" in r) {
	            b = r.b;
	            g = r.g;
	            r = r.r;
	        }
	        if (g == null && R.is(r, string)) {
	            var clr = R.getRGB(r);
	            r = clr.r;
	            g = clr.g;
	            b = clr.b;
	        }
	        if (r > 1 || g > 1 || b > 1) {
	            r /= 255;
	            g /= 255;
	            b /= 255;
	        }

	        return [r, g, b];
	    },
	    packageRGB = function (r, g, b, o) {
	        r *= 255;
	        g *= 255;
	        b *= 255;
	        var rgb = {
	            r: r,
	            g: g,
	            b: b,
	            hex: R.rgb(r, g, b),
	            toString: rgbtoString
	        };
	        R.is(o, "finite") && (rgb.opacity = o);
	        return rgb;
	    };

	    /*\
	     * Raphael.color
	     [ method ]
	     **
	     * Parses the color string and returns object with all values for the given color.
	     > Parameters
	     - clr (string) color string in one of the supported formats (see @Raphael.getRGB)
	     = (object) Combined RGB & HSB object in format:
	     o {
	     o     r (number) red,
	     o     g (number) green,
	     o     b (number) blue,
	     o     hex (string) color in HTML/CSS format: #••••••,
	     o     error (boolean) `true` if string can’t be parsed,
	     o     h (number) hue,
	     o     s (number) saturation,
	     o     v (number) value (brightness),
	     o     l (number) lightness
	     o }
	    \*/
	    R.color = function (clr) {
	        var rgb;
	        if (R.is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
	            rgb = R.hsb2rgb(clr);
	            clr.r = rgb.r;
	            clr.g = rgb.g;
	            clr.b = rgb.b;
	            clr.hex = rgb.hex;
	        } else if (R.is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
	            rgb = R.hsl2rgb(clr);
	            clr.r = rgb.r;
	            clr.g = rgb.g;
	            clr.b = rgb.b;
	            clr.hex = rgb.hex;
	        } else {
	            if (R.is(clr, "string")) {
	                clr = R.getRGB(clr);
	            }
	            if (R.is(clr, "object") && "r" in clr && "g" in clr && "b" in clr) {
	                rgb = R.rgb2hsl(clr);
	                clr.h = rgb.h;
	                clr.s = rgb.s;
	                clr.l = rgb.l;
	                rgb = R.rgb2hsb(clr);
	                clr.v = rgb.b;
	            } else {
	                clr = {hex: "none"};
	                clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
	            }
	        }
	        clr.toString = rgbtoString;
	        return clr;
	    };
	    /*\
	     * Raphael.hsb2rgb
	     [ method ]
	     **
	     * Converts HSB values to RGB object.
	     > Parameters
	     - h (number) hue
	     - s (number) saturation
	     - v (number) value or brightness
	     = (object) RGB object in format:
	     o {
	     o     r (number) red,
	     o     g (number) green,
	     o     b (number) blue,
	     o     hex (string) color in HTML/CSS format: #••••••
	     o }
	    \*/
	    R.hsb2rgb = function (h, s, v, o) {
	        if (this.is(h, "object") && "h" in h && "s" in h && "b" in h) {
	            v = h.b;
	            s = h.s;
	            o = h.o;
	            h = h.h;
	        }
	        h *= 360;
	        var R, G, B, X, C;
	        h = (h % 360) / 60;
	        C = v * s;
	        X = C * (1 - abs(h % 2 - 1));
	        R = G = B = v - C;

	        h = ~~h;
	        R += [C, X, 0, 0, X, C][h];
	        G += [X, C, C, X, 0, 0][h];
	        B += [0, 0, X, C, C, X][h];
	        return packageRGB(R, G, B, o);
	    };
	    /*\
	     * Raphael.hsl2rgb
	     [ method ]
	     **
	     * Converts HSL values to RGB object.
	     > Parameters
	     - h (number) hue
	     - s (number) saturation
	     - l (number) luminosity
	     = (object) RGB object in format:
	     o {
	     o     r (number) red,
	     o     g (number) green,
	     o     b (number) blue,
	     o     hex (string) color in HTML/CSS format: #••••••
	     o }
	    \*/
	    R.hsl2rgb = function (h, s, l, o) {
	        if (this.is(h, "object") && "h" in h && "s" in h && "l" in h) {
	            l = h.l;
	            s = h.s;
	            h = h.h;
	        }
	        if (h > 1 || s > 1 || l > 1) {
	            h /= 360;
	            s /= 100;
	            l /= 100;
	        }
	        h *= 360;
	        var R, G, B, X, C;
	        h = (h % 360) / 60;
	        C = 2 * s * (l < .5 ? l : 1 - l);
	        X = C * (1 - abs(h % 2 - 1));
	        R = G = B = l - C / 2;

	        h = ~~h;
	        R += [C, X, 0, 0, X, C][h];
	        G += [X, C, C, X, 0, 0][h];
	        B += [0, 0, X, C, C, X][h];
	        return packageRGB(R, G, B, o);
	    };
	    /*\
	     * Raphael.rgb2hsb
	     [ method ]
	     **
	     * Converts RGB values to HSB object.
	     > Parameters
	     - r (number) red
	     - g (number) green
	     - b (number) blue
	     = (object) HSB object in format:
	     o {
	     o     h (number) hue
	     o     s (number) saturation
	     o     b (number) brightness
	     o }
	    \*/
	    R.rgb2hsb = function (r, g, b) {
	        b = prepareRGB(r, g, b);
	        r = b[0];
	        g = b[1];
	        b = b[2];

	        var H, S, V, C;
	        V = mmax(r, g, b);
	        C = V - mmin(r, g, b);
	        H = (C == 0 ? null :
	             V == r ? (g - b) / C :
	             V == g ? (b - r) / C + 2 :
	                      (r - g) / C + 4
	            );
	        H = ((H + 360) % 6) * 60 / 360;
	        S = C == 0 ? 0 : C / V;
	        return {h: H, s: S, b: V, toString: hsbtoString};
	    };
	    /*\
	     * Raphael.rgb2hsl
	     [ method ]
	     **
	     * Converts RGB values to HSL object.
	     > Parameters
	     - r (number) red
	     - g (number) green
	     - b (number) blue
	     = (object) HSL object in format:
	     o {
	     o     h (number) hue
	     o     s (number) saturation
	     o     l (number) luminosity
	     o }
	    \*/
	    R.rgb2hsl = function (r, g, b) {
	        b = prepareRGB(r, g, b);
	        r = b[0];
	        g = b[1];
	        b = b[2];

	        var H, S, L, M, m, C;
	        M = mmax(r, g, b);
	        m = mmin(r, g, b);
	        C = M - m;
	        H = (C == 0 ? null :
	             M == r ? (g - b) / C :
	             M == g ? (b - r) / C + 2 :
	                      (r - g) / C + 4);
	        H = ((H + 360) % 6) * 60 / 360;
	        L = (M + m) / 2;
	        S = (C == 0 ? 0 :
	             L < .5 ? C / (2 * L) :
	                      C / (2 - 2 * L));
	        return {h: H, s: S, l: L, toString: hsltoString};
	    };
	    R._path2string = function () {
	        return this.join(",").replace(p2s, "$1");
	    };
	    function repush(array, item) {
	        for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
	            return array.push(array.splice(i, 1)[0]);
	        }
	    }
	    function cacher(f, scope, postprocessor) {
	        function newf() {
	            var arg = Array.prototype.slice.call(arguments, 0),
	                args = arg.join("\u2400"),
	                cache = newf.cache = newf.cache || {},
	                count = newf.count = newf.count || [];
	            if (cache[has](args)) {
	                repush(count, args);
	                return postprocessor ? postprocessor(cache[args]) : cache[args];
	            }
	            count.length >= 1e3 && delete cache[count.shift()];
	            count.push(args);
	            cache[args] = f[apply](scope, arg);
	            return postprocessor ? postprocessor(cache[args]) : cache[args];
	        }
	        return newf;
	    }

	    var preload = R._preload = function (src, f) {
	        var img = g.doc.createElement("img");
	        img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
	        img.onload = function () {
	            f.call(this);
	            this.onload = null;
	            g.doc.body.removeChild(this);
	        };
	        img.onerror = function () {
	            g.doc.body.removeChild(this);
	        };
	        g.doc.body.appendChild(img);
	        img.src = src;
	    };

	    function clrToString() {
	        return this.hex;
	    }

	    /*\
	     * Raphael.getRGB
	     [ method ]
	     **
	     * Parses colour string as RGB object
	     > Parameters
	     - colour (string) colour string in one of formats:
	     # <ul>
	     #     <li>Colour name (“<code>red</code>”, “<code>green</code>”, “<code>cornflowerblue</code>”, etc)</li>
	     #     <li>#••• — shortened HTML colour: (“<code>#000</code>”, “<code>#fc0</code>”, etc)</li>
	     #     <li>#•••••• — full length HTML colour: (“<code>#000000</code>”, “<code>#bd2300</code>”)</li>
	     #     <li>rgb(•••, •••, •••) — red, green and blue channels’ values: (“<code>rgb(200,&nbsp;100,&nbsp;0)</code>”)</li>
	     #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (“<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>”)</li>
	     #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (“<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>”)</li>
	     #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
	     #     <li>hsl(•••, •••, •••) — same as hsb</li>
	     #     <li>hsl(•••%, •••%, •••%) — same as hsb</li>
	     # </ul>
	     = (object) RGB object in format:
	     o {
	     o     r (number) red,
	     o     g (number) green,
	     o     b (number) blue
	     o     hex (string) color in HTML/CSS format: #••••••,
	     o     error (boolean) true if string can’t be parsed
	     o }
	    \*/
	    R.getRGB = cacher(function (colour) {
	        if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
	            return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: clrToString};
	        }
	        if (colour == "none") {
	            return {r: -1, g: -1, b: -1, hex: "none", toString: clrToString};
	        }
	        !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
	        var res,
	            red,
	            green,
	            blue,
	            opacity,
	            t,
	            values,
	            rgb = colour.match(colourRegExp);
	        if (rgb) {
	            if (rgb[2]) {
	                blue = toInt(rgb[2].substring(5), 16);
	                green = toInt(rgb[2].substring(3, 5), 16);
	                red = toInt(rgb[2].substring(1, 3), 16);
	            }
	            if (rgb[3]) {
	                blue = toInt((t = rgb[3].charAt(3)) + t, 16);
	                green = toInt((t = rgb[3].charAt(2)) + t, 16);
	                red = toInt((t = rgb[3].charAt(1)) + t, 16);
	            }
	            if (rgb[4]) {
	                values = rgb[4][split](commaSpaces);
	                red = toFloat(values[0]);
	                values[0].slice(-1) == "%" && (red *= 2.55);
	                green = toFloat(values[1]);
	                values[1].slice(-1) == "%" && (green *= 2.55);
	                blue = toFloat(values[2]);
	                values[2].slice(-1) == "%" && (blue *= 2.55);
	                rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
	                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
	            }
	            if (rgb[5]) {
	                values = rgb[5][split](commaSpaces);
	                red = toFloat(values[0]);
	                values[0].slice(-1) == "%" && (red *= 2.55);
	                green = toFloat(values[1]);
	                values[1].slice(-1) == "%" && (green *= 2.55);
	                blue = toFloat(values[2]);
	                values[2].slice(-1) == "%" && (blue *= 2.55);
	                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
	                rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
	                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
	                return R.hsb2rgb(red, green, blue, opacity);
	            }
	            if (rgb[6]) {
	                values = rgb[6][split](commaSpaces);
	                red = toFloat(values[0]);
	                values[0].slice(-1) == "%" && (red *= 2.55);
	                green = toFloat(values[1]);
	                values[1].slice(-1) == "%" && (green *= 2.55);
	                blue = toFloat(values[2]);
	                values[2].slice(-1) == "%" && (blue *= 2.55);
	                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
	                rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
	                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
	                return R.hsl2rgb(red, green, blue, opacity);
	            }
	            rgb = {r: red, g: green, b: blue, toString: clrToString};
	            rgb.hex = "#" + (16777216 | blue | (green << 8) | (red << 16)).toString(16).slice(1);
	            R.is(opacity, "finite") && (rgb.opacity = opacity);
	            return rgb;
	        }
	        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: clrToString};
	    }, R);
	    /*\
	     * Raphael.hsb
	     [ method ]
	     **
	     * Converts HSB values to hex representation of the colour.
	     > Parameters
	     - h (number) hue
	     - s (number) saturation
	     - b (number) value or brightness
	     = (string) hex representation of the colour.
	    \*/
	    R.hsb = cacher(function (h, s, b) {
	        return R.hsb2rgb(h, s, b).hex;
	    });
	    /*\
	     * Raphael.hsl
	     [ method ]
	     **
	     * Converts HSL values to hex representation of the colour.
	     > Parameters
	     - h (number) hue
	     - s (number) saturation
	     - l (number) luminosity
	     = (string) hex representation of the colour.
	    \*/
	    R.hsl = cacher(function (h, s, l) {
	        return R.hsl2rgb(h, s, l).hex;
	    });
	    /*\
	     * Raphael.rgb
	     [ method ]
	     **
	     * Converts RGB values to hex representation of the colour.
	     > Parameters
	     - r (number) red
	     - g (number) green
	     - b (number) blue
	     = (string) hex representation of the colour.
	    \*/
	    R.rgb = cacher(function (r, g, b) {
	        return "#" + (16777216 | b | (g << 8) | (r << 16)).toString(16).slice(1);
	    });
	    /*\
	     * Raphael.getColor
	     [ method ]
	     **
	     * On each call returns next colour in the spectrum. To reset it back to red call @Raphael.getColor.reset
	     > Parameters
	     - value (number) #optional brightness, default is `0.75`
	     = (string) hex representation of the colour.
	    \*/
	    R.getColor = function (value) {
	        var start = this.getColor.start = this.getColor.start || {h: 0, s: 1, b: value || .75},
	            rgb = this.hsb2rgb(start.h, start.s, start.b);
	        start.h += .075;
	        if (start.h > 1) {
	            start.h = 0;
	            start.s -= .2;
	            start.s <= 0 && (this.getColor.start = {h: 0, s: 1, b: start.b});
	        }
	        return rgb.hex;
	    };
	    /*\
	     * Raphael.getColor.reset
	     [ method ]
	     **
	     * Resets spectrum position for @Raphael.getColor back to red.
	    \*/
	    R.getColor.reset = function () {
	        delete this.start;
	    };

	    // http://schepers.cc/getting-to-the-point
	    function catmullRom2bezier(crp, z) {
	        var d = [];
	        for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
	            var p = [
	                        {x: +crp[i - 2], y: +crp[i - 1]},
	                        {x: +crp[i],     y: +crp[i + 1]},
	                        {x: +crp[i + 2], y: +crp[i + 3]},
	                        {x: +crp[i + 4], y: +crp[i + 5]}
	                    ];
	            if (z) {
	                if (!i) {
	                    p[0] = {x: +crp[iLen - 2], y: +crp[iLen - 1]};
	                } else if (iLen - 4 == i) {
	                    p[3] = {x: +crp[0], y: +crp[1]};
	                } else if (iLen - 2 == i) {
	                    p[2] = {x: +crp[0], y: +crp[1]};
	                    p[3] = {x: +crp[2], y: +crp[3]};
	                }
	            } else {
	                if (iLen - 4 == i) {
	                    p[3] = p[2];
	                } else if (!i) {
	                    p[0] = {x: +crp[i], y: +crp[i + 1]};
	                }
	            }
	            d.push(["C",
	                  (-p[0].x + 6 * p[1].x + p[2].x) / 6,
	                  (-p[0].y + 6 * p[1].y + p[2].y) / 6,
	                  (p[1].x + 6 * p[2].x - p[3].x) / 6,
	                  (p[1].y + 6*p[2].y - p[3].y) / 6,
	                  p[2].x,
	                  p[2].y
	            ]);
	        }

	        return d;
	    }
	    /*\
	     * Raphael.parsePathString
	     [ method ]
	     **
	     * Utility method
	     **
	     * Parses given path string into an array of arrays of path segments.
	     > Parameters
	     - pathString (string|array) path string or array of segments (in the last case it will be returned straight away)
	     = (array) array of segments.
	    \*/
	    R.parsePathString = function (pathString) {
	        if (!pathString) {
	            return null;
	        }
	        var pth = paths(pathString);
	        if (pth.arr) {
	            return pathClone(pth.arr);
	        }

	        var paramCounts = {a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0},
	            data = [];
	        if (R.is(pathString, array) && R.is(pathString[0], array)) { // rough assumption
	            data = pathClone(pathString);
	        }
	        if (!data.length) {
	            Str(pathString).replace(pathCommand, function (a, b, c) {
	                var params = [],
	                    name = b.toLowerCase();
	                c.replace(pathValues, function (a, b) {
	                    b && params.push(+b);
	                });
	                if (name == "m" && params.length > 2) {
	                    data.push([b][concat](params.splice(0, 2)));
	                    name = "l";
	                    b = b == "m" ? "l" : "L";
	                }
	                if (name == "r") {
	                    data.push([b][concat](params));
	                } else while (params.length >= paramCounts[name]) {
	                    data.push([b][concat](params.splice(0, paramCounts[name])));
	                    if (!paramCounts[name]) {
	                        break;
	                    }
	                }
	            });
	        }
	        data.toString = R._path2string;
	        pth.arr = pathClone(data);
	        return data;
	    };
	    /*\
	     * Raphael.parseTransformString
	     [ method ]
	     **
	     * Utility method
	     **
	     * Parses given path string into an array of transformations.
	     > Parameters
	     - TString (string|array) transform string or array of transformations (in the last case it will be returned straight away)
	     = (array) array of transformations.
	    \*/
	    R.parseTransformString = cacher(function (TString) {
	        if (!TString) {
	            return null;
	        }
	        var paramCounts = {r: 3, s: 4, t: 2, m: 6},
	            data = [];
	        if (R.is(TString, array) && R.is(TString[0], array)) { // rough assumption
	            data = pathClone(TString);
	        }
	        if (!data.length) {
	            Str(TString).replace(tCommand, function (a, b, c) {
	                var params = [],
	                    name = lowerCase.call(b);
	                c.replace(pathValues, function (a, b) {
	                    b && params.push(+b);
	                });
	                data.push([b][concat](params));
	            });
	        }
	        data.toString = R._path2string;
	        return data;
	    });
	    // PATHS
	    var paths = function (ps) {
	        var p = paths.ps = paths.ps || {};
	        if (p[ps]) {
	            p[ps].sleep = 100;
	        } else {
	            p[ps] = {
	                sleep: 100
	            };
	        }
	        setTimeout(function () {
	            for (var key in p) if (p[has](key) && key != ps) {
	                p[key].sleep--;
	                !p[key].sleep && delete p[key];
	            }
	        });
	        return p[ps];
	    };
	    /*\
	     * Raphael.findDotsAtSegment
	     [ method ]
	     **
	     * Utility method
	     **
	     * Find dot coordinates on the given cubic bezier curve at the given t.
	     > Parameters
	     - p1x (number) x of the first point of the curve
	     - p1y (number) y of the first point of the curve
	     - c1x (number) x of the first anchor of the curve
	     - c1y (number) y of the first anchor of the curve
	     - c2x (number) x of the second anchor of the curve
	     - c2y (number) y of the second anchor of the curve
	     - p2x (number) x of the second point of the curve
	     - p2y (number) y of the second point of the curve
	     - t (number) position on the curve (0..1)
	     = (object) point information in format:
	     o {
	     o     x: (number) x coordinate of the point
	     o     y: (number) y coordinate of the point
	     o     m: {
	     o         x: (number) x coordinate of the left anchor
	     o         y: (number) y coordinate of the left anchor
	     o     }
	     o     n: {
	     o         x: (number) x coordinate of the right anchor
	     o         y: (number) y coordinate of the right anchor
	     o     }
	     o     start: {
	     o         x: (number) x coordinate of the start of the curve
	     o         y: (number) y coordinate of the start of the curve
	     o     }
	     o     end: {
	     o         x: (number) x coordinate of the end of the curve
	     o         y: (number) y coordinate of the end of the curve
	     o     }
	     o     alpha: (number) angle of the curve derivative at the point
	     o }
	    \*/
	    R.findDotsAtSegment = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
	        var t1 = 1 - t,
	            t13 = pow(t1, 3),
	            t12 = pow(t1, 2),
	            t2 = t * t,
	            t3 = t2 * t,
	            x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
	            y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
	            mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
	            my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
	            nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
	            ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
	            ax = t1 * p1x + t * c1x,
	            ay = t1 * p1y + t * c1y,
	            cx = t1 * c2x + t * p2x,
	            cy = t1 * c2y + t * p2y,
	            alpha = (90 - math.atan2(mx - nx, my - ny) * 180 / PI);
	        (mx > nx || my < ny) && (alpha += 180);
	        return {
	            x: x,
	            y: y,
	            m: {x: mx, y: my},
	            n: {x: nx, y: ny},
	            start: {x: ax, y: ay},
	            end: {x: cx, y: cy},
	            alpha: alpha
	        };
	    };
	    /*\
	     * Raphael.bezierBBox
	     [ method ]
	     **
	     * Utility method
	     **
	     * Return bounding box of a given cubic bezier curve
	     > Parameters
	     - p1x (number) x of the first point of the curve
	     - p1y (number) y of the first point of the curve
	     - c1x (number) x of the first anchor of the curve
	     - c1y (number) y of the first anchor of the curve
	     - c2x (number) x of the second anchor of the curve
	     - c2y (number) y of the second anchor of the curve
	     - p2x (number) x of the second point of the curve
	     - p2y (number) y of the second point of the curve
	     * or
	     - bez (array) array of six points for bezier curve
	     = (object) point information in format:
	     o {
	     o     min: {
	     o         x: (number) x coordinate of the left point
	     o         y: (number) y coordinate of the top point
	     o     }
	     o     max: {
	     o         x: (number) x coordinate of the right point
	     o         y: (number) y coordinate of the bottom point
	     o     }
	     o }
	    \*/
	    R.bezierBBox = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
	        if (!R.is(p1x, "array")) {
	            p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
	        }
	        var bbox = curveDim.apply(null, p1x);
	        return {
	            x: bbox.min.x,
	            y: bbox.min.y,
	            x2: bbox.max.x,
	            y2: bbox.max.y,
	            width: bbox.max.x - bbox.min.x,
	            height: bbox.max.y - bbox.min.y
	        };
	    };
	    /*\
	     * Raphael.isPointInsideBBox
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns `true` if given point is inside bounding boxes.
	     > Parameters
	     - bbox (string) bounding box
	     - x (string) x coordinate of the point
	     - y (string) y coordinate of the point
	     = (boolean) `true` if point inside
	    \*/
	    R.isPointInsideBBox = function (bbox, x, y) {
	        return x >= bbox.x && x <= bbox.x2 && y >= bbox.y && y <= bbox.y2;
	    };
	    /*\
	     * Raphael.isBBoxIntersect
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns `true` if two bounding boxes intersect
	     > Parameters
	     - bbox1 (string) first bounding box
	     - bbox2 (string) second bounding box
	     = (boolean) `true` if they intersect
	    \*/
	    R.isBBoxIntersect = function (bbox1, bbox2) {
	        var i = R.isPointInsideBBox;
	        return i(bbox2, bbox1.x, bbox1.y)
	            || i(bbox2, bbox1.x2, bbox1.y)
	            || i(bbox2, bbox1.x, bbox1.y2)
	            || i(bbox2, bbox1.x2, bbox1.y2)
	            || i(bbox1, bbox2.x, bbox2.y)
	            || i(bbox1, bbox2.x2, bbox2.y)
	            || i(bbox1, bbox2.x, bbox2.y2)
	            || i(bbox1, bbox2.x2, bbox2.y2)
	            || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x)
	            && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
	    };
	    function base3(t, p1, p2, p3, p4) {
	        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
	            t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
	        return t * t2 - 3 * p1 + 3 * p2;
	    }
	    function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
	        if (z == null) {
	            z = 1;
	        }
	        z = z > 1 ? 1 : z < 0 ? 0 : z;
	        var z2 = z / 2,
	            n = 12,
	            Tvalues = [-0.1252,0.1252,-0.3678,0.3678,-0.5873,0.5873,-0.7699,0.7699,-0.9041,0.9041,-0.9816,0.9816],
	            Cvalues = [0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],
	            sum = 0;
	        for (var i = 0; i < n; i++) {
	            var ct = z2 * Tvalues[i] + z2,
	                xbase = base3(ct, x1, x2, x3, x4),
	                ybase = base3(ct, y1, y2, y3, y4),
	                comb = xbase * xbase + ybase * ybase;
	            sum += Cvalues[i] * math.sqrt(comb);
	        }
	        return z2 * sum;
	    }
	    function getTatLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
	        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
	            return;
	        }
	        var t = 1,
	            step = t / 2,
	            t2 = t - step,
	            l,
	            e = .01;
	        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
	        while (abs(l - ll) > e) {
	            step /= 2;
	            t2 += (l < ll ? 1 : -1) * step;
	            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
	        }
	        return t2;
	    }
	    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
	        if (
	            mmax(x1, x2) < mmin(x3, x4) ||
	            mmin(x1, x2) > mmax(x3, x4) ||
	            mmax(y1, y2) < mmin(y3, y4) ||
	            mmin(y1, y2) > mmax(y3, y4)
	        ) {
	            return;
	        }
	        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
	            ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
	            denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

	        if (!denominator) {
	            return;
	        }
	        var px = nx / denominator,
	            py = ny / denominator,
	            px2 = +px.toFixed(2),
	            py2 = +py.toFixed(2);
	        if (
	            px2 < +mmin(x1, x2).toFixed(2) ||
	            px2 > +mmax(x1, x2).toFixed(2) ||
	            px2 < +mmin(x3, x4).toFixed(2) ||
	            px2 > +mmax(x3, x4).toFixed(2) ||
	            py2 < +mmin(y1, y2).toFixed(2) ||
	            py2 > +mmax(y1, y2).toFixed(2) ||
	            py2 < +mmin(y3, y4).toFixed(2) ||
	            py2 > +mmax(y3, y4).toFixed(2)
	        ) {
	            return;
	        }
	        return {x: px, y: py};
	    }
	    function inter(bez1, bez2) {
	        return interHelper(bez1, bez2);
	    }
	    function interCount(bez1, bez2) {
	        return interHelper(bez1, bez2, 1);
	    }
	    function interHelper(bez1, bez2, justCount) {
	        var bbox1 = R.bezierBBox(bez1),
	            bbox2 = R.bezierBBox(bez2);
	        if (!R.isBBoxIntersect(bbox1, bbox2)) {
	            return justCount ? 0 : [];
	        }
	        var l1 = bezlen.apply(0, bez1),
	            l2 = bezlen.apply(0, bez2),
	            n1 = mmax(~~(l1 / 5), 1),
	            n2 = mmax(~~(l2 / 5), 1),
	            dots1 = [],
	            dots2 = [],
	            xy = {},
	            res = justCount ? 0 : [];
	        for (var i = 0; i < n1 + 1; i++) {
	            var p = R.findDotsAtSegment.apply(R, bez1.concat(i / n1));
	            dots1.push({x: p.x, y: p.y, t: i / n1});
	        }
	        for (i = 0; i < n2 + 1; i++) {
	            p = R.findDotsAtSegment.apply(R, bez2.concat(i / n2));
	            dots2.push({x: p.x, y: p.y, t: i / n2});
	        }
	        for (i = 0; i < n1; i++) {
	            for (var j = 0; j < n2; j++) {
	                var di = dots1[i],
	                    di1 = dots1[i + 1],
	                    dj = dots2[j],
	                    dj1 = dots2[j + 1],
	                    ci = abs(di1.x - di.x) < .001 ? "y" : "x",
	                    cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
	                    is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
	                if (is) {
	                    if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
	                        continue;
	                    }
	                    xy[is.x.toFixed(4)] = is.y.toFixed(4);
	                    var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
	                        t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
	                    if (t1 >= 0 && t1 <= 1.001 && t2 >= 0 && t2 <= 1.001) {
	                        if (justCount) {
	                            res++;
	                        } else {
	                            res.push({
	                                x: is.x,
	                                y: is.y,
	                                t1: mmin(t1, 1),
	                                t2: mmin(t2, 1)
	                            });
	                        }
	                    }
	                }
	            }
	        }
	        return res;
	    }
	    /*\
	     * Raphael.pathIntersection
	     [ method ]
	     **
	     * Utility method
	     **
	     * Finds intersections of two paths
	     > Parameters
	     - path1 (string) path string
	     - path2 (string) path string
	     = (array) dots of intersection
	     o [
	     o     {
	     o         x: (number) x coordinate of the point
	     o         y: (number) y coordinate of the point
	     o         t1: (number) t value for segment of path1
	     o         t2: (number) t value for segment of path2
	     o         segment1: (number) order number for segment of path1
	     o         segment2: (number) order number for segment of path2
	     o         bez1: (array) eight coordinates representing beziér curve for the segment of path1
	     o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
	     o     }
	     o ]
	    \*/
	    R.pathIntersection = function (path1, path2) {
	        return interPathHelper(path1, path2);
	    };
	    R.pathIntersectionNumber = function (path1, path2) {
	        return interPathHelper(path1, path2, 1);
	    };
	    function interPathHelper(path1, path2, justCount) {
	        path1 = R._path2curve(path1);
	        path2 = R._path2curve(path2);
	        var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2,
	            res = justCount ? 0 : [];
	        for (var i = 0, ii = path1.length; i < ii; i++) {
	            var pi = path1[i];
	            if (pi[0] == "M") {
	                x1 = x1m = pi[1];
	                y1 = y1m = pi[2];
	            } else {
	                if (pi[0] == "C") {
	                    bez1 = [x1, y1].concat(pi.slice(1));
	                    x1 = bez1[6];
	                    y1 = bez1[7];
	                } else {
	                    bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
	                    x1 = x1m;
	                    y1 = y1m;
	                }
	                for (var j = 0, jj = path2.length; j < jj; j++) {
	                    var pj = path2[j];
	                    if (pj[0] == "M") {
	                        x2 = x2m = pj[1];
	                        y2 = y2m = pj[2];
	                    } else {
	                        if (pj[0] == "C") {
	                            bez2 = [x2, y2].concat(pj.slice(1));
	                            x2 = bez2[6];
	                            y2 = bez2[7];
	                        } else {
	                            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
	                            x2 = x2m;
	                            y2 = y2m;
	                        }
	                        var intr = interHelper(bez1, bez2, justCount);
	                        if (justCount) {
	                            res += intr;
	                        } else {
	                            for (var k = 0, kk = intr.length; k < kk; k++) {
	                                intr[k].segment1 = i;
	                                intr[k].segment2 = j;
	                                intr[k].bez1 = bez1;
	                                intr[k].bez2 = bez2;
	                            }
	                            res = res.concat(intr);
	                        }
	                    }
	                }
	            }
	        }
	        return res;
	    }
	    /*\
	     * Raphael.isPointInsidePath
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns `true` if given point is inside a given closed path.
	     > Parameters
	     - path (string) path string
	     - x (number) x of the point
	     - y (number) y of the point
	     = (boolean) true, if point is inside the path
	    \*/
	    R.isPointInsidePath = function (path, x, y) {
	        var bbox = R.pathBBox(path);
	        return R.isPointInsideBBox(bbox, x, y) &&
	               interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
	    };
	    R._removedFactory = function (methodname) {
	        return function () {
	            eve("raphael.log", null, "Rapha\xebl: you are calling to method \u201c" + methodname + "\u201d of removed object", methodname);
	        };
	    };
	    /*\
	     * Raphael.pathBBox
	     [ method ]
	     **
	     * Utility method
	     **
	     * Return bounding box of a given path
	     > Parameters
	     - path (string) path string
	     = (object) bounding box
	     o {
	     o     x: (number) x coordinate of the left top point of the box
	     o     y: (number) y coordinate of the left top point of the box
	     o     x2: (number) x coordinate of the right bottom point of the box
	     o     y2: (number) y coordinate of the right bottom point of the box
	     o     width: (number) width of the box
	     o     height: (number) height of the box
	     o     cx: (number) x coordinate of the center of the box
	     o     cy: (number) y coordinate of the center of the box
	     o }
	    \*/
	    var pathDimensions = R.pathBBox = function (path) {
	        var pth = paths(path);
	        if (pth.bbox) {
	            return clone(pth.bbox);
	        }
	        if (!path) {
	            return {x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0};
	        }
	        path = path2curve(path);
	        var x = 0,
	            y = 0,
	            X = [],
	            Y = [],
	            p;
	        for (var i = 0, ii = path.length; i < ii; i++) {
	            p = path[i];
	            if (p[0] == "M") {
	                x = p[1];
	                y = p[2];
	                X.push(x);
	                Y.push(y);
	            } else {
	                var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
	                X = X[concat](dim.min.x, dim.max.x);
	                Y = Y[concat](dim.min.y, dim.max.y);
	                x = p[5];
	                y = p[6];
	            }
	        }
	        var xmin = mmin[apply](0, X),
	            ymin = mmin[apply](0, Y),
	            xmax = mmax[apply](0, X),
	            ymax = mmax[apply](0, Y),
	            width = xmax - xmin,
	            height = ymax - ymin,
	                bb = {
	                x: xmin,
	                y: ymin,
	                x2: xmax,
	                y2: ymax,
	                width: width,
	                height: height,
	                cx: xmin + width / 2,
	                cy: ymin + height / 2
	            };
	        pth.bbox = clone(bb);
	        return bb;
	    },
	        pathClone = function (pathArray) {
	            var res = clone(pathArray);
	            res.toString = R._path2string;
	            return res;
	        },
	        pathToRelative = R._pathToRelative = function (pathArray) {
	            var pth = paths(pathArray);
	            if (pth.rel) {
	                return pathClone(pth.rel);
	            }
	            if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) { // rough assumption
	                pathArray = R.parsePathString(pathArray);
	            }
	            var res = [],
	                x = 0,
	                y = 0,
	                mx = 0,
	                my = 0,
	                start = 0;
	            if (pathArray[0][0] == "M") {
	                x = pathArray[0][1];
	                y = pathArray[0][2];
	                mx = x;
	                my = y;
	                start++;
	                res.push(["M", x, y]);
	            }
	            for (var i = start, ii = pathArray.length; i < ii; i++) {
	                var r = res[i] = [],
	                    pa = pathArray[i];
	                if (pa[0] != lowerCase.call(pa[0])) {
	                    r[0] = lowerCase.call(pa[0]);
	                    switch (r[0]) {
	                        case "a":
	                            r[1] = pa[1];
	                            r[2] = pa[2];
	                            r[3] = pa[3];
	                            r[4] = pa[4];
	                            r[5] = pa[5];
	                            r[6] = +(pa[6] - x).toFixed(3);
	                            r[7] = +(pa[7] - y).toFixed(3);
	                            break;
	                        case "v":
	                            r[1] = +(pa[1] - y).toFixed(3);
	                            break;
	                        case "m":
	                            mx = pa[1];
	                            my = pa[2];
	                        default:
	                            for (var j = 1, jj = pa.length; j < jj; j++) {
	                                r[j] = +(pa[j] - ((j % 2) ? x : y)).toFixed(3);
	                            }
	                    }
	                } else {
	                    r = res[i] = [];
	                    if (pa[0] == "m") {
	                        mx = pa[1] + x;
	                        my = pa[2] + y;
	                    }
	                    for (var k = 0, kk = pa.length; k < kk; k++) {
	                        res[i][k] = pa[k];
	                    }
	                }
	                var len = res[i].length;
	                switch (res[i][0]) {
	                    case "z":
	                        x = mx;
	                        y = my;
	                        break;
	                    case "h":
	                        x += +res[i][len - 1];
	                        break;
	                    case "v":
	                        y += +res[i][len - 1];
	                        break;
	                    default:
	                        x += +res[i][len - 2];
	                        y += +res[i][len - 1];
	                }
	            }
	            res.toString = R._path2string;
	            pth.rel = pathClone(res);
	            return res;
	        },
	        pathToAbsolute = R._pathToAbsolute = function (pathArray) {
	            var pth = paths(pathArray);
	            if (pth.abs) {
	                return pathClone(pth.abs);
	            }
	            if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) { // rough assumption
	                pathArray = R.parsePathString(pathArray);
	            }
	            if (!pathArray || !pathArray.length) {
	                return [["M", 0, 0]];
	            }
	            var res = [],
	                x = 0,
	                y = 0,
	                mx = 0,
	                my = 0,
	                start = 0;
	            if (pathArray[0][0] == "M") {
	                x = +pathArray[0][1];
	                y = +pathArray[0][2];
	                mx = x;
	                my = y;
	                start++;
	                res[0] = ["M", x, y];
	            }
	            var crz = pathArray.length == 3 && pathArray[0][0] == "M" && pathArray[1][0].toUpperCase() == "R" && pathArray[2][0].toUpperCase() == "Z";
	            for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
	                res.push(r = []);
	                pa = pathArray[i];
	                if (pa[0] != upperCase.call(pa[0])) {
	                    r[0] = upperCase.call(pa[0]);
	                    switch (r[0]) {
	                        case "A":
	                            r[1] = pa[1];
	                            r[2] = pa[2];
	                            r[3] = pa[3];
	                            r[4] = pa[4];
	                            r[5] = pa[5];
	                            r[6] = +(pa[6] + x);
	                            r[7] = +(pa[7] + y);
	                            break;
	                        case "V":
	                            r[1] = +pa[1] + y;
	                            break;
	                        case "H":
	                            r[1] = +pa[1] + x;
	                            break;
	                        case "R":
	                            var dots = [x, y][concat](pa.slice(1));
	                            for (var j = 2, jj = dots.length; j < jj; j++) {
	                                dots[j] = +dots[j] + x;
	                                dots[++j] = +dots[j] + y;
	                            }
	                            res.pop();
	                            res = res[concat](catmullRom2bezier(dots, crz));
	                            break;
	                        case "M":
	                            mx = +pa[1] + x;
	                            my = +pa[2] + y;
	                        default:
	                            for (j = 1, jj = pa.length; j < jj; j++) {
	                                r[j] = +pa[j] + ((j % 2) ? x : y);
	                            }
	                    }
	                } else if (pa[0] == "R") {
	                    dots = [x, y][concat](pa.slice(1));
	                    res.pop();
	                    res = res[concat](catmullRom2bezier(dots, crz));
	                    r = ["R"][concat](pa.slice(-2));
	                } else {
	                    for (var k = 0, kk = pa.length; k < kk; k++) {
	                        r[k] = pa[k];
	                    }
	                }
	                switch (r[0]) {
	                    case "Z":
	                        x = mx;
	                        y = my;
	                        break;
	                    case "H":
	                        x = r[1];
	                        break;
	                    case "V":
	                        y = r[1];
	                        break;
	                    case "M":
	                        mx = r[r.length - 2];
	                        my = r[r.length - 1];
	                    default:
	                        x = r[r.length - 2];
	                        y = r[r.length - 1];
	                }
	            }
	            res.toString = R._path2string;
	            pth.abs = pathClone(res);
	            return res;
	        },
	        l2c = function (x1, y1, x2, y2) {
	            return [x1, y1, x2, y2, x2, y2];
	        },
	        q2c = function (x1, y1, ax, ay, x2, y2) {
	            var _13 = 1 / 3,
	                _23 = 2 / 3;
	            return [
	                    _13 * x1 + _23 * ax,
	                    _13 * y1 + _23 * ay,
	                    _13 * x2 + _23 * ax,
	                    _13 * y2 + _23 * ay,
	                    x2,
	                    y2
	                ];
	        },
	        a2c = function (x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
	            // for more information of where this math came from visit:
	            // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
	            var _120 = PI * 120 / 180,
	                rad = PI / 180 * (+angle || 0),
	                res = [],
	                xy,
	                rotate = cacher(function (x, y, rad) {
	                    var X = x * math.cos(rad) - y * math.sin(rad),
	                        Y = x * math.sin(rad) + y * math.cos(rad);
	                    return {x: X, y: Y};
	                });
	            if (!recursive) {
	                xy = rotate(x1, y1, -rad);
	                x1 = xy.x;
	                y1 = xy.y;
	                xy = rotate(x2, y2, -rad);
	                x2 = xy.x;
	                y2 = xy.y;
	                var cos = math.cos(PI / 180 * angle),
	                    sin = math.sin(PI / 180 * angle),
	                    x = (x1 - x2) / 2,
	                    y = (y1 - y2) / 2;
	                var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
	                if (h > 1) {
	                    h = math.sqrt(h);
	                    rx = h * rx;
	                    ry = h * ry;
	                }
	                var rx2 = rx * rx,
	                    ry2 = ry * ry,
	                    k = (large_arc_flag == sweep_flag ? -1 : 1) *
	                        math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
	                    cx = k * rx * y / ry + (x1 + x2) / 2,
	                    cy = k * -ry * x / rx + (y1 + y2) / 2,
	                    f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
	                    f2 = math.asin(((y2 - cy) / ry).toFixed(9));

	                f1 = x1 < cx ? PI - f1 : f1;
	                f2 = x2 < cx ? PI - f2 : f2;
	                f1 < 0 && (f1 = PI * 2 + f1);
	                f2 < 0 && (f2 = PI * 2 + f2);
	                if (sweep_flag && f1 > f2) {
	                    f1 = f1 - PI * 2;
	                }
	                if (!sweep_flag && f2 > f1) {
	                    f2 = f2 - PI * 2;
	                }
	            } else {
	                f1 = recursive[0];
	                f2 = recursive[1];
	                cx = recursive[2];
	                cy = recursive[3];
	            }
	            var df = f2 - f1;
	            if (abs(df) > _120) {
	                var f2old = f2,
	                    x2old = x2,
	                    y2old = y2;
	                f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
	                x2 = cx + rx * math.cos(f2);
	                y2 = cy + ry * math.sin(f2);
	                res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
	            }
	            df = f2 - f1;
	            var c1 = math.cos(f1),
	                s1 = math.sin(f1),
	                c2 = math.cos(f2),
	                s2 = math.sin(f2),
	                t = math.tan(df / 4),
	                hx = 4 / 3 * rx * t,
	                hy = 4 / 3 * ry * t,
	                m1 = [x1, y1],
	                m2 = [x1 + hx * s1, y1 - hy * c1],
	                m3 = [x2 + hx * s2, y2 - hy * c2],
	                m4 = [x2, y2];
	            m2[0] = 2 * m1[0] - m2[0];
	            m2[1] = 2 * m1[1] - m2[1];
	            if (recursive) {
	                return [m2, m3, m4][concat](res);
	            } else {
	                res = [m2, m3, m4][concat](res).join()[split](",");
	                var newres = [];
	                for (var i = 0, ii = res.length; i < ii; i++) {
	                    newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
	                }
	                return newres;
	            }
	        },
	        findDotAtSegment = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
	            var t1 = 1 - t;
	            return {
	                x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
	                y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
	            };
	        },
	        curveDim = cacher(function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
	            var a = (c2x - 2 * c1x + p1x) - (p2x - 2 * c2x + c1x),
	                b = 2 * (c1x - p1x) - 2 * (c2x - c1x),
	                c = p1x - c1x,
	                t1 = (-b + math.sqrt(b * b - 4 * a * c)) / 2 / a,
	                t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a,
	                y = [p1y, p2y],
	                x = [p1x, p2x],
	                dot;
	            abs(t1) > "1e12" && (t1 = .5);
	            abs(t2) > "1e12" && (t2 = .5);
	            if (t1 > 0 && t1 < 1) {
	                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
	                x.push(dot.x);
	                y.push(dot.y);
	            }
	            if (t2 > 0 && t2 < 1) {
	                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
	                x.push(dot.x);
	                y.push(dot.y);
	            }
	            a = (c2y - 2 * c1y + p1y) - (p2y - 2 * c2y + c1y);
	            b = 2 * (c1y - p1y) - 2 * (c2y - c1y);
	            c = p1y - c1y;
	            t1 = (-b + math.sqrt(b * b - 4 * a * c)) / 2 / a;
	            t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a;
	            abs(t1) > "1e12" && (t1 = .5);
	            abs(t2) > "1e12" && (t2 = .5);
	            if (t1 > 0 && t1 < 1) {
	                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
	                x.push(dot.x);
	                y.push(dot.y);
	            }
	            if (t2 > 0 && t2 < 1) {
	                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
	                x.push(dot.x);
	                y.push(dot.y);
	            }
	            return {
	                min: {x: mmin[apply](0, x), y: mmin[apply](0, y)},
	                max: {x: mmax[apply](0, x), y: mmax[apply](0, y)}
	            };
	        }),
	        path2curve = R._path2curve = cacher(function (path, path2) {
	            var pth = !path2 && paths(path);
	            if (!path2 && pth.curve) {
	                return pathClone(pth.curve);
	            }
	            var p = pathToAbsolute(path),
	                p2 = path2 && pathToAbsolute(path2),
	                attrs = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
	                attrs2 = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
	                processPath = function (path, d, pcom) {
	                    var nx, ny, tq = {T:1, Q:1};
	                    if (!path) {
	                        return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
	                    }
	                    !(path[0] in tq) && (d.qx = d.qy = null);
	                    switch (path[0]) {
	                        case "M":
	                            d.X = path[1];
	                            d.Y = path[2];
	                            break;
	                        case "A":
	                            path = ["C"][concat](a2c[apply](0, [d.x, d.y][concat](path.slice(1))));
	                            break;
	                        case "S":
	                            if (pcom == "C" || pcom == "S") { // In "S" case we have to take into account, if the previous command is C/S.
	                                nx = d.x * 2 - d.bx;          // And reflect the previous
	                                ny = d.y * 2 - d.by;          // command's control point relative to the current point.
	                            }
	                            else {                            // or some else or nothing
	                                nx = d.x;
	                                ny = d.y;
	                            }
	                            path = ["C", nx, ny][concat](path.slice(1));
	                            break;
	                        case "T":
	                            if (pcom == "Q" || pcom == "T") { // In "T" case we have to take into account, if the previous command is Q/T.
	                                d.qx = d.x * 2 - d.qx;        // And make a reflection similar
	                                d.qy = d.y * 2 - d.qy;        // to case "S".
	                            }
	                            else {                            // or something else or nothing
	                                d.qx = d.x;
	                                d.qy = d.y;
	                            }
	                            path = ["C"][concat](q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
	                            break;
	                        case "Q":
	                            d.qx = path[1];
	                            d.qy = path[2];
	                            path = ["C"][concat](q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
	                            break;
	                        case "L":
	                            path = ["C"][concat](l2c(d.x, d.y, path[1], path[2]));
	                            break;
	                        case "H":
	                            path = ["C"][concat](l2c(d.x, d.y, path[1], d.y));
	                            break;
	                        case "V":
	                            path = ["C"][concat](l2c(d.x, d.y, d.x, path[1]));
	                            break;
	                        case "Z":
	                            path = ["C"][concat](l2c(d.x, d.y, d.X, d.Y));
	                            break;
	                    }
	                    return path;
	                },
	                fixArc = function (pp, i) {
	                    if (pp[i].length > 7) {
	                        pp[i].shift();
	                        var pi = pp[i];
	                        while (pi.length) {
	                            pcoms1[i]="A"; // if created multiple C:s, their original seg is saved
	                            p2 && (pcoms2[i]="A"); // the same as above
	                            pp.splice(i++, 0, ["C"][concat](pi.splice(0, 6)));
	                        }
	                        pp.splice(i, 1);
	                        ii = mmax(p.length, p2 && p2.length || 0);
	                    }
	                },
	                fixM = function (path1, path2, a1, a2, i) {
	                    if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
	                        path2.splice(i, 0, ["M", a2.x, a2.y]);
	                        a1.bx = 0;
	                        a1.by = 0;
	                        a1.x = path1[i][1];
	                        a1.y = path1[i][2];
	                        ii = mmax(p.length, p2 && p2.length || 0);
	                    }
	                },
	                pcoms1 = [], // path commands of original path p
	                pcoms2 = [], // path commands of original path p2
	                pfirst = "", // temporary holder for original path command
	                pcom = ""; // holder for previous path command of original path
	            for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
	                p[i] && (pfirst = p[i][0]); // save current path command

	                if (pfirst != "C") // C is not saved yet, because it may be result of conversion
	                {
	                    pcoms1[i] = pfirst; // Save current path command
	                    i && ( pcom = pcoms1[i-1]); // Get previous path command pcom
	                }
	                p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath

	                if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command
	                // which may produce multiple C:s
	                // so we have to make sure that C is also C in original path

	                fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1

	                if (p2) { // the same procedures is done to p2
	                    p2[i] && (pfirst = p2[i][0]);
	                    if (pfirst != "C")
	                    {
	                        pcoms2[i] = pfirst;
	                        i && (pcom = pcoms2[i-1]);
	                    }
	                    p2[i] = processPath(p2[i], attrs2, pcom);

	                    if (pcoms2[i]!="A" && pfirst=="C") pcoms2[i]="C";

	                    fixArc(p2, i);
	                }
	                fixM(p, p2, attrs, attrs2, i);
	                fixM(p2, p, attrs2, attrs, i);
	                var seg = p[i],
	                    seg2 = p2 && p2[i],
	                    seglen = seg.length,
	                    seg2len = p2 && seg2.length;
	                attrs.x = seg[seglen - 2];
	                attrs.y = seg[seglen - 1];
	                attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
	                attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
	                attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
	                attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
	                attrs2.x = p2 && seg2[seg2len - 2];
	                attrs2.y = p2 && seg2[seg2len - 1];
	            }
	            if (!p2) {
	                pth.curve = pathClone(p);
	            }
	            return p2 ? [p, p2] : p;
	        }, null, pathClone),
	        parseDots = R._parseDots = cacher(function (gradient) {
	            var dots = [];
	            for (var i = 0, ii = gradient.length; i < ii; i++) {
	                var dot = {},
	                    par = gradient[i].match(/^([^:]*):?([\d\.]*)/);
	                dot.color = R.getRGB(par[1]);
	                if (dot.color.error) {
	                    return null;
	                }
	                dot.color = dot.color.hex;
	                par[2] && (dot.offset = par[2] + "%");
	                dots.push(dot);
	            }
	            for (i = 1, ii = dots.length - 1; i < ii; i++) {
	                if (!dots[i].offset) {
	                    var start = toFloat(dots[i - 1].offset || 0),
	                        end = 0;
	                    for (var j = i + 1; j < ii; j++) {
	                        if (dots[j].offset) {
	                            end = dots[j].offset;
	                            break;
	                        }
	                    }
	                    if (!end) {
	                        end = 100;
	                        j = ii;
	                    }
	                    end = toFloat(end);
	                    var d = (end - start) / (j - i + 1);
	                    for (; i < j; i++) {
	                        start += d;
	                        dots[i].offset = start + "%";
	                    }
	                }
	            }
	            return dots;
	        }),
	        tear = R._tear = function (el, paper) {
	            el == paper.top && (paper.top = el.prev);
	            el == paper.bottom && (paper.bottom = el.next);
	            el.next && (el.next.prev = el.prev);
	            el.prev && (el.prev.next = el.next);
	        },
	        tofront = R._tofront = function (el, paper) {
	            if (paper.top === el) {
	                return;
	            }
	            tear(el, paper);
	            el.next = null;
	            el.prev = paper.top;
	            paper.top.next = el;
	            paper.top = el;
	        },
	        toback = R._toback = function (el, paper) {
	            if (paper.bottom === el) {
	                return;
	            }
	            tear(el, paper);
	            el.next = paper.bottom;
	            el.prev = null;
	            paper.bottom.prev = el;
	            paper.bottom = el;
	        },
	        insertafter = R._insertafter = function (el, el2, paper) {
	            tear(el, paper);
	            el2 == paper.top && (paper.top = el);
	            el2.next && (el2.next.prev = el);
	            el.next = el2.next;
	            el.prev = el2;
	            el2.next = el;
	        },
	        insertbefore = R._insertbefore = function (el, el2, paper) {
	            tear(el, paper);
	            el2 == paper.bottom && (paper.bottom = el);
	            el2.prev && (el2.prev.next = el);
	            el.prev = el2.prev;
	            el2.prev = el;
	            el.next = el2;
	        },
	        /*\
	         * Raphael.toMatrix
	         [ method ]
	         **
	         * Utility method
	         **
	         * Returns matrix of transformations applied to a given path
	         > Parameters
	         - path (string) path string
	         - transform (string|array) transformation string
	         = (object) @Matrix
	        \*/
	        toMatrix = R.toMatrix = function (path, transform) {
	            var bb = pathDimensions(path),
	                el = {
	                    _: {
	                        transform: E
	                    },
	                    getBBox: function () {
	                        return bb;
	                    }
	                };
	            extractTransform(el, transform);
	            return el.matrix;
	        },
	        /*\
	         * Raphael.transformPath
	         [ method ]
	         **
	         * Utility method
	         **
	         * Returns path transformed by a given transformation
	         > Parameters
	         - path (string) path string
	         - transform (string|array) transformation string
	         = (string) path
	        \*/
	        transformPath = R.transformPath = function (path, transform) {
	            return mapPath(path, toMatrix(path, transform));
	        },
	        extractTransform = R._extractTransform = function (el, tstr) {
	            if (tstr == null) {
	                return el._.transform;
	            }
	            tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || E);
	            var tdata = R.parseTransformString(tstr),
	                deg = 0,
	                dx = 0,
	                dy = 0,
	                sx = 1,
	                sy = 1,
	                _ = el._,
	                m = new Matrix;
	            _.transform = tdata || [];
	            if (tdata) {
	                for (var i = 0, ii = tdata.length; i < ii; i++) {
	                    var t = tdata[i],
	                        tlen = t.length,
	                        command = Str(t[0]).toLowerCase(),
	                        absolute = t[0] != command,
	                        inver = absolute ? m.invert() : 0,
	                        x1,
	                        y1,
	                        x2,
	                        y2,
	                        bb;
	                    if (command == "t" && tlen == 3) {
	                        if (absolute) {
	                            x1 = inver.x(0, 0);
	                            y1 = inver.y(0, 0);
	                            x2 = inver.x(t[1], t[2]);
	                            y2 = inver.y(t[1], t[2]);
	                            m.translate(x2 - x1, y2 - y1);
	                        } else {
	                            m.translate(t[1], t[2]);
	                        }
	                    } else if (command == "r") {
	                        if (tlen == 2) {
	                            bb = bb || el.getBBox(1);
	                            m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
	                            deg += t[1];
	                        } else if (tlen == 4) {
	                            if (absolute) {
	                                x2 = inver.x(t[2], t[3]);
	                                y2 = inver.y(t[2], t[3]);
	                                m.rotate(t[1], x2, y2);
	                            } else {
	                                m.rotate(t[1], t[2], t[3]);
	                            }
	                            deg += t[1];
	                        }
	                    } else if (command == "s") {
	                        if (tlen == 2 || tlen == 3) {
	                            bb = bb || el.getBBox(1);
	                            m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
	                            sx *= t[1];
	                            sy *= t[tlen - 1];
	                        } else if (tlen == 5) {
	                            if (absolute) {
	                                x2 = inver.x(t[3], t[4]);
	                                y2 = inver.y(t[3], t[4]);
	                                m.scale(t[1], t[2], x2, y2);
	                            } else {
	                                m.scale(t[1], t[2], t[3], t[4]);
	                            }
	                            sx *= t[1];
	                            sy *= t[2];
	                        }
	                    } else if (command == "m" && tlen == 7) {
	                        m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
	                    }
	                    _.dirtyT = 1;
	                    el.matrix = m;
	                }
	            }

	            /*\
	             * Element.matrix
	             [ property (object) ]
	             **
	             * Keeps @Matrix object, which represents element transformation
	            \*/
	            el.matrix = m;

	            _.sx = sx;
	            _.sy = sy;
	            _.deg = deg;
	            _.dx = dx = m.e;
	            _.dy = dy = m.f;

	            if (sx == 1 && sy == 1 && !deg && _.bbox) {
	                _.bbox.x += +dx;
	                _.bbox.y += +dy;
	            } else {
	                _.dirtyT = 1;
	            }
	        },
	        getEmpty = function (item) {
	            var l = item[0];
	            switch (l.toLowerCase()) {
	                case "t": return [l, 0, 0];
	                case "m": return [l, 1, 0, 0, 1, 0, 0];
	                case "r": if (item.length == 4) {
	                    return [l, 0, item[2], item[3]];
	                } else {
	                    return [l, 0];
	                }
	                case "s": if (item.length == 5) {
	                    return [l, 1, 1, item[3], item[4]];
	                } else if (item.length == 3) {
	                    return [l, 1, 1];
	                } else {
	                    return [l, 1];
	                }
	            }
	        },
	        equaliseTransform = R._equaliseTransform = function (t1, t2) {
	            t2 = Str(t2).replace(/\.{3}|\u2026/g, t1);
	            t1 = R.parseTransformString(t1) || [];
	            t2 = R.parseTransformString(t2) || [];
	            var maxlength = mmax(t1.length, t2.length),
	                from = [],
	                to = [],
	                i = 0, j, jj,
	                tt1, tt2;
	            for (; i < maxlength; i++) {
	                tt1 = t1[i] || getEmpty(t2[i]);
	                tt2 = t2[i] || getEmpty(tt1);
	                if ((tt1[0] != tt2[0]) ||
	                    (tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3])) ||
	                    (tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4]))
	                    ) {
	                    return;
	                }
	                from[i] = [];
	                to[i] = [];
	                for (j = 0, jj = mmax(tt1.length, tt2.length); j < jj; j++) {
	                    j in tt1 && (from[i][j] = tt1[j]);
	                    j in tt2 && (to[i][j] = tt2[j]);
	                }
	            }
	            return {
	                from: from,
	                to: to
	            };
	        };
	    R._getContainer = function (x, y, w, h) {
	        var container;
	        container = h == null && !R.is(x, "object") ? g.doc.getElementById(x) : x;
	        if (container == null) {
	            return;
	        }
	        if (container.tagName) {
	            if (y == null) {
	                return {
	                    container: container,
	                    width: container.style.pixelWidth || container.offsetWidth,
	                    height: container.style.pixelHeight || container.offsetHeight
	                };
	            } else {
	                return {
	                    container: container,
	                    width: y,
	                    height: w
	                };
	            }
	        }
	        return {
	            container: 1,
	            x: x,
	            y: y,
	            width: w,
	            height: h
	        };
	    };
	    /*\
	     * Raphael.pathToRelative
	     [ method ]
	     **
	     * Utility method
	     **
	     * Converts path to relative form
	     > Parameters
	     - pathString (string|array) path string or array of segments
	     = (array) array of segments.
	    \*/
	    R.pathToRelative = pathToRelative;
	    R._engine = {};
	    /*\
	     * Raphael.path2curve
	     [ method ]
	     **
	     * Utility method
	     **
	     * Converts path to a new path where all segments are cubic bezier curves.
	     > Parameters
	     - pathString (string|array) path string or array of segments
	     = (array) array of segments.
	    \*/
	    R.path2curve = path2curve;
	    /*\
	     * Raphael.matrix
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns matrix based on given parameters.
	     > Parameters
	     - a (number)
	     - b (number)
	     - c (number)
	     - d (number)
	     - e (number)
	     - f (number)
	     = (object) @Matrix
	    \*/
	    R.matrix = function (a, b, c, d, e, f) {
	        return new Matrix(a, b, c, d, e, f);
	    };
	    function Matrix(a, b, c, d, e, f) {
	        if (a != null) {
	            this.a = +a;
	            this.b = +b;
	            this.c = +c;
	            this.d = +d;
	            this.e = +e;
	            this.f = +f;
	        } else {
	            this.a = 1;
	            this.b = 0;
	            this.c = 0;
	            this.d = 1;
	            this.e = 0;
	            this.f = 0;
	        }
	    }
	    (function (matrixproto) {
	        /*\
	         * Matrix.add
	         [ method ]
	         **
	         * Adds given matrix to existing one.
	         > Parameters
	         - a (number)
	         - b (number)
	         - c (number)
	         - d (number)
	         - e (number)
	         - f (number)
	         or
	         - matrix (object) @Matrix
	        \*/
	        matrixproto.add = function (a, b, c, d, e, f) {
	            var out = [[], [], []],
	                m = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
	                matrix = [[a, c, e], [b, d, f], [0, 0, 1]],
	                x, y, z, res;

	            if (a && a instanceof Matrix) {
	                matrix = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]];
	            }

	            for (x = 0; x < 3; x++) {
	                for (y = 0; y < 3; y++) {
	                    res = 0;
	                    for (z = 0; z < 3; z++) {
	                        res += m[x][z] * matrix[z][y];
	                    }
	                    out[x][y] = res;
	                }
	            }
	            this.a = out[0][0];
	            this.b = out[1][0];
	            this.c = out[0][1];
	            this.d = out[1][1];
	            this.e = out[0][2];
	            this.f = out[1][2];
	        };
	        /*\
	         * Matrix.invert
	         [ method ]
	         **
	         * Returns inverted version of the matrix
	         = (object) @Matrix
	        \*/
	        matrixproto.invert = function () {
	            var me = this,
	                x = me.a * me.d - me.b * me.c;
	            return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
	        };
	        /*\
	         * Matrix.clone
	         [ method ]
	         **
	         * Returns copy of the matrix
	         = (object) @Matrix
	        \*/
	        matrixproto.clone = function () {
	            return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
	        };
	        /*\
	         * Matrix.translate
	         [ method ]
	         **
	         * Translate the matrix
	         > Parameters
	         - x (number)
	         - y (number)
	        \*/
	        matrixproto.translate = function (x, y) {
	            this.add(1, 0, 0, 1, x, y);
	        };
	        /*\
	         * Matrix.scale
	         [ method ]
	         **
	         * Scales the matrix
	         > Parameters
	         - x (number)
	         - y (number) #optional
	         - cx (number) #optional
	         - cy (number) #optional
	        \*/
	        matrixproto.scale = function (x, y, cx, cy) {
	            y == null && (y = x);
	            (cx || cy) && this.add(1, 0, 0, 1, cx, cy);
	            this.add(x, 0, 0, y, 0, 0);
	            (cx || cy) && this.add(1, 0, 0, 1, -cx, -cy);
	        };
	        /*\
	         * Matrix.rotate
	         [ method ]
	         **
	         * Rotates the matrix
	         > Parameters
	         - a (number)
	         - x (number)
	         - y (number)
	        \*/
	        matrixproto.rotate = function (a, x, y) {
	            a = R.rad(a);
	            x = x || 0;
	            y = y || 0;
	            var cos = +math.cos(a).toFixed(9),
	                sin = +math.sin(a).toFixed(9);
	            this.add(cos, sin, -sin, cos, x, y);
	            this.add(1, 0, 0, 1, -x, -y);
	        };
	        /*\
	         * Matrix.x
	         [ method ]
	         **
	         * Return x coordinate for given point after transformation described by the matrix. See also @Matrix.y
	         > Parameters
	         - x (number)
	         - y (number)
	         = (number) x
	        \*/
	        matrixproto.x = function (x, y) {
	            return x * this.a + y * this.c + this.e;
	        };
	        /*\
	         * Matrix.y
	         [ method ]
	         **
	         * Return y coordinate for given point after transformation described by the matrix. See also @Matrix.x
	         > Parameters
	         - x (number)
	         - y (number)
	         = (number) y
	        \*/
	        matrixproto.y = function (x, y) {
	            return x * this.b + y * this.d + this.f;
	        };
	        matrixproto.get = function (i) {
	            return +this[Str.fromCharCode(97 + i)].toFixed(4);
	        };
	        matrixproto.toString = function () {
	            return R.svg ?
	                "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" :
	                [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join();
	        };
	        matrixproto.toFilter = function () {
	            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) +
	                ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) +
	                ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')";
	        };
	        matrixproto.offset = function () {
	            return [this.e.toFixed(4), this.f.toFixed(4)];
	        };
	        function norm(a) {
	            return a[0] * a[0] + a[1] * a[1];
	        }
	        function normalize(a) {
	            var mag = math.sqrt(norm(a));
	            a[0] && (a[0] /= mag);
	            a[1] && (a[1] /= mag);
	        }
	        /*\
	         * Matrix.split
	         [ method ]
	         **
	         * Splits matrix into primitive transformations
	         = (object) in format:
	         o dx (number) translation by x
	         o dy (number) translation by y
	         o scalex (number) scale by x
	         o scaley (number) scale by y
	         o shear (number) shear
	         o rotate (number) rotation in deg
	         o isSimple (boolean) could it be represented via simple transformations
	        \*/
	        matrixproto.split = function () {
	            var out = {};
	            // translation
	            out.dx = this.e;
	            out.dy = this.f;

	            // scale and shear
	            var row = [[this.a, this.c], [this.b, this.d]];
	            out.scalex = math.sqrt(norm(row[0]));
	            normalize(row[0]);

	            out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
	            row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];

	            out.scaley = math.sqrt(norm(row[1]));
	            normalize(row[1]);
	            out.shear /= out.scaley;

	            // rotation
	            var sin = -row[0][1],
	                cos = row[1][1];
	            if (cos < 0) {
	                out.rotate = R.deg(math.acos(cos));
	                if (sin < 0) {
	                    out.rotate = 360 - out.rotate;
	                }
	            } else {
	                out.rotate = R.deg(math.asin(sin));
	            }

	            out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
	            out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
	            out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
	            return out;
	        };
	        /*\
	         * Matrix.toTransformString
	         [ method ]
	         **
	         * Return transform string that represents given matrix
	         = (string) transform string
	        \*/
	        matrixproto.toTransformString = function (shorter) {
	            var s = shorter || this[split]();
	            if (s.isSimple) {
	                s.scalex = +s.scalex.toFixed(4);
	                s.scaley = +s.scaley.toFixed(4);
	                s.rotate = +s.rotate.toFixed(4);
	                return  (s.dx || s.dy ? "t" + [s.dx, s.dy] : E) +
	                        (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E) +
	                        (s.rotate ? "r" + [s.rotate, 0, 0] : E);
	            } else {
	                return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
	            }
	        };
	    })(Matrix.prototype);

	    // WebKit rendering bug workaround method
	    var version = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
	    if ((navigator.vendor == "Apple Computer, Inc.") && (version && version[1] < 4 || navigator.platform.slice(0, 2) == "iP") ||
	        (navigator.vendor == "Google Inc." && version && version[1] < 8)) {
	        /*\
	         * Paper.safari
	         [ method ]
	         **
	         * There is an inconvenient rendering bug in Safari (WebKit):
	         * sometimes the rendering should be forced.
	         * This method should help with dealing with this bug.
	        \*/
	        paperproto.safari = function () {
	            var rect = this.rect(-99, -99, this.width + 99, this.height + 99).attr({stroke: "none"});
	            setTimeout(function () {rect.remove();});
	        };
	    } else {
	        paperproto.safari = fun;
	    }

	    var preventDefault = function () {
	        this.returnValue = false;
	    },
	    preventTouch = function () {
	        return this.originalEvent.preventDefault();
	    },
	    stopPropagation = function () {
	        this.cancelBubble = true;
	    },
	    stopTouch = function () {
	        return this.originalEvent.stopPropagation();
	    },
	    getEventPosition = function (e) {
	        var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
	            scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft;

	        return {
	            x: e.clientX + scrollX,
	            y: e.clientY + scrollY
	        };
	    },
	    addEvent = (function () {
	        if (g.doc.addEventListener) {
	            return function (obj, type, fn, element) {
	                var f = function (e) {
	                    var pos = getEventPosition(e);
	                    return fn.call(element, e, pos.x, pos.y);
	                };
	                obj.addEventListener(type, f, false);

	                if (supportsTouch && touchMap[type]) {
	                    var _f = function (e) {
	                        var pos = getEventPosition(e),
	                            olde = e;

	                        for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
	                            if (e.targetTouches[i].target == obj) {
	                                e = e.targetTouches[i];
	                                e.originalEvent = olde;
	                                e.preventDefault = preventTouch;
	                                e.stopPropagation = stopTouch;
	                                break;
	                            }
	                        }

	                        return fn.call(element, e, pos.x, pos.y);
	                    };
	                    obj.addEventListener(touchMap[type], _f, false);
	                }

	                return function () {
	                    obj.removeEventListener(type, f, false);

	                    if (supportsTouch && touchMap[type])
	                        obj.removeEventListener(touchMap[type], _f, false);

	                    return true;
	                };
	            };
	        } else if (g.doc.attachEvent) {
	            return function (obj, type, fn, element) {
	                var f = function (e) {
	                    e = e || g.win.event;
	                    var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
	                        scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
	                        x = e.clientX + scrollX,
	                        y = e.clientY + scrollY;
	                    e.preventDefault = e.preventDefault || preventDefault;
	                    e.stopPropagation = e.stopPropagation || stopPropagation;
	                    return fn.call(element, e, x, y);
	                };
	                obj.attachEvent("on" + type, f);
	                var detacher = function () {
	                    obj.detachEvent("on" + type, f);
	                    return true;
	                };
	                return detacher;
	            };
	        }
	    })(),
	    drag = [],
	    dragMove = function (e) {
	        var x = e.clientX,
	            y = e.clientY,
	            scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
	            scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
	            dragi,
	            j = drag.length;
	        while (j--) {
	            dragi = drag[j];
	            if (supportsTouch && e.touches) {
	                var i = e.touches.length,
	                    touch;
	                while (i--) {
	                    touch = e.touches[i];
	                    if (touch.identifier == dragi.el._drag.id) {
	                        x = touch.clientX;
	                        y = touch.clientY;
	                        (e.originalEvent ? e.originalEvent : e).preventDefault();
	                        break;
	                    }
	                }
	            } else {
	                e.preventDefault();
	            }
	            var node = dragi.el.node,
	                o,
	                next = node.nextSibling,
	                parent = node.parentNode,
	                display = node.style.display;
	            g.win.opera && parent.removeChild(node);
	            node.style.display = "none";
	            o = dragi.el.paper.getElementByPoint(x, y);
	            node.style.display = display;
	            g.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
	            o && eve("raphael.drag.over." + dragi.el.id, dragi.el, o);
	            x += scrollX;
	            y += scrollY;
	            eve("raphael.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
	        }
	    },
	    dragUp = function (e) {
	        R.unmousemove(dragMove).unmouseup(dragUp);
	        var i = drag.length,
	            dragi;
	        while (i--) {
	            dragi = drag[i];
	            dragi.el._drag = {};
	            eve("raphael.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
	        }
	        drag = [];
	    },
	    /*\
	     * Raphael.el
	     [ property (object) ]
	     **
	     * You can add your own method to elements. This is usefull when you want to hack default functionality or
	     * want to wrap some common transformation or attributes in one method. In difference to canvas methods,
	     * you can redefine element method at any time. Expending element methods wouldn’t affect set.
	     > Usage
	     | Raphael.el.red = function () {
	     |     this.attr({fill: "#f00"});
	     | };
	     | // then use it
	     | paper.circle(100, 100, 20).red();
	    \*/
	    elproto = R.el = {};
	    /*\
	     * Element.click
	     [ method ]
	     **
	     * Adds event handler for click for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unclick
	     [ method ]
	     **
	     * Removes event handler for click for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.dblclick
	     [ method ]
	     **
	     * Adds event handler for double click for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.undblclick
	     [ method ]
	     **
	     * Removes event handler for double click for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.mousedown
	     [ method ]
	     **
	     * Adds event handler for mousedown for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmousedown
	     [ method ]
	     **
	     * Removes event handler for mousedown for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.mousemove
	     [ method ]
	     **
	     * Adds event handler for mousemove for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmousemove
	     [ method ]
	     **
	     * Removes event handler for mousemove for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.mouseout
	     [ method ]
	     **
	     * Adds event handler for mouseout for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmouseout
	     [ method ]
	     **
	     * Removes event handler for mouseout for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.mouseover
	     [ method ]
	     **
	     * Adds event handler for mouseover for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmouseover
	     [ method ]
	     **
	     * Removes event handler for mouseover for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.mouseup
	     [ method ]
	     **
	     * Adds event handler for mouseup for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmouseup
	     [ method ]
	     **
	     * Removes event handler for mouseup for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.touchstart
	     [ method ]
	     **
	     * Adds event handler for touchstart for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.untouchstart
	     [ method ]
	     **
	     * Removes event handler for touchstart for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.touchmove
	     [ method ]
	     **
	     * Adds event handler for touchmove for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.untouchmove
	     [ method ]
	     **
	     * Removes event handler for touchmove for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.touchend
	     [ method ]
	     **
	     * Adds event handler for touchend for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.untouchend
	     [ method ]
	     **
	     * Removes event handler for touchend for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.touchcancel
	     [ method ]
	     **
	     * Adds event handler for touchcancel for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.untouchcancel
	     [ method ]
	     **
	     * Removes event handler for touchcancel for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/
	    for (var i = events.length; i--;) {
	        (function (eventName) {
	            R[eventName] = elproto[eventName] = function (fn, scope) {
	                if (R.is(fn, "function")) {
	                    this.events = this.events || [];
	                    this.events.push({name: eventName, f: fn, unbind: addEvent(this.shape || this.node || g.doc, eventName, fn, scope || this)});
	                }
	                return this;
	            };
	            R["un" + eventName] = elproto["un" + eventName] = function (fn) {
	                var events = this.events || [],
	                    l = events.length;
	                while (l--){
	                    if (events[l].name == eventName && (R.is(fn, "undefined") || events[l].f == fn)) {
	                        events[l].unbind();
	                        events.splice(l, 1);
	                        !events.length && delete this.events;
	                    }
	                }
	                return this;
	            };
	        })(events[i]);
	    }

	    /*\
	     * Element.data
	     [ method ]
	     **
	     * Adds or retrieves given value asociated with given key.
	     **
	     * See also @Element.removeData
	     > Parameters
	     - key (string) key to store data
	     - value (any) #optional value to store
	     = (object) @Element
	     * or, if value is not specified:
	     = (any) value
	     * or, if key and value are not specified:
	     = (object) Key/value pairs for all the data associated with the element.
	     > Usage
	     | for (var i = 0, i < 5, i++) {
	     |     paper.circle(10 + 15 * i, 10, 10)
	     |          .attr({fill: "#000"})
	     |          .data("i", i)
	     |          .click(function () {
	     |             alert(this.data("i"));
	     |          });
	     | }
	    \*/
	    elproto.data = function (key, value) {
	        var data = eldata[this.id] = eldata[this.id] || {};
	        if (arguments.length == 0) {
	            return data;
	        }
	        if (arguments.length == 1) {
	            if (R.is(key, "object")) {
	                for (var i in key) if (key[has](i)) {
	                    this.data(i, key[i]);
	                }
	                return this;
	            }
	            eve("raphael.data.get." + this.id, this, data[key], key);
	            return data[key];
	        }
	        data[key] = value;
	        eve("raphael.data.set." + this.id, this, value, key);
	        return this;
	    };
	    /*\
	     * Element.removeData
	     [ method ]
	     **
	     * Removes value associated with an element by given key.
	     * If key is not provided, removes all the data of the element.
	     > Parameters
	     - key (string) #optional key
	     = (object) @Element
	    \*/
	    elproto.removeData = function (key) {
	        if (key == null) {
	            eldata[this.id] = {};
	        } else {
	            eldata[this.id] && delete eldata[this.id][key];
	        }
	        return this;
	    };
	     /*\
	     * Element.getData
	     [ method ]
	     **
	     * Retrieves the element data
	     = (object) data
	    \*/
	    elproto.getData = function () {
	        return clone(eldata[this.id] || {});
	    };
	    /*\
	     * Element.hover
	     [ method ]
	     **
	     * Adds event handlers for hover for the element.
	     > Parameters
	     - f_in (function) handler for hover in
	     - f_out (function) handler for hover out
	     - icontext (object) #optional context for hover in handler
	     - ocontext (object) #optional context for hover out handler
	     = (object) @Element
	    \*/
	    elproto.hover = function (f_in, f_out, scope_in, scope_out) {
	        return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
	    };
	    /*\
	     * Element.unhover
	     [ method ]
	     **
	     * Removes event handlers for hover for the element.
	     > Parameters
	     - f_in (function) handler for hover in
	     - f_out (function) handler for hover out
	     = (object) @Element
	    \*/
	    elproto.unhover = function (f_in, f_out) {
	        return this.unmouseover(f_in).unmouseout(f_out);
	    };
	    var draggable = [];
	    /*\
	     * Element.drag
	     [ method ]
	     **
	     * Adds event handlers for drag of the element.
	     > Parameters
	     - onmove (function) handler for moving
	     - onstart (function) handler for drag start
	     - onend (function) handler for drag end
	     - mcontext (object) #optional context for moving handler
	     - scontext (object) #optional context for drag start handler
	     - econtext (object) #optional context for drag end handler
	     * Additionaly following `drag` events will be triggered: `drag.start.<id>` on start,
	     * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element will be dragged over another element
	     * `drag.over.<id>` will be fired as well.
	     *
	     * Start event and start handler will be called in specified context or in context of the element with following parameters:
	     o x (number) x position of the mouse
	     o y (number) y position of the mouse
	     o event (object) DOM event object
	     * Move event and move handler will be called in specified context or in context of the element with following parameters:
	     o dx (number) shift by x from the start point
	     o dy (number) shift by y from the start point
	     o x (number) x position of the mouse
	     o y (number) y position of the mouse
	     o event (object) DOM event object
	     * End event and end handler will be called in specified context or in context of the element with following parameters:
	     o event (object) DOM event object
	     = (object) @Element
	    \*/
	    elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
	        function start(e) {
	            (e.originalEvent || e).preventDefault();
	            var x = e.clientX,
	                y = e.clientY,
	                scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
	                scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft;
	            this._drag.id = e.identifier;
	            if (supportsTouch && e.touches) {
	                var i = e.touches.length, touch;
	                while (i--) {
	                    touch = e.touches[i];
	                    this._drag.id = touch.identifier;
	                    if (touch.identifier == this._drag.id) {
	                        x = touch.clientX;
	                        y = touch.clientY;
	                        break;
	                    }
	                }
	            }
	            this._drag.x = x + scrollX;
	            this._drag.y = y + scrollY;
	            !drag.length && R.mousemove(dragMove).mouseup(dragUp);
	            drag.push({el: this, move_scope: move_scope, start_scope: start_scope, end_scope: end_scope});
	            onstart && eve.on("raphael.drag.start." + this.id, onstart);
	            onmove && eve.on("raphael.drag.move." + this.id, onmove);
	            onend && eve.on("raphael.drag.end." + this.id, onend);
	            eve("raphael.drag.start." + this.id, start_scope || move_scope || this, e.clientX + scrollX, e.clientY + scrollY, e);
	        }
	        this._drag = {};
	        draggable.push({el: this, start: start});
	        this.mousedown(start);
	        return this;
	    };
	    /*\
	     * Element.onDragOver
	     [ method ]
	     **
	     * Shortcut for assigning event handler for `drag.over.<id>` event, where id is id of the element (see @Element.id).
	     > Parameters
	     - f (function) handler for event, first argument would be the element you are dragging over
	    \*/
	    elproto.onDragOver = function (f) {
	        f ? eve.on("raphael.drag.over." + this.id, f) : eve.unbind("raphael.drag.over." + this.id);
	    };
	    /*\
	     * Element.undrag
	     [ method ]
	     **
	     * Removes all drag event handlers from given element.
	    \*/
	    elproto.undrag = function () {
	        var i = draggable.length;
	        while (i--) if (draggable[i].el == this) {
	            this.unmousedown(draggable[i].start);
	            draggable.splice(i, 1);
	            eve.unbind("raphael.drag.*." + this.id);
	        }
	        !draggable.length && R.unmousemove(dragMove).unmouseup(dragUp);
	        drag = [];
	    };
	    /*\
	     * Paper.circle
	     [ method ]
	     **
	     * Draws a circle.
	     **
	     > Parameters
	     **
	     - x (number) x coordinate of the centre
	     - y (number) y coordinate of the centre
	     - r (number) radius
	     = (object) Raphaël element object with type “circle”
	     **
	     > Usage
	     | var c = paper.circle(50, 50, 40);
	    \*/
	    paperproto.circle = function (x, y, r) {
	        var out = R._engine.circle(this, x || 0, y || 0, r || 0);
	        this.__set__ && this.__set__.push(out);
	        return out;
	    };
	    /*\
	     * Paper.rect
	     [ method ]
	     *
	     * Draws a rectangle.
	     **
	     > Parameters
	     **
	     - x (number) x coordinate of the top left corner
	     - y (number) y coordinate of the top left corner
	     - width (number) width
	     - height (number) height
	     - r (number) #optional radius for rounded corners, default is 0
	     = (object) Raphaël element object with type “rect”
	     **
	     > Usage
	     | // regular rectangle
	     | var c = paper.rect(10, 10, 50, 50);
	     | // rectangle with rounded corners
	     | var c = paper.rect(40, 40, 50, 50, 10);
	    \*/
	    paperproto.rect = function (x, y, w, h, r) {
	        var out = R._engine.rect(this, x || 0, y || 0, w || 0, h || 0, r || 0);
	        this.__set__ && this.__set__.push(out);
	        return out;
	    };
	    /*\
	     * Paper.ellipse
	     [ method ]
	     **
	     * Draws an ellipse.
	     **
	     > Parameters
	     **
	     - x (number) x coordinate of the centre
	     - y (number) y coordinate of the centre
	     - rx (number) horizontal radius
	     - ry (number) vertical radius
	     = (object) Raphaël element object with type “ellipse”
	     **
	     > Usage
	     | var c = paper.ellipse(50, 50, 40, 20);
	    \*/
	    paperproto.ellipse = function (x, y, rx, ry) {
	        var out = R._engine.ellipse(this, x || 0, y || 0, rx || 0, ry || 0);
	        this.__set__ && this.__set__.push(out);
	        return out;
	    };
	    /*\
	     * Paper.path
	     [ method ]
	     **
	     * Creates a path element by given path data string.
	     > Parameters
	     - pathString (string) #optional path string in SVG format.
	     * Path string consists of one-letter commands, followed by comma seprarated arguments in numercal form. Example:
	     | "M10,20L30,40"
	     * Here we can see two commands: “M”, with arguments `(10, 20)` and “L” with arguments `(30, 40)`. Upper case letter mean command is absolute, lower case—relative.
	     *
	     # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a>.</p>
	     # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
	     # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
	     # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
	     # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
	     # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
	     # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
	     # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
	     # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
	     # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
	     # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
	     # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
	     # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
	     * * “Catmull-Rom curveto” is a not standard SVG command and added in 2.0 to make life easier.
	     * Note: there is a special case when path consist of just three commands: “M10,10R…z”. In this case path will smoothly connects to its beginning.
	     > Usage
	     | var c = paper.path("M10 10L90 90");
	     | // draw a diagonal line:
	     | // move to 10,10, line to 90,90
	     * For example of path strings, check out these icons: http://raphaeljs.com/icons/
	    \*/
	    paperproto.path = function (pathString) {
	        pathString && !R.is(pathString, string) && !R.is(pathString[0], array) && (pathString += E);
	        var out = R._engine.path(R.format[apply](R, arguments), this);
	        this.__set__ && this.__set__.push(out);
	        return out;
	    };
	    /*\
	     * Paper.image
	     [ method ]
	     **
	     * Embeds an image into the surface.
	     **
	     > Parameters
	     **
	     - src (string) URI of the source image
	     - x (number) x coordinate position
	     - y (number) y coordinate position
	     - width (number) width of the image
	     - height (number) height of the image
	     = (object) Raphaël element object with type “image”
	     **
	     > Usage
	     | var c = paper.image("apple.png", 10, 10, 80, 80);
	    \*/
	    paperproto.image = function (src, x, y, w, h) {
	        var out = R._engine.image(this, src || "about:blank", x || 0, y || 0, w || 0, h || 0);
	        this.__set__ && this.__set__.push(out);
	        return out;
	    };
	    /*\
	     * Paper.text
	     [ method ]
	     **
	     * Draws a text string. If you need line breaks, put “\n” in the string.
	     **
	     > Parameters
	     **
	     - x (number) x coordinate position
	     - y (number) y coordinate position
	     - text (string) The text string to draw
	     = (object) Raphaël element object with type “text”
	     **
	     > Usage
	     | var t = paper.text(50, 50, "Raphaël\nkicks\nbutt!");
	    \*/
	    paperproto.text = function (x, y, text) {
	        var out = R._engine.text(this, x || 0, y || 0, Str(text));
	        this.__set__ && this.__set__.push(out);
	        return out;
	    };
	    /*\
	     * Paper.set
	     [ method ]
	     **
	     * Creates array-like object to keep and operate several elements at once.
	     * Warning: it doesn’t create any elements for itself in the page, it just groups existing elements.
	     * Sets act as pseudo elements — all methods available to an element can be used on a set.
	     = (object) array-like object that represents set of elements
	     **
	     > Usage
	     | var st = paper.set();
	     | st.push(
	     |     paper.circle(10, 10, 5),
	     |     paper.circle(30, 10, 5)
	     | );
	     | st.attr({fill: "red"}); // changes the fill of both circles
	    \*/
	    paperproto.set = function (itemsArray) {
	        !R.is(itemsArray, "array") && (itemsArray = Array.prototype.splice.call(arguments, 0, arguments.length));
	        var out = new Set(itemsArray);
	        this.__set__ && this.__set__.push(out);
	        out["paper"] = this;
	        out["type"] = "set";
	        return out;
	    };
	    /*\
	     * Paper.setStart
	     [ method ]
	     **
	     * Creates @Paper.set. All elements that will be created after calling this method and before calling
	     * @Paper.setFinish will be added to the set.
	     **
	     > Usage
	     | paper.setStart();
	     | paper.circle(10, 10, 5),
	     | paper.circle(30, 10, 5)
	     | var st = paper.setFinish();
	     | st.attr({fill: "red"}); // changes the fill of both circles
	    \*/
	    paperproto.setStart = function (set) {
	        this.__set__ = set || this.set();
	    };
	    /*\
	     * Paper.setFinish
	     [ method ]
	     **
	     * See @Paper.setStart. This method finishes catching and returns resulting set.
	     **
	     = (object) set
	    \*/
	    paperproto.setFinish = function (set) {
	        var out = this.__set__;
	        delete this.__set__;
	        return out;
	    };
	    /*\
	     * Paper.getSize
	     [ method ]
	     **
	     * Obtains current paper actual size.
	     **
	     = (object)
	     \*/
	    paperproto.getSize = function () {
	        var container = this.canvas.parentNode;
	        return {
	            width: container.offsetWidth,
	            height: container.offsetHeight
	                };
	        };
	    /*\
	     * Paper.setSize
	     [ method ]
	     **
	     * If you need to change dimensions of the canvas call this method
	     **
	     > Parameters
	     **
	     - width (number) new width of the canvas
	     - height (number) new height of the canvas
	    \*/
	    paperproto.setSize = function (width, height) {
	        return R._engine.setSize.call(this, width, height);
	    };
	    /*\
	     * Paper.setViewBox
	     [ method ]
	     **
	     * Sets the view box of the paper. Practically it gives you ability to zoom and pan whole paper surface by
	     * specifying new boundaries.
	     **
	     > Parameters
	     **
	     - x (number) new x position, default is `0`
	     - y (number) new y position, default is `0`
	     - w (number) new width of the canvas
	     - h (number) new height of the canvas
	     - fit (boolean) `true` if you want graphics to fit into new boundary box
	    \*/
	    paperproto.setViewBox = function (x, y, w, h, fit) {
	        return R._engine.setViewBox.call(this, x, y, w, h, fit);
	    };
	    /*\
	     * Paper.top
	     [ property ]
	     **
	     * Points to the topmost element on the paper
	    \*/
	    /*\
	     * Paper.bottom
	     [ property ]
	     **
	     * Points to the bottom element on the paper
	    \*/
	    paperproto.top = paperproto.bottom = null;
	    /*\
	     * Paper.raphael
	     [ property ]
	     **
	     * Points to the @Raphael object/function
	    \*/
	    paperproto.raphael = R;
	    var getOffset = function (elem) {
	        var box = elem.getBoundingClientRect(),
	            doc = elem.ownerDocument,
	            body = doc.body,
	            docElem = doc.documentElement,
	            clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
	            top  = box.top  + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop ) - clientTop,
	            left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
	        return {
	            y: top,
	            x: left
	        };
	    };
	    /*\
	     * Paper.getElementByPoint
	     [ method ]
	     **
	     * Returns you topmost element under given point.
	     **
	     = (object) Raphaël element object
	     > Parameters
	     **
	     - x (number) x coordinate from the top left corner of the window
	     - y (number) y coordinate from the top left corner of the window
	     > Usage
	     | paper.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});
	    \*/
	    paperproto.getElementByPoint = function (x, y) {
	        var paper = this,
	            svg = paper.canvas,
	            target = g.doc.elementFromPoint(x, y);
	        if (g.win.opera && target.tagName == "svg") {
	            var so = getOffset(svg),
	                sr = svg.createSVGRect();
	            sr.x = x - so.x;
	            sr.y = y - so.y;
	            sr.width = sr.height = 1;
	            var hits = svg.getIntersectionList(sr, null);
	            if (hits.length) {
	                target = hits[hits.length - 1];
	            }
	        }
	        if (!target) {
	            return null;
	        }
	        while (target.parentNode && target != svg.parentNode && !target.raphael) {
	            target = target.parentNode;
	        }
	        target == paper.canvas.parentNode && (target = svg);
	        target = target && target.raphael ? paper.getById(target.raphaelid) : null;
	        return target;
	    };

	    /*\
	     * Paper.getElementsByBBox
	     [ method ]
	     **
	     * Returns set of elements that have an intersecting bounding box
	     **
	     > Parameters
	     **
	     - bbox (object) bbox to check with
	     = (object) @Set
	     \*/
	    paperproto.getElementsByBBox = function (bbox) {
	        var set = this.set();
	        this.forEach(function (el) {
	            if (R.isBBoxIntersect(el.getBBox(), bbox)) {
	                set.push(el);
	            }
	        });
	        return set;
	    };

	    /*\
	     * Paper.getById
	     [ method ]
	     **
	     * Returns you element by its internal ID.
	     **
	     > Parameters
	     **
	     - id (number) id
	     = (object) Raphaël element object
	    \*/
	    paperproto.getById = function (id) {
	        var bot = this.bottom;
	        while (bot) {
	            if (bot.id == id) {
	                return bot;
	            }
	            bot = bot.next;
	        }
	        return null;
	    };
	    /*\
	     * Paper.forEach
	     [ method ]
	     **
	     * Executes given function for each element on the paper
	     *
	     * If callback function returns `false` it will stop loop running.
	     **
	     > Parameters
	     **
	     - callback (function) function to run
	     - thisArg (object) context object for the callback
	     = (object) Paper object
	     > Usage
	     | paper.forEach(function (el) {
	     |     el.attr({ stroke: "blue" });
	     | });
	    \*/
	    paperproto.forEach = function (callback, thisArg) {
	        var bot = this.bottom;
	        while (bot) {
	            if (callback.call(thisArg, bot) === false) {
	                return this;
	            }
	            bot = bot.next;
	        }
	        return this;
	    };
	    /*\
	     * Paper.getElementsByPoint
	     [ method ]
	     **
	     * Returns set of elements that have common point inside
	     **
	     > Parameters
	     **
	     - x (number) x coordinate of the point
	     - y (number) y coordinate of the point
	     = (object) @Set
	    \*/
	    paperproto.getElementsByPoint = function (x, y) {
	        var set = this.set();
	        this.forEach(function (el) {
	            if (el.isPointInside(x, y)) {
	                set.push(el);
	            }
	        });
	        return set;
	    };
	    function x_y() {
	        return this.x + S + this.y;
	    }
	    function x_y_w_h() {
	        return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
	    }
	    /*\
	     * Element.isPointInside
	     [ method ]
	     **
	     * Determine if given point is inside this element’s shape
	     **
	     > Parameters
	     **
	     - x (number) x coordinate of the point
	     - y (number) y coordinate of the point
	     = (boolean) `true` if point inside the shape
	    \*/
	    elproto.isPointInside = function (x, y) {
	        var rp = this.realPath = getPath[this.type](this);
	        if (this.attr('transform') && this.attr('transform').length) {
	            rp = R.transformPath(rp, this.attr('transform'));
	        }
	        return R.isPointInsidePath(rp, x, y);
	    };
	    /*\
	     * Element.getBBox
	     [ method ]
	     **
	     * Return bounding box for a given element
	     **
	     > Parameters
	     **
	     - isWithoutTransform (boolean) flag, `true` if you want to have bounding box before transformations. Default is `false`.
	     = (object) Bounding box object:
	     o {
	     o     x: (number) top left corner x
	     o     y: (number) top left corner y
	     o     x2: (number) bottom right corner x
	     o     y2: (number) bottom right corner y
	     o     width: (number) width
	     o     height: (number) height
	     o }
	    \*/
	    elproto.getBBox = function (isWithoutTransform) {
	        if (this.removed) {
	            return {};
	        }
	        var _ = this._;
	        if (isWithoutTransform) {
	            if (_.dirty || !_.bboxwt) {
	                this.realPath = getPath[this.type](this);
	                _.bboxwt = pathDimensions(this.realPath);
	                _.bboxwt.toString = x_y_w_h;
	                _.dirty = 0;
	            }
	            return _.bboxwt;
	        }
	        if (_.dirty || _.dirtyT || !_.bbox) {
	            if (_.dirty || !this.realPath) {
	                _.bboxwt = 0;
	                this.realPath = getPath[this.type](this);
	            }
	            _.bbox = pathDimensions(mapPath(this.realPath, this.matrix));
	            _.bbox.toString = x_y_w_h;
	            _.dirty = _.dirtyT = 0;
	        }
	        return _.bbox;
	    };
	    /*\
	     * Element.clone
	     [ method ]
	     **
	     = (object) clone of a given element
	     **
	    \*/
	    elproto.clone = function () {
	        if (this.removed) {
	            return null;
	        }
	        var out = this.paper[this.type]().attr(this.attr());
	        this.__set__ && this.__set__.push(out);
	        return out;
	    };
	    /*\
	     * Element.glow
	     [ method ]
	     **
	     * Return set of elements that create glow-like effect around given element. See @Paper.set.
	     *
	     * Note: Glow is not connected to the element. If you change element attributes it won’t adjust itself.
	     **
	     > Parameters
	     **
	     - glow (object) #optional parameters object with all properties optional:
	     o {
	     o     width (number) size of the glow, default is `10`
	     o     fill (boolean) will it be filled, default is `false`
	     o     opacity (number) opacity, default is `0.5`
	     o     offsetx (number) horizontal offset, default is `0`
	     o     offsety (number) vertical offset, default is `0`
	     o     color (string) glow colour, default is `black`
	     o }
	     = (object) @Paper.set of elements that represents glow
	    \*/
	    elproto.glow = function (glow) {
	        if (this.type == "text") {
	            return null;
	        }
	        glow = glow || {};
	        var s = {
	            width: (glow.width || 10) + (+this.attr("stroke-width") || 1),
	            fill: glow.fill || false,
	            opacity: glow.opacity || .5,
	            offsetx: glow.offsetx || 0,
	            offsety: glow.offsety || 0,
	            color: glow.color || "#000"
	        },
	            c = s.width / 2,
	            r = this.paper,
	            out = r.set(),
	            path = this.realPath || getPath[this.type](this);
	        path = this.matrix ? mapPath(path, this.matrix) : path;
	        for (var i = 1; i < c + 1; i++) {
	            out.push(r.path(path).attr({
	                stroke: s.color,
	                fill: s.fill ? s.color : "none",
	                "stroke-linejoin": "round",
	                "stroke-linecap": "round",
	                "stroke-width": +(s.width / c * i).toFixed(3),
	                opacity: +(s.opacity / c).toFixed(3)
	            }));
	        }
	        return out.insertBefore(this).translate(s.offsetx, s.offsety);
	    };
	    var curveslengths = {},
	    getPointAtSegmentLength = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
	        if (length == null) {
	            return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
	        } else {
	            return R.findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, getTatLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
	        }
	    },
	    getLengthFactory = function (istotal, subpath) {
	        return function (path, length, onlystart) {
	            path = path2curve(path);
	            var x, y, p, l, sp = "", subpaths = {}, point,
	                len = 0;
	            for (var i = 0, ii = path.length; i < ii; i++) {
	                p = path[i];
	                if (p[0] == "M") {
	                    x = +p[1];
	                    y = +p[2];
	                } else {
	                    l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
	                    if (len + l > length) {
	                        if (subpath && !subpaths.start) {
	                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
	                            sp += ["C" + point.start.x, point.start.y, point.m.x, point.m.y, point.x, point.y];
	                            if (onlystart) {return sp;}
	                            subpaths.start = sp;
	                            sp = ["M" + point.x, point.y + "C" + point.n.x, point.n.y, point.end.x, point.end.y, p[5], p[6]].join();
	                            len += l;
	                            x = +p[5];
	                            y = +p[6];
	                            continue;
	                        }
	                        if (!istotal && !subpath) {
	                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
	                            return {x: point.x, y: point.y, alpha: point.alpha};
	                        }
	                    }
	                    len += l;
	                    x = +p[5];
	                    y = +p[6];
	                }
	                sp += p.shift() + p;
	            }
	            subpaths.end = sp;
	            point = istotal ? len : subpath ? subpaths : R.findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
	            point.alpha && (point = {x: point.x, y: point.y, alpha: point.alpha});
	            return point;
	        };
	    };
	    var getTotalLength = getLengthFactory(1),
	        getPointAtLength = getLengthFactory(),
	        getSubpathsAtLength = getLengthFactory(0, 1);
	    /*\
	     * Raphael.getTotalLength
	     [ method ]
	     **
	     * Returns length of the given path in pixels.
	     **
	     > Parameters
	     **
	     - path (string) SVG path string.
	     **
	     = (number) length.
	    \*/
	    R.getTotalLength = getTotalLength;
	    /*\
	     * Raphael.getPointAtLength
	     [ method ]
	     **
	     * Return coordinates of the point located at the given length on the given path.
	     **
	     > Parameters
	     **
	     - path (string) SVG path string
	     - length (number)
	     **
	     = (object) representation of the point:
	     o {
	     o     x: (number) x coordinate
	     o     y: (number) y coordinate
	     o     alpha: (number) angle of derivative
	     o }
	    \*/
	    R.getPointAtLength = getPointAtLength;
	    /*\
	     * Raphael.getSubpath
	     [ method ]
	     **
	     * Return subpath of a given path from given length to given length.
	     **
	     > Parameters
	     **
	     - path (string) SVG path string
	     - from (number) position of the start of the segment
	     - to (number) position of the end of the segment
	     **
	     = (string) pathstring for the segment
	    \*/
	    R.getSubpath = function (path, from, to) {
	        if (this.getTotalLength(path) - to < 1e-6) {
	            return getSubpathsAtLength(path, from).end;
	        }
	        var a = getSubpathsAtLength(path, to, 1);
	        return from ? getSubpathsAtLength(a, from).end : a;
	    };
	    /*\
	     * Element.getTotalLength
	     [ method ]
	     **
	     * Returns length of the path in pixels. Only works for element of “path” type.
	     = (number) length.
	    \*/
	    elproto.getTotalLength = function () {
	        var path = this.getPath();
	        if (!path) {
	            return;
	        }

	        if (this.node.getTotalLength) {
	            return this.node.getTotalLength();
	        }

	        return getTotalLength(path);
	    };
	    /*\
	     * Element.getPointAtLength
	     [ method ]
	     **
	     * Return coordinates of the point located at the given length on the given path. Only works for element of “path” type.
	     **
	     > Parameters
	     **
	     - length (number)
	     **
	     = (object) representation of the point:
	     o {
	     o     x: (number) x coordinate
	     o     y: (number) y coordinate
	     o     alpha: (number) angle of derivative
	     o }
	    \*/
	    elproto.getPointAtLength = function (length) {
	        var path = this.getPath();
	        if (!path) {
	            return;
	        }

	        return getPointAtLength(path, length);
	    };
	    /*\
	     * Element.getPath
	     [ method ]
	     **
	     * Returns path of the element. Only works for elements of “path” type and simple elements like circle.
	     = (object) path
	     **
	    \*/
	    elproto.getPath = function () {
	        var path,
	            getPath = R._getPath[this.type];

	        if (this.type == "text" || this.type == "set") {
	            return;
	        }

	        if (getPath) {
	            path = getPath(this);
	        }

	        return path;
	    };
	    /*\
	     * Element.getSubpath
	     [ method ]
	     **
	     * Return subpath of a given element from given length to given length. Only works for element of “path” type.
	     **
	     > Parameters
	     **
	     - from (number) position of the start of the segment
	     - to (number) position of the end of the segment
	     **
	     = (string) pathstring for the segment
	    \*/
	    elproto.getSubpath = function (from, to) {
	        var path = this.getPath();
	        if (!path) {
	            return;
	        }

	        return R.getSubpath(path, from, to);
	    };
	    /*\
	     * Raphael.easing_formulas
	     [ property ]
	     **
	     * Object that contains easing formulas for animation. You could extend it with your own. By default it has following list of easing:
	     # <ul>
	     #     <li>“linear”</li>
	     #     <li>“&lt;” or “easeIn” or “ease-in”</li>
	     #     <li>“>” or “easeOut” or “ease-out”</li>
	     #     <li>“&lt;>” or “easeInOut” or “ease-in-out”</li>
	     #     <li>“backIn” or “back-in”</li>
	     #     <li>“backOut” or “back-out”</li>
	     #     <li>“elastic”</li>
	     #     <li>“bounce”</li>
	     # </ul>
	     # <p>See also <a href="http://raphaeljs.com/easing.html">Easing demo</a>.</p>
	    \*/
	    var ef = R.easing_formulas = {
	        linear: function (n) {
	            return n;
	        },
	        "<": function (n) {
	            return pow(n, 1.7);
	        },
	        ">": function (n) {
	            return pow(n, .48);
	        },
	        "<>": function (n) {
	            var q = .48 - n / 1.04,
	                Q = math.sqrt(.1734 + q * q),
	                x = Q - q,
	                X = pow(abs(x), 1 / 3) * (x < 0 ? -1 : 1),
	                y = -Q - q,
	                Y = pow(abs(y), 1 / 3) * (y < 0 ? -1 : 1),
	                t = X + Y + .5;
	            return (1 - t) * 3 * t * t + t * t * t;
	        },
	        backIn: function (n) {
	            var s = 1.70158;
	            return n * n * ((s + 1) * n - s);
	        },
	        backOut: function (n) {
	            n = n - 1;
	            var s = 1.70158;
	            return n * n * ((s + 1) * n + s) + 1;
	        },
	        elastic: function (n) {
	            if (n == !!n) {
	                return n;
	            }
	            return pow(2, -10 * n) * math.sin((n - .075) * (2 * PI) / .3) + 1;
	        },
	        bounce: function (n) {
	            var s = 7.5625,
	                p = 2.75,
	                l;
	            if (n < (1 / p)) {
	                l = s * n * n;
	            } else {
	                if (n < (2 / p)) {
	                    n -= (1.5 / p);
	                    l = s * n * n + .75;
	                } else {
	                    if (n < (2.5 / p)) {
	                        n -= (2.25 / p);
	                        l = s * n * n + .9375;
	                    } else {
	                        n -= (2.625 / p);
	                        l = s * n * n + .984375;
	                    }
	                }
	            }
	            return l;
	        }
	    };
	    ef.easeIn = ef["ease-in"] = ef["<"];
	    ef.easeOut = ef["ease-out"] = ef[">"];
	    ef.easeInOut = ef["ease-in-out"] = ef["<>"];
	    ef["back-in"] = ef.backIn;
	    ef["back-out"] = ef.backOut;

	    var animationElements = [],
	        requestAnimFrame = window.requestAnimationFrame       ||
	                           window.webkitRequestAnimationFrame ||
	                           window.mozRequestAnimationFrame    ||
	                           window.oRequestAnimationFrame      ||
	                           window.msRequestAnimationFrame     ||
	                           function (callback) {
	                               setTimeout(callback, 16);
	                           },
	        animation = function () {
	            var Now = +new Date,
	                l = 0;
	            for (; l < animationElements.length; l++) {
	                var e = animationElements[l];
	                if (e.el.removed || e.paused) {
	                    continue;
	                }
	                var time = Now - e.start,
	                    ms = e.ms,
	                    easing = e.easing,
	                    from = e.from,
	                    diff = e.diff,
	                    to = e.to,
	                    t = e.t,
	                    that = e.el,
	                    set = {},
	                    now,
	                    init = {},
	                    key;
	                if (e.initstatus) {
	                    time = (e.initstatus * e.anim.top - e.prev) / (e.percent - e.prev) * ms;
	                    e.status = e.initstatus;
	                    delete e.initstatus;
	                    e.stop && animationElements.splice(l--, 1);
	                } else {
	                    e.status = (e.prev + (e.percent - e.prev) * (time / ms)) / e.anim.top;
	                }
	                if (time < 0) {
	                    continue;
	                }
	                if (time < ms) {
	                    var pos = easing(time / ms);
	                    for (var attr in from) if (from[has](attr)) {
	                        switch (availableAnimAttrs[attr]) {
	                            case nu:
	                                now = +from[attr] + pos * ms * diff[attr];
	                                break;
	                            case "colour":
	                                now = "rgb(" + [
	                                    upto255(round(from[attr].r + pos * ms * diff[attr].r)),
	                                    upto255(round(from[attr].g + pos * ms * diff[attr].g)),
	                                    upto255(round(from[attr].b + pos * ms * diff[attr].b))
	                                ].join(",") + ")";
	                                break;
	                            case "path":
	                                now = [];
	                                for (var i = 0, ii = from[attr].length; i < ii; i++) {
	                                    now[i] = [from[attr][i][0]];
	                                    for (var j = 1, jj = from[attr][i].length; j < jj; j++) {
	                                        now[i][j] = +from[attr][i][j] + pos * ms * diff[attr][i][j];
	                                    }
	                                    now[i] = now[i].join(S);
	                                }
	                                now = now.join(S);
	                                break;
	                            case "transform":
	                                if (diff[attr].real) {
	                                    now = [];
	                                    for (i = 0, ii = from[attr].length; i < ii; i++) {
	                                        now[i] = [from[attr][i][0]];
	                                        for (j = 1, jj = from[attr][i].length; j < jj; j++) {
	                                            now[i][j] = from[attr][i][j] + pos * ms * diff[attr][i][j];
	                                        }
	                                    }
	                                } else {
	                                    var get = function (i) {
	                                        return +from[attr][i] + pos * ms * diff[attr][i];
	                                    };
	                                    // now = [["r", get(2), 0, 0], ["t", get(3), get(4)], ["s", get(0), get(1), 0, 0]];
	                                    now = [["m", get(0), get(1), get(2), get(3), get(4), get(5)]];
	                                }
	                                break;
	                            case "csv":
	                                if (attr == "clip-rect") {
	                                    now = [];
	                                    i = 4;
	                                    while (i--) {
	                                        now[i] = +from[attr][i] + pos * ms * diff[attr][i];
	                                    }
	                                }
	                                break;
	                            default:
	                                var from2 = [][concat](from[attr]);
	                                now = [];
	                                i = that.paper.customAttributes[attr].length;
	                                while (i--) {
	                                    now[i] = +from2[i] + pos * ms * diff[attr][i];
	                                }
	                                break;
	                        }
	                        set[attr] = now;
	                    }
	                    that.attr(set);
	                    (function (id, that, anim) {
	                        setTimeout(function () {
	                            eve("raphael.anim.frame." + id, that, anim);
	                        });
	                    })(that.id, that, e.anim);
	                } else {
	                    (function(f, el, a) {
	                        setTimeout(function() {
	                            eve("raphael.anim.frame." + el.id, el, a);
	                            eve("raphael.anim.finish." + el.id, el, a);
	                            R.is(f, "function") && f.call(el);
	                        });
	                    })(e.callback, that, e.anim);
	                    that.attr(to);
	                    animationElements.splice(l--, 1);
	                    if (e.repeat > 1 && !e.next) {
	                        for (key in to) if (to[has](key)) {
	                            init[key] = e.totalOrigin[key];
	                        }
	                        e.el.attr(init);
	                        runAnimation(e.anim, e.el, e.anim.percents[0], null, e.totalOrigin, e.repeat - 1);
	                    }
	                    if (e.next && !e.stop) {
	                        runAnimation(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat);
	                    }
	                }
	            }
	            R.svg && that && that.paper && that.paper.safari();
	            animationElements.length && requestAnimFrame(animation);
	        },
	        upto255 = function (color) {
	            return color > 255 ? 255 : color < 0 ? 0 : color;
	        };
	    /*\
	     * Element.animateWith
	     [ method ]
	     **
	     * Acts similar to @Element.animate, but ensure that given animation runs in sync with another given element.
	     **
	     > Parameters
	     **
	     - el (object) element to sync with
	     - anim (object) animation to sync with
	     - params (object) #optional final attributes for the element, see also @Element.attr
	     - ms (number) #optional number of milliseconds for animation to run
	     - easing (string) #optional easing type. Accept on of @Raphael.easing_formulas or CSS format: `cubic&#x2010;bezier(XX,&#160;XX,&#160;XX,&#160;XX)`
	     - callback (function) #optional callback function. Will be called at the end of animation.
	     * or
	     - element (object) element to sync with
	     - anim (object) animation to sync with
	     - animation (object) #optional animation object, see @Raphael.animation
	     **
	     = (object) original element
	    \*/
	    elproto.animateWith = function (el, anim, params, ms, easing, callback) {
	        var element = this;
	        if (element.removed) {
	            callback && callback.call(element);
	            return element;
	        }
	        var a = params instanceof Animation ? params : R.animation(params, ms, easing, callback),
	            x, y;
	        runAnimation(a, element, a.percents[0], null, element.attr());
	        for (var i = 0, ii = animationElements.length; i < ii; i++) {
	            if (animationElements[i].anim == anim && animationElements[i].el == el) {
	                animationElements[ii - 1].start = animationElements[i].start;
	                break;
	            }
	        }
	        return element;
	        //
	        //
	        // var a = params ? R.animation(params, ms, easing, callback) : anim,
	        //     status = element.status(anim);
	        // return this.animate(a).status(a, status * anim.ms / a.ms);
	    };
	    function CubicBezierAtTime(t, p1x, p1y, p2x, p2y, duration) {
	        var cx = 3 * p1x,
	            bx = 3 * (p2x - p1x) - cx,
	            ax = 1 - cx - bx,
	            cy = 3 * p1y,
	            by = 3 * (p2y - p1y) - cy,
	            ay = 1 - cy - by;
	        function sampleCurveX(t) {
	            return ((ax * t + bx) * t + cx) * t;
	        }
	        function solve(x, epsilon) {
	            var t = solveCurveX(x, epsilon);
	            return ((ay * t + by) * t + cy) * t;
	        }
	        function solveCurveX(x, epsilon) {
	            var t0, t1, t2, x2, d2, i;
	            for(t2 = x, i = 0; i < 8; i++) {
	                x2 = sampleCurveX(t2) - x;
	                if (abs(x2) < epsilon) {
	                    return t2;
	                }
	                d2 = (3 * ax * t2 + 2 * bx) * t2 + cx;
	                if (abs(d2) < 1e-6) {
	                    break;
	                }
	                t2 = t2 - x2 / d2;
	            }
	            t0 = 0;
	            t1 = 1;
	            t2 = x;
	            if (t2 < t0) {
	                return t0;
	            }
	            if (t2 > t1) {
	                return t1;
	            }
	            while (t0 < t1) {
	                x2 = sampleCurveX(t2);
	                if (abs(x2 - x) < epsilon) {
	                    return t2;
	                }
	                if (x > x2) {
	                    t0 = t2;
	                } else {
	                    t1 = t2;
	                }
	                t2 = (t1 - t0) / 2 + t0;
	            }
	            return t2;
	        }
	        return solve(t, 1 / (200 * duration));
	    }
	    elproto.onAnimation = function (f) {
	        f ? eve.on("raphael.anim.frame." + this.id, f) : eve.unbind("raphael.anim.frame." + this.id);
	        return this;
	    };
	    function Animation(anim, ms) {
	        var percents = [],
	            newAnim = {};
	        this.ms = ms;
	        this.times = 1;
	        if (anim) {
	            for (var attr in anim) if (anim[has](attr)) {
	                newAnim[toFloat(attr)] = anim[attr];
	                percents.push(toFloat(attr));
	            }
	            percents.sort(sortByNumber);
	        }
	        this.anim = newAnim;
	        this.top = percents[percents.length - 1];
	        this.percents = percents;
	    }
	    /*\
	     * Animation.delay
	     [ method ]
	     **
	     * Creates a copy of existing animation object with given delay.
	     **
	     > Parameters
	     **
	     - delay (number) number of ms to pass between animation start and actual animation
	     **
	     = (object) new altered Animation object
	     | var anim = Raphael.animation({cx: 10, cy: 20}, 2e3);
	     | circle1.animate(anim); // run the given animation immediately
	     | circle2.animate(anim.delay(500)); // run the given animation after 500 ms
	    \*/
	    Animation.prototype.delay = function (delay) {
	        var a = new Animation(this.anim, this.ms);
	        a.times = this.times;
	        a.del = +delay || 0;
	        return a;
	    };
	    /*\
	     * Animation.repeat
	     [ method ]
	     **
	     * Creates a copy of existing animation object with given repetition.
	     **
	     > Parameters
	     **
	     - repeat (number) number iterations of animation. For infinite animation pass `Infinity`
	     **
	     = (object) new altered Animation object
	    \*/
	    Animation.prototype.repeat = function (times) {
	        var a = new Animation(this.anim, this.ms);
	        a.del = this.del;
	        a.times = math.floor(mmax(times, 0)) || 1;
	        return a;
	    };
	    function runAnimation(anim, element, percent, status, totalOrigin, times) {
	        percent = toFloat(percent);
	        var params,
	            isInAnim,
	            isInAnimSet,
	            percents = [],
	            next,
	            prev,
	            timestamp,
	            ms = anim.ms,
	            from = {},
	            to = {},
	            diff = {};
	        if (status) {
	            for (i = 0, ii = animationElements.length; i < ii; i++) {
	                var e = animationElements[i];
	                if (e.el.id == element.id && e.anim == anim) {
	                    if (e.percent != percent) {
	                        animationElements.splice(i, 1);
	                        isInAnimSet = 1;
	                    } else {
	                        isInAnim = e;
	                    }
	                    element.attr(e.totalOrigin);
	                    break;
	                }
	            }
	        } else {
	            status = +to; // NaN
	        }
	        for (var i = 0, ii = anim.percents.length; i < ii; i++) {
	            if (anim.percents[i] == percent || anim.percents[i] > status * anim.top) {
	                percent = anim.percents[i];
	                prev = anim.percents[i - 1] || 0;
	                ms = ms / anim.top * (percent - prev);
	                next = anim.percents[i + 1];
	                params = anim.anim[percent];
	                break;
	            } else if (status) {
	                element.attr(anim.anim[anim.percents[i]]);
	            }
	        }
	        if (!params) {
	            return;
	        }
	        if (!isInAnim) {
	            for (var attr in params) if (params[has](attr)) {
	                if (availableAnimAttrs[has](attr) || element.paper.customAttributes[has](attr)) {
	                    from[attr] = element.attr(attr);
	                    (from[attr] == null) && (from[attr] = availableAttrs[attr]);
	                    to[attr] = params[attr];
	                    switch (availableAnimAttrs[attr]) {
	                        case nu:
	                            diff[attr] = (to[attr] - from[attr]) / ms;
	                            break;
	                        case "colour":
	                            from[attr] = R.getRGB(from[attr]);
	                            var toColour = R.getRGB(to[attr]);
	                            diff[attr] = {
	                                r: (toColour.r - from[attr].r) / ms,
	                                g: (toColour.g - from[attr].g) / ms,
	                                b: (toColour.b - from[attr].b) / ms
	                            };
	                            break;
	                        case "path":
	                            var pathes = path2curve(from[attr], to[attr]),
	                                toPath = pathes[1];
	                            from[attr] = pathes[0];
	                            diff[attr] = [];
	                            for (i = 0, ii = from[attr].length; i < ii; i++) {
	                                diff[attr][i] = [0];
	                                for (var j = 1, jj = from[attr][i].length; j < jj; j++) {
	                                    diff[attr][i][j] = (toPath[i][j] - from[attr][i][j]) / ms;
	                                }
	                            }
	                            break;
	                        case "transform":
	                            var _ = element._,
	                                eq = equaliseTransform(_[attr], to[attr]);
	                            if (eq) {
	                                from[attr] = eq.from;
	                                to[attr] = eq.to;
	                                diff[attr] = [];
	                                diff[attr].real = true;
	                                for (i = 0, ii = from[attr].length; i < ii; i++) {
	                                    diff[attr][i] = [from[attr][i][0]];
	                                    for (j = 1, jj = from[attr][i].length; j < jj; j++) {
	                                        diff[attr][i][j] = (to[attr][i][j] - from[attr][i][j]) / ms;
	                                    }
	                                }
	                            } else {
	                                var m = (element.matrix || new Matrix),
	                                    to2 = {
	                                        _: {transform: _.transform},
	                                        getBBox: function () {
	                                            return element.getBBox(1);
	                                        }
	                                    };
	                                from[attr] = [
	                                    m.a,
	                                    m.b,
	                                    m.c,
	                                    m.d,
	                                    m.e,
	                                    m.f
	                                ];
	                                extractTransform(to2, to[attr]);
	                                to[attr] = to2._.transform;
	                                diff[attr] = [
	                                    (to2.matrix.a - m.a) / ms,
	                                    (to2.matrix.b - m.b) / ms,
	                                    (to2.matrix.c - m.c) / ms,
	                                    (to2.matrix.d - m.d) / ms,
	                                    (to2.matrix.e - m.e) / ms,
	                                    (to2.matrix.f - m.f) / ms
	                                ];
	                                // from[attr] = [_.sx, _.sy, _.deg, _.dx, _.dy];
	                                // var to2 = {_:{}, getBBox: function () { return element.getBBox(); }};
	                                // extractTransform(to2, to[attr]);
	                                // diff[attr] = [
	                                //     (to2._.sx - _.sx) / ms,
	                                //     (to2._.sy - _.sy) / ms,
	                                //     (to2._.deg - _.deg) / ms,
	                                //     (to2._.dx - _.dx) / ms,
	                                //     (to2._.dy - _.dy) / ms
	                                // ];
	                            }
	                            break;
	                        case "csv":
	                            var values = Str(params[attr])[split](separator),
	                                from2 = Str(from[attr])[split](separator);
	                            if (attr == "clip-rect") {
	                                from[attr] = from2;
	                                diff[attr] = [];
	                                i = from2.length;
	                                while (i--) {
	                                    diff[attr][i] = (values[i] - from[attr][i]) / ms;
	                                }
	                            }
	                            to[attr] = values;
	                            break;
	                        default:
	                            values = [][concat](params[attr]);
	                            from2 = [][concat](from[attr]);
	                            diff[attr] = [];
	                            i = element.paper.customAttributes[attr].length;
	                            while (i--) {
	                                diff[attr][i] = ((values[i] || 0) - (from2[i] || 0)) / ms;
	                            }
	                            break;
	                    }
	                }
	            }
	            var easing = params.easing,
	                easyeasy = R.easing_formulas[easing];
	            if (!easyeasy) {
	                easyeasy = Str(easing).match(bezierrg);
	                if (easyeasy && easyeasy.length == 5) {
	                    var curve = easyeasy;
	                    easyeasy = function (t) {
	                        return CubicBezierAtTime(t, +curve[1], +curve[2], +curve[3], +curve[4], ms);
	                    };
	                } else {
	                    easyeasy = pipe;
	                }
	            }
	            timestamp = params.start || anim.start || +new Date;
	            e = {
	                anim: anim,
	                percent: percent,
	                timestamp: timestamp,
	                start: timestamp + (anim.del || 0),
	                status: 0,
	                initstatus: status || 0,
	                stop: false,
	                ms: ms,
	                easing: easyeasy,
	                from: from,
	                diff: diff,
	                to: to,
	                el: element,
	                callback: params.callback,
	                prev: prev,
	                next: next,
	                repeat: times || anim.times,
	                origin: element.attr(),
	                totalOrigin: totalOrigin
	            };
	            animationElements.push(e);
	            if (status && !isInAnim && !isInAnimSet) {
	                e.stop = true;
	                e.start = new Date - ms * status;
	                if (animationElements.length == 1) {
	                    return animation();
	                }
	            }
	            if (isInAnimSet) {
	                e.start = new Date - e.ms * status;
	            }
	            animationElements.length == 1 && requestAnimFrame(animation);
	        } else {
	            isInAnim.initstatus = status;
	            isInAnim.start = new Date - isInAnim.ms * status;
	        }
	        eve("raphael.anim.start." + element.id, element, anim);
	    }
	    /*\
	     * Raphael.animation
	     [ method ]
	     **
	     * Creates an animation object that can be passed to the @Element.animate or @Element.animateWith methods.
	     * See also @Animation.delay and @Animation.repeat methods.
	     **
	     > Parameters
	     **
	     - params (object) final attributes for the element, see also @Element.attr
	     - ms (number) number of milliseconds for animation to run
	     - easing (string) #optional easing type. Accept one of @Raphael.easing_formulas or CSS format: `cubic&#x2010;bezier(XX,&#160;XX,&#160;XX,&#160;XX)`
	     - callback (function) #optional callback function. Will be called at the end of animation.
	     **
	     = (object) @Animation
	    \*/
	    R.animation = function (params, ms, easing, callback) {
	        if (params instanceof Animation) {
	            return params;
	        }
	        if (R.is(easing, "function") || !easing) {
	            callback = callback || easing || null;
	            easing = null;
	        }
	        params = Object(params);
	        ms = +ms || 0;
	        var p = {},
	            json,
	            attr;
	        for (attr in params) if (params[has](attr) && toFloat(attr) != attr && toFloat(attr) + "%" != attr) {
	            json = true;
	            p[attr] = params[attr];
	        }
	        if (!json) {
	            // if percent-like syntax is used and end-of-all animation callback used
	            if(callback){
	                // find the last one
	                var lastKey = 0;
	                for(var i in params){
	                    var percent = toInt(i);
	                    if(params[has](i) && percent > lastKey){
	                        lastKey = percent;
	                    }
	                }
	                lastKey += '%';
	                // if already defined callback in the last keyframe, skip
	                !params[lastKey].callback && (params[lastKey].callback = callback);
	            }
	          return new Animation(params, ms);
	        } else {
	            easing && (p.easing = easing);
	            callback && (p.callback = callback);
	            return new Animation({100: p}, ms);
	        }
	    };
	    /*\
	     * Element.animate
	     [ method ]
	     **
	     * Creates and starts animation for given element.
	     **
	     > Parameters
	     **
	     - params (object) final attributes for the element, see also @Element.attr
	     - ms (number) number of milliseconds for animation to run
	     - easing (string) #optional easing type. Accept one of @Raphael.easing_formulas or CSS format: `cubic&#x2010;bezier(XX,&#160;XX,&#160;XX,&#160;XX)`
	     - callback (function) #optional callback function. Will be called at the end of animation.
	     * or
	     - animation (object) animation object, see @Raphael.animation
	     **
	     = (object) original element
	    \*/
	    elproto.animate = function (params, ms, easing, callback) {
	        var element = this;
	        if (element.removed) {
	            callback && callback.call(element);
	            return element;
	        }
	        var anim = params instanceof Animation ? params : R.animation(params, ms, easing, callback);
	        runAnimation(anim, element, anim.percents[0], null, element.attr());
	        return element;
	    };
	    /*\
	     * Element.setTime
	     [ method ]
	     **
	     * Sets the status of animation of the element in milliseconds. Similar to @Element.status method.
	     **
	     > Parameters
	     **
	     - anim (object) animation object
	     - value (number) number of milliseconds from the beginning of the animation
	     **
	     = (object) original element if `value` is specified
	     * Note, that during animation following events are triggered:
	     *
	     * On each animation frame event `anim.frame.<id>`, on start `anim.start.<id>` and on end `anim.finish.<id>`.
	    \*/
	    elproto.setTime = function (anim, value) {
	        if (anim && value != null) {
	            this.status(anim, mmin(value, anim.ms) / anim.ms);
	        }
	        return this;
	    };
	    /*\
	     * Element.status
	     [ method ]
	     **
	     * Gets or sets the status of animation of the element.
	     **
	     > Parameters
	     **
	     - anim (object) #optional animation object
	     - value (number) #optional 0 – 1. If specified, method works like a setter and sets the status of a given animation to the value. This will cause animation to jump to the given position.
	     **
	     = (number) status
	     * or
	     = (array) status if `anim` is not specified. Array of objects in format:
	     o {
	     o     anim: (object) animation object
	     o     status: (number) status
	     o }
	     * or
	     = (object) original element if `value` is specified
	    \*/
	    elproto.status = function (anim, value) {
	        var out = [],
	            i = 0,
	            len,
	            e;
	        if (value != null) {
	            runAnimation(anim, this, -1, mmin(value, 1));
	            return this;
	        } else {
	            len = animationElements.length;
	            for (; i < len; i++) {
	                e = animationElements[i];
	                if (e.el.id == this.id && (!anim || e.anim == anim)) {
	                    if (anim) {
	                        return e.status;
	                    }
	                    out.push({
	                        anim: e.anim,
	                        status: e.status
	                    });
	                }
	            }
	            if (anim) {
	                return 0;
	            }
	            return out;
	        }
	    };
	    /*\
	     * Element.pause
	     [ method ]
	     **
	     * Stops animation of the element with ability to resume it later on.
	     **
	     > Parameters
	     **
	     - anim (object) #optional animation object
	     **
	     = (object) original element
	    \*/
	    elproto.pause = function (anim) {
	        for (var i = 0; i < animationElements.length; i++) if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {
	            if (eve("raphael.anim.pause." + this.id, this, animationElements[i].anim) !== false) {
	                animationElements[i].paused = true;
	            }
	        }
	        return this;
	    };
	    /*\
	     * Element.resume
	     [ method ]
	     **
	     * Resumes animation if it was paused with @Element.pause method.
	     **
	     > Parameters
	     **
	     - anim (object) #optional animation object
	     **
	     = (object) original element
	    \*/
	    elproto.resume = function (anim) {
	        for (var i = 0; i < animationElements.length; i++) if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {
	            var e = animationElements[i];
	            if (eve("raphael.anim.resume." + this.id, this, e.anim) !== false) {
	                delete e.paused;
	                this.status(e.anim, e.status);
	            }
	        }
	        return this;
	    };
	    /*\
	     * Element.stop
	     [ method ]
	     **
	     * Stops animation of the element.
	     **
	     > Parameters
	     **
	     - anim (object) #optional animation object
	     **
	     = (object) original element
	    \*/
	    elproto.stop = function (anim) {
	        for (var i = 0; i < animationElements.length; i++) if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {
	            if (eve("raphael.anim.stop." + this.id, this, animationElements[i].anim) !== false) {
	                animationElements.splice(i--, 1);
	            }
	        }
	        return this;
	    };
	    function stopAnimation(paper) {
	        for (var i = 0; i < animationElements.length; i++) if (animationElements[i].el.paper == paper) {
	            animationElements.splice(i--, 1);
	        }
	    }
	    eve.on("raphael.remove", stopAnimation);
	    eve.on("raphael.clear", stopAnimation);
	    elproto.toString = function () {
	        return "Rapha\xebl\u2019s object";
	    };

	    // Set
	    var Set = function (items) {
	        this.items = [];
	        this.length = 0;
	        this.type = "set";
	        if (items) {
	            for (var i = 0, ii = items.length; i < ii; i++) {
	                if (items[i] && (items[i].constructor == elproto.constructor || items[i].constructor == Set)) {
	                    this[this.items.length] = this.items[this.items.length] = items[i];
	                    this.length++;
	                }
	            }
	        }
	    },
	    setproto = Set.prototype;
	    /*\
	     * Set.push
	     [ method ]
	     **
	     * Adds each argument to the current set.
	     = (object) original element
	    \*/
	    setproto.push = function () {
	        var item,
	            len;
	        for (var i = 0, ii = arguments.length; i < ii; i++) {
	            item = arguments[i];
	            if (item && (item.constructor == elproto.constructor || item.constructor == Set)) {
	                len = this.items.length;
	                this[len] = this.items[len] = item;
	                this.length++;
	            }
	        }
	        return this;
	    };
	    /*\
	     * Set.pop
	     [ method ]
	     **
	     * Removes last element and returns it.
	     = (object) element
	    \*/
	    setproto.pop = function () {
	        this.length && delete this[this.length--];
	        return this.items.pop();
	    };
	    /*\
	     * Set.forEach
	     [ method ]
	     **
	     * Executes given function for each element in the set.
	     *
	     * If function returns `false` it will stop loop running.
	     **
	     > Parameters
	     **
	     - callback (function) function to run
	     - thisArg (object) context object for the callback
	     = (object) Set object
	    \*/
	    setproto.forEach = function (callback, thisArg) {
	        for (var i = 0, ii = this.items.length; i < ii; i++) {
	            if (callback.call(thisArg, this.items[i], i) === false) {
	                return this;
	            }
	        }
	        return this;
	    };
	    for (var method in elproto) if (elproto[has](method)) {
	        setproto[method] = (function (methodname) {
	            return function () {
	                var arg = arguments;
	                return this.forEach(function (el) {
	                    el[methodname][apply](el, arg);
	                });
	            };
	        })(method);
	    }
	    setproto.attr = function (name, value) {
	        if (name && R.is(name, array) && R.is(name[0], "object")) {
	            for (var j = 0, jj = name.length; j < jj; j++) {
	                this.items[j].attr(name[j]);
	            }
	        } else {
	            for (var i = 0, ii = this.items.length; i < ii; i++) {
	                this.items[i].attr(name, value);
	            }
	        }
	        return this;
	    };
	    /*\
	     * Set.clear
	     [ method ]
	     **
	     * Removes all elements from the set
	    \*/
	    setproto.clear = function () {
	        while (this.length) {
	            this.pop();
	        }
	    };
	    /*\
	     * Set.splice
	     [ method ]
	     **
	     * Removes given element from the set
	     **
	     > Parameters
	     **
	     - index (number) position of the deletion
	     - count (number) number of element to remove
	     - insertion… (object) #optional elements to insert
	     = (object) set elements that were deleted
	    \*/
	    setproto.splice = function (index, count, insertion) {
	        index = index < 0 ? mmax(this.length + index, 0) : index;
	        count = mmax(0, mmin(this.length - index, count));
	        var tail = [],
	            todel = [],
	            args = [],
	            i;
	        for (i = 2; i < arguments.length; i++) {
	            args.push(arguments[i]);
	        }
	        for (i = 0; i < count; i++) {
	            todel.push(this[index + i]);
	        }
	        for (; i < this.length - index; i++) {
	            tail.push(this[index + i]);
	        }
	        var arglen = args.length;
	        for (i = 0; i < arglen + tail.length; i++) {
	            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
	        }
	        i = this.items.length = this.length -= count - arglen;
	        while (this[i]) {
	            delete this[i++];
	        }
	        return new Set(todel);
	    };
	    /*\
	     * Set.exclude
	     [ method ]
	     **
	     * Removes given element from the set
	     **
	     > Parameters
	     **
	     - element (object) element to remove
	     = (boolean) `true` if object was found & removed from the set
	    \*/
	    setproto.exclude = function (el) {
	        for (var i = 0, ii = this.length; i < ii; i++) if (this[i] == el) {
	            this.splice(i, 1);
	            return true;
	        }
	    };
	    setproto.animate = function (params, ms, easing, callback) {
	        (R.is(easing, "function") || !easing) && (callback = easing || null);
	        var len = this.items.length,
	            i = len,
	            item,
	            set = this,
	            collector;
	        if (!len) {
	            return this;
	        }
	        callback && (collector = function () {
	            !--len && callback.call(set);
	        });
	        easing = R.is(easing, string) ? easing : collector;
	        var anim = R.animation(params, ms, easing, collector);
	        item = this.items[--i].animate(anim);
	        while (i--) {
	            this.items[i] && !this.items[i].removed && this.items[i].animateWith(item, anim, anim);
	            (this.items[i] && !this.items[i].removed) || len--;
	        }
	        return this;
	    };
	    setproto.insertAfter = function (el) {
	        var i = this.items.length;
	        while (i--) {
	            this.items[i].insertAfter(el);
	        }
	        return this;
	    };
	    setproto.getBBox = function () {
	        var x = [],
	            y = [],
	            x2 = [],
	            y2 = [];
	        for (var i = this.items.length; i--;) if (!this.items[i].removed) {
	            var box = this.items[i].getBBox();
	            x.push(box.x);
	            y.push(box.y);
	            x2.push(box.x + box.width);
	            y2.push(box.y + box.height);
	        }
	        x = mmin[apply](0, x);
	        y = mmin[apply](0, y);
	        x2 = mmax[apply](0, x2);
	        y2 = mmax[apply](0, y2);
	        return {
	            x: x,
	            y: y,
	            x2: x2,
	            y2: y2,
	            width: x2 - x,
	            height: y2 - y
	        };
	    };
	    setproto.clone = function (s) {
	        s = this.paper.set();
	        for (var i = 0, ii = this.items.length; i < ii; i++) {
	            s.push(this.items[i].clone());
	        }
	        return s;
	    };
	    setproto.toString = function () {
	        return "Rapha\xebl\u2018s set";
	    };

	    setproto.glow = function(glowConfig) {
	        var ret = this.paper.set();
	        this.forEach(function(shape, index){
	            var g = shape.glow(glowConfig);
	            if(g != null){
	                g.forEach(function(shape2, index2){
	                    ret.push(shape2);
	                });
	            }
	        });
	        return ret;
	    };


	    /*\
	     * Set.isPointInside
	     [ method ]
	     **
	     * Determine if given point is inside this set’s elements
	     **
	     > Parameters
	     **
	     - x (number) x coordinate of the point
	     - y (number) y coordinate of the point
	     = (boolean) `true` if point is inside any of the set's elements
	     \*/
	    setproto.isPointInside = function (x, y) {
	        var isPointInside = false;
	        this.forEach(function (el) {
	            if (el.isPointInside(x, y)) {
	                isPointInside = true;
	                return false; // stop loop
	            }
	        });
	        return isPointInside;
	    };

	    /*\
	     * Raphael.registerFont
	     [ method ]
	     **
	     * Adds given font to the registered set of fonts for Raphaël. Should be used as an internal call from within Cufón’s font file.
	     * Returns original parameter, so it could be used with chaining.
	     # <a href="http://wiki.github.com/sorccu/cufon/about">More about Cufón and how to convert your font form TTF, OTF, etc to JavaScript file.</a>
	     **
	     > Parameters
	     **
	     - font (object) the font to register
	     = (object) the font you passed in
	     > Usage
	     | Cufon.registerFont(Raphael.registerFont({…}));
	    \*/
	    R.registerFont = function (font) {
	        if (!font.face) {
	            return font;
	        }
	        this.fonts = this.fonts || {};
	        var fontcopy = {
	                w: font.w,
	                face: {},
	                glyphs: {}
	            },
	            family = font.face["font-family"];
	        for (var prop in font.face) if (font.face[has](prop)) {
	            fontcopy.face[prop] = font.face[prop];
	        }
	        if (this.fonts[family]) {
	            this.fonts[family].push(fontcopy);
	        } else {
	            this.fonts[family] = [fontcopy];
	        }
	        if (!font.svg) {
	            fontcopy.face["units-per-em"] = toInt(font.face["units-per-em"], 10);
	            for (var glyph in font.glyphs) if (font.glyphs[has](glyph)) {
	                var path = font.glyphs[glyph];
	                fontcopy.glyphs[glyph] = {
	                    w: path.w,
	                    k: {},
	                    d: path.d && "M" + path.d.replace(/[mlcxtrv]/g, function (command) {
	                            return {l: "L", c: "C", x: "z", t: "m", r: "l", v: "c"}[command] || "M";
	                        }) + "z"
	                };
	                if (path.k) {
	                    for (var k in path.k) if (path[has](k)) {
	                        fontcopy.glyphs[glyph].k[k] = path.k[k];
	                    }
	                }
	            }
	        }
	        return font;
	    };
	    /*\
	     * Paper.getFont
	     [ method ]
	     **
	     * Finds font object in the registered fonts by given parameters. You could specify only one word from the font name, like “Myriad” for “Myriad Pro”.
	     **
	     > Parameters
	     **
	     - family (string) font family name or any word from it
	     - weight (string) #optional font weight
	     - style (string) #optional font style
	     - stretch (string) #optional font stretch
	     = (object) the font object
	     > Usage
	     | paper.print(100, 100, "Test string", paper.getFont("Times", 800), 30);
	    \*/
	    paperproto.getFont = function (family, weight, style, stretch) {
	        stretch = stretch || "normal";
	        style = style || "normal";
	        weight = +weight || {normal: 400, bold: 700, lighter: 300, bolder: 800}[weight] || 400;
	        if (!R.fonts) {
	            return;
	        }
	        var font = R.fonts[family];
	        if (!font) {
	            var name = new RegExp("(^|\\s)" + family.replace(/[^\w\d\s+!~.:_-]/g, E) + "(\\s|$)", "i");
	            for (var fontName in R.fonts) if (R.fonts[has](fontName)) {
	                if (name.test(fontName)) {
	                    font = R.fonts[fontName];
	                    break;
	                }
	            }
	        }
	        var thefont;
	        if (font) {
	            for (var i = 0, ii = font.length; i < ii; i++) {
	                thefont = font[i];
	                if (thefont.face["font-weight"] == weight && (thefont.face["font-style"] == style || !thefont.face["font-style"]) && thefont.face["font-stretch"] == stretch) {
	                    break;
	                }
	            }
	        }
	        return thefont;
	    };
	    /*\
	     * Paper.print
	     [ method ]
	     **
	     * Creates path that represent given text written using given font at given position with given size.
	     * Result of the method is path element that contains whole text as a separate path.
	     **
	     > Parameters
	     **
	     - x (number) x position of the text
	     - y (number) y position of the text
	     - string (string) text to print
	     - font (object) font object, see @Paper.getFont
	     - size (number) #optional size of the font, default is `16`
	     - origin (string) #optional could be `"baseline"` or `"middle"`, default is `"middle"`
	     - letter_spacing (number) #optional number in range `-1..1`, default is `0`
	     - line_spacing (number) #optional number in range `1..3`, default is `1`
	     = (object) resulting path element, which consist of all letters
	     > Usage
	     | var txt = r.print(10, 50, "print", r.getFont("Museo"), 30).attr({fill: "#fff"});
	    \*/
	    paperproto.print = function (x, y, string, font, size, origin, letter_spacing, line_spacing) {
	        origin = origin || "middle"; // baseline|middle
	        letter_spacing = mmax(mmin(letter_spacing || 0, 1), -1);
	        line_spacing = mmax(mmin(line_spacing || 1, 3), 1);
	        var letters = Str(string)[split](E),
	            shift = 0,
	            notfirst = 0,
	            path = E,
	            scale;
	        R.is(font, "string") && (font = this.getFont(font));
	        if (font) {
	            scale = (size || 16) / font.face["units-per-em"];
	            var bb = font.face.bbox[split](separator),
	                top = +bb[0],
	                lineHeight = bb[3] - bb[1],
	                shifty = 0,
	                height = +bb[1] + (origin == "baseline" ? lineHeight + (+font.face.descent) : lineHeight / 2);
	            for (var i = 0, ii = letters.length; i < ii; i++) {
	                if (letters[i] == "\n") {
	                    shift = 0;
	                    curr = 0;
	                    notfirst = 0;
	                    shifty += lineHeight * line_spacing;
	                } else {
	                    var prev = notfirst && font.glyphs[letters[i - 1]] || {},
	                        curr = font.glyphs[letters[i]];
	                    shift += notfirst ? (prev.w || font.w) + (prev.k && prev.k[letters[i]] || 0) + (font.w * letter_spacing) : 0;
	                    notfirst = 1;
	                }
	                if (curr && curr.d) {
	                    path += R.transformPath(curr.d, ["t", shift * scale, shifty * scale, "s", scale, scale, top, height, "t", (x - top) / scale, (y - height) / scale]);
	                }
	            }
	        }
	        return this.path(path).attr({
	            fill: "#000",
	            stroke: "none"
	        });
	    };

	    /*\
	     * Paper.add
	     [ method ]
	     **
	     * Imports elements in JSON array in format `{type: type, <attributes>}`
	     **
	     > Parameters
	     **
	     - json (array)
	     = (object) resulting set of imported elements
	     > Usage
	     | paper.add([
	     |     {
	     |         type: "circle",
	     |         cx: 10,
	     |         cy: 10,
	     |         r: 5
	     |     },
	     |     {
	     |         type: "rect",
	     |         x: 10,
	     |         y: 10,
	     |         width: 10,
	     |         height: 10,
	     |         fill: "#fc0"
	     |     }
	     | ]);
	    \*/
	    paperproto.add = function (json) {
	        if (R.is(json, "array")) {
	            var res = this.set(),
	                i = 0,
	                ii = json.length,
	                j;
	            for (; i < ii; i++) {
	                j = json[i] || {};
	                elements[has](j.type) && res.push(this[j.type]().attr(j));
	            }
	        }
	        return res;
	    };

	    /*\
	     * Raphael.format
	     [ method ]
	     **
	     * Simple format function. Replaces construction of type “`{<number>}`” to the corresponding argument.
	     **
	     > Parameters
	     **
	     - token (string) string to format
	     - … (string) rest of arguments will be treated as parameters for replacement
	     = (string) formated string
	     > Usage
	     | var x = 10,
	     |     y = 20,
	     |     width = 40,
	     |     height = 50;
	     | // this will draw a rectangular shape equivalent to "M10,20h40v50h-40z"
	     | paper.path(Raphael.format("M{0},{1}h{2}v{3}h{4}z", x, y, width, height, -width));
	    \*/
	    R.format = function (token, params) {
	        var args = R.is(params, array) ? [0][concat](params) : arguments;
	        token && R.is(token, string) && args.length - 1 && (token = token.replace(formatrg, function (str, i) {
	            return args[++i] == null ? E : args[i];
	        }));
	        return token || E;
	    };
	    /*\
	     * Raphael.fullfill
	     [ method ]
	     **
	     * A little bit more advanced format function than @Raphael.format. Replaces construction of type “`{<name>}`” to the corresponding argument.
	     **
	     > Parameters
	     **
	     - token (string) string to format
	     - json (object) object which properties will be used as a replacement
	     = (string) formated string
	     > Usage
	     | // this will draw a rectangular shape equivalent to "M10,20h40v50h-40z"
	     | paper.path(Raphael.fullfill("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
	     |     x: 10,
	     |     y: 20,
	     |     dim: {
	     |         width: 40,
	     |         height: 50,
	     |         "negative width": -40
	     |     }
	     | }));
	    \*/
	    R.fullfill = (function () {
	        var tokenRegex = /\{([^\}]+)\}/g,
	            objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, // matches .xxxxx or ["xxxxx"] to run over object properties
	            replacer = function (all, key, obj) {
	                var res = obj;
	                key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
	                    name = name || quotedName;
	                    if (res) {
	                        if (name in res) {
	                            res = res[name];
	                        }
	                        typeof res == "function" && isFunc && (res = res());
	                    }
	                });
	                res = (res == null || res == obj ? all : res) + "";
	                return res;
	            };
	        return function (str, obj) {
	            return String(str).replace(tokenRegex, function (all, key) {
	                return replacer(all, key, obj);
	            });
	        };
	    })();
	    /*\
	     * Raphael.ninja
	     [ method ]
	     **
	     * If you want to leave no trace of Raphaël (Well, Raphaël creates only one global variable `Raphael`, but anyway.) You can use `ninja` method.
	     * Beware, that in this case plugins could stop working, because they are depending on global variable existance.
	     **
	     = (object) Raphael object
	     > Usage
	     | (function (local_raphael) {
	     |     var paper = local_raphael(10, 10, 320, 200);
	     |     …
	     | })(Raphael.ninja());
	    \*/
	    R.ninja = function () {
	        oldRaphael.was ? (g.win.Raphael = oldRaphael.is) : delete Raphael;
	        return R;
	    };
	    /*\
	     * Raphael.st
	     [ property (object) ]
	     **
	     * You can add your own method to elements and sets. It is wise to add a set method for each element method
	     * you added, so you will be able to call the same method on sets too.
	     **
	     * See also @Raphael.el.
	     > Usage
	     | Raphael.el.red = function () {
	     |     this.attr({fill: "#f00"});
	     | };
	     | Raphael.st.red = function () {
	     |     this.forEach(function (el) {
	     |         el.red();
	     |     });
	     | };
	     | // then use it
	     | paper.set(paper.circle(100, 100, 20), paper.circle(110, 100, 20)).red();
	    \*/
	    R.st = setproto;

	    eve.on("raphael.DOMload", function () {
	        loaded = true;
	    });

	    // Firefox <3.6 fix: http://webreflection.blogspot.com/2009/11/195-chars-to-help-lazy-loading.html
	    (function (doc, loaded, f) {
	        if (doc.readyState == null && doc.addEventListener){
	            doc.addEventListener(loaded, f = function () {
	                doc.removeEventListener(loaded, f, false);
	                doc.readyState = "complete";
	            }, false);
	            doc.readyState = "loading";
	        }
	        function isLoaded() {
	            (/in/).test(doc.readyState) ? setTimeout(isLoaded, 9) : R.eve("raphael.DOMload");
	        }
	        isLoaded();
	    })(document, "DOMContentLoaded");

	// ┌─────────────────────────────────────────────────────────────────────┐ \\
	// │ Raphaël - JavaScript Vector Library                                 │ \\
	// ├─────────────────────────────────────────────────────────────────────┤ \\
	// │ SVG Module                                                          │ \\
	// ├─────────────────────────────────────────────────────────────────────┤ \\
	// │ Copyright (c) 2008-2011 Dmitry Baranovskiy (http://raphaeljs.com)   │ \\
	// │ Copyright (c) 2008-2011 Sencha Labs (http://sencha.com)             │ \\
	// │ Licensed under the MIT (http://raphaeljs.com/license.html) license. │ \\
	// └─────────────────────────────────────────────────────────────────────┘ \\

	(function(){
	    if (!R.svg) {
	        return;
	    }
	    var has = "hasOwnProperty",
	        Str = String,
	        toFloat = parseFloat,
	        toInt = parseInt,
	        math = Math,
	        mmax = math.max,
	        abs = math.abs,
	        pow = math.pow,
	        separator = /[, ]+/,
	        eve = R.eve,
	        E = "",
	        S = " ";
	    var xlink = "http://www.w3.org/1999/xlink",
	        markers = {
	            block: "M5,0 0,2.5 5,5z",
	            classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
	            diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
	            open: "M6,1 1,3.5 6,6",
	            oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
	        },
	        markerCounter = {};
	    R.toString = function () {
	        return  "Your browser supports SVG.\nYou are running Rapha\xebl " + this.version;
	    };
	    var $ = function (el, attr) {
	        if (attr) {
	            if (typeof el == "string") {
	                el = $(el);
	            }
	            for (var key in attr) if (attr[has](key)) {
	                if (key.substring(0, 6) == "xlink:") {
	                    el.setAttributeNS(xlink, key.substring(6), Str(attr[key]));
	                } else {
	                    el.setAttribute(key, Str(attr[key]));
	                }
	            }
	        } else {
	            el = R._g.doc.createElementNS("http://www.w3.org/2000/svg", el);
	            el.style && (el.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
	        }
	        return el;
	    },
	    addGradientFill = function (element, gradient) {
	        var type = "linear",
	            id = element.id + gradient,
	            fx = .5, fy = .5,
	            o = element.node,
	            SVG = element.paper,
	            s = o.style,
	            el = R._g.doc.getElementById(id);
	        if (!el) {
	            gradient = Str(gradient).replace(R._radial_gradient, function (all, _fx, _fy) {
	                type = "radial";
	                if (_fx && _fy) {
	                    fx = toFloat(_fx);
	                    fy = toFloat(_fy);
	                    var dir = ((fy > .5) * 2 - 1);
	                    pow(fx - .5, 2) + pow(fy - .5, 2) > .25 &&
	                        (fy = math.sqrt(.25 - pow(fx - .5, 2)) * dir + .5) &&
	                        fy != .5 &&
	                        (fy = fy.toFixed(5) - 1e-5 * dir);
	                }
	                return E;
	            });
	            gradient = gradient.split(/\s*\-\s*/);
	            if (type == "linear") {
	                var angle = gradient.shift();
	                angle = -toFloat(angle);
	                if (isNaN(angle)) {
	                    return null;
	                }
	                var vector = [0, 0, math.cos(R.rad(angle)), math.sin(R.rad(angle))],
	                    max = 1 / (mmax(abs(vector[2]), abs(vector[3])) || 1);
	                vector[2] *= max;
	                vector[3] *= max;
	                if (vector[2] < 0) {
	                    vector[0] = -vector[2];
	                    vector[2] = 0;
	                }
	                if (vector[3] < 0) {
	                    vector[1] = -vector[3];
	                    vector[3] = 0;
	                }
	            }
	            var dots = R._parseDots(gradient);
	            if (!dots) {
	                return null;
	            }
	            id = id.replace(/[\(\)\s,\xb0#]/g, "_");

	            if (element.gradient && id != element.gradient.id) {
	                SVG.defs.removeChild(element.gradient);
	                delete element.gradient;
	            }

	            if (!element.gradient) {
	                el = $(type + "Gradient", {id: id});
	                element.gradient = el;
	                $(el, type == "radial" ? {
	                    fx: fx,
	                    fy: fy
	                } : {
	                    x1: vector[0],
	                    y1: vector[1],
	                    x2: vector[2],
	                    y2: vector[3],
	                    gradientTransform: element.matrix.invert()
	                });
	                SVG.defs.appendChild(el);
	                for (var i = 0, ii = dots.length; i < ii; i++) {
	                    el.appendChild($("stop", {
	                        offset: dots[i].offset ? dots[i].offset : i ? "100%" : "0%",
	                        "stop-color": dots[i].color || "#fff"
	                    }));
	                }
	            }
	        }
	        $(o, {
	            fill: "url('" + document.location + "#" + id + "')",
	            opacity: 1,
	            "fill-opacity": 1
	        });
	        s.fill = E;
	        s.opacity = 1;
	        s.fillOpacity = 1;
	        return 1;
	    },
	    updatePosition = function (o) {
	        var bbox = o.getBBox(1);
	        $(o.pattern, {patternTransform: o.matrix.invert() + " translate(" + bbox.x + "," + bbox.y + ")"});
	    },
	    addArrow = function (o, value, isEnd) {
	        if (o.type == "path") {
	            var values = Str(value).toLowerCase().split("-"),
	                p = o.paper,
	                se = isEnd ? "end" : "start",
	                node = o.node,
	                attrs = o.attrs,
	                stroke = attrs["stroke-width"],
	                i = values.length,
	                type = "classic",
	                from,
	                to,
	                dx,
	                refX,
	                attr,
	                w = 3,
	                h = 3,
	                t = 5;
	            while (i--) {
	                switch (values[i]) {
	                    case "block":
	                    case "classic":
	                    case "oval":
	                    case "diamond":
	                    case "open":
	                    case "none":
	                        type = values[i];
	                        break;
	                    case "wide": h = 5; break;
	                    case "narrow": h = 2; break;
	                    case "long": w = 5; break;
	                    case "short": w = 2; break;
	                }
	            }
	            if (type == "open") {
	                w += 2;
	                h += 2;
	                t += 2;
	                dx = 1;
	                refX = isEnd ? 4 : 1;
	                attr = {
	                    fill: "none",
	                    stroke: attrs.stroke
	                };
	            } else {
	                refX = dx = w / 2;
	                attr = {
	                    fill: attrs.stroke,
	                    stroke: "none"
	                };
	            }
	            if (o._.arrows) {
	                if (isEnd) {
	                    o._.arrows.endPath && markerCounter[o._.arrows.endPath]--;
	                    o._.arrows.endMarker && markerCounter[o._.arrows.endMarker]--;
	                } else {
	                    o._.arrows.startPath && markerCounter[o._.arrows.startPath]--;
	                    o._.arrows.startMarker && markerCounter[o._.arrows.startMarker]--;
	                }
	            } else {
	                o._.arrows = {};
	            }
	            if (type != "none") {
	                var pathId = "raphael-marker-" + type,
	                    markerId = "raphael-marker-" + se + type + w + h + "-obj" + o.id;
	                if (!R._g.doc.getElementById(pathId)) {
	                    p.defs.appendChild($($("path"), {
	                        "stroke-linecap": "round",
	                        d: markers[type],
	                        id: pathId
	                    }));
	                    markerCounter[pathId] = 1;
	                } else {
	                    markerCounter[pathId]++;
	                }
	                var marker = R._g.doc.getElementById(markerId),
	                    use;
	                if (!marker) {
	                    marker = $($("marker"), {
	                        id: markerId,
	                        markerHeight: h,
	                        markerWidth: w,
	                        orient: "auto",
	                        refX: refX,
	                        refY: h / 2
	                    });
	                    use = $($("use"), {
	                        "xlink:href": "#" + pathId,
	                        transform: (isEnd ? "rotate(180 " + w / 2 + " " + h / 2 + ") " : E) + "scale(" + w / t + "," + h / t + ")",
	                        "stroke-width": (1 / ((w / t + h / t) / 2)).toFixed(4)
	                    });
	                    marker.appendChild(use);
	                    p.defs.appendChild(marker);
	                    markerCounter[markerId] = 1;
	                } else {
	                    markerCounter[markerId]++;
	                    use = marker.getElementsByTagName("use")[0];
	                }
	                $(use, attr);
	                var delta = dx * (type != "diamond" && type != "oval");
	                if (isEnd) {
	                    from = o._.arrows.startdx * stroke || 0;
	                    to = R.getTotalLength(attrs.path) - delta * stroke;
	                } else {
	                    from = delta * stroke;
	                    to = R.getTotalLength(attrs.path) - (o._.arrows.enddx * stroke || 0);
	                }
	                attr = {};
	                attr["marker-" + se] = "url(#" + markerId + ")";
	                if (to || from) {
	                    attr.d = R.getSubpath(attrs.path, from, to);
	                }
	                $(node, attr);
	                o._.arrows[se + "Path"] = pathId;
	                o._.arrows[se + "Marker"] = markerId;
	                o._.arrows[se + "dx"] = delta;
	                o._.arrows[se + "Type"] = type;
	                o._.arrows[se + "String"] = value;
	            } else {
	                if (isEnd) {
	                    from = o._.arrows.startdx * stroke || 0;
	                    to = R.getTotalLength(attrs.path) - from;
	                } else {
	                    from = 0;
	                    to = R.getTotalLength(attrs.path) - (o._.arrows.enddx * stroke || 0);
	                }
	                o._.arrows[se + "Path"] && $(node, {d: R.getSubpath(attrs.path, from, to)});
	                delete o._.arrows[se + "Path"];
	                delete o._.arrows[se + "Marker"];
	                delete o._.arrows[se + "dx"];
	                delete o._.arrows[se + "Type"];
	                delete o._.arrows[se + "String"];
	            }
	            for (attr in markerCounter) if (markerCounter[has](attr) && !markerCounter[attr]) {
	                var item = R._g.doc.getElementById(attr);
	                item && item.parentNode.removeChild(item);
	            }
	        }
	    },
	    dasharray = {
	        "": [0],
	        "none": [0],
	        "-": [3, 1],
	        ".": [1, 1],
	        "-.": [3, 1, 1, 1],
	        "-..": [3, 1, 1, 1, 1, 1],
	        ". ": [1, 3],
	        "- ": [4, 3],
	        "--": [8, 3],
	        "- .": [4, 3, 1, 3],
	        "--.": [8, 3, 1, 3],
	        "--..": [8, 3, 1, 3, 1, 3]
	    },
	    addDashes = function (o, value, params) {
	        value = dasharray[Str(value).toLowerCase()];
	        if (value) {
	            var width = o.attrs["stroke-width"] || "1",
	                butt = {round: width, square: width, butt: 0}[o.attrs["stroke-linecap"] || params["stroke-linecap"]] || 0,
	                dashes = [],
	                i = value.length;
	            while (i--) {
	                dashes[i] = value[i] * width + ((i % 2) ? 1 : -1) * butt;
	            }
	            $(o.node, {"stroke-dasharray": dashes.join(",")});
	        }
	    },
	    setFillAndStroke = function (o, params) {
	        var node = o.node,
	            attrs = o.attrs,
	            vis = node.style.visibility;
	        node.style.visibility = "hidden";
	        for (var att in params) {
	            if (params[has](att)) {
	                if (!R._availableAttrs[has](att)) {
	                    continue;
	                }
	                var value = params[att];
	                attrs[att] = value;
	                switch (att) {
	                    case "blur":
	                        o.blur(value);
	                        break;
	                    case "title":
	                        var title = node.getElementsByTagName("title");

	                        // Use the existing <title>.
	                        if (title.length && (title = title[0])) {
	                          title.firstChild.nodeValue = value;
	                        } else {
	                          title = $("title");
	                          var val = R._g.doc.createTextNode(value);
	                          title.appendChild(val);
	                          node.appendChild(title);
	                        }
	                        break;
	                    case "href":
	                    case "target":
	                        var pn = node.parentNode;
	                        if (pn.tagName.toLowerCase() != "a") {
	                            var hl = $("a");
	                            pn.insertBefore(hl, node);
	                            hl.appendChild(node);
	                            pn = hl;
	                        }
	                        if (att == "target") {
	                            pn.setAttributeNS(xlink, "show", value == "blank" ? "new" : value);
	                        } else {
	                            pn.setAttributeNS(xlink, att, value);
	                        }
	                        break;
	                    case "cursor":
	                        node.style.cursor = value;
	                        break;
	                    case "transform":
	                        o.transform(value);
	                        break;
	                    case "arrow-start":
	                        addArrow(o, value);
	                        break;
	                    case "arrow-end":
	                        addArrow(o, value, 1);
	                        break;
	                    case "clip-rect":
	                        var rect = Str(value).split(separator);
	                        if (rect.length == 4) {
	                            o.clip && o.clip.parentNode.parentNode.removeChild(o.clip.parentNode);
	                            var el = $("clipPath"),
	                                rc = $("rect");
	                            el.id = R.createUUID();
	                            $(rc, {
	                                x: rect[0],
	                                y: rect[1],
	                                width: rect[2],
	                                height: rect[3]
	                            });
	                            el.appendChild(rc);
	                            o.paper.defs.appendChild(el);
	                            $(node, {"clip-path": "url(#" + el.id + ")"});
	                            o.clip = rc;
	                        }
	                        if (!value) {
	                            var path = node.getAttribute("clip-path");
	                            if (path) {
	                                var clip = R._g.doc.getElementById(path.replace(/(^url\(#|\)$)/g, E));
	                                clip && clip.parentNode.removeChild(clip);
	                                $(node, {"clip-path": E});
	                                delete o.clip;
	                            }
	                        }
	                    break;
	                    case "path":
	                        if (o.type == "path") {
	                            $(node, {d: value ? attrs.path = R._pathToAbsolute(value) : "M0,0"});
	                            o._.dirty = 1;
	                            if (o._.arrows) {
	                                "startString" in o._.arrows && addArrow(o, o._.arrows.startString);
	                                "endString" in o._.arrows && addArrow(o, o._.arrows.endString, 1);
	                            }
	                        }
	                        break;
	                    case "width":
	                        node.setAttribute(att, value);
	                        o._.dirty = 1;
	                        if (attrs.fx) {
	                            att = "x";
	                            value = attrs.x;
	                        } else {
	                            break;
	                        }
	                    case "x":
	                        if (attrs.fx) {
	                            value = -attrs.x - (attrs.width || 0);
	                        }
	                    case "rx":
	                        if (att == "rx" && o.type == "rect") {
	                            break;
	                        }
	                    case "cx":
	                        node.setAttribute(att, value);
	                        o.pattern && updatePosition(o);
	                        o._.dirty = 1;
	                        break;
	                    case "height":
	                        node.setAttribute(att, value);
	                        o._.dirty = 1;
	                        if (attrs.fy) {
	                            att = "y";
	                            value = attrs.y;
	                        } else {
	                            break;
	                        }
	                    case "y":
	                        if (attrs.fy) {
	                            value = -attrs.y - (attrs.height || 0);
	                        }
	                    case "ry":
	                        if (att == "ry" && o.type == "rect") {
	                            break;
	                        }
	                    case "cy":
	                        node.setAttribute(att, value);
	                        o.pattern && updatePosition(o);
	                        o._.dirty = 1;
	                        break;
	                    case "r":
	                        if (o.type == "rect") {
	                            $(node, {rx: value, ry: value});
	                        } else {
	                            node.setAttribute(att, value);
	                        }
	                        o._.dirty = 1;
	                        break;
	                    case "src":
	                        if (o.type == "image") {
	                            node.setAttributeNS(xlink, "href", value);
	                        }
	                        break;
	                    case "stroke-width":
	                        if (o._.sx != 1 || o._.sy != 1) {
	                            value /= mmax(abs(o._.sx), abs(o._.sy)) || 1;
	                        }
	                        node.setAttribute(att, value);
	                        if (attrs["stroke-dasharray"]) {
	                            addDashes(o, attrs["stroke-dasharray"], params);
	                        }
	                        if (o._.arrows) {
	                            "startString" in o._.arrows && addArrow(o, o._.arrows.startString);
	                            "endString" in o._.arrows && addArrow(o, o._.arrows.endString, 1);
	                        }
	                        break;
	                    case "stroke-dasharray":
	                        addDashes(o, value, params);
	                        break;
	                    case "fill":
	                        var isURL = Str(value).match(R._ISURL);
	                        if (isURL) {
	                            el = $("pattern");
	                            var ig = $("image");
	                            el.id = R.createUUID();
	                            $(el, {x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1});
	                            $(ig, {x: 0, y: 0, "xlink:href": isURL[1]});
	                            el.appendChild(ig);

	                            (function (el) {
	                                R._preload(isURL[1], function () {
	                                    var w = this.offsetWidth,
	                                        h = this.offsetHeight;
	                                    $(el, {width: w, height: h});
	                                    $(ig, {width: w, height: h});
	                                    o.paper.safari();
	                                });
	                            })(el);
	                            o.paper.defs.appendChild(el);
	                            $(node, {fill: "url(#" + el.id + ")"});
	                            o.pattern = el;
	                            o.pattern && updatePosition(o);
	                            break;
	                        }
	                        var clr = R.getRGB(value);
	                        if (!clr.error) {
	                            delete params.gradient;
	                            delete attrs.gradient;
	                            !R.is(attrs.opacity, "undefined") &&
	                                R.is(params.opacity, "undefined") &&
	                                $(node, {opacity: attrs.opacity});
	                            !R.is(attrs["fill-opacity"], "undefined") &&
	                                R.is(params["fill-opacity"], "undefined") &&
	                                $(node, {"fill-opacity": attrs["fill-opacity"]});
	                        } else if ((o.type == "circle" || o.type == "ellipse" || Str(value).charAt() != "r") && addGradientFill(o, value)) {
	                            if ("opacity" in attrs || "fill-opacity" in attrs) {
	                                var gradient = R._g.doc.getElementById(node.getAttribute("fill").replace(/^url\(#|\)$/g, E));
	                                if (gradient) {
	                                    var stops = gradient.getElementsByTagName("stop");
	                                    $(stops[stops.length - 1], {"stop-opacity": ("opacity" in attrs ? attrs.opacity : 1) * ("fill-opacity" in attrs ? attrs["fill-opacity"] : 1)});
	                                }
	                            }
	                            attrs.gradient = value;
	                            attrs.fill = "none";
	                            break;
	                        }
	                        clr[has]("opacity") && $(node, {"fill-opacity": clr.opacity > 1 ? clr.opacity / 100 : clr.opacity});
	                    case "stroke":
	                        clr = R.getRGB(value);
	                        node.setAttribute(att, clr.hex);
	                        att == "stroke" && clr[has]("opacity") && $(node, {"stroke-opacity": clr.opacity > 1 ? clr.opacity / 100 : clr.opacity});
	                        if (att == "stroke" && o._.arrows) {
	                            "startString" in o._.arrows && addArrow(o, o._.arrows.startString);
	                            "endString" in o._.arrows && addArrow(o, o._.arrows.endString, 1);
	                        }
	                        break;
	                    case "gradient":
	                        (o.type == "circle" || o.type == "ellipse" || Str(value).charAt() != "r") && addGradientFill(o, value);
	                        break;
	                    case "opacity":
	                        if (attrs.gradient && !attrs[has]("stroke-opacity")) {
	                            $(node, {"stroke-opacity": value > 1 ? value / 100 : value});
	                        }
	                        // fall
	                    case "fill-opacity":
	                        if (attrs.gradient) {
	                            gradient = R._g.doc.getElementById(node.getAttribute("fill").replace(/^url\(#|\)$/g, E));
	                            if (gradient) {
	                                stops = gradient.getElementsByTagName("stop");
	                                $(stops[stops.length - 1], {"stop-opacity": value});
	                            }
	                            break;
	                        }
	                    default:
	                        att == "font-size" && (value = toInt(value, 10) + "px");
	                        var cssrule = att.replace(/(\-.)/g, function (w) {
	                            return w.substring(1).toUpperCase();
	                        });
	                        node.style[cssrule] = value;
	                        o._.dirty = 1;
	                        node.setAttribute(att, value);
	                        break;
	                }
	            }
	        }

	        tuneText(o, params);
	        node.style.visibility = vis;
	    },
	    leading = 1.2,
	    tuneText = function (el, params) {
	        if (el.type != "text" || !(params[has]("text") || params[has]("font") || params[has]("font-size") || params[has]("x") || params[has]("y"))) {
	            return;
	        }
	        var a = el.attrs,
	            node = el.node,
	            fontSize = node.firstChild ? toInt(R._g.doc.defaultView.getComputedStyle(node.firstChild, E).getPropertyValue("font-size"), 10) : 10;

	        if (params[has]("text")) {
	            a.text = params.text;
	            while (node.firstChild) {
	                node.removeChild(node.firstChild);
	            }
	            var texts = Str(params.text).split("\n"),
	                tspans = [],
	                tspan;
	            for (var i = 0, ii = texts.length; i < ii; i++) {
	                tspan = $("tspan");
	                i && $(tspan, {dy: fontSize * leading, x: a.x});
	                tspan.appendChild(R._g.doc.createTextNode(texts[i]));
	                node.appendChild(tspan);
	                tspans[i] = tspan;
	            }
	        } else {
	            tspans = node.getElementsByTagName("tspan");
	            for (i = 0, ii = tspans.length; i < ii; i++) if (i) {
	                $(tspans[i], {dy: fontSize * leading, x: a.x});
	            } else {
	                $(tspans[0], {dy: 0});
	            }
	        }
	        $(node, {x: a.x, y: a.y});
	        el._.dirty = 1;
	        var bb = el._getBBox(),
	            dif = a.y - (bb.y + bb.height / 2);
	        dif && R.is(dif, "finite") && $(tspans[0], {dy: dif});
	    },
	    getRealNode = function (node) {
	        if (node.parentNode && node.parentNode.tagName.toLowerCase() === "a") {
	            return node.parentNode;
	        } else {
	            return node;
	        }
	    },
	    Element = function (node, svg) {
	        var X = 0,
	            Y = 0;
	        /*\
	         * Element.node
	         [ property (object) ]
	         **
	         * Gives you a reference to the DOM object, so you can assign event handlers or just mess around.
	         **
	         * Note: Don’t mess with it.
	         > Usage
	         | // draw a circle at coordinate 10,10 with radius of 10
	         | var c = paper.circle(10, 10, 10);
	         | c.node.onclick = function () {
	         |     c.attr("fill", "red");
	         | };
	        \*/
	        this[0] = this.node = node;
	        /*\
	         * Element.raphael
	         [ property (object) ]
	         **
	         * Internal reference to @Raphael object. In case it is not available.
	         > Usage
	         | Raphael.el.red = function () {
	         |     var hsb = this.paper.raphael.rgb2hsb(this.attr("fill"));
	         |     hsb.h = 1;
	         |     this.attr({fill: this.paper.raphael.hsb2rgb(hsb).hex});
	         | }
	        \*/
	        node.raphael = true;
	        /*\
	         * Element.id
	         [ property (number) ]
	         **
	         * Unique id of the element. Especially useful when you want to listen to events of the element,
	         * because all events are fired in format `<module>.<action>.<id>`. Also useful for @Paper.getById method.
	        \*/
	        this.id = R._oid++;
	        node.raphaelid = this.id;
	        this.matrix = R.matrix();
	        this.realPath = null;
	        /*\
	         * Element.paper
	         [ property (object) ]
	         **
	         * Internal reference to “paper” where object drawn. Mainly for use in plugins and element extensions.
	         > Usage
	         | Raphael.el.cross = function () {
	         |     this.attr({fill: "red"});
	         |     this.paper.path("M10,10L50,50M50,10L10,50")
	         |         .attr({stroke: "red"});
	         | }
	        \*/
	        this.paper = svg;
	        this.attrs = this.attrs || {};
	        this._ = {
	            transform: [],
	            sx: 1,
	            sy: 1,
	            deg: 0,
	            dx: 0,
	            dy: 0,
	            dirty: 1
	        };
	        !svg.bottom && (svg.bottom = this);
	        /*\
	         * Element.prev
	         [ property (object) ]
	         **
	         * Reference to the previous element in the hierarchy.
	        \*/
	        this.prev = svg.top;
	        svg.top && (svg.top.next = this);
	        svg.top = this;
	        /*\
	         * Element.next
	         [ property (object) ]
	         **
	         * Reference to the next element in the hierarchy.
	        \*/
	        this.next = null;
	    },
	    elproto = R.el;

	    Element.prototype = elproto;
	    elproto.constructor = Element;

	    R._engine.path = function (pathString, SVG) {
	        var el = $("path");
	        SVG.canvas && SVG.canvas.appendChild(el);
	        var p = new Element(el, SVG);
	        p.type = "path";
	        setFillAndStroke(p, {
	            fill: "none",
	            stroke: "#000",
	            path: pathString
	        });
	        return p;
	    };
	    /*\
	     * Element.rotate
	     [ method ]
	     **
	     * Deprecated! Use @Element.transform instead.
	     * Adds rotation by given angle around given point to the list of
	     * transformations of the element.
	     > Parameters
	     - deg (number) angle in degrees
	     - cx (number) #optional x coordinate of the centre of rotation
	     - cy (number) #optional y coordinate of the centre of rotation
	     * If cx & cy aren’t specified centre of the shape is used as a point of rotation.
	     = (object) @Element
	    \*/
	    elproto.rotate = function (deg, cx, cy) {
	        if (this.removed) {
	            return this;
	        }
	        deg = Str(deg).split(separator);
	        if (deg.length - 1) {
	            cx = toFloat(deg[1]);
	            cy = toFloat(deg[2]);
	        }
	        deg = toFloat(deg[0]);
	        (cy == null) && (cx = cy);
	        if (cx == null || cy == null) {
	            var bbox = this.getBBox(1);
	            cx = bbox.x + bbox.width / 2;
	            cy = bbox.y + bbox.height / 2;
	        }
	        this.transform(this._.transform.concat([["r", deg, cx, cy]]));
	        return this;
	    };
	    /*\
	     * Element.scale
	     [ method ]
	     **
	     * Deprecated! Use @Element.transform instead.
	     * Adds scale by given amount relative to given point to the list of
	     * transformations of the element.
	     > Parameters
	     - sx (number) horisontal scale amount
	     - sy (number) vertical scale amount
	     - cx (number) #optional x coordinate of the centre of scale
	     - cy (number) #optional y coordinate of the centre of scale
	     * If cx & cy aren’t specified centre of the shape is used instead.
	     = (object) @Element
	    \*/
	    elproto.scale = function (sx, sy, cx, cy) {
	        if (this.removed) {
	            return this;
	        }
	        sx = Str(sx).split(separator);
	        if (sx.length - 1) {
	            sy = toFloat(sx[1]);
	            cx = toFloat(sx[2]);
	            cy = toFloat(sx[3]);
	        }
	        sx = toFloat(sx[0]);
	        (sy == null) && (sy = sx);
	        (cy == null) && (cx = cy);
	        if (cx == null || cy == null) {
	            var bbox = this.getBBox(1);
	        }
	        cx = cx == null ? bbox.x + bbox.width / 2 : cx;
	        cy = cy == null ? bbox.y + bbox.height / 2 : cy;
	        this.transform(this._.transform.concat([["s", sx, sy, cx, cy]]));
	        return this;
	    };
	    /*\
	     * Element.translate
	     [ method ]
	     **
	     * Deprecated! Use @Element.transform instead.
	     * Adds translation by given amount to the list of transformations of the element.
	     > Parameters
	     - dx (number) horisontal shift
	     - dy (number) vertical shift
	     = (object) @Element
	    \*/
	    elproto.translate = function (dx, dy) {
	        if (this.removed) {
	            return this;
	        }
	        dx = Str(dx).split(separator);
	        if (dx.length - 1) {
	            dy = toFloat(dx[1]);
	        }
	        dx = toFloat(dx[0]) || 0;
	        dy = +dy || 0;
	        this.transform(this._.transform.concat([["t", dx, dy]]));
	        return this;
	    };
	    /*\
	     * Element.transform
	     [ method ]
	     **
	     * Adds transformation to the element which is separate to other attributes,
	     * i.e. translation doesn’t change `x` or `y` of the rectange. The format
	     * of transformation string is similar to the path string syntax:
	     | "t100,100r30,100,100s2,2,100,100r45s1.5"
	     * Each letter is a command. There are four commands: `t` is for translate, `r` is for rotate, `s` is for
	     * scale and `m` is for matrix.
	     *
	     * There are also alternative “absolute” translation, rotation and scale: `T`, `R` and `S`. They will not take previous transformation into account. For example, `...T100,0` will always move element 100 px horisontally, while `...t100,0` could move it vertically if there is `r90` before. Just compare results of `r90t100,0` and `r90T100,0`.
	     *
	     * So, the example line above could be read like “translate by 100, 100; rotate 30° around 100, 100; scale twice around 100, 100;
	     * rotate 45° around centre; scale 1.5 times relative to centre”. As you can see rotate and scale commands have origin
	     * coordinates as optional parameters, the default is the centre point of the element.
	     * Matrix accepts six parameters.
	     > Usage
	     | var el = paper.rect(10, 20, 300, 200);
	     | // translate 100, 100, rotate 45°, translate -100, 0
	     | el.transform("t100,100r45t-100,0");
	     | // if you want you can append or prepend transformations
	     | el.transform("...t50,50");
	     | el.transform("s2...");
	     | // or even wrap
	     | el.transform("t50,50...t-50-50");
	     | // to reset transformation call method with empty string
	     | el.transform("");
	     | // to get current value call it without parameters
	     | console.log(el.transform());
	     > Parameters
	     - tstr (string) #optional transformation string
	     * If tstr isn’t specified
	     = (string) current transformation string
	     * else
	     = (object) @Element
	    \*/
	    elproto.transform = function (tstr) {
	        var _ = this._;
	        if (tstr == null) {
	            return _.transform;
	        }
	        R._extractTransform(this, tstr);

	        this.clip && $(this.clip, {transform: this.matrix.invert()});
	        this.pattern && updatePosition(this);
	        this.node && $(this.node, {transform: this.matrix});

	        if (_.sx != 1 || _.sy != 1) {
	            var sw = this.attrs[has]("stroke-width") ? this.attrs["stroke-width"] : 1;
	            this.attr({"stroke-width": sw});
	        }

	        return this;
	    };
	    /*\
	     * Element.hide
	     [ method ]
	     **
	     * Makes element invisible. See @Element.show.
	     = (object) @Element
	    \*/
	    elproto.hide = function () {
	        !this.removed && this.paper.safari(this.node.style.display = "none");
	        return this;
	    };
	    /*\
	     * Element.show
	     [ method ]
	     **
	     * Makes element visible. See @Element.hide.
	     = (object) @Element
	    \*/
	    elproto.show = function () {
	        !this.removed && this.paper.safari(this.node.style.display = "");
	        return this;
	    };
	    /*\
	     * Element.remove
	     [ method ]
	     **
	     * Removes element from the paper.
	    \*/
	    elproto.remove = function () {
	        var node = getRealNode(this.node);
	        if (this.removed || !node.parentNode) {
	            return;
	        }
	        var paper = this.paper;
	        paper.__set__ && paper.__set__.exclude(this);
	        eve.unbind("raphael.*.*." + this.id);
	        if (this.gradient) {
	            paper.defs.removeChild(this.gradient);
	        }
	        R._tear(this, paper);

	        node.parentNode.removeChild(node);

	        // Remove custom data for element
	        this.removeData();

	        for (var i in this) {
	            this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
	        }
	        this.removed = true;
	    };
	    elproto._getBBox = function () {
	        if (this.node.style.display == "none") {
	            this.show();
	            var hide = true;
	        }
	        var canvasHidden = false,
	            containerStyle;
	        if (this.paper.canvas.parentElement) {
	          containerStyle = this.paper.canvas.parentElement.style;
	        } //IE10+ can't find parentElement
	        else if (this.paper.canvas.parentNode) {
	          containerStyle = this.paper.canvas.parentNode.style;
	        }

	        if(containerStyle && containerStyle.display == "none") {
	          canvasHidden = true;
	          containerStyle.display = "";
	        }
	        var bbox = {};
	        try {
	            bbox = this.node.getBBox();
	        } catch(e) {
	            // Firefox 3.0.x, 25.0.1 (probably more versions affected) play badly here - possible fix
	            bbox = {
	                x: this.node.clientLeft,
	                y: this.node.clientTop,
	                width: this.node.clientWidth,
	                height: this.node.clientHeight
	            }
	        } finally {
	            bbox = bbox || {};
	            if(canvasHidden){
	              containerStyle.display = "none";
	            }
	        }
	        hide && this.hide();
	        return bbox;
	    };
	    /*\
	     * Element.attr
	     [ method ]
	     **
	     * Sets the attributes of the element.
	     > Parameters
	     - attrName (string) attribute’s name
	     - value (string) value
	     * or
	     - params (object) object of name/value pairs
	     * or
	     - attrName (string) attribute’s name
	     * or
	     - attrNames (array) in this case method returns array of current values for given attribute names
	     = (object) @Element if attrsName & value or params are passed in.
	     = (...) value of the attribute if only attrsName is passed in.
	     = (array) array of values of the attribute if attrsNames is passed in.
	     = (object) object of attributes if nothing is passed in.
	     > Possible parameters
	     # <p>Please refer to the <a href="http://www.w3.org/TR/SVG/" title="The W3C Recommendation for the SVG language describes these properties in detail.">SVG specification</a> for an explanation of these parameters.</p>
	     o arrow-end (string) arrowhead on the end of the path. The format for string is `<type>[-<width>[-<length>]]`. Possible types: `classic`, `block`, `open`, `oval`, `diamond`, `none`, width: `wide`, `narrow`, `medium`, length: `long`, `short`, `midium`.
	     o clip-rect (string) comma or space separated values: x, y, width and height
	     o cursor (string) CSS type of the cursor
	     o cx (number) the x-axis coordinate of the center of the circle, or ellipse
	     o cy (number) the y-axis coordinate of the center of the circle, or ellipse
	     o fill (string) colour, gradient or image
	     o fill-opacity (number)
	     o font (string)
	     o font-family (string)
	     o font-size (number) font size in pixels
	     o font-weight (string)
	     o height (number)
	     o href (string) URL, if specified element behaves as hyperlink
	     o opacity (number)
	     o path (string) SVG path string format
	     o r (number) radius of the circle, ellipse or rounded corner on the rect
	     o rx (number) horisontal radius of the ellipse
	     o ry (number) vertical radius of the ellipse
	     o src (string) image URL, only works for @Element.image element
	     o stroke (string) stroke colour
	     o stroke-dasharray (string) [“”, “`-`”, “`.`”, “`-.`”, “`-..`”, “`. `”, “`- `”, “`--`”, “`- .`”, “`--.`”, “`--..`”]
	     o stroke-linecap (string) [“`butt`”, “`square`”, “`round`”]
	     o stroke-linejoin (string) [“`bevel`”, “`round`”, “`miter`”]
	     o stroke-miterlimit (number)
	     o stroke-opacity (number)
	     o stroke-width (number) stroke width in pixels, default is '1'
	     o target (string) used with href
	     o text (string) contents of the text element. Use `\n` for multiline text
	     o text-anchor (string) [“`start`”, “`middle`”, “`end`”], default is “`middle`”
	     o title (string) will create tooltip with a given text
	     o transform (string) see @Element.transform
	     o width (number)
	     o x (number)
	     o y (number)
	     > Gradients
	     * Linear gradient format: “`‹angle›-‹colour›[-‹colour›[:‹offset›]]*-‹colour›`”, example: “`90-#fff-#000`” – 90°
	     * gradient from white to black or “`0-#fff-#f00:20-#000`” – 0° gradient from white via red (at 20%) to black.
	     *
	     * radial gradient: “`r[(‹fx›, ‹fy›)]‹colour›[-‹colour›[:‹offset›]]*-‹colour›`”, example: “`r#fff-#000`” –
	     * gradient from white to black or “`r(0.25, 0.75)#fff-#000`” – gradient from white to black with focus point
	     * at 0.25, 0.75. Focus point coordinates are in 0..1 range. Radial gradients can only be applied to circles and ellipses.
	     > Path String
	     # <p>Please refer to <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path’s data attribute’s format are described in the SVG specification.">SVG documentation regarding path string</a>. Raphaël fully supports it.</p>
	     > Colour Parsing
	     # <ul>
	     #     <li>Colour name (“<code>red</code>”, “<code>green</code>”, “<code>cornflowerblue</code>”, etc)</li>
	     #     <li>#••• — shortened HTML colour: (“<code>#000</code>”, “<code>#fc0</code>”, etc)</li>
	     #     <li>#•••••• — full length HTML colour: (“<code>#000000</code>”, “<code>#bd2300</code>”)</li>
	     #     <li>rgb(•••, •••, •••) — red, green and blue channels’ values: (“<code>rgb(200,&nbsp;100,&nbsp;0)</code>”)</li>
	     #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (“<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>”)</li>
	     #     <li>rgba(•••, •••, •••, •••) — red, green and blue channels’ values: (“<code>rgba(200,&nbsp;100,&nbsp;0, .5)</code>”)</li>
	     #     <li>rgba(•••%, •••%, •••%, •••%) — same as above, but in %: (“<code>rgba(100%,&nbsp;175%,&nbsp;0%, 50%)</code>”)</li>
	     #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (“<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>”)</li>
	     #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
	     #     <li>hsba(•••, •••, •••, •••) — same as above, but with opacity</li>
	     #     <li>hsl(•••, •••, •••) — almost the same as hsb, see <a href="http://en.wikipedia.org/wiki/HSL_and_HSV" title="HSL and HSV - Wikipedia, the free encyclopedia">Wikipedia page</a></li>
	     #     <li>hsl(•••%, •••%, •••%) — same as above, but in %</li>
	     #     <li>hsla(•••, •••, •••, •••) — same as above, but with opacity</li>
	     #     <li>Optionally for hsb and hsl you could specify hue as a degree: “<code>hsl(240deg,&nbsp;1,&nbsp;.5)</code>” or, if you want to go fancy, “<code>hsl(240°,&nbsp;1,&nbsp;.5)</code>”</li>
	     # </ul>
	    \*/
	    elproto.attr = function (name, value) {
	        if (this.removed) {
	            return this;
	        }
	        if (name == null) {
	            var res = {};
	            for (var a in this.attrs) if (this.attrs[has](a)) {
	                res[a] = this.attrs[a];
	            }
	            res.gradient && res.fill == "none" && (res.fill = res.gradient) && delete res.gradient;
	            res.transform = this._.transform;
	            return res;
	        }
	        if (value == null && R.is(name, "string")) {
	            if (name == "fill" && this.attrs.fill == "none" && this.attrs.gradient) {
	                return this.attrs.gradient;
	            }
	            if (name == "transform") {
	                return this._.transform;
	            }
	            var names = name.split(separator),
	                out = {};
	            for (var i = 0, ii = names.length; i < ii; i++) {
	                name = names[i];
	                if (name in this.attrs) {
	                    out[name] = this.attrs[name];
	                } else if (R.is(this.paper.customAttributes[name], "function")) {
	                    out[name] = this.paper.customAttributes[name].def;
	                } else {
	                    out[name] = R._availableAttrs[name];
	                }
	            }
	            return ii - 1 ? out : out[names[0]];
	        }
	        if (value == null && R.is(name, "array")) {
	            out = {};
	            for (i = 0, ii = name.length; i < ii; i++) {
	                out[name[i]] = this.attr(name[i]);
	            }
	            return out;
	        }
	        if (value != null) {
	            var params = {};
	            params[name] = value;
	        } else if (name != null && R.is(name, "object")) {
	            params = name;
	        }
	        for (var key in params) {
	            eve("raphael.attr." + key + "." + this.id, this, params[key]);
	        }
	        for (key in this.paper.customAttributes) if (this.paper.customAttributes[has](key) && params[has](key) && R.is(this.paper.customAttributes[key], "function")) {
	            var par = this.paper.customAttributes[key].apply(this, [].concat(params[key]));
	            this.attrs[key] = params[key];
	            for (var subkey in par) if (par[has](subkey)) {
	                params[subkey] = par[subkey];
	            }
	        }
	        setFillAndStroke(this, params);
	        return this;
	    };
	    /*\
	     * Element.toFront
	     [ method ]
	     **
	     * Moves the element so it is the closest to the viewer’s eyes, on top of other elements.
	     = (object) @Element
	    \*/
	    elproto.toFront = function () {
	        if (this.removed) {
	            return this;
	        }
	        var node = getRealNode(this.node);
	        node.parentNode.appendChild(node);
	        var svg = this.paper;
	        svg.top != this && R._tofront(this, svg);
	        return this;
	    };
	    /*\
	     * Element.toBack
	     [ method ]
	     **
	     * Moves the element so it is the furthest from the viewer’s eyes, behind other elements.
	     = (object) @Element
	    \*/
	    elproto.toBack = function () {
	        if (this.removed) {
	            return this;
	        }
	        var node = getRealNode(this.node);
	        var parentNode = node.parentNode;
	        parentNode.insertBefore(node, parentNode.firstChild);
	        R._toback(this, this.paper);
	        var svg = this.paper;
	        return this;
	    };
	    /*\
	     * Element.insertAfter
	     [ method ]
	     **
	     * Inserts current object after the given one.
	     = (object) @Element
	    \*/
	    elproto.insertAfter = function (element) {
	        if (this.removed || !element) {
	            return this;
	        }

	        var node = getRealNode(this.node);
	        var afterNode = getRealNode(element.node || element[element.length - 1].node);
	        if (afterNode.nextSibling) {
	            afterNode.parentNode.insertBefore(node, afterNode.nextSibling);
	        } else {
	            afterNode.parentNode.appendChild(node);
	        }
	        R._insertafter(this, element, this.paper);
	        return this;
	    };
	    /*\
	     * Element.insertBefore
	     [ method ]
	     **
	     * Inserts current object before the given one.
	     = (object) @Element
	    \*/
	    elproto.insertBefore = function (element) {
	        if (this.removed || !element) {
	            return this;
	        }

	        var node = getRealNode(this.node);
	        var beforeNode = getRealNode(element.node || element[0].node);
	        beforeNode.parentNode.insertBefore(node, beforeNode);
	        R._insertbefore(this, element, this.paper);
	        return this;
	    };
	    elproto.blur = function (size) {
	        // Experimental. No Safari support. Use it on your own risk.
	        var t = this;
	        if (+size !== 0) {
	            var fltr = $("filter"),
	                blur = $("feGaussianBlur");
	            t.attrs.blur = size;
	            fltr.id = R.createUUID();
	            $(blur, {stdDeviation: +size || 1.5});
	            fltr.appendChild(blur);
	            t.paper.defs.appendChild(fltr);
	            t._blur = fltr;
	            $(t.node, {filter: "url(#" + fltr.id + ")"});
	        } else {
	            if (t._blur) {
	                t._blur.parentNode.removeChild(t._blur);
	                delete t._blur;
	                delete t.attrs.blur;
	            }
	            t.node.removeAttribute("filter");
	        }
	        return t;
	    };
	    R._engine.circle = function (svg, x, y, r) {
	        var el = $("circle");
	        svg.canvas && svg.canvas.appendChild(el);
	        var res = new Element(el, svg);
	        res.attrs = {cx: x, cy: y, r: r, fill: "none", stroke: "#000"};
	        res.type = "circle";
	        $(el, res.attrs);
	        return res;
	    };
	    R._engine.rect = function (svg, x, y, w, h, r) {
	        var el = $("rect");
	        svg.canvas && svg.canvas.appendChild(el);
	        var res = new Element(el, svg);
	        res.attrs = {x: x, y: y, width: w, height: h, rx: r || 0, ry: r || 0, fill: "none", stroke: "#000"};
	        res.type = "rect";
	        $(el, res.attrs);
	        return res;
	    };
	    R._engine.ellipse = function (svg, x, y, rx, ry) {
	        var el = $("ellipse");
	        svg.canvas && svg.canvas.appendChild(el);
	        var res = new Element(el, svg);
	        res.attrs = {cx: x, cy: y, rx: rx, ry: ry, fill: "none", stroke: "#000"};
	        res.type = "ellipse";
	        $(el, res.attrs);
	        return res;
	    };
	    R._engine.image = function (svg, src, x, y, w, h) {
	        var el = $("image");
	        $(el, {x: x, y: y, width: w, height: h, preserveAspectRatio: "none"});
	        el.setAttributeNS(xlink, "href", src);
	        svg.canvas && svg.canvas.appendChild(el);
	        var res = new Element(el, svg);
	        res.attrs = {x: x, y: y, width: w, height: h, src: src};
	        res.type = "image";
	        return res;
	    };
	    R._engine.text = function (svg, x, y, text) {
	        var el = $("text");
	        svg.canvas && svg.canvas.appendChild(el);
	        var res = new Element(el, svg);
	        res.attrs = {
	            x: x,
	            y: y,
	            "text-anchor": "middle",
	            text: text,
	            "font-family": R._availableAttrs["font-family"],
	            "font-size": R._availableAttrs["font-size"],
	            stroke: "none",
	            fill: "#000"
	        };
	        res.type = "text";
	        setFillAndStroke(res, res.attrs);
	        return res;
	    };
	    R._engine.setSize = function (width, height) {
	        this.width = width || this.width;
	        this.height = height || this.height;
	        this.canvas.setAttribute("width", this.width);
	        this.canvas.setAttribute("height", this.height);
	        if (this._viewBox) {
	            this.setViewBox.apply(this, this._viewBox);
	        }
	        return this;
	    };
	    R._engine.create = function () {
	        var con = R._getContainer.apply(0, arguments),
	            container = con && con.container,
	            x = con.x,
	            y = con.y,
	            width = con.width,
	            height = con.height;
	        if (!container) {
	            throw new Error("SVG container not found.");
	        }
	        var cnvs = $("svg"),
	            css = "overflow:hidden;",
	            isFloating;
	        x = x || 0;
	        y = y || 0;
	        width = width || 512;
	        height = height || 342;
	        $(cnvs, {
	            height: height,
	            version: 1.1,
	            width: width,
	            xmlns: "http://www.w3.org/2000/svg",
	            "xmlns:xlink": "http://www.w3.org/1999/xlink"
	        });
	        if (container == 1) {
	            cnvs.style.cssText = css + "position:absolute;left:" + x + "px;top:" + y + "px";
	            R._g.doc.body.appendChild(cnvs);
	            isFloating = 1;
	        } else {
	            cnvs.style.cssText = css + "position:relative";
	            if (container.firstChild) {
	                container.insertBefore(cnvs, container.firstChild);
	            } else {
	                container.appendChild(cnvs);
	            }
	        }
	        container = new R._Paper;
	        container.width = width;
	        container.height = height;
	        container.canvas = cnvs;
	        container.clear();
	        container._left = container._top = 0;
	        isFloating && (container.renderfix = function () {});
	        container.renderfix();
	        return container;
	    };
	    R._engine.setViewBox = function (x, y, w, h, fit) {
	        eve("raphael.setViewBox", this, this._viewBox, [x, y, w, h, fit]);
	        var paperSize = this.getSize(),
	            size = mmax(w / paperSize.width, h / paperSize.height),
	            top = this.top,
	            aspectRatio = fit ? "xMidYMid meet" : "xMinYMin",
	            vb,
	            sw;
	        if (x == null) {
	            if (this._vbSize) {
	                size = 1;
	            }
	            delete this._vbSize;
	            vb = "0 0 " + this.width + S + this.height;
	        } else {
	            this._vbSize = size;
	            vb = x + S + y + S + w + S + h;
	        }
	        $(this.canvas, {
	            viewBox: vb,
	            preserveAspectRatio: aspectRatio
	        });
	        while (size && top) {
	            sw = "stroke-width" in top.attrs ? top.attrs["stroke-width"] : 1;
	            top.attr({"stroke-width": sw});
	            top._.dirty = 1;
	            top._.dirtyT = 1;
	            top = top.prev;
	        }
	        this._viewBox = [x, y, w, h, !!fit];
	        return this;
	    };
	    /*\
	     * Paper.renderfix
	     [ method ]
	     **
	     * Fixes the issue of Firefox and IE9 regarding subpixel rendering. If paper is dependant
	     * on other elements after reflow it could shift half pixel which cause for lines to lost their crispness.
	     * This method fixes the issue.
	     **
	       Special thanks to Mariusz Nowak (http://www.medikoo.com/) for this method.
	    \*/
	    R.prototype.renderfix = function () {
	        var cnvs = this.canvas,
	            s = cnvs.style,
	            pos;
	        try {
	            pos = cnvs.getScreenCTM() || cnvs.createSVGMatrix();
	        } catch (e) {
	            pos = cnvs.createSVGMatrix();
	        }
	        var left = -pos.e % 1,
	            top = -pos.f % 1;
	        if (left || top) {
	            if (left) {
	                this._left = (this._left + left) % 1;
	                s.left = this._left + "px";
	            }
	            if (top) {
	                this._top = (this._top + top) % 1;
	                s.top = this._top + "px";
	            }
	        }
	    };
	    /*\
	     * Paper.clear
	     [ method ]
	     **
	     * Clears the paper, i.e. removes all the elements.
	    \*/
	    R.prototype.clear = function () {
	        R.eve("raphael.clear", this);
	        var c = this.canvas;
	        while (c.firstChild) {
	            c.removeChild(c.firstChild);
	        }
	        this.bottom = this.top = null;
	        (this.desc = $("desc")).appendChild(R._g.doc.createTextNode("Created with Rapha\xebl " + R.version));
	        c.appendChild(this.desc);
	        c.appendChild(this.defs = $("defs"));
	    };
	    /*\
	     * Paper.remove
	     [ method ]
	     **
	     * Removes the paper from the DOM.
	    \*/
	    R.prototype.remove = function () {
	        eve("raphael.remove", this);
	        this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
	        for (var i in this) {
	            this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
	        }
	    };
	    var setproto = R.st;
	    for (var method in elproto) if (elproto[has](method) && !setproto[has](method)) {
	        setproto[method] = (function (methodname) {
	            return function () {
	                var arg = arguments;
	                return this.forEach(function (el) {
	                    el[methodname].apply(el, arg);
	                });
	            };
	        })(method);
	    }
	})();

	// ┌─────────────────────────────────────────────────────────────────────┐ \\
	// │ Raphaël - JavaScript Vector Library                                 │ \\
	// ├─────────────────────────────────────────────────────────────────────┤ \\
	// │ VML Module                                                          │ \\
	// ├─────────────────────────────────────────────────────────────────────┤ \\
	// │ Copyright (c) 2008-2011 Dmitry Baranovskiy (http://raphaeljs.com)   │ \\
	// │ Copyright (c) 2008-2011 Sencha Labs (http://sencha.com)             │ \\
	// │ Licensed under the MIT (http://raphaeljs.com/license.html) license. │ \\
	// └─────────────────────────────────────────────────────────────────────┘ \\

	(function(){
	    if (!R.vml) {
	        return;
	    }
	    var has = "hasOwnProperty",
	        Str = String,
	        toFloat = parseFloat,
	        math = Math,
	        round = math.round,
	        mmax = math.max,
	        mmin = math.min,
	        abs = math.abs,
	        fillString = "fill",
	        separator = /[, ]+/,
	        eve = R.eve,
	        ms = " progid:DXImageTransform.Microsoft",
	        S = " ",
	        E = "",
	        map = {M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x"},
	        bites = /([clmz]),?([^clmz]*)/gi,
	        blurregexp = / progid:\S+Blur\([^\)]+\)/g,
	        val = /-?[^,\s-]+/g,
	        cssDot = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",
	        zoom = 21600,
	        pathTypes = {path: 1, rect: 1, image: 1},
	        ovalTypes = {circle: 1, ellipse: 1},
	        path2vml = function (path) {
	            var total =  /[ahqstv]/ig,
	                command = R._pathToAbsolute;
	            Str(path).match(total) && (command = R._path2curve);
	            total = /[clmz]/g;
	            if (command == R._pathToAbsolute && !Str(path).match(total)) {
	                var res = Str(path).replace(bites, function (all, command, args) {
	                    var vals = [],
	                        isMove = command.toLowerCase() == "m",
	                        res = map[command];
	                    args.replace(val, function (value) {
	                        if (isMove && vals.length == 2) {
	                            res += vals + map[command == "m" ? "l" : "L"];
	                            vals = [];
	                        }
	                        vals.push(round(value * zoom));
	                    });
	                    return res + vals;
	                });
	                return res;
	            }
	            var pa = command(path), p, r;
	            res = [];
	            for (var i = 0, ii = pa.length; i < ii; i++) {
	                p = pa[i];
	                r = pa[i][0].toLowerCase();
	                r == "z" && (r = "x");
	                for (var j = 1, jj = p.length; j < jj; j++) {
	                    r += round(p[j] * zoom) + (j != jj - 1 ? "," : E);
	                }
	                res.push(r);
	            }
	            return res.join(S);
	        },
	        compensation = function (deg, dx, dy) {
	            var m = R.matrix();
	            m.rotate(-deg, .5, .5);
	            return {
	                dx: m.x(dx, dy),
	                dy: m.y(dx, dy)
	            };
	        },
	        setCoords = function (p, sx, sy, dx, dy, deg) {
	            var _ = p._,
	                m = p.matrix,
	                fillpos = _.fillpos,
	                o = p.node,
	                s = o.style,
	                y = 1,
	                flip = "",
	                dxdy,
	                kx = zoom / sx,
	                ky = zoom / sy;
	            s.visibility = "hidden";
	            if (!sx || !sy) {
	                return;
	            }
	            o.coordsize = abs(kx) + S + abs(ky);
	            s.rotation = deg * (sx * sy < 0 ? -1 : 1);
	            if (deg) {
	                var c = compensation(deg, dx, dy);
	                dx = c.dx;
	                dy = c.dy;
	            }
	            sx < 0 && (flip += "x");
	            sy < 0 && (flip += " y") && (y = -1);
	            s.flip = flip;
	            o.coordorigin = (dx * -kx) + S + (dy * -ky);
	            if (fillpos || _.fillsize) {
	                var fill = o.getElementsByTagName(fillString);
	                fill = fill && fill[0];
	                o.removeChild(fill);
	                if (fillpos) {
	                    c = compensation(deg, m.x(fillpos[0], fillpos[1]), m.y(fillpos[0], fillpos[1]));
	                    fill.position = c.dx * y + S + c.dy * y;
	                }
	                if (_.fillsize) {
	                    fill.size = _.fillsize[0] * abs(sx) + S + _.fillsize[1] * abs(sy);
	                }
	                o.appendChild(fill);
	            }
	            s.visibility = "visible";
	        };
	    R.toString = function () {
	        return  "Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xebl " + this.version;
	    };
	    var addArrow = function (o, value, isEnd) {
	        var values = Str(value).toLowerCase().split("-"),
	            se = isEnd ? "end" : "start",
	            i = values.length,
	            type = "classic",
	            w = "medium",
	            h = "medium";
	        while (i--) {
	            switch (values[i]) {
	                case "block":
	                case "classic":
	                case "oval":
	                case "diamond":
	                case "open":
	                case "none":
	                    type = values[i];
	                    break;
	                case "wide":
	                case "narrow": h = values[i]; break;
	                case "long":
	                case "short": w = values[i]; break;
	            }
	        }
	        var stroke = o.node.getElementsByTagName("stroke")[0];
	        stroke[se + "arrow"] = type;
	        stroke[se + "arrowlength"] = w;
	        stroke[se + "arrowwidth"] = h;
	    },
	    setFillAndStroke = function (o, params) {
	        // o.paper.canvas.style.display = "none";
	        o.attrs = o.attrs || {};
	        var node = o.node,
	            a = o.attrs,
	            s = node.style,
	            xy,
	            newpath = pathTypes[o.type] && (params.x != a.x || params.y != a.y || params.width != a.width || params.height != a.height || params.cx != a.cx || params.cy != a.cy || params.rx != a.rx || params.ry != a.ry || params.r != a.r),
	            isOval = ovalTypes[o.type] && (a.cx != params.cx || a.cy != params.cy || a.r != params.r || a.rx != params.rx || a.ry != params.ry),
	            res = o;


	        for (var par in params) if (params[has](par)) {
	            a[par] = params[par];
	        }
	        if (newpath) {
	            a.path = R._getPath[o.type](o);
	            o._.dirty = 1;
	        }
	        params.href && (node.href = params.href);
	        params.title && (node.title = params.title);
	        params.target && (node.target = params.target);
	        params.cursor && (s.cursor = params.cursor);
	        "blur" in params && o.blur(params.blur);
	        if (params.path && o.type == "path" || newpath) {
	            node.path = path2vml(~Str(a.path).toLowerCase().indexOf("r") ? R._pathToAbsolute(a.path) : a.path);
	            o._.dirty = 1;
	            if (o.type == "image") {
	                o._.fillpos = [a.x, a.y];
	                o._.fillsize = [a.width, a.height];
	                setCoords(o, 1, 1, 0, 0, 0);
	            }
	        }
	        "transform" in params && o.transform(params.transform);
	        if (isOval) {
	            var cx = +a.cx,
	                cy = +a.cy,
	                rx = +a.rx || +a.r || 0,
	                ry = +a.ry || +a.r || 0;
	            node.path = R.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", round((cx - rx) * zoom), round((cy - ry) * zoom), round((cx + rx) * zoom), round((cy + ry) * zoom), round(cx * zoom));
	            o._.dirty = 1;
	        }
	        if ("clip-rect" in params) {
	            var rect = Str(params["clip-rect"]).split(separator);
	            if (rect.length == 4) {
	                rect[2] = +rect[2] + (+rect[0]);
	                rect[3] = +rect[3] + (+rect[1]);
	                var div = node.clipRect || R._g.doc.createElement("div"),
	                    dstyle = div.style;
	                dstyle.clip = R.format("rect({1}px {2}px {3}px {0}px)", rect);
	                if (!node.clipRect) {
	                    dstyle.position = "absolute";
	                    dstyle.top = 0;
	                    dstyle.left = 0;
	                    dstyle.width = o.paper.width + "px";
	                    dstyle.height = o.paper.height + "px";
	                    node.parentNode.insertBefore(div, node);
	                    div.appendChild(node);
	                    node.clipRect = div;
	                }
	            }
	            if (!params["clip-rect"]) {
	                node.clipRect && (node.clipRect.style.clip = "auto");
	            }
	        }
	        if (o.textpath) {
	            var textpathStyle = o.textpath.style;
	            params.font && (textpathStyle.font = params.font);
	            params["font-family"] && (textpathStyle.fontFamily = '"' + params["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, E) + '"');
	            params["font-size"] && (textpathStyle.fontSize = params["font-size"]);
	            params["font-weight"] && (textpathStyle.fontWeight = params["font-weight"]);
	            params["font-style"] && (textpathStyle.fontStyle = params["font-style"]);
	        }
	        if ("arrow-start" in params) {
	            addArrow(res, params["arrow-start"]);
	        }
	        if ("arrow-end" in params) {
	            addArrow(res, params["arrow-end"], 1);
	        }
	        if (params.opacity != null || 
	            params["stroke-width"] != null ||
	            params.fill != null ||
	            params.src != null ||
	            params.stroke != null ||
	            params["stroke-width"] != null ||
	            params["stroke-opacity"] != null ||
	            params["fill-opacity"] != null ||
	            params["stroke-dasharray"] != null ||
	            params["stroke-miterlimit"] != null ||
	            params["stroke-linejoin"] != null ||
	            params["stroke-linecap"] != null) {
	            var fill = node.getElementsByTagName(fillString),
	                newfill = false;
	            fill = fill && fill[0];
	            !fill && (newfill = fill = createNode(fillString));
	            if (o.type == "image" && params.src) {
	                fill.src = params.src;
	            }
	            params.fill && (fill.on = true);
	            if (fill.on == null || params.fill == "none" || params.fill === null) {
	                fill.on = false;
	            }
	            if (fill.on && params.fill) {
	                var isURL = Str(params.fill).match(R._ISURL);
	                if (isURL) {
	                    fill.parentNode == node && node.removeChild(fill);
	                    fill.rotate = true;
	                    fill.src = isURL[1];
	                    fill.type = "tile";
	                    var bbox = o.getBBox(1);
	                    fill.position = bbox.x + S + bbox.y;
	                    o._.fillpos = [bbox.x, bbox.y];

	                    R._preload(isURL[1], function () {
	                        o._.fillsize = [this.offsetWidth, this.offsetHeight];
	                    });
	                } else {
	                    fill.color = R.getRGB(params.fill).hex;
	                    fill.src = E;
	                    fill.type = "solid";
	                    if (R.getRGB(params.fill).error && (res.type in {circle: 1, ellipse: 1} || Str(params.fill).charAt() != "r") && addGradientFill(res, params.fill, fill)) {
	                        a.fill = "none";
	                        a.gradient = params.fill;
	                        fill.rotate = false;
	                    }
	                }
	            }
	            if ("fill-opacity" in params || "opacity" in params) {
	                var opacity = ((+a["fill-opacity"] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1) * ((+R.getRGB(params.fill).o + 1 || 2) - 1);
	                opacity = mmin(mmax(opacity, 0), 1);
	                fill.opacity = opacity;
	                if (fill.src) {
	                    fill.color = "none";
	                }
	            }
	            node.appendChild(fill);
	            var stroke = (node.getElementsByTagName("stroke") && node.getElementsByTagName("stroke")[0]),
	            newstroke = false;
	            !stroke && (newstroke = stroke = createNode("stroke"));
	            if ((params.stroke && params.stroke != "none") ||
	                params["stroke-width"] ||
	                params["stroke-opacity"] != null ||
	                params["stroke-dasharray"] ||
	                params["stroke-miterlimit"] ||
	                params["stroke-linejoin"] ||
	                params["stroke-linecap"]) {
	                stroke.on = true;
	            }
	            (params.stroke == "none" || params.stroke === null || stroke.on == null || params.stroke == 0 || params["stroke-width"] == 0) && (stroke.on = false);
	            var strokeColor = R.getRGB(params.stroke);
	            stroke.on && params.stroke && (stroke.color = strokeColor.hex);
	            opacity = ((+a["stroke-opacity"] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1) * ((+strokeColor.o + 1 || 2) - 1);
	            var width = (toFloat(params["stroke-width"]) || 1) * .75;
	            opacity = mmin(mmax(opacity, 0), 1);
	            params["stroke-width"] == null && (width = a["stroke-width"]);
	            params["stroke-width"] && (stroke.weight = width);
	            width && width < 1 && (opacity *= width) && (stroke.weight = 1);
	            stroke.opacity = opacity;
	        
	            params["stroke-linejoin"] && (stroke.joinstyle = params["stroke-linejoin"] || "miter");
	            stroke.miterlimit = params["stroke-miterlimit"] || 8;
	            params["stroke-linecap"] && (stroke.endcap = params["stroke-linecap"] == "butt" ? "flat" : params["stroke-linecap"] == "square" ? "square" : "round");
	            if ("stroke-dasharray" in params) {
	                var dasharray = {
	                    "-": "shortdash",
	                    ".": "shortdot",
	                    "-.": "shortdashdot",
	                    "-..": "shortdashdotdot",
	                    ". ": "dot",
	                    "- ": "dash",
	                    "--": "longdash",
	                    "- .": "dashdot",
	                    "--.": "longdashdot",
	                    "--..": "longdashdotdot"
	                };
	                stroke.dashstyle = dasharray[has](params["stroke-dasharray"]) ? dasharray[params["stroke-dasharray"]] : E;
	            }
	            newstroke && node.appendChild(stroke);
	        }
	        if (res.type == "text") {
	            res.paper.canvas.style.display = E;
	            var span = res.paper.span,
	                m = 100,
	                fontSize = a.font && a.font.match(/\d+(?:\.\d*)?(?=px)/);
	            s = span.style;
	            a.font && (s.font = a.font);
	            a["font-family"] && (s.fontFamily = a["font-family"]);
	            a["font-weight"] && (s.fontWeight = a["font-weight"]);
	            a["font-style"] && (s.fontStyle = a["font-style"]);
	            fontSize = toFloat(a["font-size"] || fontSize && fontSize[0]) || 10;
	            s.fontSize = fontSize * m + "px";
	            res.textpath.string && (span.innerHTML = Str(res.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
	            var brect = span.getBoundingClientRect();
	            res.W = a.w = (brect.right - brect.left) / m;
	            res.H = a.h = (brect.bottom - brect.top) / m;
	            // res.paper.canvas.style.display = "none";
	            res.X = a.x;
	            res.Y = a.y + res.H / 2;

	            ("x" in params || "y" in params) && (res.path.v = R.format("m{0},{1}l{2},{1}", round(a.x * zoom), round(a.y * zoom), round(a.x * zoom) + 1));
	            var dirtyattrs = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"];
	            for (var d = 0, dd = dirtyattrs.length; d < dd; d++) if (dirtyattrs[d] in params) {
	                res._.dirty = 1;
	                break;
	            }
	        
	            // text-anchor emulation
	            switch (a["text-anchor"]) {
	                case "start":
	                    res.textpath.style["v-text-align"] = "left";
	                    res.bbx = res.W / 2;
	                break;
	                case "end":
	                    res.textpath.style["v-text-align"] = "right";
	                    res.bbx = -res.W / 2;
	                break;
	                default:
	                    res.textpath.style["v-text-align"] = "center";
	                    res.bbx = 0;
	                break;
	            }
	            res.textpath.style["v-text-kern"] = true;
	        }
	        // res.paper.canvas.style.display = E;
	    },
	    addGradientFill = function (o, gradient, fill) {
	        o.attrs = o.attrs || {};
	        var attrs = o.attrs,
	            pow = Math.pow,
	            opacity,
	            oindex,
	            type = "linear",
	            fxfy = ".5 .5";
	        o.attrs.gradient = gradient;
	        gradient = Str(gradient).replace(R._radial_gradient, function (all, fx, fy) {
	            type = "radial";
	            if (fx && fy) {
	                fx = toFloat(fx);
	                fy = toFloat(fy);
	                pow(fx - .5, 2) + pow(fy - .5, 2) > .25 && (fy = math.sqrt(.25 - pow(fx - .5, 2)) * ((fy > .5) * 2 - 1) + .5);
	                fxfy = fx + S + fy;
	            }
	            return E;
	        });
	        gradient = gradient.split(/\s*\-\s*/);
	        if (type == "linear") {
	            var angle = gradient.shift();
	            angle = -toFloat(angle);
	            if (isNaN(angle)) {
	                return null;
	            }
	        }
	        var dots = R._parseDots(gradient);
	        if (!dots) {
	            return null;
	        }
	        o = o.shape || o.node;
	        if (dots.length) {
	            o.removeChild(fill);
	            fill.on = true;
	            fill.method = "none";
	            fill.color = dots[0].color;
	            fill.color2 = dots[dots.length - 1].color;
	            var clrs = [];
	            for (var i = 0, ii = dots.length; i < ii; i++) {
	                dots[i].offset && clrs.push(dots[i].offset + S + dots[i].color);
	            }
	            fill.colors = clrs.length ? clrs.join() : "0% " + fill.color;
	            if (type == "radial") {
	                fill.type = "gradientTitle";
	                fill.focus = "100%";
	                fill.focussize = "0 0";
	                fill.focusposition = fxfy;
	                fill.angle = 0;
	            } else {
	                // fill.rotate= true;
	                fill.type = "gradient";
	                fill.angle = (270 - angle) % 360;
	            }
	            o.appendChild(fill);
	        }
	        return 1;
	    },
	    Element = function (node, vml) {
	        this[0] = this.node = node;
	        node.raphael = true;
	        this.id = R._oid++;
	        node.raphaelid = this.id;
	        this.X = 0;
	        this.Y = 0;
	        this.attrs = {};
	        this.paper = vml;
	        this.matrix = R.matrix();
	        this._ = {
	            transform: [],
	            sx: 1,
	            sy: 1,
	            dx: 0,
	            dy: 0,
	            deg: 0,
	            dirty: 1,
	            dirtyT: 1
	        };
	        !vml.bottom && (vml.bottom = this);
	        this.prev = vml.top;
	        vml.top && (vml.top.next = this);
	        vml.top = this;
	        this.next = null;
	    };
	    var elproto = R.el;

	    Element.prototype = elproto;
	    elproto.constructor = Element;
	    elproto.transform = function (tstr) {
	        if (tstr == null) {
	            return this._.transform;
	        }
	        var vbs = this.paper._viewBoxShift,
	            vbt = vbs ? "s" + [vbs.scale, vbs.scale] + "-1-1t" + [vbs.dx, vbs.dy] : E,
	            oldt;
	        if (vbs) {
	            oldt = tstr = Str(tstr).replace(/\.{3}|\u2026/g, this._.transform || E);
	        }
	        R._extractTransform(this, vbt + tstr);
	        var matrix = this.matrix.clone(),
	            skew = this.skew,
	            o = this.node,
	            split,
	            isGrad = ~Str(this.attrs.fill).indexOf("-"),
	            isPatt = !Str(this.attrs.fill).indexOf("url(");
	        matrix.translate(1, 1);
	        if (isPatt || isGrad || this.type == "image") {
	            skew.matrix = "1 0 0 1";
	            skew.offset = "0 0";
	            split = matrix.split();
	            if ((isGrad && split.noRotation) || !split.isSimple) {
	                o.style.filter = matrix.toFilter();
	                var bb = this.getBBox(),
	                    bbt = this.getBBox(1),
	                    dx = bb.x - bbt.x,
	                    dy = bb.y - bbt.y;
	                o.coordorigin = (dx * -zoom) + S + (dy * -zoom);
	                setCoords(this, 1, 1, dx, dy, 0);
	            } else {
	                o.style.filter = E;
	                setCoords(this, split.scalex, split.scaley, split.dx, split.dy, split.rotate);
	            }
	        } else {
	            o.style.filter = E;
	            skew.matrix = Str(matrix);
	            skew.offset = matrix.offset();
	        }
	        if (oldt !== null) { // empty string value is true as well
	            this._.transform = oldt;
	            R._extractTransform(this, oldt);
	        }
	        return this;
	    };
	    elproto.rotate = function (deg, cx, cy) {
	        if (this.removed) {
	            return this;
	        }
	        if (deg == null) {
	            return;
	        }
	        deg = Str(deg).split(separator);
	        if (deg.length - 1) {
	            cx = toFloat(deg[1]);
	            cy = toFloat(deg[2]);
	        }
	        deg = toFloat(deg[0]);
	        (cy == null) && (cx = cy);
	        if (cx == null || cy == null) {
	            var bbox = this.getBBox(1);
	            cx = bbox.x + bbox.width / 2;
	            cy = bbox.y + bbox.height / 2;
	        }
	        this._.dirtyT = 1;
	        this.transform(this._.transform.concat([["r", deg, cx, cy]]));
	        return this;
	    };
	    elproto.translate = function (dx, dy) {
	        if (this.removed) {
	            return this;
	        }
	        dx = Str(dx).split(separator);
	        if (dx.length - 1) {
	            dy = toFloat(dx[1]);
	        }
	        dx = toFloat(dx[0]) || 0;
	        dy = +dy || 0;
	        if (this._.bbox) {
	            this._.bbox.x += dx;
	            this._.bbox.y += dy;
	        }
	        this.transform(this._.transform.concat([["t", dx, dy]]));
	        return this;
	    };
	    elproto.scale = function (sx, sy, cx, cy) {
	        if (this.removed) {
	            return this;
	        }
	        sx = Str(sx).split(separator);
	        if (sx.length - 1) {
	            sy = toFloat(sx[1]);
	            cx = toFloat(sx[2]);
	            cy = toFloat(sx[3]);
	            isNaN(cx) && (cx = null);
	            isNaN(cy) && (cy = null);
	        }
	        sx = toFloat(sx[0]);
	        (sy == null) && (sy = sx);
	        (cy == null) && (cx = cy);
	        if (cx == null || cy == null) {
	            var bbox = this.getBBox(1);
	        }
	        cx = cx == null ? bbox.x + bbox.width / 2 : cx;
	        cy = cy == null ? bbox.y + bbox.height / 2 : cy;
	    
	        this.transform(this._.transform.concat([["s", sx, sy, cx, cy]]));
	        this._.dirtyT = 1;
	        return this;
	    };
	    elproto.hide = function () {
	        !this.removed && (this.node.style.display = "none");
	        return this;
	    };
	    elproto.show = function () {
	        !this.removed && (this.node.style.display = E);
	        return this;
	    };
	    // Needed to fix the vml setViewBox issues
	    elproto.auxGetBBox = R.el.getBBox;
	    elproto.getBBox = function(){
	      var b = this.auxGetBBox();
	      if (this.paper && this.paper._viewBoxShift)
	      {
	        var c = {};
	        var z = 1/this.paper._viewBoxShift.scale;
	        c.x = b.x - this.paper._viewBoxShift.dx;
	        c.x *= z;
	        c.y = b.y - this.paper._viewBoxShift.dy;
	        c.y *= z;
	        c.width  = b.width  * z;
	        c.height = b.height * z;
	        c.x2 = c.x + c.width;
	        c.y2 = c.y + c.height;
	        return c;
	      }
	      return b;
	    };
	    elproto._getBBox = function () {
	        if (this.removed) {
	            return {};
	        }
	        return {
	            x: this.X + (this.bbx || 0) - this.W / 2,
	            y: this.Y - this.H,
	            width: this.W,
	            height: this.H
	        };
	    };
	    elproto.remove = function () {
	        if (this.removed || !this.node.parentNode) {
	            return;
	        }
	        this.paper.__set__ && this.paper.__set__.exclude(this);
	        R.eve.unbind("raphael.*.*." + this.id);
	        R._tear(this, this.paper);
	        this.node.parentNode.removeChild(this.node);
	        this.shape && this.shape.parentNode.removeChild(this.shape);
	        for (var i in this) {
	            this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
	        }
	        this.removed = true;
	    };
	    elproto.attr = function (name, value) {
	        if (this.removed) {
	            return this;
	        }
	        if (name == null) {
	            var res = {};
	            for (var a in this.attrs) if (this.attrs[has](a)) {
	                res[a] = this.attrs[a];
	            }
	            res.gradient && res.fill == "none" && (res.fill = res.gradient) && delete res.gradient;
	            res.transform = this._.transform;
	            return res;
	        }
	        if (value == null && R.is(name, "string")) {
	            if (name == fillString && this.attrs.fill == "none" && this.attrs.gradient) {
	                return this.attrs.gradient;
	            }
	            var names = name.split(separator),
	                out = {};
	            for (var i = 0, ii = names.length; i < ii; i++) {
	                name = names[i];
	                if (name in this.attrs) {
	                    out[name] = this.attrs[name];
	                } else if (R.is(this.paper.customAttributes[name], "function")) {
	                    out[name] = this.paper.customAttributes[name].def;
	                } else {
	                    out[name] = R._availableAttrs[name];
	                }
	            }
	            return ii - 1 ? out : out[names[0]];
	        }
	        if (this.attrs && value == null && R.is(name, "array")) {
	            out = {};
	            for (i = 0, ii = name.length; i < ii; i++) {
	                out[name[i]] = this.attr(name[i]);
	            }
	            return out;
	        }
	        var params;
	        if (value != null) {
	            params = {};
	            params[name] = value;
	        }
	        value == null && R.is(name, "object") && (params = name);
	        for (var key in params) {
	            eve("raphael.attr." + key + "." + this.id, this, params[key]);
	        }
	        if (params) {
	            for (key in this.paper.customAttributes) if (this.paper.customAttributes[has](key) && params[has](key) && R.is(this.paper.customAttributes[key], "function")) {
	                var par = this.paper.customAttributes[key].apply(this, [].concat(params[key]));
	                this.attrs[key] = params[key];
	                for (var subkey in par) if (par[has](subkey)) {
	                    params[subkey] = par[subkey];
	                }
	            }
	            // this.paper.canvas.style.display = "none";
	            if (params.text && this.type == "text") {
	                this.textpath.string = params.text;
	            }
	            setFillAndStroke(this, params);
	            // this.paper.canvas.style.display = E;
	        }
	        return this;
	    };
	    elproto.toFront = function () {
	        !this.removed && this.node.parentNode.appendChild(this.node);
	        this.paper && this.paper.top != this && R._tofront(this, this.paper);
	        return this;
	    };
	    elproto.toBack = function () {
	        if (this.removed) {
	            return this;
	        }
	        if (this.node.parentNode.firstChild != this.node) {
	            this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild);
	            R._toback(this, this.paper);
	        }
	        return this;
	    };
	    elproto.insertAfter = function (element) {
	        if (this.removed) {
	            return this;
	        }
	        if (element.constructor == R.st.constructor) {
	            element = element[element.length - 1];
	        }
	        if (element.node.nextSibling) {
	            element.node.parentNode.insertBefore(this.node, element.node.nextSibling);
	        } else {
	            element.node.parentNode.appendChild(this.node);
	        }
	        R._insertafter(this, element, this.paper);
	        return this;
	    };
	    elproto.insertBefore = function (element) {
	        if (this.removed) {
	            return this;
	        }
	        if (element.constructor == R.st.constructor) {
	            element = element[0];
	        }
	        element.node.parentNode.insertBefore(this.node, element.node);
	        R._insertbefore(this, element, this.paper);
	        return this;
	    };
	    elproto.blur = function (size) {
	        var s = this.node.runtimeStyle,
	            f = s.filter;
	        f = f.replace(blurregexp, E);
	        if (+size !== 0) {
	            this.attrs.blur = size;
	            s.filter = f + S + ms + ".Blur(pixelradius=" + (+size || 1.5) + ")";
	            s.margin = R.format("-{0}px 0 0 -{0}px", round(+size || 1.5));
	        } else {
	            s.filter = f;
	            s.margin = 0;
	            delete this.attrs.blur;
	        }
	        return this;
	    };

	    R._engine.path = function (pathString, vml) {
	        var el = createNode("shape");
	        el.style.cssText = cssDot;
	        el.coordsize = zoom + S + zoom;
	        el.coordorigin = vml.coordorigin;
	        var p = new Element(el, vml),
	            attr = {fill: "none", stroke: "#000"};
	        pathString && (attr.path = pathString);
	        p.type = "path";
	        p.path = [];
	        p.Path = E;
	        setFillAndStroke(p, attr);
	        vml.canvas.appendChild(el);
	        var skew = createNode("skew");
	        skew.on = true;
	        el.appendChild(skew);
	        p.skew = skew;
	        p.transform(E);
	        return p;
	    };
	    R._engine.rect = function (vml, x, y, w, h, r) {
	        var path = R._rectPath(x, y, w, h, r),
	            res = vml.path(path),
	            a = res.attrs;
	        res.X = a.x = x;
	        res.Y = a.y = y;
	        res.W = a.width = w;
	        res.H = a.height = h;
	        a.r = r;
	        a.path = path;
	        res.type = "rect";
	        return res;
	    };
	    R._engine.ellipse = function (vml, x, y, rx, ry) {
	        var res = vml.path(),
	            a = res.attrs;
	        res.X = x - rx;
	        res.Y = y - ry;
	        res.W = rx * 2;
	        res.H = ry * 2;
	        res.type = "ellipse";
	        setFillAndStroke(res, {
	            cx: x,
	            cy: y,
	            rx: rx,
	            ry: ry
	        });
	        return res;
	    };
	    R._engine.circle = function (vml, x, y, r) {
	        var res = vml.path(),
	            a = res.attrs;
	        res.X = x - r;
	        res.Y = y - r;
	        res.W = res.H = r * 2;
	        res.type = "circle";
	        setFillAndStroke(res, {
	            cx: x,
	            cy: y,
	            r: r
	        });
	        return res;
	    };
	    R._engine.image = function (vml, src, x, y, w, h) {
	        var path = R._rectPath(x, y, w, h),
	            res = vml.path(path).attr({stroke: "none"}),
	            a = res.attrs,
	            node = res.node,
	            fill = node.getElementsByTagName(fillString)[0];
	        a.src = src;
	        res.X = a.x = x;
	        res.Y = a.y = y;
	        res.W = a.width = w;
	        res.H = a.height = h;
	        a.path = path;
	        res.type = "image";
	        fill.parentNode == node && node.removeChild(fill);
	        fill.rotate = true;
	        fill.src = src;
	        fill.type = "tile";
	        res._.fillpos = [x, y];
	        res._.fillsize = [w, h];
	        node.appendChild(fill);
	        setCoords(res, 1, 1, 0, 0, 0);
	        return res;
	    };
	    R._engine.text = function (vml, x, y, text) {
	        var el = createNode("shape"),
	            path = createNode("path"),
	            o = createNode("textpath");
	        x = x || 0;
	        y = y || 0;
	        text = text || "";
	        path.v = R.format("m{0},{1}l{2},{1}", round(x * zoom), round(y * zoom), round(x * zoom) + 1);
	        path.textpathok = true;
	        o.string = Str(text);
	        o.on = true;
	        el.style.cssText = cssDot;
	        el.coordsize = zoom + S + zoom;
	        el.coordorigin = "0 0";
	        var p = new Element(el, vml),
	            attr = {
	                fill: "#000",
	                stroke: "none",
	                font: R._availableAttrs.font,
	                text: text
	            };
	        p.shape = el;
	        p.path = path;
	        p.textpath = o;
	        p.type = "text";
	        p.attrs.text = Str(text);
	        p.attrs.x = x;
	        p.attrs.y = y;
	        p.attrs.w = 1;
	        p.attrs.h = 1;
	        setFillAndStroke(p, attr);
	        el.appendChild(o);
	        el.appendChild(path);
	        vml.canvas.appendChild(el);
	        var skew = createNode("skew");
	        skew.on = true;
	        el.appendChild(skew);
	        p.skew = skew;
	        p.transform(E);
	        return p;
	    };
	    R._engine.setSize = function (width, height) {
	        var cs = this.canvas.style;
	        this.width = width;
	        this.height = height;
	        width == +width && (width += "px");
	        height == +height && (height += "px");
	        cs.width = width;
	        cs.height = height;
	        cs.clip = "rect(0 " + width + " " + height + " 0)";
	        if (this._viewBox) {
	            R._engine.setViewBox.apply(this, this._viewBox);
	        }
	        return this;
	    };
	    R._engine.setViewBox = function (x, y, w, h, fit) {
	        R.eve("raphael.setViewBox", this, this._viewBox, [x, y, w, h, fit]);
	        var paperSize = this.getSize(),
	            width = paperSize.width,
	            height = paperSize.height,
	            H, W;
	        if (fit) {
	            H = height / h;
	            W = width / w;
	            if (w * H < width) {
	                x -= (width - w * H) / 2 / H;
	            }
	            if (h * W < height) {
	                y -= (height - h * W) / 2 / W;
	            }
	        }
	        this._viewBox = [x, y, w, h, !!fit];
	        this._viewBoxShift = {
	            dx: -x,
	            dy: -y,
	            scale: paperSize
	        };
	        this.forEach(function (el) {
	            el.transform("...");
	        });
	        return this;
	    };
	    var createNode;
	    R._engine.initWin = function (win) {
	            var doc = win.document;
	            if (doc.styleSheets.length < 31) {
	                doc.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
	            } else {
	                // no more room, add to the existing one
	                // http://msdn.microsoft.com/en-us/library/ms531194%28VS.85%29.aspx
	                doc.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");
	            }
	            try {
	                !doc.namespaces.rvml && doc.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
	                createNode = function (tagName) {
	                    return doc.createElement('<rvml:' + tagName + ' class="rvml">');
	                };
	            } catch (e) {
	                createNode = function (tagName) {
	                    return doc.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
	                };
	            }
	        };
	    R._engine.initWin(R._g.win);
	    R._engine.create = function () {
	        var con = R._getContainer.apply(0, arguments),
	            container = con.container,
	            height = con.height,
	            s,
	            width = con.width,
	            x = con.x,
	            y = con.y;
	        if (!container) {
	            throw new Error("VML container not found.");
	        }
	        var res = new R._Paper,
	            c = res.canvas = R._g.doc.createElement("div"),
	            cs = c.style;
	        x = x || 0;
	        y = y || 0;
	        width = width || 512;
	        height = height || 342;
	        res.width = width;
	        res.height = height;
	        width == +width && (width += "px");
	        height == +height && (height += "px");
	        res.coordsize = zoom * 1e3 + S + zoom * 1e3;
	        res.coordorigin = "0 0";
	        res.span = R._g.doc.createElement("span");
	        res.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;";
	        c.appendChild(res.span);
	        cs.cssText = R.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", width, height);
	        if (container == 1) {
	            R._g.doc.body.appendChild(c);
	            cs.left = x + "px";
	            cs.top = y + "px";
	            cs.position = "absolute";
	        } else {
	            if (container.firstChild) {
	                container.insertBefore(c, container.firstChild);
	            } else {
	                container.appendChild(c);
	            }
	        }
	        res.renderfix = function () {};
	        return res;
	    };
	    R.prototype.clear = function () {
	        R.eve("raphael.clear", this);
	        this.canvas.innerHTML = E;
	        this.span = R._g.doc.createElement("span");
	        this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
	        this.canvas.appendChild(this.span);
	        this.bottom = this.top = null;
	    };
	    R.prototype.remove = function () {
	        R.eve("raphael.remove", this);
	        this.canvas.parentNode.removeChild(this.canvas);
	        for (var i in this) {
	            this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
	        }
	        return true;
	    };

	    var setproto = R.st;
	    for (var method in elproto) if (elproto[has](method) && !setproto[has](method)) {
	        setproto[method] = (function (methodname) {
	            return function () {
	                var arg = arguments;
	                return this.forEach(function (el) {
	                    el[methodname].apply(el, arg);
	                });
	            };
	        })(method);
	    }
	})();

	    // EXPOSE
	    // SVG and VML are appended just before the EXPOSE line
	    // Even with AMD, Raphael should be defined globally
	    oldRaphael.was ? (g.win.Raphael = R) : (Raphael = R);

	    if(true){
	        module.exports = R;
	    }
	    return R;
	}));


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Created by Geo on 2017/4/15.
	 */
	(function (glob) {
	    var version = "0.4.2",
	        has = "hasOwnProperty",
	        separator = /[\.\/]/,
	        wildcard = "*",
	        fun = function () {},
	        numsort = function (a, b) {
	            return a - b;
	        },
	        current_event,
	        stop,
	        events = {n: {}},
	    /*\
	     * eve
	     [ method ]

	     * Fires event with given `name`, given scope and other parameters.

	     > Arguments

	     - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
	     - scope (object) context for the event handlers
	     - varargs (...) the rest of arguments will be sent to event handlers

	     = (object) array of returned values from the listeners
	     \*/
	        eve = function (name, scope) {
	            name = String(name);
	            var e = events,
	                oldstop = stop,
	                args = Array.prototype.slice.call(arguments, 2),
	                listeners = eve.listeners(name),
	                z = 0,
	                f = false,
	                l,
	                indexed = [],
	                queue = {},
	                out = [],
	                ce = current_event,
	                errors = [];
	            current_event = name;
	            stop = 0;
	            for (var i = 0, ii = listeners.length; i < ii; i++) if ("zIndex" in listeners[i]) {
	                indexed.push(listeners[i].zIndex);
	                if (listeners[i].zIndex < 0) {
	                    queue[listeners[i].zIndex] = listeners[i];
	                }
	            }
	            indexed.sort(numsort);
	            while (indexed[z] < 0) {
	                l = queue[indexed[z++]];
	                out.push(l.apply(scope, args));
	                if (stop) {
	                    stop = oldstop;
	                    return out;
	                }
	            }
	            for (i = 0; i < ii; i++) {
	                l = listeners[i];
	                if ("zIndex" in l) {
	                    if (l.zIndex == indexed[z]) {
	                        out.push(l.apply(scope, args));
	                        if (stop) {
	                            break;
	                        }
	                        do {
	                            z++;
	                            l = queue[indexed[z]];
	                            l && out.push(l.apply(scope, args));
	                            if (stop) {
	                                break;
	                            }
	                        } while (l)
	                    } else {
	                        queue[l.zIndex] = l;
	                    }
	                } else {
	                    out.push(l.apply(scope, args));
	                    if (stop) {
	                        break;
	                    }
	                }
	            }
	            stop = oldstop;
	            current_event = ce;
	            return out.length ? out : null;
	        };
	    // Undocumented. Debug only.
	    eve._events = events;
	    /*\
	     * eve.listeners
	     [ method ]

	     * Internal method which gives you array of all event handlers that will be triggered by the given `name`.

	     > Arguments

	     - name (string) name of the event, dot (`.`) or slash (`/`) separated

	     = (array) array of event handlers
	     \*/
	    eve.listeners = function (name) {
	        var names = name.split(separator),
	            e = events,
	            item,
	            items,
	            k,
	            i,
	            ii,
	            j,
	            jj,
	            nes,
	            es = [e],
	            out = [];
	        for (i = 0, ii = names.length; i < ii; i++) {
	            nes = [];
	            for (j = 0, jj = es.length; j < jj; j++) {
	                e = es[j].n;
	                items = [e[names[i]], e[wildcard]];
	                k = 2;
	                while (k--) {
	                    item = items[k];
	                    if (item) {
	                        nes.push(item);
	                        out = out.concat(item.f || []);
	                    }
	                }
	            }
	            es = nes;
	        }
	        return out;
	    };

	    /*\
	     * eve.on
	     [ method ]
	     **
	     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
	     | eve.on("*.under.*", f);
	     | eve("mouse.under.floor"); // triggers f
	     * Use @eve to trigger the listener.
	     **
	     > Arguments
	     **
	     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
	     - f (function) event handler function
	     **
	     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment.
	     > Example:
	     | eve.on("mouse", eatIt)(2);
	     | eve.on("mouse", scream);
	     | eve.on("mouse", catchIt)(1);
	     * This will ensure that `catchIt()` function will be called before `eatIt()`.
	     *
	     * If you want to put your handler before non-indexed handlers, specify a negative value.
	     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
	     \*/
	    eve.on = function (name, f) {
	        name = String(name);
	        if (typeof f != "function") {
	            return function () {};
	        }
	        var names = name.split(separator),
	            e = events;
	        for (var i = 0, ii = names.length; i < ii; i++) {
	            e = e.n;
	            e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = {n: {}});
	        }
	        e.f = e.f || [];
	        for (i = 0, ii = e.f.length; i < ii; i++) if (e.f[i] == f) {
	            return fun;
	        }
	        e.f.push(f);
	        return function (zIndex) {
	            if (+zIndex == +zIndex) {
	                f.zIndex = +zIndex;
	            }
	        };
	    };
	    /*\
	     * eve.f
	     [ method ]
	     **
	     * Returns function that will fire given event with optional arguments.
	     * Arguments that will be passed to the result function will be also
	     * concated to the list of final arguments.
	     | el.onclick = eve.f("click", 1, 2);
	     | eve.on("click", function (a, b, c) {
	     |     console.log(a, b, c); // 1, 2, [event object]
	     | });
	     > Arguments
	     - event (string) event name
	     - varargs (…) and any other arguments
	     = (function) possible event handler function
	     \*/
	    eve.f = function (event) {
	        var attrs = [].slice.call(arguments, 1);
	        return function () {
	            eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
	        };
	    };
	    /*\
	     * eve.stop
	     [ method ]
	     **
	     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
	     \*/
	    eve.stop = function () {
	        stop = 1;
	    };
	    /*\
	     * eve.nt
	     [ method ]
	     **
	     * Could be used inside event handler to figure out actual name of the event.
	     **
	     > Arguments
	     **
	     - subname (string) #optional subname of the event
	     **
	     = (string) name of the event, if `subname` is not specified
	     * or
	     = (boolean) `true`, if current event’s name contains `subname`
	     \*/
	    eve.nt = function (subname) {
	        if (subname) {
	            return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(current_event);
	        }
	        return current_event;
	    };
	    /*\
	     * eve.nts
	     [ method ]
	     **
	     * Could be used inside event handler to figure out actual name of the event.
	     **
	     **
	     = (array) names of the event
	     \*/
	    eve.nts = function () {
	        return current_event.split(separator);
	    };
	    /*\
	     * eve.off
	     [ method ]
	     **
	     * Removes given function from the list of event listeners assigned to given name.
	     * If no arguments specified all the events will be cleared.
	     **
	     > Arguments
	     **
	     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
	     - f (function) event handler function
	     \*/
	    /*\
	     * eve.unbind
	     [ method ]
	     **
	     * See @eve.off
	     \*/
	    eve.off = eve.unbind = function (name, f) {
	        if (!name) {
	            eve._events = events = {n: {}};
	            return;
	        }
	        var names = name.split(separator),
	            e,
	            key,
	            splice,
	            i, ii, j, jj,
	            cur = [events];
	        for (i = 0, ii = names.length; i < ii; i++) {
	            for (j = 0; j < cur.length; j += splice.length - 2) {
	                splice = [j, 1];
	                e = cur[j].n;
	                if (names[i] != wildcard) {
	                    if (e[names[i]]) {
	                        splice.push(e[names[i]]);
	                    }
	                } else {
	                    for (key in e) if (e[has](key)) {
	                        splice.push(e[key]);
	                    }
	                }
	                cur.splice.apply(cur, splice);
	            }
	        }
	        for (i = 0, ii = cur.length; i < ii; i++) {
	            e = cur[i];
	            while (e.n) {
	                if (f) {
	                    if (e.f) {
	                        for (j = 0, jj = e.f.length; j < jj; j++) if (e.f[j] == f) {
	                            e.f.splice(j, 1);
	                            break;
	                        }
	                        !e.f.length && delete e.f;
	                    }
	                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
	                        var funcs = e.n[key].f;
	                        for (j = 0, jj = funcs.length; j < jj; j++) if (funcs[j] == f) {
	                            funcs.splice(j, 1);
	                            break;
	                        }
	                        !funcs.length && delete e.n[key].f;
	                    }
	                } else {
	                    delete e.f;
	                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
	                        delete e.n[key].f;
	                    }
	                }
	                e = e.n;
	            }
	        }
	    };
	    /*\
	     * eve.once
	     [ method ]
	     **
	     * Binds given event handler with a given name to only run once then unbind itself.
	     | eve.once("login", f);
	     | eve("login"); // triggers f
	     | eve("login"); // no listeners
	     * Use @eve to trigger the listener.
	     **
	     > Arguments
	     **
	     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
	     - f (function) event handler function
	     **
	     = (function) same return function as @eve.on
	     \*/
	    eve.once = function (name, f) {
	        var f2 = function () {
	            eve.unbind(name, f2);
	            return f.apply(this, arguments);
	        };
	        return eve.on(name, f2);
	    };
	    /*\
	     * eve.version
	     [ property (string) ]
	     **
	     * Current version of the library.
	     \*/
	    eve.version = version;
	    eve.toString = function () {
	        return "You are running Eve " + version;
	    };
	    (typeof module != "undefined" && module.exports) ? (module.exports = eve) : ( true ? (!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() { return eve; }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))) : (glob.eve = eve));
	})(window || this);

/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * Created by Geo on 2017/4/17.
	 */
	/* -----------------------------------------------
	/* Author : Vincent Garreau  - vincentgarreau.com
	/* MIT license: http://opensource.org/licenses/MIT
	/* Demo / Generator : vincentgarreau.com/particles.js
	/* GitHub : github.com/VincentGarreau/particles.js
	/* How to use? : Check the GitHub README
	/* v2.0.0
	/* ----------------------------------------------- */
	function hexToRgb(e){var a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(a,function(e,a,t,i){return a+a+t+t+i+i});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function clamp(e,a,t){return Math.min(Math.max(e,a),t)}function isInArray(e,a){return a.indexOf(e)>-1}var pJS=function(e,a){var t=document.querySelector("#"+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:t,w:t.offsetWidth,h:t.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var i=this.pJS;a&&Object.deepExtend(i,a),i.tmp.obj={size_value:i.particles.size.value,size_anim_speed:i.particles.size.anim.speed,move_speed:i.particles.move.speed,line_linked_distance:i.particles.line_linked.distance,line_linked_width:i.particles.line_linked.width,mode_grab_distance:i.interactivity.modes.grab.distance,mode_bubble_distance:i.interactivity.modes.bubble.distance,mode_bubble_size:i.interactivity.modes.bubble.size,mode_repulse_distance:i.interactivity.modes.repulse.distance},i.fn.retinaInit=function(){i.retina_detect&&window.devicePixelRatio>1?(i.canvas.pxratio=window.devicePixelRatio,i.tmp.retina=!0):(i.canvas.pxratio=1,i.tmp.retina=!1),i.canvas.w=i.canvas.el.offsetWidth*i.canvas.pxratio,i.canvas.h=i.canvas.el.offsetHeight*i.canvas.pxratio,i.particles.size.value=i.tmp.obj.size_value*i.canvas.pxratio,i.particles.size.anim.speed=i.tmp.obj.size_anim_speed*i.canvas.pxratio,i.particles.move.speed=i.tmp.obj.move_speed*i.canvas.pxratio,i.particles.line_linked.distance=i.tmp.obj.line_linked_distance*i.canvas.pxratio,i.interactivity.modes.grab.distance=i.tmp.obj.mode_grab_distance*i.canvas.pxratio,i.interactivity.modes.bubble.distance=i.tmp.obj.mode_bubble_distance*i.canvas.pxratio,i.particles.line_linked.width=i.tmp.obj.line_linked_width*i.canvas.pxratio,i.interactivity.modes.bubble.size=i.tmp.obj.mode_bubble_size*i.canvas.pxratio,i.interactivity.modes.repulse.distance=i.tmp.obj.mode_repulse_distance*i.canvas.pxratio},i.fn.canvasInit=function(){i.canvas.ctx=i.canvas.el.getContext("2d")},i.fn.canvasSize=function(){i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i&&i.interactivity.events.resize&&window.addEventListener("resize",function(){i.canvas.w=i.canvas.el.offsetWidth,i.canvas.h=i.canvas.el.offsetHeight,i.tmp.retina&&(i.canvas.w*=i.canvas.pxratio,i.canvas.h*=i.canvas.pxratio),i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i.particles.move.enable||(i.fn.particlesEmpty(),i.fn.particlesCreate(),i.fn.particlesDraw(),i.fn.vendors.densityAutoParticles()),i.fn.vendors.densityAutoParticles()})},i.fn.canvasPaint=function(){i.canvas.ctx.fillRect(0,0,i.canvas.w,i.canvas.h)},i.fn.canvasClear=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h)},i.fn.particle=function(e,a,t){if(this.radius=(i.particles.size.random?Math.random():1)*i.particles.size.value,i.particles.size.anim.enable&&(this.size_status=!1,this.vs=i.particles.size.anim.speed/100,i.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=t?t.x:Math.random()*i.canvas.w,this.y=t?t.y:Math.random()*i.canvas.h,this.x>i.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>i.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),i.particles.move.bounce&&i.fn.vendors.checkOverlap(this,t),this.color={},"object"==typeof e.value)if(e.value instanceof Array){var s=e.value[Math.floor(Math.random()*i.particles.color.value.length)];this.color.rgb=hexToRgb(s)}else void 0!=e.value.r&&void 0!=e.value.g&&void 0!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),void 0!=e.value.h&&void 0!=e.value.s&&void 0!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l});else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=hexToRgb(this.color.value));this.opacity=(i.particles.opacity.random?Math.random():1)*i.particles.opacity.value,i.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=i.particles.opacity.anim.speed/100,i.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var n={};switch(i.particles.move.direction){case"top":n={x:0,y:-1};break;case"top-right":n={x:.5,y:-.5};break;case"right":n={x:1,y:-0};break;case"bottom-right":n={x:.5,y:.5};break;case"bottom":n={x:0,y:1};break;case"bottom-left":n={x:-.5,y:1};break;case"left":n={x:-1,y:0};break;case"top-left":n={x:-.5,y:-.5};break;default:n={x:0,y:0}}i.particles.move.straight?(this.vx=n.x,this.vy=n.y,i.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=n.x+Math.random()-.5,this.vy=n.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var r=i.particles.shape.type;if("object"==typeof r){if(r instanceof Array){var c=r[Math.floor(Math.random()*r.length)];this.shape=c}}else this.shape=r;if("image"==this.shape){var o=i.particles.shape;this.img={src:o.image.src,ratio:o.image.width/o.image.height},this.img.ratio||(this.img.ratio=1),"svg"==i.tmp.img_type&&void 0!=i.tmp.source_svg&&(i.fn.vendors.createSvgImg(this),i.tmp.pushing&&(this.img.loaded=!1))}},i.fn.particle.prototype.draw=function(){function e(){i.canvas.ctx.drawImage(r,a.x-t,a.y-t,2*t,2*t/a.img.ratio)}var a=this;if(void 0!=a.radius_bubble)var t=a.radius_bubble;else var t=a.radius;if(void 0!=a.opacity_bubble)var s=a.opacity_bubble;else var s=a.opacity;if(a.color.rgb)var n="rgba("+a.color.rgb.r+","+a.color.rgb.g+","+a.color.rgb.b+","+s+")";else var n="hsla("+a.color.hsl.h+","+a.color.hsl.s+"%,"+a.color.hsl.l+"%,"+s+")";switch(i.canvas.ctx.fillStyle=n,i.canvas.ctx.beginPath(),a.shape){case"circle":i.canvas.ctx.arc(a.x,a.y,t,0,2*Math.PI,!1);break;case"edge":i.canvas.ctx.rect(a.x-t,a.y-t,2*t,2*t);break;case"triangle":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t,a.y+t/1.66,2*t,3,2);break;case"polygon":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t/(i.particles.shape.polygon.nb_sides/3.5),a.y-t/.76,2.66*t/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,1);break;case"star":i.fn.vendors.drawShape(i.canvas.ctx,a.x-2*t/(i.particles.shape.polygon.nb_sides/4),a.y-t/1.52,2*t*2.66/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,2);break;case"image":if("svg"==i.tmp.img_type)var r=a.img.obj;else var r=i.tmp.img_obj;r&&e()}i.canvas.ctx.closePath(),i.particles.shape.stroke.width>0&&(i.canvas.ctx.strokeStyle=i.particles.shape.stroke.color,i.canvas.ctx.lineWidth=i.particles.shape.stroke.width,i.canvas.ctx.stroke()),i.canvas.ctx.fill()},i.fn.particlesCreate=function(){for(var e=0;e<i.particles.number.value;e++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value))},i.fn.particlesUpdate=function(){for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];if(i.particles.move.enable){var t=i.particles.move.speed/2;a.x+=a.vx*t,a.y+=a.vy*t}if(i.particles.opacity.anim.enable&&(1==a.opacity_status?(a.opacity>=i.particles.opacity.value&&(a.opacity_status=!1),a.opacity+=a.vo):(a.opacity<=i.particles.opacity.anim.opacity_min&&(a.opacity_status=!0),a.opacity-=a.vo),a.opacity<0&&(a.opacity=0)),i.particles.size.anim.enable&&(1==a.size_status?(a.radius>=i.particles.size.value&&(a.size_status=!1),a.radius+=a.vs):(a.radius<=i.particles.size.anim.size_min&&(a.size_status=!0),a.radius-=a.vs),a.radius<0&&(a.radius=0)),"bounce"==i.particles.move.out_mode)var s={x_left:a.radius,x_right:i.canvas.w,y_top:a.radius,y_bottom:i.canvas.h};else var s={x_left:-a.radius,x_right:i.canvas.w+a.radius,y_top:-a.radius,y_bottom:i.canvas.h+a.radius};switch(a.x-a.radius>i.canvas.w?(a.x=s.x_left,a.y=Math.random()*i.canvas.h):a.x+a.radius<0&&(a.x=s.x_right,a.y=Math.random()*i.canvas.h),a.y-a.radius>i.canvas.h?(a.y=s.y_top,a.x=Math.random()*i.canvas.w):a.y+a.radius<0&&(a.y=s.y_bottom,a.x=Math.random()*i.canvas.w),i.particles.move.out_mode){case"bounce":a.x+a.radius>i.canvas.w?a.vx=-a.vx:a.x-a.radius<0&&(a.vx=-a.vx),a.y+a.radius>i.canvas.h?a.vy=-a.vy:a.y-a.radius<0&&(a.vy=-a.vy)}if(isInArray("grab",i.interactivity.events.onhover.mode)&&i.fn.modes.grabParticle(a),(isInArray("bubble",i.interactivity.events.onhover.mode)||isInArray("bubble",i.interactivity.events.onclick.mode))&&i.fn.modes.bubbleParticle(a),(isInArray("repulse",i.interactivity.events.onhover.mode)||isInArray("repulse",i.interactivity.events.onclick.mode))&&i.fn.modes.repulseParticle(a),i.particles.line_linked.enable||i.particles.move.attract.enable)for(var n=e+1;n<i.particles.array.length;n++){var r=i.particles.array[n];i.particles.line_linked.enable&&i.fn.interact.linkParticles(a,r),i.particles.move.attract.enable&&i.fn.interact.attractParticles(a,r),i.particles.move.bounce&&i.fn.interact.bounceParticles(a,r)}}},i.fn.particlesDraw=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h),i.fn.particlesUpdate();for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];a.draw()}},i.fn.particlesEmpty=function(){i.particles.array=[]},i.fn.particlesRefresh=function(){cancelRequestAnimFrame(i.fn.checkAnimFrame),cancelRequestAnimFrame(i.fn.drawAnimFrame),i.tmp.source_svg=void 0,i.tmp.img_obj=void 0,i.tmp.count_svg=0,i.fn.particlesEmpty(),i.fn.canvasClear(),i.fn.vendors.start()},i.fn.interact.linkParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=i.particles.line_linked.opacity-n/(1/i.particles.line_linked.opacity)/i.particles.line_linked.distance;if(r>0){var c=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+r+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(a.x,a.y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}},i.fn.interact.attractParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=t/(1e3*i.particles.move.attract.rotateX),c=s/(1e3*i.particles.move.attract.rotateY);e.vx-=r,e.vy-=c,a.vx+=r,a.vy+=c}},i.fn.interact.bounceParticles=function(e,a){var t=e.x-a.x,i=e.y-a.y,s=Math.sqrt(t*t+i*i),n=e.radius+a.radius;n>=s&&(e.vx=-e.vx,e.vy=-e.vy,a.vx=-a.vx,a.vy=-a.vy)},i.fn.modes.pushParticles=function(e,a){i.tmp.pushing=!0;for(var t=0;e>t;t++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value,{x:a?a.pos_x:Math.random()*i.canvas.w,y:a?a.pos_y:Math.random()*i.canvas.h})),t==e-1&&(i.particles.move.enable||i.fn.particlesDraw(),i.tmp.pushing=!1)},i.fn.modes.removeParticles=function(e){i.particles.array.splice(0,e),i.particles.move.enable||i.fn.particlesDraw()},i.fn.modes.bubbleParticle=function(e){function a(){e.opacity_bubble=e.opacity,e.radius_bubble=e.radius}function t(a,t,s,n,c){if(a!=t)if(i.tmp.bubble_duration_end){if(void 0!=s){var o=n-p*(n-a)/i.interactivity.modes.bubble.duration,l=a-o;d=a+l,"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else if(r<=i.interactivity.modes.bubble.distance){if(void 0!=s)var v=s;else var v=n;if(v!=a){var d=n-p*(n-a)/i.interactivity.modes.bubble.duration;"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else"size"==c&&(e.radius_bubble=void 0),"opacity"==c&&(e.opacity_bubble=void 0)}if(i.interactivity.events.onhover.enable&&isInArray("bubble",i.interactivity.events.onhover.mode)){var s=e.x-i.interactivity.mouse.pos_x,n=e.y-i.interactivity.mouse.pos_y,r=Math.sqrt(s*s+n*n),c=1-r/i.interactivity.modes.bubble.distance;if(r<=i.interactivity.modes.bubble.distance){if(c>=0&&"mousemove"==i.interactivity.status){if(i.interactivity.modes.bubble.size!=i.particles.size.value)if(i.interactivity.modes.bubble.size>i.particles.size.value){var o=e.radius+i.interactivity.modes.bubble.size*c;o>=0&&(e.radius_bubble=o)}else{var l=e.radius-i.interactivity.modes.bubble.size,o=e.radius-l*c;o>0?e.radius_bubble=o:e.radius_bubble=0}if(i.interactivity.modes.bubble.opacity!=i.particles.opacity.value)if(i.interactivity.modes.bubble.opacity>i.particles.opacity.value){var v=i.interactivity.modes.bubble.opacity*c;v>e.opacity&&v<=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}else{var v=e.opacity-(i.particles.opacity.value-i.interactivity.modes.bubble.opacity)*c;v<e.opacity&&v>=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}}}else a();"mouseleave"==i.interactivity.status&&a()}else if(i.interactivity.events.onclick.enable&&isInArray("bubble",i.interactivity.events.onclick.mode)){if(i.tmp.bubble_clicking){var s=e.x-i.interactivity.mouse.click_pos_x,n=e.y-i.interactivity.mouse.click_pos_y,r=Math.sqrt(s*s+n*n),p=((new Date).getTime()-i.interactivity.mouse.click_time)/1e3;p>i.interactivity.modes.bubble.duration&&(i.tmp.bubble_duration_end=!0),p>2*i.interactivity.modes.bubble.duration&&(i.tmp.bubble_clicking=!1,i.tmp.bubble_duration_end=!1)}i.tmp.bubble_clicking&&(t(i.interactivity.modes.bubble.size,i.particles.size.value,e.radius_bubble,e.radius,"size"),t(i.interactivity.modes.bubble.opacity,i.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity"))}},i.fn.modes.repulseParticle=function(e){function a(){var a=Math.atan2(d,p);if(e.vx=u*Math.cos(a),e.vy=u*Math.sin(a),"bounce"==i.particles.move.out_mode){var t={x:e.x+e.vx,y:e.y+e.vy};t.x+e.radius>i.canvas.w?e.vx=-e.vx:t.x-e.radius<0&&(e.vx=-e.vx),t.y+e.radius>i.canvas.h?e.vy=-e.vy:t.y-e.radius<0&&(e.vy=-e.vy)}}if(i.interactivity.events.onhover.enable&&isInArray("repulse",i.interactivity.events.onhover.mode)&&"mousemove"==i.interactivity.status){var t=e.x-i.interactivity.mouse.pos_x,s=e.y-i.interactivity.mouse.pos_y,n=Math.sqrt(t*t+s*s),r={x:t/n,y:s/n},c=i.interactivity.modes.repulse.distance,o=100,l=clamp(1/c*(-1*Math.pow(n/c,2)+1)*c*o,0,50),v={x:e.x+r.x*l,y:e.y+r.y*l};"bounce"==i.particles.move.out_mode?(v.x-e.radius>0&&v.x+e.radius<i.canvas.w&&(e.x=v.x),v.y-e.radius>0&&v.y+e.radius<i.canvas.h&&(e.y=v.y)):(e.x=v.x,e.y=v.y)}else if(i.interactivity.events.onclick.enable&&isInArray("repulse",i.interactivity.events.onclick.mode))if(i.tmp.repulse_finish||(i.tmp.repulse_count++,i.tmp.repulse_count==i.particles.array.length&&(i.tmp.repulse_finish=!0)),i.tmp.repulse_clicking){var c=Math.pow(i.interactivity.modes.repulse.distance/6,3),p=i.interactivity.mouse.click_pos_x-e.x,d=i.interactivity.mouse.click_pos_y-e.y,m=p*p+d*d,u=-c/m*1;c>=m&&a()}else 0==i.tmp.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i)},i.fn.modes.grabParticle=function(e){if(i.interactivity.events.onhover.enable&&"mousemove"==i.interactivity.status){var a=e.x-i.interactivity.mouse.pos_x,t=e.y-i.interactivity.mouse.pos_y,s=Math.sqrt(a*a+t*t);if(s<=i.interactivity.modes.grab.distance){var n=i.interactivity.modes.grab.line_linked.opacity-s/(1/i.interactivity.modes.grab.line_linked.opacity)/i.interactivity.modes.grab.distance;if(n>0){var r=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+n+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x,i.interactivity.mouse.pos_y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}}},i.fn.vendors.eventsListeners=function(){"window"==i.interactivity.detect_on?i.interactivity.el=window:i.interactivity.el=i.canvas.el,(i.interactivity.events.onhover.enable||i.interactivity.events.onclick.enable)&&(i.interactivity.el.addEventListener("mousemove",function(e){if(i.interactivity.el==window)var a=e.clientX,t=e.clientY;else var a=e.offsetX||e.clientX,t=e.offsetY||e.clientY;i.interactivity.mouse.pos_x=a,i.interactivity.mouse.pos_y=t,i.tmp.retina&&(i.interactivity.mouse.pos_x*=i.canvas.pxratio,i.interactivity.mouse.pos_y*=i.canvas.pxratio),i.interactivity.status="mousemove"}),i.interactivity.el.addEventListener("mouseleave",function(e){i.interactivity.mouse.pos_x=null,i.interactivity.mouse.pos_y=null,i.interactivity.status="mouseleave"})),i.interactivity.events.onclick.enable&&i.interactivity.el.addEventListener("click",function(){if(i.interactivity.mouse.click_pos_x=i.interactivity.mouse.pos_x,i.interactivity.mouse.click_pos_y=i.interactivity.mouse.pos_y,i.interactivity.mouse.click_time=(new Date).getTime(),i.interactivity.events.onclick.enable)switch(i.interactivity.events.onclick.mode){case"push":i.particles.move.enable?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):1==i.interactivity.modes.push.particles_nb?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):i.interactivity.modes.push.particles_nb>1&&i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);break;case"remove":i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);break;case"bubble":i.tmp.bubble_clicking=!0;break;case"repulse":i.tmp.repulse_clicking=!0,i.tmp.repulse_count=0,i.tmp.repulse_finish=!1,setTimeout(function(){i.tmp.repulse_clicking=!1},1e3*i.interactivity.modes.repulse.duration)}})},i.fn.vendors.densityAutoParticles=function(){if(i.particles.number.density.enable){var e=i.canvas.el.width*i.canvas.el.height/1e3;i.tmp.retina&&(e/=2*i.canvas.pxratio);var a=e*i.particles.number.value/i.particles.number.density.value_area,t=i.particles.array.length-a;0>t?i.fn.modes.pushParticles(Math.abs(t)):i.fn.modes.removeParticles(t)}},i.fn.vendors.checkOverlap=function(e,a){for(var t=0;t<i.particles.array.length;t++){var s=i.particles.array[t],n=e.x-s.x,r=e.y-s.y,c=Math.sqrt(n*n+r*r);c<=e.radius+s.radius&&(e.x=a?a.x:Math.random()*i.canvas.w,e.y=a?a.y:Math.random()*i.canvas.h,i.fn.vendors.checkOverlap(e))}},i.fn.vendors.createSvgImg=function(e){var a=i.tmp.source_svg,t=/#([0-9A-F]{3,6})/gi,s=a.replace(t,function(a,t,i,s){if(e.color.rgb)var n="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")";else var n="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")";return n}),n=new Blob([s],{type:"image/svg+xml;charset=utf-8"}),r=window.URL||window.webkitURL||window,c=r.createObjectURL(n),o=new Image;o.addEventListener("load",function(){e.img.obj=o,e.img.loaded=!0,r.revokeObjectURL(c),i.tmp.count_svg++}),o.src=c},i.fn.vendors.destroypJS=function(){cancelAnimationFrame(i.fn.drawAnimFrame),t.remove(),pJSDom=null},i.fn.vendors.drawShape=function(e,a,t,i,s,n){var r=s*n,c=s/n,o=180*(c-2)/c,l=Math.PI-Math.PI*o/180;e.save(),e.beginPath(),e.translate(a,t),e.moveTo(0,0);for(var v=0;r>v;v++)e.lineTo(i,0),e.translate(i,0),e.rotate(l);e.fill(),e.restore()},i.fn.vendors.exportImg=function(){window.open(i.canvas.el.toDataURL("image/png"),"_blank")},i.fn.vendors.loadImg=function(e){if(i.tmp.img_error=void 0,""!=i.particles.shape.image.src)if("svg"==e){var a=new XMLHttpRequest;a.open("GET",i.particles.shape.image.src),a.onreadystatechange=function(e){4==a.readyState&&(200==a.status?(i.tmp.source_svg=e.currentTarget.response,i.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),i.tmp.img_error=!0))},a.send()}else{var t=new Image;t.addEventListener("load",function(){i.tmp.img_obj=t,i.fn.vendors.checkBeforeDraw()}),t.src=i.particles.shape.image.src}else console.log("Error pJS - No image.src"),i.tmp.img_error=!0},i.fn.vendors.draw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type?i.tmp.count_svg>=i.particles.number.value?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):void 0!=i.tmp.img_obj?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame))},i.fn.vendors.checkBeforeDraw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type&&void 0==i.tmp.source_svg?i.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(i.tmp.checkAnimFrame),i.tmp.img_error||(i.fn.vendors.init(),i.fn.vendors.draw())):(i.fn.vendors.init(),i.fn.vendors.draw())},i.fn.vendors.init=function(){i.fn.retinaInit(),i.fn.canvasInit(),i.fn.canvasSize(),i.fn.canvasPaint(),i.fn.particlesCreate(),i.fn.vendors.densityAutoParticles(),i.particles.line_linked.color_rgb_line=hexToRgb(i.particles.line_linked.color)},i.fn.vendors.start=function(){isInArray("image",i.particles.shape.type)?(i.tmp.img_type=i.particles.shape.image.src.substr(i.particles.shape.image.src.length-3),i.fn.vendors.loadImg(i.tmp.img_type)):i.fn.vendors.checkBeforeDraw()},i.fn.vendors.eventsListeners(),i.fn.vendors.start()};Object.deepExtend=function(e,a){for(var t in a)a[t]&&a[t].constructor&&a[t].constructor===Object?(e[t]=e[t]||{},arguments.callee(e[t],a[t])):e[t]=a[t];return e},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),window.pJSDom=[],window.particlesJS=function(e,a){"string"!=typeof e&&(a=e,e="particles-js"),e||(e="particles-js");var t=document.getElementById(e),i="particles-js-canvas-el",s=t.getElementsByClassName(i);if(s.length)for(;s.length>0;)t.removeChild(s[0]);var n=document.createElement("canvas");n.className=i,n.style.width="100%",n.style.height="100%";var r=document.getElementById(e).appendChild(n);null!=r&&pJSDom.push(new pJS(e,a))},window.particlesJS.load=function(e,a,t){var i=new XMLHttpRequest;i.open("GET",a),i.onreadystatechange=function(a){if(4==i.readyState)if(200==i.status){var s=JSON.parse(a.currentTarget.response);window.particlesJS(e,s),t&&t()}else console.log("Error pJS - XMLHttpRequest status: "+i.status),console.log("Error pJS - File config not found")},i.send()};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Geo on 16/2/16.
	 */
	var $ = __webpack_require__(22);
	var paperSet = [];


	var paintingline1 = function(obj){
	    //d3.select(".section").selectAll("h3").text("www11com");
	    var width = "1.5rem";  //画布的宽度
	    var height = "1.5rem";   //画布的高度
	    paintinglineUp(obj,width,height,{top:"8%",right:0},"steelblue");
	    paintinglineDown(obj,width,height,{bottom:"0",left:0},"steelblue");
	}

	var paintingline2 = function(obj){
	    //d3.select(".section").selectAll("h3").text("www11com");
	    var width = "1.2rem";  //画布的宽度
	    var height = "1.2rem";   //画布的高度
	    var datasety = [300 , 250]; //y11,y21
	    paintinglineUp(obj,width,height,{top:"8%",right:0},"#f8ccfc");
	    paintinglineDown(obj,width,height,{bottom:"50%",left:0},"#f8ccfc");
	}

	var paintinglineUp = function(obj,width,height,stylle,color){

	    var svg1 = document.createElement("div");
	    svg1.id = "lineUp";
	    svg1.style.position = "absolute";
	    svg1.style.top = stylle.top;
	    svg1.style.right = stylle.right;

	    document.getElementById(obj).appendChild(svg1);

	    var svgA = Raphael(svg1, width, height);
	    svgA.setViewBox(0,0,300,300,true);
	    var cA1 = svgA.path("M300 0").attr({"stroke":color,"stroke-width":4});
	    var cA2 = svgA.path("M300 50").attr({"stroke":color,"stroke-width":4});
	    var animationA1 = Raphael.animation({"path":"M300 0 L0 300"},1000,"cubic-bezier(0.77, 0, 0.175, 1)").delay(500);
	    var animationA2 = Raphael.animation({"path":"M300 50 L150 200"},1000,"cubic-bezier(0.77, 0, 0.175, 1)").delay(500);
	    cA1.animate(animationA1);
	    cA2.animate(animationA2);
	    paperSet.push(svgA);


	}

	var paintinglineDown = function(obj,width,height,stylle,color){

	    var svg2 =  document.createElement("div");
	    svg2.id = "lineDown";
	    svg2.style.position = "absolute";
	    svg2.style.bottom = stylle.bottom;
	    svg2.style.left = stylle.left;

	    document.getElementById(obj).appendChild(svg2);

	    var svgB = Raphael(svg2, width, height);
	    svgB.setViewBox(0,0,300,300,true);
	    var cB1 = svgB.path("M0 300").attr({"stroke":color,"stroke-width":4});
	    var cB2 = svgB.path("M0 250").attr({"stroke":color,"stroke-width":4});
	    var animationB1 = Raphael.animation({"path":"M0 300 L300 0"},1500,"cubic-bezier(0.77, 0, 0.175, 1)").delay(500);
	    var animationB2 = Raphael.animation({"path":"M0 250 L150 100"},1500,"cubic-bezier(0.77, 0, 0.175, 1)").delay(500);
	    cB1.animate(animationB1);
	    cB2.animate(animationB2);
	    paperSet.push(svgB);
	}


	var paintingTr = function(obj){
	    var width = "1.5rem";  //画布的宽度
	    var height = "4.5rem";   //画布的高度
	    var svg3 =  document.createElement("div");
	    svg3.style.position = "absolute";
	    svg3.style.top = 0;
	    svg3.style.left = 0;

	    document.getElementById(obj).appendChild(svg3);
	    var svg = Raphael(svg3, width, height);
	    svg.setViewBox(0,0,300,900,true);
	    var tr1 = svg.path(" M 60 205 L 130 165 L 140 275 L 60 205").attr({"stroke":"#3981cb","stroke-width":"2","fill":"#3981cb","opacity":0});
	    var tr2 = svg.path(" M 90 365 L 100 315 L 130 335 L 90 365").attr({"stroke":"#3981cb","stroke-width":"2","fill":"#3981cb","opacity":0});
	    var tr3 = svg.path(" M 70 475 L 130 555 L 200 440").attr({"stroke":"#3981cb","stroke-width":"2","fill":"#3981cb","opacity":0});
	    var tr4 = svg.path(" M 40 625 L 60 655 L 70 625").attr({"stroke":"#3981cb","stroke-width":"2","fill":"#3981cb","opacity":0});

	    var animation1 = Raphael.animation({"opacity":1},1000,"<").delay(500);
	    var animation2 = Raphael.animation({"opacity":0.7},1000,"<").delay(1000);
	    var animation3 = Raphael.animation({"opacity":1},1000,"<").delay(1500);
	    var animation4 = Raphael.animation({"opacity":0.8},1000,"<").delay(2000);
	    tr1.animate(animation1);
	    tr2.animate(animation2);
	    tr3.animate(animation3);
	    tr4.animate(animation4);
	    paperSet.push(svg);
	}


	var clean = function(){
	    for(var i in paperSet){
	        paperSet[i].remove();
	    }
	}
	var paintMap = function(final){
	    var r1 = Raphael("techs", "1.5rem", "1.5rem");
	    var r = Raphael("holder", "2.7rem", "2.7rem"),
	        R = 250, param = {stroke: "red", "stroke-width": 30};
	    r.setViewBox(0,0,600,600,true);
	    r1.setViewBox(0,0,600,400,true);


	    var tech1 = [{
	        name:"Es5 / Jquery",
	        num:80
	    },{
	        name:"Css3 / LESS / Sass / Compass",
	        num:70
	    },{
	        name:"Html5 / Jade",
	        num:60
	    },{
	        name:"Bootstrap",
	        num:60
	    },{
	        name:"Coffeescript / ES6",
	        num:40
	    }];

	    var tech2 = [{
	        name:"Backbone",
	        num:70
	    },{
	        name:"Angular",
	        num:65
	    },{
	        name:"NodeJs / Express",
	        num:40
	    },{
	        name:"Jekyll",
	        num:38
	    },{
	        name:"RaphaelJs",
	        num:55
	    }
	    ];

	    var tech3 = [{
	        name:"Gulp / Bower / Npm script",
	        num:65
	    },{
	        name:"WebPack",
	        num:40
	    },{
	        name:"Mock / underscore",
	        num:60
	    },{
	        name:"RequireJs",
	        num:30
	    },{
	        name:"seaJs",
	        num:20
	    },{
	        name:"MarkDown",
	        num:70
	    }];

	    var tech4 = [{
	        name:"Webstorm",
	        num:65
	    },{
	        name:"sublime",
	        num:30
	    },{
	        name:"SmartGit",
	        num:45
	    },{
	        name:"chrome",
	        num:60
	    },{
	        name:"Github",
	        num:69
	    }];

	    r.customAttributes.arc = function (value, total, R,center,color) {
	        var alpha = 360 / total * value,
	            a = (90 - alpha) * Math.PI / 180,
	            x = 300 + R * Math.cos(a),
	            y = 300 - R * Math.sin(a),
	            path;
	        if (total == value) {
	            path = [["M", 300, 300 - R], ["A", R, R, 0, 1, 1, 299.99, 300 - R]];
	        } else {
	            path = [["M", 300, 300 - R], ["A", R, R, 0, +(alpha>180), 1, x, y]];
	        }
	        if (center == true){
	            return {path: path, stroke: "hsb(0.58,0.72,0.48)", fill: "hsb(0.58,0.72,0.48)"};
	        }
	        return {path: path, stroke: color};
	    };



	    var eventTrigger = function(obj,view,datas,color){
	        cleanAnmit();
	        obj.animate({"stroke-width":"80","opacity":"0.75"},500,"elastic");
	        drawTechs(view,datas,color);
	    }

	    var sec1 = r.path().attr(param).attr({arc: [30, 100, R-105,false,"hsb(0.21,1,0.81)"]}).click(function(){
	        eventTrigger(this,r1,tech4,"#97d000");
	        centerTxt.attr({"text":"Tools \n 30%"});
	    });
	    var sec2 = r.path().attr(param).attr({arc: [45, 100, R-70,false,"hsb(0.82,0.28,1)"]}).click(function(){
	        eventTrigger(this,r1,tech3,"#fab5ff");
	        centerTxt.attr({"text":"Common \n 45%"});
	    });
	    var sec3 = r.path().attr(param).attr({arc: [65, 100, R-35,false,"hsb(0.63,0.65,0.84)"]}).click(function(){
	        eventTrigger(this,r1,tech2,"#4866d9");
	        centerTxt.attr({"text":"Advanced \n 65%"});
	    });
	    var sec4 = r.path().attr(param).attr({arc: [85, 100, R,false,"hsb(0.54,0.86,0.8)"]}).click(function(){
	        eventTrigger(this,r1,tech1,"#4fa4d9");
	        centerTxt.attr({"text":"FE-Basic \n 85%"});
	    });
	    var sec5 = r.path().attr(param).attr({arc: [100, 100, R-140,true]}).click(function(){
	        cleanAnmit();
	        r1.clear();
	        centerTxt.attr({"text":"Skills"});
	    });
	    var centerTxt = r.text("300","300","Skills").attr({"font-size":"40px","fill":"white","stroke":"white" ,"text-anchor":"center"});

	    centerTxt.click(function(){
	        centerTxt.attr({"text":"Skills"});
	        cleanAnmit();
	        r1.clear();
	    });


	    $(".btn").eq(3).unbind().on("click",function(){
	        eventTrigger(sec1,r1,tech4,"#97d000");
	        centerTxt.attr({"text":"Tools \n 30%"});
	    });
	    $(".btn").eq(2).unbind().on("click",function(){
	        eventTrigger(sec2,r1,tech3,"#fab5ff");
	        centerTxt.attr({"text":"Common \n 45%"});
	    });
	    $(".btn").eq(1).unbind().on("click",function(){
	        eventTrigger(sec3,r1,tech2,"#4866d9");
	        centerTxt.attr({"text":"Advanced \n 65%"});
	    });
	    $(".btn").eq(0).unbind().on("click",function(){
	        eventTrigger(sec4,r1,tech1,"#4fa4d9");
	        centerTxt.attr({"text":"FE-Basic \n 85%"});
	    });

	    var cleanAnmit = function(){
	        sec1.animate({"stroke-width":"30","stroke-opacity":"1"},500,"bounce");
	        sec2.animate({"stroke-width":"30","stroke-opacity":"1"},500,"bounce");
	        sec3.animate({"stroke-width":"30","stroke-opacity":"1"},500,"bounce");
	        sec4.animate({"stroke-width":"30","stroke-opacity":"1"},500,"bounce");
	    };
	    /*--techs---*/

	    var drawTechs = function(r1,data,color){
	        r1.clear();
	        var l = data.length;

	        for(var i in data){
	            var lastNum = (data[i].num)/100*600+80;
	            var add = 60+60*i
	            console.log(lastNum);
	            r1.path("M80,"+add).attr({"stroke-width":"40","stroke-opacity":"0.8","stroke":color}).animate({"path":"M80,"+add+"L"+lastNum+","+add},Math.random()*2500,"bounce");
	            r1.text("100",add,data[i].name).attr({"font-size":"25px","fill":"white","stroke":"white" ,"text-anchor":"start"});
	        }
	    }
	    paperSet.push(r);
	    paperSet.push(r1);
	    final();
	}



	module.exports = {
	    "paintingline1":paintingline1,
	    "paintingline2":paintingline2,
	    "clean":clean,
	    "paintingTr":paintingTr,
	    "paintMap":paintMap

	}





/***/ }
/******/ ]);