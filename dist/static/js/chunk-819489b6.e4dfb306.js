(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-819489b6"],{1934:function(e,t,n){(function(r){function o(){return!("undefined"===typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function a(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),n){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,r)}}function s(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function i(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}}function c(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!==typeof r&&"env"in r&&(e=Object({NODE_ENV:"production",BASE_URL:""}).DEBUG),e}function u(){try{return window.localStorage}catch(e){}}t=e.exports=n("6d1a"),t.log=s,t.formatArgs=a,t.save=i,t.load=c,t.useColors=o,t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(c())}).call(this,n("4362"))},4173:function(e,t){var n=1e3,r=60*n,o=60*r,a=24*o,s=365.25*a;function i(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var i=parseFloat(t[1]),c=(t[2]||"ms").toLowerCase();switch(c){case"years":case"year":case"yrs":case"yr":case"y":return i*s;case"days":case"day":case"d":return i*a;case"hours":case"hour":case"hrs":case"hr":case"h":return i*o;case"minutes":case"minute":case"mins":case"min":case"m":return i*r;case"seconds":case"second":case"secs":case"sec":case"s":return i*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}}}function c(e){return e>=a?Math.round(e/a)+"d":e>=o?Math.round(e/o)+"h":e>=r?Math.round(e/r)+"m":e>=n?Math.round(e/n)+"s":e+"ms"}function u(e){return l(e,a,"day")||l(e,o,"hour")||l(e,r,"minute")||l(e,n,"second")||e+" ms"}function l(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var n=typeof e;if("string"===n&&e.length>0)return i(e);if("number"===n&&!1===isNaN(e))return t.long?u(e):c(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},"56fc":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[0==e.mark?r("div",{ref:"mymap",staticStyle:{width:"600px",height:"500px"},attrs:{id:"main"}}):e._e(),1==e.mark?r("div",{ref:"mymap",staticStyle:{width:"600px",height:"500px",background:"red"},attrs:{id:"main"}}):e._e(),2==e.mark?r("div",{ref:"mymap",staticStyle:{width:"600px",height:"500px",background:"lightcoral"},attrs:{id:"main"}}):e._e(),r("audio",{staticClass:"au",attrs:{autoplay:"",src:n("cc4c"),controls:"controls",refs:"audio"}}),r("div",{attrs:{id:"conter"}},e._l(e.arrp,(function(t,n){return r("p",{key:n,attrs:{id:"b2"}},[e._v(e._s(t))])})),0),r("div",{attrs:{id:"b1"}},e._l(e.num,(function(t,n){return r("div",{key:n,class:{border:n===e.mark},attrs:{id:"b3"},on:{click:function(t){return e.redclick(n)}}})})),0),r("router-view")],1)},o=[];n("d81d"),n("b0c0");function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("bc3a");var s,i=n("f2e8"),c=n.n(i),u=n("313e"),l=(s={title:{text:"中国疫情地图",x:"center",textStyle:{color:"#9c0505"}},tooltip:{},roam:!0},a(s,"tooltip",{}),a(s,"series",[{name:"累计确诊人数",type:"map",map:"china",label:{show:!0},data:[]}]),a(s,"visualMap",[{type:"piecewise",show:!0,pieces:[{min:1e4},{min:1e3,max:9999},{min:100,max:999},{min:10,max:99},{min:1,max:9}]}]),a(s,"inRange",{color:["#ffc0b1","#9c0505"]}),a(s,"toolbox",{show:!0,orient:"vertical",left:"right",top:"center",itemSize:30,feature:{dataView:{readOnly:!1,backgroundColor:"#FFB6C1",textareaColor:"#EE82EE"},restore:{},saveAsImage:{}}}),s),d={data:function(){return{num:3,mark:0,arrp:["点击实现","一键换肤","点击实现","一键换肤","点击实现","一键换肤","点击实现","点击实现","一键换肤","点击实现","一键换肤","点击实现","一键换肤","点击实现"],msk:!1}},methods:{redclick:function(e){this.mark=e,console.log(e)},getData:function(){var e=this;c()("https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427",{},(function(t,n){if(!t){console.log(n);var r=n.data.list.map((function(e){return{name:e.name,value:e.value}}));l.series[0].data=r,e.myChart.setOption(l)}}))}},created:function(){this.timer(),this.$refs.audio.play()},mounted:function(){this.getData(),this.myChart=u.init(this.$refs.mymap),this.myChart.setOption(l)}},f=d,m=(n("8b7c"),n("2877")),p=Object(m["a"])(f,r,o,!1,null,"2fa9f71a",null);t["default"]=p.exports},"6d1a":function(e,t,n){var r;function o(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}function a(e){function n(){if(n.enabled){var e=n,o=+new Date,a=o-(r||o);e.diff=a,e.prev=r,e.curr=o,r=o;for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];s[0]=t.coerce(s[0]),"string"!==typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;c++;var o=t.formatters[r];if("function"===typeof o){var a=s[c];n=o.call(e,a),s.splice(c,1),c--}return n})),t.formatArgs.call(e,s);var u=n.log||t.log||console.log.bind(console);u.apply(e,s)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=o(e),"function"===typeof t.init&&t.init(n),n}function s(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"===typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&(e=n[o].replace(/\*/g,".*?"),"-"===e[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function i(){t.enable("")}function c(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1}function u(e){return e instanceof Error?e.stack||e.message:e}t=e.exports=a.debug=a["default"]=a,t.coerce=u,t.disable=i,t.enable=s,t.enabled=c,t.humanize=n("4173"),t.names=[],t.skips=[],t.formatters={}},"84f1":function(e,t,n){},"8b7c":function(e,t,n){"use strict";var r=n("84f1"),o=n.n(r);o.a},cc4c:function(e,t,n){e.exports=n.p+"static/media/2.586d78d3.mp3"},f2e8:function(e,t,n){var r=n("1934")("jsonp");e.exports=s;var o=0;function a(){}function s(e,t,n){"function"==typeof t&&(n=t,t={}),t||(t={});var s,i,c=t.prefix||"__jp",u=t.name||c+o++,l=t.param||"callback",d=null!=t.timeout?t.timeout:6e4,f=encodeURIComponent,m=document.getElementsByTagName("script")[0]||document.head;function p(){s.parentNode&&s.parentNode.removeChild(s),window[u]=a,i&&clearTimeout(i)}function h(){window[u]&&p()}return d&&(i=setTimeout((function(){p(),n&&n(new Error("Timeout"))}),d)),window[u]=function(e){r("jsonp got",e),p(),n&&n(null,e)},e+=(~e.indexOf("?")?"&":"?")+l+"="+f(u),e=e.replace("?&","?"),r('jsonp req "%s"',e),s=document.createElement("script"),s.src=e,m.parentNode.insertBefore(s,m),h}}}]);
//# sourceMappingURL=chunk-819489b6.e4dfb306.js.map