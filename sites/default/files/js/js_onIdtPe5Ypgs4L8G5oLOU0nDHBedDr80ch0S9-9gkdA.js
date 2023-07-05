/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function(a){var b=navigator.userAgent;a.HTMLPictureElement&&/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var b,c=document.createElement("source"),d=function(a){var b,d,e=a.parentNode;"PICTURE"===e.nodeName.toUpperCase()?(b=c.cloneNode(),e.insertBefore(b,e.firstElementChild),setTimeout(function(){e.removeChild(b)})):(!a._pfLastSize||a.offsetWidth>a._pfLastSize)&&(a._pfLastSize=a.offsetWidth,d=a.sizes,a.sizes+=",100vw",setTimeout(function(){a.sizes=d}))},e=function(){var a,b=document.querySelectorAll("picture > img, img[srcset][sizes]");for(a=0;a<b.length;a++)d(b[a])},f=function(){clearTimeout(b),b=setTimeout(e,99)},g=a.matchMedia&&matchMedia("(orientation: landscape)"),h=function(){f(),g&&g.addListener&&g.addListener(f)};return c.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?h():document.addEventListener("DOMContentLoaded",h),f}())}(window),function(a,b,c){"use strict";function d(a){return" "===a||"	"===a||"\n"===a||"\f"===a||"\r"===a}function e(b,c){var d=new a.Image;return d.onerror=function(){A[b]=!1,ba()},d.onload=function(){A[b]=1===d.width,ba()},d.src=c,"pending"}function f(){M=!1,P=a.devicePixelRatio,N={},O={},s.DPR=P||1,Q.width=Math.max(a.innerWidth||0,z.clientWidth),Q.height=Math.max(a.innerHeight||0,z.clientHeight),Q.vw=Q.width/100,Q.vh=Q.height/100,r=[Q.height,Q.width,P].join("-"),Q.em=s.getEmValue(),Q.rem=Q.em}function g(a,b,c,d){var e,f,g,h;return"saveData"===B.algorithm?a>2.7?h=c+1:(f=b-c,e=Math.pow(a-.6,1.5),g=f*e,d&&(g+=.1*e),h=a+g):h=c>1?Math.sqrt(a*b):a,h>c}function h(a){var b,c=s.getSet(a),d=!1;"pending"!==c&&(d=r,c&&(b=s.setRes(c),s.applySetCandidate(b,a))),a[s.ns].evaled=d}function i(a,b){return a.res-b.res}function j(a,b,c){var d;return!c&&b&&(c=a[s.ns].sets,c=c&&c[c.length-1]),d=k(b,c),d&&(b=s.makeUrl(b),a[s.ns].curSrc=b,a[s.ns].curCan=d,d.res||aa(d,d.set.sizes)),d}function k(a,b){var c,d,e;if(a&&b)for(e=s.parseSet(b),a=s.makeUrl(a),c=0;c<e.length;c++)if(a===s.makeUrl(e[c].url)){d=e[c];break}return d}function l(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[s.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}function m(a,b){function c(b){var c,d=b.exec(a.substring(m));return d?(c=d[0],m+=c.length,c):void 0}function e(){var a,c,d,e,f,i,j,k,l,m=!1,o={};for(e=0;e<h.length;e++)f=h[e],i=f[f.length-1],j=f.substring(0,f.length-1),k=parseInt(j,10),l=parseFloat(j),X.test(j)&&"w"===i?((a||c)&&(m=!0),0===k?m=!0:a=k):Y.test(j)&&"x"===i?((a||c||d)&&(m=!0),0>l?m=!0:c=l):X.test(j)&&"h"===i?((d||c)&&(m=!0),0===k?m=!0:d=k):m=!0;m||(o.url=g,a&&(o.w=a),c&&(o.d=c),d&&(o.h=d),d||c||a||(o.d=1),1===o.d&&(b.has1x=!0),o.set=b,n.push(o))}function f(){for(c(T),i="",j="in descriptor";;){if(k=a.charAt(m),"in descriptor"===j)if(d(k))i&&(h.push(i),i="",j="after descriptor");else{if(","===k)return m+=1,i&&h.push(i),void e();if("("===k)i+=k,j="in parens";else{if(""===k)return i&&h.push(i),void e();i+=k}}else if("in parens"===j)if(")"===k)i+=k,j="in descriptor";else{if(""===k)return h.push(i),void e();i+=k}else if("after descriptor"===j)if(d(k));else{if(""===k)return void e();j="in descriptor",m-=1}m+=1}}for(var g,h,i,j,k,l=a.length,m=0,n=[];;){if(c(U),m>=l)return n;g=c(V),h=[],","===g.slice(-1)?(g=g.replace(W,""),e()):f()}}function n(a){function b(a){function b(){f&&(g.push(f),f="")}function c(){g[0]&&(h.push(g),g=[])}for(var e,f="",g=[],h=[],i=0,j=0,k=!1;;){if(e=a.charAt(j),""===e)return b(),c(),h;if(k){if("*"===e&&"/"===a[j+1]){k=!1,j+=2,b();continue}j+=1}else{if(d(e)){if(a.charAt(j-1)&&d(a.charAt(j-1))||!f){j+=1;continue}if(0===i){b(),j+=1;continue}e=" "}else if("("===e)i+=1;else if(")"===e)i-=1;else{if(","===e){b(),c(),j+=1;continue}if("/"===e&&"*"===a.charAt(j+1)){k=!0,j+=2;continue}}f+=e,j+=1}}}function c(a){return k.test(a)&&parseFloat(a)>=0?!0:l.test(a)?!0:"0"===a||"-0"===a||"+0"===a?!0:!1}var e,f,g,h,i,j,k=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(f=b(a),g=f.length,e=0;g>e;e++)if(h=f[e],i=h[h.length-1],c(i)){if(j=i,h.pop(),0===h.length)return j;if(h=h.join(" "),s.matchesMedia(h))return j}return"100vw"}b.createElement("picture");var o,p,q,r,s={},t=!1,u=function(){},v=b.createElement("img"),w=v.getAttribute,x=v.setAttribute,y=v.removeAttribute,z=b.documentElement,A={},B={algorithm:""},C="data-pfsrc",D=C+"set",E=navigator.userAgent,F=/rident/.test(E)||/ecko/.test(E)&&E.match(/rv\:(\d+)/)&&RegExp.$1>35,G="currentSrc",H=/\s+\+?\d+(e\d+)?w/,I=/(\([^)]+\))?\s*(.+)/,J=a.picturefillCFG,K="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",L="font-size:100%!important;",M=!0,N={},O={},P=a.devicePixelRatio,Q={px:1,"in":96},R=b.createElement("a"),S=!1,T=/^[ \t\n\r\u000c]+/,U=/^[, \t\n\r\u000c]+/,V=/^[^ \t\n\r\u000c]+/,W=/[,]+$/,X=/^\d+$/,Y=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Z=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},$=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},_=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=$(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(b,d){var e;if(!(b in N))if(N[b]=!1,d&&(e=b.match(a)))N[b]=e[1]*Q[e[2]];else try{N[b]=new Function("e",c(b))(Q)}catch(f){}return N[b]}}(),aa=function(a,b){return a.w?(a.cWidth=s.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.d,a},ba=function(a){if(t){var c,d,e,f=a||{};if(f.elements&&1===f.elements.nodeType&&("IMG"===f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),c=f.elements||s.qsa(f.context||b,f.reevaluate||f.reselect?s.sel:s.selShort),e=c.length){for(s.setupRun(f),S=!0,d=0;e>d;d++)s.fillImg(c[d],f);s.teardownRun(f)}}};o=a.console&&console.warn?function(a){console.warn(a)}:u,G in v||(G="src"),A["image/jpeg"]=!0,A["image/gif"]=!0,A["image/png"]=!0,A["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),s.ns=("pf"+(new Date).getTime()).substr(0,9),s.supSrcset="srcset"in v,s.supSizes="sizes"in v,s.supPicture=!!a.HTMLPictureElement,s.supSrcset&&s.supPicture&&!s.supSizes&&!function(a){v.srcset="data:,a",a.src="data:,a",s.supSrcset=v.complete===a.complete,s.supPicture=s.supSrcset&&s.supPicture}(b.createElement("img")),s.supSrcset&&!s.supSizes?!function(){var a="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",c="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",d=b.createElement("img"),e=function(){var a=d.width;2===a&&(s.supSizes=!0),q=s.supSrcset&&!s.supSizes,t=!0,setTimeout(ba)};d.onload=e,d.onerror=e,d.setAttribute("sizes","9px"),d.srcset=c+" 1w,"+a+" 9w",d.src=c}():t=!0,s.selShort="picture>img,img[srcset]",s.sel=s.selShort,s.cfg=B,s.DPR=P||1,s.u=Q,s.types=A,s.setSize=u,s.makeUrl=$(function(a){return R.href=a,R.href}),s.qsa=function(a,b){return"querySelector"in a?a.querySelectorAll(b):[]},s.matchesMedia=function(){return a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?s.matchesMedia=function(a){return!a||matchMedia(a).matches}:s.matchesMedia=s.mMQ,s.matchesMedia.apply(this,arguments)},s.mMQ=function(a){return a?_(a):!0},s.calcLength=function(a){var b=_(a,!0)||!1;return 0>b&&(b=!1),b},s.supportsType=function(a){return a?A[a]:!0},s.parseSize=$(function(a){var b=(a||"").match(I);return{media:b&&b[1],length:b&&b[2]}}),s.parseSet=function(a){return a.cands||(a.cands=m(a.srcset,a)),a.cands},s.getEmValue=function(){var a;if(!p&&(a=b.body)){var c=b.createElement("div"),d=z.style.cssText,e=a.style.cssText;c.style.cssText=K,z.style.cssText=L,a.style.cssText=L,a.appendChild(c),p=c.offsetWidth,a.removeChild(c),p=parseFloat(p,10),z.style.cssText=d,a.style.cssText=e}return p||16},s.calcListLength=function(a){if(!(a in O)||B.uT){var b=s.calcLength(n(a));O[a]=b?b:Q.width}return O[a]},s.setRes=function(a){var b;if(a){b=s.parseSet(a);for(var c=0,d=b.length;d>c;c++)aa(b[c],a.sizes)}return b},s.setRes.res=aa,s.applySetCandidate=function(a,b){if(a.length){var c,d,e,f,h,k,l,m,n,o=b[s.ns],p=s.DPR;if(k=o.curSrc||b[G],l=o.curCan||j(b,k,a[0].set),l&&l.set===a[0].set&&(n=F&&!b.complete&&l.res-.1>p,n||(l.cached=!0,l.res>=p&&(h=l))),!h)for(a.sort(i),f=a.length,h=a[f-1],d=0;f>d;d++)if(c=a[d],c.res>=p){e=d-1,h=a[e]&&(n||k!==s.makeUrl(c.url))&&g(a[e].res,c.res,p,a[e].cached)?a[e]:c;break}h&&(m=s.makeUrl(h.url),o.curSrc=m,o.curCan=h,m!==k&&s.setSrc(b,h),s.setSize(b))}},s.setSrc=function(a,b){var c;a.src=b.url,"image/svg+xml"===b.set.type&&(c=a.style.width,a.style.width=a.offsetWidth+1+"px",a.offsetWidth+1&&(a.style.width=c))},s.getSet=function(a){var b,c,d,e=!1,f=a[s.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&s.matchesMedia(c.media)&&(d=s.supportsType(c.type))){"pending"===d&&(c=d),e=c;break}return e},s.parseSets=function(a,b,d){var e,f,g,h,i=b&&"PICTURE"===b.nodeName.toUpperCase(),j=a[s.ns];(j.src===c||d.src)&&(j.src=w.call(a,"src"),j.src?x.call(a,C,j.src):y.call(a,C)),(j.srcset===c||d.srcset||!s.supSrcset||a.srcset)&&(e=w.call(a,"srcset"),j.srcset=e,h=!0),j.sets=[],i&&(j.pic=!0,l(b,j.sets)),j.srcset?(f={srcset:j.srcset,sizes:w.call(a,"sizes")},j.sets.push(f),g=(q||j.src)&&H.test(j.srcset||""),g||!j.src||k(j.src,f)||f.has1x||(f.srcset+=", "+j.src,f.cands.push({url:j.src,d:1,set:f}))):j.src&&j.sets.push({srcset:j.src,sizes:null}),j.curCan=null,j.curSrc=c,j.supported=!(i||f&&!s.supSrcset||g&&!s.supSizes),h&&s.supSrcset&&!j.supported&&(e?(x.call(a,D,e),a.srcset=""):y.call(a,D)),j.supported&&!j.srcset&&(!j.src&&a.src||a.src!==s.makeUrl(j.src))&&(null===j.src?a.removeAttribute("src"):a.src=j.src),j.parsed=!0},s.fillImg=function(a,b){var c,d=b.reselect||b.reevaluate;a[s.ns]||(a[s.ns]={}),c=a[s.ns],(d||c.evaled!==r)&&((!c.parsed||b.reevaluate)&&s.parseSets(a,a.parentNode,b),c.supported?c.evaled=r:h(a))},s.setupRun=function(){(!S||M||P!==a.devicePixelRatio)&&f()},s.supPicture?(ba=u,s.fillImg=u):!function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";f=setTimeout(e,"loading"===a?200:999),b.body&&(s.fillImgs(),c=c||d.test(a),c&&clearTimeout(f))},f=setTimeout(e,b.body?9:99),g=function(a,b){var c,d,e=function(){var f=new Date-d;b>f?c=setTimeout(e,b-f):(c=null,a())};return function(){d=new Date,c||(c=setTimeout(e,b))}},h=z.clientHeight,i=function(){M=Math.max(a.innerWidth||0,z.clientWidth)!==Q.width||z.clientHeight!==h,h=z.clientHeight,M&&s.fillImgs()};Z(a,"resize",g(i,99)),Z(b,"readystatechange",e)}(),s.picturefill=ba,s.fillImgs=ba,s.teardownRun=u,ba._=s,a.picturefillCFG={pf:s,push:function(a){var b=a.shift();"function"==typeof s[b]?s[b].apply(s,a):(B[b]=a[0],S&&s.fillImgs({reselect:!0}))}};for(;J&&J.length;)a.picturefillCFG.push(J.shift());a.picturefill=ba,"object"==typeof module&&"object"==typeof module.exports?module.exports=ba:"function"==typeof define&&define.amd&&define("picturefill",function(){return ba}),s.supPicture||(A["image/webp"]=e("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);;
!function(o,i){"use strict";var s=Object.assign,u=Array.prototype,e=Object.prototype,c=e.toString,n=u.splice,r=u.some,t="undefined"!=typeof Symbol&&Symbol,f="jQuery"in o,a="cash"in o,d="add",l="remove",p="has",m="get",h="set",v="width",y="clientWidth",g="scroll",b="iterator",E="Observer",w=/-([a-z])/g,C=/^--/,S=/[\11\12\14\15\40]+/,O="data-once",x=o.localStorage,j={},z=Math.pow(2,53)-1,L=(A.prototype.init=function(n,t){t=new A(n,t);return F(n)?(n.idblazy||(n.idblazy=t),n.idblazy):t},A);function A(n,t){if(this.name="dblazy",n){if(H(n))return n;var e=n;if(J(n)){if(!(e=vn(xn(t),n)).length)return}else if(Q(n))return this.ready(n);!e.nodeType&&e!==o||(e=[e]);for(var r=this.length=e.length,i=0;i<r;i++)this[i]=e[i]}}var I=L.prototype,N=I.init;function T(n){var t=this,e=(t=H(t)?t:N(t)).length;return Q(n)&&(e&&1!==e?t.each(n):n(t[0],0)),t}function M(n){var t="[object "+n+"]";return function(n){return c.call(n)===t}}(N.fn=N.prototype=I).length=0,I.splice=n,t&&(I[t[b]]=u[t[b]]);var P,W,R=(P="length",function(n){return U(n)?void 0:n[P]}),k=(W=R,function(n){n=W(n);return"number"==typeof n&&0<=n&&n<=z});function q(n){return _(n)?Object.keys(n):[]}function H(n){return n instanceof L}function B(n){return!J(n)&&(n&&(Array.isArray(n)||k(n)))}function D(n){return!0===n||!1===n||"[object Boolean]"===c.call(n)}function F(n){return n&&n instanceof Element}var Q=M("Function");function $(n){if(U(n)||G(n)||!1===n)return!0;var t=R(n);return"number"==typeof t&&(B(n)||J(n))?0===t:0===R(q(n))}function U(n){return null===n}function V(n){return!isNaN(parseFloat(n))&&isFinite(n)}function _(n){if(!n||"object"!=typeof n)return!1;n=Object.getPrototypeOf(n);return U(n)||n===e}function J(n){return n&&"string"==typeof n}function G(n){return void 0===n}function K(n){return!!n&&n===n.window}function X(n){return-1!==[9,11].indexOf(!!n&&n.nodeType)}function Y(n){return-1!==[1,9,11].indexOf(!!n&&n.nodeType)}function Z(n){return Y(n)||K(n)}function nn(n,t,e){if(Q(n)||J(n)||D(n)||V(n))return[];if(B(n)&&!G(n.length)){var r=n.length;if(!r||1===r&&" "===n[0])return[]}if(_(n)&&$(n))return[];if("[object Object]"===c.call(n)){for(var i in n)if(tn(n,i)&&"length"!==i&&"name"!==i&&!1===t.call(e,n[i],i,n))break}else n&&(n instanceof HTMLCollection&&(n=u.slice.call(n)),(r=n.length)&&1===r&&!G(n[0])?t.call(e,n[0],0,n):n.forEach(t,e));return n}function tn(n,t){return e.hasOwnProperty.call(n,t)}function en(n){return B(n)?n:[n]}function rn(n,t,e,r){return n[t+"Attribute"](e,r)}function on(n,t,r,e){var i=this,o=G(r),u=!_(t)&&(o||D(e)),c=J(e)?e:"";if(u){e=n&&n.length?n[0]:n;return o&&(r=""),un(e,t)?rn(e,m,t):r}return T.call(n,function(e){if(!Y(e))return u?"":i;_(t)?nn(t,function(n,t){rn(e,h,c+t,n)}):U(r)?nn(en(t),function(n){n=c+n;un(e,n)&&rn(e,l,n)}):"src"===t?e.src=r:rn(e,h,t,r)})}function un(n,t){return Y(n)&&rn(n,p,t)}function cn(n,r,i){return T.call(n,function(n,t){var e;Y(n)&&(e=n.classList,Q(r)&&(r=r(rn(n,m,"class"),t)),e&&J(r)&&(t=r.trim().split(" "),G(i)?t.map(function(n){e.toggle(n)}):e[i].apply(e,t)))})}function fn(t,n){var e=0;return F(t)&&F(n)?t!==n&&t.contains(n):B(t)?-1!==t.indexOf(n):(J(t)&&nn(en(n),function(n){-1!==t.indexOf(n)&&e++}),0<e)}function an(n){return n.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}function ln(t,n){var e=0;return J(t)&&nn(en(n),function(n){t.startsWith(n)&&e++}),0<e}function sn(n){return n.replace(/\\s+/g," ").trim()}function dn(n,t){return F(n)&&J(t)?n.closest(t):null}function pn(n,t){return!!F(n)&&(J(t)?n.matches(t):F(t)&&n===t)}function mn(t,n){return!(!t||!t.nodeName)&&r.call(en(n),function(n){return t.nodeName.toLowerCase()===n.toLowerCase()})}function hn(n,t,e){if(Y(n))return J(t)&&ln(t,">")&&(fn(t,":scope")||(t=":scope "+t)),G(e)&&J(t)?n.querySelector(t)||[]:function(n,t){var e=en(n);{var r;J(n)&&(r=(t=xn(t)).querySelector(n),e=U(r)?[]:t.querySelectorAll(n))}return u.slice.call(e)}(t,n);return[]}function vn(n,t){return hn(n,t,1)}function yn(n){return F(n)&&n.currentStyle||!G(i.documentMode)}function gn(){return o.devicePixelRatio||1}function bn(){return o.innerWidth||i.documentElement[y]||o.screen[v]}function En(n,t,e,r,i,o){return Sn(n,t,e,r,i,o,d)}function wn(n,t,e,r,i,o){return Sn(n,t,e,r,i,o,l)}function Cn(n){return n.decoded||n.complete}function Sn(n,t,e,c,r,f,a){var i,o=c,l=yn();c=J(e)?(i=fn(t,["touchstart",g,"wheel"]),G(r)&&(r=!l&&{capture:!i,passive:i}),function(n){var t=n.target;if(pn(t,e))o.call(t,n);else for(;t&&t!==this;){if(pn(t,e)){o.call(t,n);break}t=t.parentElement||t.parentNode}}):(f=r,r=o,e);return T.call(n,function(i){var o,u;Z(i)&&(o=!1,u=r||!1,_(r)&&(u=s({capture:!1,passive:!0},r),o=u.once||!1),nn(t.trim().split(" "),function(n){f=f||ln(n,["blazy.","bio."]);var t=a===d,e=(f?n:n.split(".")[0]).trim(),r=c=c||j[n];Q(c)&&(o&&t&&l&&(t=!(c=function n(){i.removeEventListener(e,n,u),r.apply(this,arguments)})),i[a+"EventListener"](e,c,u)),t?j[n]=c:delete j[n]}))})}function On(n){function t(){return setTimeout(n,0,N)}return"loading"!==i.readyState?t():i.addEventListener("DOMContentLoaded",t),this}function xn(n){return J(n=n||i)&&(n=pn(n,"html")?i:i.querySelector(n)),pn(n,"html")&&(n=i),Y(n=jn(n))&&n.children&&n.children.length||X(n)?n:i}function jn(n){var t=f&&n instanceof o.jQuery,e=a&&n instanceof o.cash;return n&&(H(n)||t||e)?n[0]:n}function zn(n){return C.test(n)}function Ln(n,t,e){if(F(n)){var r=n[e];if(G(t))return r;for(;r;){if(pn(r,t)||mn(r,t))return r;r=r[e]}}return null}function An(n,t){return Ln(n,t,"parentElement")}function In(n,t,e){return Ln(n,t,e+"ElementSibling")}function Nn(n,t){return In(n,t,"previous")}function Tn(e,n,r){return n.filter(function(n){var t=pn(n,e);return t&&r&&r(n),t})}function Mn(n,t){return vn(xn(t),n)}function Pn(n){return"["+O+'~="'+n+'"]'}function Wn(n,t){var e=t.add,r=t.remove,i=[];un(n,O)&&nn(on(n,O).trim().split(S),function(n){fn(i,n)||n===r||i.push(n)}),e&&!fn(i,e)&&i.push(e);e=i.join(" ");rn(n,""===e?l:h,O,e.trim())}function Rn(n,t){return Mn(n?Pn(n):"["+O+"]",t)}N.isTag=M,N.isArr=B,N.isBool=D,N.isDoc=X,N.isElm=F,N.isFun=Q,N.isEmpty=$,N.isNull=U,N.isNum=V,N.isObj=_,N.isStr=J,N.isUnd=G,N.isEvt=Z,N.isQsa=Y,N.isIo="Intersection"+E in o,N.isMo="Mutation"+E in o,N.isRo="Resize"+E in o,N.isNativeLazy="loading"in HTMLImageElement.prototype,N.isAmd="function"==typeof define&&define.amd,N.isWin=K,N._er=-1,N._ok=1,N.chain=function(n,t){return T.call(n,t)},N.each=nn,N.extend=s,I.extend=function(n,t){return(t=t||!1)?s(n,I):s(I,n)},N.hasProp=tn,N.parse=function(n){try{return 0===n.length||"1"===n?{}:JSON.parse(n)}catch(n){return{}}},N.toArray=en,N.hasAttr=un,N.attr=on.bind(N),N.removeAttr=function(n,t,e){return on(n,t,null,e||"")}.bind(N),N.hasClass=function(e,n){var r,i=0;return Y(e)&&J(n)&&(n=n.trim(),r=e.classList,nn(n.trim().split(" "),function(n){var t;r&&r.contains(n)&&i++,0!==i||(t=on(e,"class"))&&t.match(n)&&i++})),0<i},N.toggleClass=cn,N.addClass=function(n,t){return cn(n,t,d)},N.removeClass=function(n,t){return cn(n,t,l)},N.contains=fn,N.escape=an,N.startsWith=ln,N.trimSpaces=sn,N.closest=dn,N.is=pn,N.equal=mn,N.find=hn,N.findAll=vn,N.remove=function(n){var t;!F(n)||(t=An(n))&&t.removeChild(n)},N.ie=yn,N.pixelRatio=gn,N.windowWidth=bn,N.windowSize=function(){return{width:bn(),height:o.innerHeight||i.documentElement.clientHeight}},N.activeWidth=function(t,n){var e=n.up||!1,r=q(t),i=r[0],o=r[r.length-1],u=n.ww||bn(),n=u*gn(),c=e?u:n;return G(r=r.filter(function(n){return e?parseInt(n,10)<=c:parseInt(n,10)>=c}).map(function(n){return t[n]})[e?"pop":"shift"]())?t[o<=c?o:i]:r},N.toEvent=Sn,N.on=En,N.off=wn,N.one=function(n,t,e,r){return En(n,t,e,{once:!0},r)},N.trigger=function(n,e,r,i){return T.call(n,function(n){var t;return Z(n)&&(t=G(r)?new Event(e):(t={bubbles:!0,cancelable:!0,detail:r||{}},_(i)&&(t=s(t,i)),new CustomEvent(e,t)),n.dispatchEvent(t)),t})},N.isDecoded=Cn,N.ready=On.bind(N),N.decode=function(e){return Cn(e)?Promise.resolve(e):"decode"in e?(e.decoding="async",e.decode()):new Promise(function(n,t){e.onload=function(){n(e)},e.onerror=t()})},N.once=function(n,t,e,r){var i,o=[];return J(n)?Rn(n,t):(G(e)||(o=Tn(":not("+Pn(i=t)+")",Mn(e,r),function(n){Wn(n,{add:i})})).length&&nn(o,n),o)},N.throttle=function(t,e,r){e=e||50;var i=0;return function(){var n=+new Date;n-i<e||(i=n,t.apply(r,arguments))}},N.resize=function(t,e){return o.onresize=function(n){clearTimeout(e),e=setTimeout(t.bind(n),200)},t},N.template=function(n,t){for(var e in t)tn(t,e)&&(n=n.replace(new RegExp(an("$"+e),"g"),t[e]));return sn(n)},N.context=xn,N.toElm=jn,N.camelCase=function(n){return n.replace(w,function(n,t){return t.toUpperCase()})},N.isVar=zn,N.computeStyle=function(n,t,e){if(F(n)){var r=getComputedStyle(n,null);return G(t)?r:e||zn(t)?r.getPropertyValue(t)||null:r[t]||n.style[t]}},N.rect=function(n){return F(n)?n.getBoundingClientRect():{}},N.empty=function(n){return T.call(n,function(n){if(F(n))for(;n.firstChild;)n.removeChild(n.firstChild)})},N.parent=An,N.next=function(n,t){return In(n,t,"next")},N.prev=Nn,N.index=function(t,n){var e=0;if(F(t))for(G(n)||nn(en(n),function(n){n=dn(t,n);if(F(n))return t=n,!1});!U(t=Nn(t));)e++;return e},N.keys=q,N.create=function(n,t,e){var r=i.createElement(n);return(J(t)||_(t))&&(J(t)?r.className=t:on(r,t)),e&&(e=e.trim(),r.innerHTML=e,"template"===n&&(r=r.content.firstChild||r)),r},N.storage=function(t,e,n,r){if(x){if(G(e))return x.getItem(t);if(U(e))x.removeItem(t);else try{x.setItem(t,e)}catch(n){x.removeItem(t),r&&x.setItem(t,e)}}return n||!1},E={chain:function(n){return T.call(this,n)},each:function(n){return nn(this,n)},ready:function(n){return On.call(this,n)}},I.extend(E),N.matches=pn,N.forEach=nn,N.bindEvent=En.bind(N),N.unbindEvent=wn.bind(N),N.filter=Tn,N.once.find||(N.once.find=Rn,N.once.filter=function(n,t,e){return Tn(Pn(n),Mn(t,e))},N.once.remove=function(t,n,e,r){return Tn(Pn(t),Mn(n,e),function(n){Wn(n,{remove:t})})},N.once.removeSafely=function(n,t,e,r){var i=o.jQuery;this.find(n,e).length&&this.remove(n,t,e,r),f&&i&&i.fn&&Q(i.fn.removeOnce)&&i(t,xn(e)).removeOnce(n)}),"undefined"!=typeof exports?module.exports=N:o.dBlazy=N}(this,this.document);
;
!function(i){"use strict";function r(t,n,a){return i.chain(t,function(e){i.isElm(e)&&i.each(i.toArray(n),function(t){var n,r="data-"+t;i.hasAttr(e,r)&&((n=i.attr(e,r))&&n.length&&i.attr(e,t,n),a&&i.removeAttr(e,r))})})}function e(t,a,u,c){i.isUnd(c)&&(c=!0);return i.chain(t,function(t){var n,r,e;i.isElm(t)&&(n=t.parentNode,r=i.equal(n,"picture"),e=null,c?e=r?n:t:r&&(e=n),i.isElm(e)&&(e=e.getElementsByTagName("source"),a=a||(r?"srcset":"src"),e.length&&i(e).mapAttr(a,u)))})}i.mapAttr=r,i.fn.mapAttr=function(t,n){return r(this,t,n)},i.mapSource=e,i.fn.mapSource=function(t,n,r){return e(this,t,n,r)}}(dBlazy);
;
!function(n,o,r){"use strict";function i(t){t=t||0;var i=n.windowSize();return{top:0-t,left:0-t,bottom:i.height+t,right:i.width+t}}n.ww=0,n.vp={top:0,right:0,bottom:0,left:0},n.isVisible=function(t,i){var e=t.target||t;return n.isIo?t.isIntersecting||0<t.intersectionRatio:(e=e,i=i,(e=n.isElm(e)?n.rect(e):e).right>=i.left&&e.bottom>=i.top&&e.left<=i.right&&e.top<=i.bottom)},n.isResized=function(t,i){return!!i.contentRect||!!t.resizeTrigger||!1},n.viewport=i,n.windowData=function(t,i){var e=this,n=t.offset||100,o=t.mobileFirst||!1;return i&&e.initViewport(t),e.ww=e.vp.right-n,{vp:e.vp,ww:e.ww,up:o}},n.initViewport=function(t){return this.vp=i(t.offset),this.vp},n.updateViewport=function(t){var i=this,e=t.offset;return i.vp.bottom=(o.innerHeight||r.documentElement.clientHeight)+e,i.vp.right=(o.innerWidth||r.documentElement.clientWidth)+e,i.windowData(t)}}(dBlazy,this,this.document);
;
!function(c,n){"use strict";var t=Array.prototype.some,u="remove",h="width",l="height",e="after",r="before",i="begin",o="Top",s="Left",f="Height",a="scroll";function d(t,n,r){var i=this,e=c.isUnd(r),u=c.isObj(n),o=!u&&e;if(o&&c.isStr(n)){var s=t&&t.length?t[0]:t,f=[h,l,"top","right","bottom","left"],e=c.computeStyle(s,n),s=c.isNum(e)?parseInt(e,2):e;return-1===f.indexOf(n)?e:s}return c.chain(t,function(e){if(!c.isElm(e))return o?"":i;function t(t,n){c.isFun(t)&&(t=t()),(c.contains(n,"-")||c.isVar(n))&&(n=c.camelCase(n)),e.style[n]=c.isStr(t)?t:t+"px"}u?c.each(n,t):c.isNull(r)?c.each(c.toArray(n),function(t){e.style.removeProperty(t)}):c.isStr(n)&&t(r,n)})}function p(t){t=c.rect(t);return{top:(t.top||0)+n.body[a+o],left:(t.left||0)+n.body[a+s]}}function m(t,n){return d(t,h,n)}function g(t,n){return d(t,l,n)}function v(t,n,e){var r,i=0;return c.isElm(t)&&(i=t["offset"+e],n&&(r=c.computeStyle(t),t=function(t){return parseInt(r["margin"+t],2)},i+=e===f?t(o)+t("Bottom"):t(s)+t("Right"))),i}function y(t,n){return v(t,n,"Width")}function A(t,n){return v(t,n,f)}function C(t,n,e){c.isElm(t)&&t["insertAdjacent"+(c.isElm(n)?"Element":"HTML")](e,n)}function b(t,n){C(t,n,e+"end")}function x(t,n){C(t,n,r+i)}function S(t,n){C(t,n,r+"end")}function E(t,n){C(t,n,e+i)}function H(t,n){c.isUnd(n)&&(n=!0);return c.chain(t,function(t){return c.isElm(t)&&t.cloneNode(n)})}var N={css:function(t,n){return d(this,t,n)},hasAttr:function(n){return t.call(this,function(t){return c.hasAttr(t,n)})},attr:function(t,n,e){return c.isNull(n)?this.removeAttr(t,e):c.attr(this,t,n,e)},removeAttr:function(t,n){return c.removeAttr(this,t,n)},hasClass:function(n){return t.call(this,function(t){return c.hasClass(t,n)})},toggleClass:function(t,n){return c.toggleClass(this,t,n)},addClass:function(t){return this.toggleClass(t,"add")},removeClass:function(t){return arguments.length?this.toggleClass(t,u):this.attr("class","")},empty:function(){return c.empty(this)},first:function(t){return c.isUnd(t)?this[0]:t},after:function(t){return b(this[0],t)},before:function(t){return x(this[0],t)},append:function(t){return S(this[0],t)},prepend:function(t){return E(this[0],t)},remove:function(){this.each(c.remove)},closest:function(t){return c.closest(this[0],t)},equal:function(t){return c.equal(this[0],t)},find:function(t,n){return c.find(this[0],t,n)},findAll:function(t){return c.findAll(this[0],t)},clone:function(t){return H(this,t)},computeStyle:function(t){return c.computeStyle(this[0],t)},offset:function(){return p(this[0])},parent:function(t){return c.parent(this[0],t)},prev:function(t){return c.prev(this[0],t)},next:function(t){return c.next(this[0],t)},index:function(t){return c.index(this[0],t)},width:function(t){return m(this[0],t)},height:function(t){return g(this[0],t)},outerWidth:function(t){return y(this[0],t)},outerHeight:function(t){return A(this[0],t)},on:function(t,n,e,r,i){return c.on(this,t,n,e,r,i,"add")},off:function(t,n,e,r,i){return c.off(this,t,n,e,r,i,u)},one:function(t,n,e){return c.one(this,t,n,e)},trigger:function(t,n,e){return c.trigger(this,t,n,e)}};c.fn.extend(N),c.css=d,c.offset=p,c.clone=H,c.after=b,c.before=x,c.append=S,c.prepend=E,c.width=m,c.height=g,c.outerWidth=y,c.outerHeight=A}(dBlazy,this.document);
;
!function(l,n,s){"use strict";var d="blazy",f=0,g="data-",r=g+"animation",m="src",b=["srcset",m],t="b-bg";function i(s,e){return s=s.target||s,l.hasClass(s,e)}l._defaults={error:!1,offset:100,root:s,success:!1,selector:".b-lazy",separator:"|",container:!1,containerClass:!1,errorClass:"b-error",loadInvisible:!1,successClass:"b-loaded",visibleClass:!1,validateDelay:25,saveViewportOffsetDelay:50,srcset:"data-srcset",src:"data-src",bgClass:t,isMedia:!1,parent:".media",disconnect:!1,intersecting:!1,observing:!1,resizing:!1,mobileFirst:!1,rootMargin:"0px",threshold:[0]},l.isCompleted=function(s){if(l.isElm(s)){if(l.equal(s,"img"))return l.isDecoded(s);if(l.equal(s,"iframe"))return"complete"===(s.contentDocument||s.contentWindow.document).readyState}return!1},l.isBg=function(s,e){return i(s,e&&e.bgClass||t)},l.isBlur=function(s){return i(s,"b-blur")},l.selector=function(s,e){var r=s.selector;return e&&l.isBool(e)&&(e=":not(."+s.successClass+")"),r+(e=e||"")},l.success=function(s,e,r,t){return l.isFun(t.success)&&t.success(s,e,r,t),0<f&&f--,f},l.error=function(s,e,r,t){return l.isFun(t.error)&&t.error(s,e,r,t),++f},l.status=function(s,e,r){return this.loaded(s,e,null,r)},l.loaded=function(s,e,r,t){var n=l.closest(s,t.parent)||s,i=e===l._ok||!0===e,a=t.successClass,o=t.errorClass,c="is-"+a,u="is-"+o;return r=r||n,l.addClass(s,i?a:o),l.addClass(n,i?c:u),l.removeClass(n,"is-b-visible"),f=this[i?"success":"error"](s,e,r,t),i&&l.hasAttr(s,g+m)&&l.removeAttr(s,b,g),l.trigger(s,d+".loaded",{status:e}),f},l.loadVideo=function(s,e,r){return l.mapSource(s,m,!0),s.load(),l.status(s,e,r)},l.onresizing=function(s,e){var r=s.elms,t=s.options;l.isFun(t.resizing)&&t.resizing(s,r,e),l.trigger(n,d+".resizing",{winData:e,entries:r})},l.aniElement=function(s){var e=l.closest(s,"["+r+"]");return l.hasAttr(s,r)&&!l.isElm(e)&&(e=s),e}}(dBlazy,this,this.document);
;
!function(l,s){"use strict";l.enqueue=function(n,e,r){l.each(n,e.bind(r)),n.length=0},l.initObserver=function(r,n,e,i){var t,o=r.options||{},a=r._queue||[],s="windowData"in r?r.windowData():{},u={rootMargin:o.rootMargin||"0px",threshold:o.threshold||0};function c(n){var e;return a.length||(e=requestAnimationFrame(h),r._raf.push(e)),a.push(n),!1}function h(){l.enqueue(a,n,r)}e=l.toArray(e),i&&(r.ioObserver=l.isIo?new IntersectionObserver(c,u):n.call(r,e));return r.roObserver=function(){return t=this,s=l.isUnd(s.ww)?l.windowData(o,!0):r.windowData(),l.isRo?new ResizeObserver(c):n.call(r,e)}(),r.resizeTrigger=t,s},l.observe=function(n,r,e){function i(e){e&&r&&r.length&&l.each(r,function(n){e.observe(n)})}var t=n.options||{},o=n.ioObserver,a=n.roObserver;return l.isIo&&(o||a)?(e&&i(o),i(a)):"Blazy"in s&&(n.bLazy=new Blazy(t)),n},l.unload=function(n){n=n._raf;n&&n.length&&l.each(n,function(n){cancelAnimationFrame(n)})}}(dBlazy,this);
;
!function(e,n,i){"use strict";e.debounce=function(c,t,e,i){n.debounce(function(){c.call(e,t)},i||201,!0)},e.matchMedia=function(c,t){return!!i.matchMedia&&(e.isUnd(t)&&(t="max"),i.matchMedia("("+t+"-device-width: "+c+")").matches)}}(dBlazy,Drupal,this);
;
!function(e,i){"use strict";var s="Bio",t=e.dBlazy;t.isAmd?define([s,t,e],i):"object"==typeof exports?module.exports=i(s,t):e[s]=i(s,t)}(this||module||{},function(s,f,e){"use strict";f.isAmd&&window;var t,o=document,n=o,v={},r=0,p=0,d=0,a=0,u="b-bg",b=".media",h="addClass",y="removeClass",c=!1,l=25,m=i.prototype;function i(e){var i=f.extend({},m,this);return i.name=s,i.options=t=f.extend({},f._defaults,e||{}),u=t.bgClass||u,l=t.validateDelay||l,b=t.parent||b,n=t.root||n,setTimeout(function(){i.reinit()}),i}function g(e,i){var s=this,t=s.options,o=s.count,n=s.ioObserver;r===o-1&&s.destroyQuietly(),n&&s.isLoaded(e)&&!e.bloaded&&t.isMedia&&!i&&(n.unobserve(e),e.bloaded=!0,r++),e.bhit&&!i||(s.lazyLoad(e,v),a++,i=!(e.bhit=!0)),f.isFun(t.intersecting)&&t.intersecting(e,t),f.trigger(e,"bio.intersecting",{options:t})}function z(e){var r=this,d=r.options,a=f.vp,u=f.ww,i=e[0],c=f.isBlur(i),i=f.isResized(r,i),l=d.visibleClass;if(i)v=f.updateViewport(d),f.onresizing(r,v);else if(r.destroyed&&!l)return;f.each(e,function(e){var i=e.target||e,s=f.isResized(r,e),t=f.isVisible(e,a),o=f.closest(i,b)||i,n=r.isLoaded(i);f[t&&!n?h:y](o,"is-b-visible"),l&&f.isStr(l)&&f[t?h:y](o,l),t&&g.call(r,i),s&&0<p&&!c&&(p!==u&&r.resizing(i,v),r.resizeTick++),f.isFun(d.observing)&&d.observing(e,t,d)}),p=u}return m.constructor=i,m.count=0,m.erCount=0,m.resizeTick=0,m.destroyed=!1,m.options={},m.lazyLoad=function(e,i){},m.loadImage=function(e,i,s){},m.resizing=function(e,i){},m.prepare=function(){},m.windowData=function(){return f.isUnd(v.vp)?f.windowData(this.options,!0):v},m.load=function(e,i,s){var t=this;e=e&&f.toArray(e),f.isUnd(s)||(t.options=f.extend({},t.options,s||{})),f.each(e,function(e){(t.isValid(e)||f.isElm(e)&&i)&&g.call(t,e,i)})},m.isLoaded=function(e){return f.hasClass(e,this.options.successClass)},m.isValid=function(e){return f.isElm(e)&&!this.isLoaded(e)},m.revalidate=function(e){var i=this;(!0===e||i.count!==a)&&d<a&&(i.elms=f.findAll(n,f.selector(i.options))).length&&(i.observe(!0),d++)},m.destroyQuietly=function(e){var i=this,s=i.options;i.destroyed||!e&&!f.isUnd(Drupal.io)||(s=f.find(o,f.selector(s,":not(."+s.successClass+")")),f.isElm(s)||i.destroy(e))},m.destroy=function(e){var i=this,s=i.options,t=i.ioObserver;i.destroyed||0<i.erCounted&&!e||(r===i.count-1&&s.disconnect||e)&&(t&&t.disconnect(),f.unload(i),i.count=0,i.elms=[],i.ioObserver=null,i.destroyed=!0)},m.observe=function(e){var i=this,s=i.elms;f.isIo&&(i.destroyed||e)&&(v=f.initObserver(i,z,s,!0),i.destroyed=!1),c&&!e||(f.observe(i,s,!0),c=!0)},m.reinit=function(){this.destroyed=!0,function(e){e.prepare();var i=e.elms=f.findAll(n,f.selector(e.options));e.count=i.length,e._raf=[],e._queue=[],e.observe(!0)}(this)},i});
;
!function(t,e){"use strict";var n="BioMedia",r=t.dBlazy,a=t.Bio;"function"==typeof define&&define.amd?define([n,r,a],e):"object"==typeof exports?module.exports=e(n,r,a):t[n]=e(n,r,a)}(this,function(n,p,r){"use strict";var a=document,t="data-",l="src",f="srcset",h=t+l,g=[f,l],b=0,o=!1,i=Bio.prototype,s=e.prototype=Object.create(i);function e(t){var e=r.apply(p.extend({},i,p.extend({},s,this)),arguments);return e.name=n,e}function m(t,e,n,r){return o||((t=c(t,"defer"))&&p.each(t,function(t){p.attr(t,"loading","lazy")}),o=!0),p.status(e,n,r)}function c(t,e){t=t.options;if(!p.isNativeLazy)return[];e=e||"a";e=p.selector(t,'[data-src][loading*="'+e+'"]:not(.b-blur)'),e=p.findAll(a,e);return e.length&&p(e).mapAttr(["srcset","src"],!0).mapSource(!1,!0,!1),e}return s.constructor=e,s.lazyLoad=function(t,e){var n=this,r=n.options,a=t.parentNode,o=p.isBg(t),i=p.equal(a,"picture"),s=p.equal(t,"img"),c=p.equal(t,"video"),a=p.hasAttr(t,h);p.blur&&p.blur(t),i?(a&&(p.mapSource(t,f,!0),p.mapAttr(t,l,!0)),b=m(n,t,!0,r)):c?b=p.loadVideo(t,!0,r):s||o?n.loadImage(t,o,e):p.hasAttr(t,l)&&(p.attr(t,h)&&p.mapAttr(t,l,!0),b=m(n,t,!0,r)),n.erCount=b},s.loadImage=function(t,n,r){function e(t,e){b=n&&p.isFun(p.bg)?(p.bg(t,r),p.status(t,e,o)):m(a,t,e,o)}var a=this,o=a.options,i=new Image,s=p.hasAttr(t,f),c=p.hasAttr(t,h),u=c?h:l,d=c?"data-srcset":f;"decode"in i&&(i.decoding="async"),n&&p.isFun(p.bgUrl)?i.src=p.bgUrl(t,r):(c&&p.mapAttr(t,g,!1),i.src=p.attr(t,u)),s&&(i.srcset=p.attr(t,d)),p.decode(i).then(function(){e(t,!0)}).catch(function(){e(t,s),s||(t.bhit=!1)})},s.resizing=function(t,e){var n=p.isBg(t,this.options);n&&this.loadImage(t,n,e)},s.prepare=function(){var e,t,n;c(this),p.webp&&(e=this,p.webp.isSupported()||(t=function(t){return t=t||"",p.selector(e.options,"["+t+'srcset*=".webp"]')},(n=p.findAll(a,t())).length||(n=p.findAll(a,t("data-"))),n.length&&p.webp.run(n)))},e});
;
!function(o,t,n,l,e){"use strict";var s="data",a=".b-blur",r=".media",i="successClass",u=(c="blazy")+".done",c=function(){},d={};t.blazy={context:e,name:"Drupal.blazy",init:null,instances:[],resizeTick:0,resizeTrigger:!1,blazySettings:n.blazy||{},ioSettings:n.blazyIo||{},options:{},clearCompat:c,clearScript:c,checkResize:c,resizing:c,revalidate:c,isIo:function(){return!0},isBlazy:function(){return!o.isIo&&"Blazy"in l},isFluid:function(t,n){return o.equal(t.parentNode,"picture")&&o.hasAttr(n,"data-ratios")},isLoaded:function(t){return o.hasClass(t,this.options[i])},globals:function(){var t=this,n={isMedia:!0,success:t.clearing.bind(t),error:t.clearing.bind(t),resizing:t.resizing.bind(t),selector:".b-lazy",parent:r,errorClass:"b-error",successClass:"b-loaded"};return o.extend(t.blazySettings,t.ioSettings,n)},extend:function(t){d=o.extend({},d,t)},merge:function(t){var n=this;return n.options=o.extend({},n.globals(),n.options,t||{}),n.options},run:function(t){return new BioMedia(t)},mount:function(t){var n=this;return n.merge(),t&&o.each(d,function(t){o.isFun(t)&&t.call(n)}),o.extend(n,d)},selector:function(t){t=t||"";var n=this.options;return n.selector+t+":not(."+n[i]+")"},clearing:function(t){var n,i;t.bclearing||(n=this,i=o.hasClass(t,"b-responsive")&&o.hasAttr(t,s+"-pfsrc"),o.isFun(o.unloading)&&o.unloading(t),o.trigger(t,u,{options:n.options}),n.clearCompat(t),n.clearScript(t),l.picturefill&&i&&l.picturefill({reevaluate:!0,elements:[t]}),t.bclearing=!0)},windowData:function(){return this.init?this.init.windowData():{}},load:function(n){var i=this;l.setTimeout(function(){var t=o.findAll(n||e,i.selector());t.length&&o.each(t,i.update.bind(i))},100)},update:function(t,n,i){function e(){o.hasAttr(t,"data-b-bg")&&o.isFun(o.bg)?o.bg(t,i||s.windowData()):s.init&&(o.hasClass(t,r.substring(1))||(t=o.find(t,r)||t),s.init.load(t,!0,a))}var s=this,a=s.options,r=a.selector;(n=n||!1)?l.setTimeout(e,100):e()},rebind:function(t,i,e){var n=o.findAll(t,this.options.selector+":not("+a+")"),s=n.length;s||(n=o.findAll(t,"img:not("+a+")")),n.length&&o.each(n,function(t){var n=s?u:"load";o.one(t,n,i,s),e&&e.observe(t)})},pad:function(n,i,t){var e=this,s=o.closest(n,r)||n;setTimeout(function(){var t=Math.round(n.naturalHeight/n.naturalWidth*100,2);e.isFluid(n,s)&&(s.style.paddingBottom=t+"%"),o.isFun(i)&&i.call(e,n,s,t)},t||0)}}}(dBlazy,Drupal,drupalSettings,this,this.document);
;
!function(r,n,o){"use strict";var i,l="blazy",t="data-",c=t+"ratios",u=t+"ratio",d="picture",e=".media--ratio",h={},f=0;function a(t){var i=r.aniElement&&r.aniElement(t);r.animate&&r.isElm(i)&&!r.hasClass(i,"is-b-animated")&&setTimeout(function(){r.animate(i)},60)}function s(t,i,a){if(t=t.target||t,a=!!r.isBool(a)&&a,r.isElm(t)){var n,e,s=r.closest(t,"."+l),o=r.parse(r.attr(t,c));if(r.isEmpty(o))return n=t,e=r.attr(n,u),void(!r.hasAttr(n,"style")&&e&&(n.style.paddingBottom=e+"%"));a=r.isElm(r.find(t,d))&&a,a=r.extend(h,{up:a}),a=r.activeWidth(o,a);t.dblazy=r.isElm(s)&&s.dblazy,r.isUnd(a)||(t.style.paddingBottom=a+"%")}}function m(){var t=this;t.mount(!0),i=t.options,r.isNull(t.init)&&(t.init=t.run(i)),function(){var t=this,i=t.context,a=r.findAll(i,e);a.length&&(r.each(a,s.bind(t)),t.checkResize(a,s,i))}.call(t)}n.blazy=r.extend(n.blazy||{},{clearCompat:function(t){var i=r.isBg(t)&&(this.isBlazy()||r.ie);this.pad(t,a,i?50:0)},checkResize:function(i,n,t,a){var e=this,s=e.init;return r.on(o,l+".resizing",function(t){t=t&&t.detail?t.detail:{};h=t.winData||e.windowData();var a=0<f&&f!==h.ww;a&&(e.resizeTick=s&&s.resizeTick||0,r.isFun(n)&&r.each(i,function(t,i){t=t.target||t;return n.call(e,t,i,a)})),f=h.ww}),a&&r.isFun(a)&&e.rebind(t,a,e.roObserver),e.destroyed=!1,h},unresize:function(){r.unload(this)}}),n.behaviors.blazyCompat={attach:function(t){var i=n.blazy;i.context=r.context(t),r.once(m.call(i))},detach:function(t,i,a){"unload"===a&&n.blazy.unresize()}}}(dBlazy,Drupal,this);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  Drupal.theme.checkbox = function () {
    return "<input type=\"checkbox\" class=\"form-checkbox\"/>";
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.ClickToSelect = {
    attach: function attach(context) {
      $('.js-click-to-select-trigger', context).once('media-library-click-to-select').on('click', function (event) {
        event.preventDefault();

        var $input = $(event.currentTarget).closest('.js-click-to-select').find('.js-click-to-select-checkbox input');
        $input.prop('checked', !$input.prop('checked')).trigger('change');
      });

      $('.js-click-to-select-checkbox input', context).once('media-library-click-to-select').on('change', function (_ref) {
        var currentTarget = _ref.currentTarget;

        $(currentTarget).closest('.js-click-to-select').toggleClass('checked', $(currentTarget).prop('checked'));
      }).on('focus blur', function (_ref2) {
        var currentTarget = _ref2.currentTarget,
            type = _ref2.type;

        $(currentTarget).closest('.js-click-to-select').toggleClass('is-focus', type === 'focus');
      });

      $('.js-click-to-select-trigger, .js-click-to-select-checkbox', context).once('media-library-click-to-select-hover').on('mouseover mouseout', function (_ref3) {
        var currentTarget = _ref3.currentTarget,
            type = _ref3.type;

        $(currentTarget).closest('.js-click-to-select').toggleClass('is-hover', type === 'mouseover');
      });
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.MediaLibrarySelectAll = {
    attach: function attach(context) {
      var $view = $('.js-media-library-view[data-view-display-id="page"]', context).once('media-library-select-all');
      if ($view.length && $view.find('.js-media-library-item').length) {
        var $checkbox = $(Drupal.theme('checkbox')).on('click', function (_ref) {
          var currentTarget = _ref.currentTarget;

          var $checkboxes = $(currentTarget).closest('.js-media-library-view').find('.js-media-library-item input[type="checkbox"]');
          $checkboxes.prop('checked', $(currentTarget).prop('checked')).trigger('change');

          var announcement = $(currentTarget).prop('checked') ? Drupal.t('All @count items selected', {
            '@count': $checkboxes.length
          }) : Drupal.t('Zero items selected');
          Drupal.announce(announcement);
        });
        var $label = $('<label class="media-library-select-all"></label>').text(Drupal.t('Select all media'));
        $label.prepend($checkbox);
        $view.find('.js-media-library-item').first().before($label);
      }
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, window) {
  Drupal.MediaLibrary = {
    currentSelection: []
  };

  Drupal.AjaxCommands.prototype.updateMediaLibrarySelection = function (ajax, response, status) {
    Object.values(response.mediaIds).forEach(function (value) {
      Drupal.MediaLibrary.currentSelection.push(value);
    });
  };

  Drupal.behaviors.MediaLibraryTabs = {
    attach: function attach(context) {
      var $menu = $('.js-media-library-menu');
      $menu.find('a', context).once('media-library-menu-item').on('keypress', function (e) {
        if (e.which === 32) {
          e.preventDefault();
          e.stopPropagation();
          $(e.currentTarget).trigger('click');
        }
      }).on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        var ajaxObject = Drupal.ajax({
          wrapper: 'media-library-content',
          url: e.currentTarget.href,
          dialogType: 'ajax',
          progress: {
            type: 'fullscreen',
            message: Drupal.t('Please wait...')
          }
        });

        ajaxObject.success = function (response, status) {
          var _this = this;

          if (this.progress.element) {
            $(this.progress.element).remove();
          }
          if (this.progress.object) {
            this.progress.object.stopMonitoring();
          }
          $(this.element).prop('disabled', false);

          Object.keys(response || {}).forEach(function (i) {
            if (response[i].command && _this.commands[response[i].command]) {
              _this.commands[response[i].command](_this, response[i], status);
            }
          });

          $('#media-library-content :tabbable:first').focus();

          this.settings = null;
        };
        ajaxObject.execute();

        $menu.find('.active-tab').remove();
        $menu.find('a').removeClass('active');
        $(e.currentTarget).addClass('active').html(Drupal.t('<span class="visually-hidden">Show </span>@title<span class="visually-hidden"> media</span><span class="active-tab visually-hidden"> (selected)</span>', { '@title': $(e.currentTarget).data('title') }));

        Drupal.announce(Drupal.t('Showing @title media.', {
          '@title': $(e.currentTarget).data('title')
        }));
      });
    }
  };

  Drupal.behaviors.MediaLibraryViewsDisplay = {
    attach: function attach(context) {
      var $view = $(context).hasClass('.js-media-library-view') ? $(context) : $('.js-media-library-view', context);

      $view.closest('.views-element-container').attr('id', 'media-library-view');

      $('.views-display-link-widget, .views-display-link-widget_table', context).once('media-library-views-display-link').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        var $link = $(e.currentTarget);

        var loadingAnnouncement = '';
        var displayAnnouncement = '';
        var focusSelector = '';
        if ($link.hasClass('views-display-link-widget')) {
          loadingAnnouncement = Drupal.t('Loading grid view.');
          displayAnnouncement = Drupal.t('Changed to grid view.');
          focusSelector = '.views-display-link-widget';
        } else if ($link.hasClass('views-display-link-widget_table')) {
          loadingAnnouncement = Drupal.t('Loading table view.');
          displayAnnouncement = Drupal.t('Changed to table view.');
          focusSelector = '.views-display-link-widget_table';
        }

        var ajaxObject = Drupal.ajax({
          wrapper: 'media-library-view',
          url: e.currentTarget.href,
          dialogType: 'ajax',
          progress: {
            type: 'fullscreen',
            message: loadingAnnouncement || Drupal.t('Please wait...')
          }
        });

        if (displayAnnouncement || focusSelector) {
          var success = ajaxObject.success;
          ajaxObject.success = function (response, status) {
            success.bind(this)(response, status);

            if (focusSelector) {
              $(focusSelector).focus();
            }

            if (displayAnnouncement) {
              Drupal.announce(displayAnnouncement);
            }
          };
        }

        ajaxObject.execute();

        if (loadingAnnouncement) {
          Drupal.announce(loadingAnnouncement);
        }
      });
    }
  };

  Drupal.behaviors.MediaLibraryItemSelection = {
    attach: function attach(context, settings) {
      var $form = $('.js-media-library-views-form, .js-media-library-add-form', context);
      var currentSelection = Drupal.MediaLibrary.currentSelection;

      if (!$form.length) {
        return;
      }

      var $mediaItems = $('.js-media-library-item input[type="checkbox"]', $form);

      function disableItems($items) {
        $items.prop('disabled', true).closest('.js-media-library-item').addClass('media-library-item--disabled');
      }

      function enableItems($items) {
        $items.prop('disabled', false).closest('.js-media-library-item').removeClass('media-library-item--disabled');
      }

      function updateSelectionCount(remaining) {
        var selectItemsText = remaining < 0 ? Drupal.formatPlural(currentSelection.length, '1 item selected', '@count items selected') : Drupal.formatPlural(remaining, '@selected of @count item selected', '@selected of @count items selected', {
          '@selected': currentSelection.length
        });

        $('.js-media-library-selected-count').html(selectItemsText);
      }

      $mediaItems.once('media-item-change').on('change', function (e) {
        var id = e.currentTarget.value;

        var position = currentSelection.indexOf(id);
        if (e.currentTarget.checked) {
          if (position === -1) {
            currentSelection.push(id);
          }
        } else if (position !== -1) {
          currentSelection.splice(position, 1);
        }

        $form.find('#media-library-modal-selection').val(currentSelection.join()).trigger('change');

        $('.js-media-library-add-form-current-selection').val(currentSelection.join());
      });

      $('#media-library-modal-selection', $form).once('media-library-selection-change').on('change', function (e) {
        updateSelectionCount(settings.media_library.selection_remaining);

        if (currentSelection.length === settings.media_library.selection_remaining) {
          disableItems($mediaItems.not(':checked'));
          enableItems($mediaItems.filter(':checked'));
        } else {
          enableItems($mediaItems);
        }
      });

      currentSelection.forEach(function (value) {
        $form.find('input[type="checkbox"][value="' + value + '"]').prop('checked', true).trigger('change');
      });

      $(window).once('media-library-selection-info').on('dialog:aftercreate', function () {
        var $buttonPane = $('.media-library-widget-modal .ui-dialog-buttonpane');
        if (!$buttonPane.length) {
          return;
        }
        $buttonPane.append(Drupal.theme('mediaLibrarySelectionCount'));
        updateSelectionCount(settings.media_library.selection_remaining);
      });
    }
  };

  Drupal.behaviors.MediaLibraryModalClearSelection = {
    attach: function attach() {
      $(window).once('media-library-clear-selection').on('dialog:afterclose', function () {
        Drupal.MediaLibrary.currentSelection = [];
      });
    }
  };

  Drupal.theme.mediaLibrarySelectionCount = function () {
    return '<div class="media-library-selected-count js-media-library-selected-count" role="status" aria-live="polite" aria-atomic="true"></div>';
  };
})(jQuery, Drupal, window);;
!function(s,t){"use strict";var c,i,u=t.blazy||{};(t=(t.Ajax||{}).prototype).success=(i=t.success,function(t,e){var n,o=u.init;return o&&(n=u.options,clearTimeout(c),c=setTimeout(function(){var t=s.findAll(document,s.selector(n,!0));t.length&&o.load(t,!0,n)},100)),i.apply(this,arguments)})}(dBlazy,Drupal);
;
/*!
 * jQuery Form Plugin
 * version: 4.2.2
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,r){return void 0===r&&(r="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(r),r}:e(jQuery)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).closest("form").ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=r.form;if(i.clk=r,"image"===r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n=/\r?\n/g,i={};i.fileapi=void 0!==e('<input type="file">').get(0).files,i.formdata=void 0!==window.FormData;var o=!!e.fn.prop;e.fn.attr2=function(){if(!o)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t,r,n,s){function u(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;a<o;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function c(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(e){a("cannot get iframe.contentWindow document: "+e)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function i(){function t(){try{var e=n(v).readyState;a("state = "+e),e&&"uninitialized"===e.toLowerCase()&&setTimeout(t,50)}catch(e){a("Server abort: ",e," (",e.name,")"),s(L),j&&clearTimeout(j),j=void 0}}var r=p.attr2("target"),i=p.attr2("action"),o=p.attr("enctype")||p.attr("encoding")||"multipart/form-data";w.setAttribute("target",m),l&&!/post/i.test(l)||w.setAttribute("method","POST"),i!==f.url&&w.setAttribute("action",f.url),f.skipEncodingOverride||l&&!/post/i.test(l)||p.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),f.timeout&&(j=setTimeout(function(){T=!0,s(A)},f.timeout));var u=[];try{if(f.extraData)for(var c in f.extraData)f.extraData.hasOwnProperty(c)&&(e.isPlainObject(f.extraData[c])&&f.extraData[c].hasOwnProperty("name")&&f.extraData[c].hasOwnProperty("value")?u.push(e('<input type="hidden" name="'+f.extraData[c].name+'">',k).val(f.extraData[c].value).appendTo(w)[0]):u.push(e('<input type="hidden" name="'+c+'">',k).val(f.extraData[c]).appendTo(w)[0]));f.iframeTarget||h.appendTo(D),v.attachEvent?v.attachEvent("onload",s):v.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(e){document.createElement("form").submit.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",o),r?w.setAttribute("target",r):p.removeAttr("target"),e(u).remove()}}function s(t){if(!x.aborted&&!X){if((O=n(v))||(a("cannot access response document"),t=L),t===A&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t===L&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(O&&O.location.href!==f.iframeSrc||T){v.detachEvent?v.detachEvent("onload",s):v.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"===f.dataType||O.XMLDocument||e.isXMLDoc(O);if(a("isXml="+o),!o&&window.opera&&(null===O.body||!O.body.innerHTML)&&--C)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=O.body?O.body:O.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=O.XMLDocument?O.XMLDocument:O,o&&(f.dataType="xml"),x.getResponseHeader=function(e){return{"content-type":f.dataType}[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(f.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||f.textarea){var p=O.getElementsByTagName("textarea")[0];if(p)x.responseText=p.value,x.status=Number(p.getAttribute("status"))||x.status,x.statusText=p.getAttribute("statusText")||x.statusText;else if(l){var m=O.getElementsByTagName("pre")[0],g=O.getElementsByTagName("body")[0];m?x.responseText=m.textContent?m.textContent:m.innerText:g&&(x.responseText=g.textContent?g.textContent:g.innerText)}}else"xml"===c&&!x.responseXML&&x.responseText&&(x.responseXML=q(x.responseText));try{M=N(x,c,f)}catch(e){i="parsererror",x.error=r=e||i}}catch(e){a("error caught: ",e),i="error",x.error=r=e||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(f.success&&f.success.call(f.context,M,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,f])):i&&(void 0===r&&(r=x.statusText),f.error&&f.error.call(f.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,f,r])),d&&e.event.trigger("ajaxComplete",[x,f]),d&&!--e.active&&e.event.trigger("ajaxStop"),f.complete&&f.complete.call(f.context,x,i),X=!0,f.timeout&&clearTimeout(j),setTimeout(function(){f.iframeTarget?h.attr("src",f.iframeSrc):h.remove(),x.responseXML=null},100)}}}var u,c,f,d,m,h,v,x,y,b,T,j,w=p[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(c=0;c<g.length;c++)u=e(g[c]),o?u.prop("disabled",!1):u.removeAttr("disabled");(f=e.extend(!0,{},e.ajaxSettings,t)).context=f.context||f,m="jqFormIO"+(new Date).getTime();var k=w.ownerDocument,D=p.closest("body");if(f.iframeTarget?(b=(h=e(f.iframeTarget,k)).attr2("name"))?m=b:h.attr2("name",m):(h=e('<iframe name="'+m+'" src="'+f.iframeSrc+'" />',k)).css({position:"absolute",top:"-1000px",left:"-1000px"}),v=h[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{v.contentWindow.document.execCommand&&v.contentWindow.document.execCommand("Stop")}catch(e){}h.attr("src",f.iframeSrc),x.error=r,f.error&&f.error.call(f.context,x,r,t),d&&e.event.trigger("ajaxError",[x,f,r]),f.complete&&f.complete.call(f.context,x,r)}},(d=f.global)&&0==e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,f]),f.beforeSend&&!1===f.beforeSend.call(f.context,x,f))return f.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;(y=w.clk)&&(b=y.name)&&!y.disabled&&(f.extraData=f.extraData||{},f.extraData[b]=y.value,"image"===y.type&&(f.extraData[b+".x"]=w.clk_x,f.extraData[b+".y"]=w.clk_y));var A=1,L=2,F=e("meta[name=csrf-token]").attr("content"),E=e("meta[name=csrf-param]").attr("content");E&&F&&(f.extraData=f.extraData||{},f.extraData[E]=F),f.forceSync?i():setTimeout(i,10);var M,O,X,C=50,q=e.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},_=e.parseJSON||function(e){return window.eval("("+e+")")},N=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i=("xml"===r||!r)&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&(("json"===r||!r)&&n.indexOf("json")>=0?o=_(o):("script"===r||!r)&&n.indexOf("javascript")>=0&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var l,f,d,p=this;"function"==typeof t?t={success:t}:"string"==typeof t||!1===t&&arguments.length>0?(t={url:t,data:r,dataType:n},"function"==typeof s&&(t.success=s)):void 0===t&&(t={}),l=t.method||t.type||this.attr2("method"),(d=(d="string"==typeof(f=t.url||this.attr2("action"))?e.trim(f):"")||window.location.href||"")&&(d=(d.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:d,success:e.ajaxSettings.success,type:l||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&!1===t.beforeSerialize(this,t))return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var h=t.traditional;void 0===h&&(h=e.ajaxSettings.traditional);var v,g=[],x=this.formToArray(t.semantic,g,t.filtering);if(t.data){var y=e.isFunction(t.data)?t.data(x):t.data;t.extraData=y,v=e.param(y,h)}if(t.beforeSubmit&&!1===t.beforeSubmit(x,this,t))return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[x,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var b=e.param(x,h);v&&(b=b?b+"&"+v:v),"GET"===t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+b,t.data=null):t.data=b;var T=[];if(t.resetForm&&T.push(function(){p.resetForm()}),t.clearForm&&T.push(function(){p.clearForm(t.includeHidden)}),!t.dataType&&t.target){var j=t.success||function(){};T.push(function(r,a,n){var i=arguments,o=t.replaceTarget?"replaceWith":"html";e(t.target)[o](r).each(function(){j.apply(this,i)})})}else t.success&&(e.isArray(t.success)?e.merge(T,t.success):T.push(t.success));if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=T.length;i<o;i++)T[i].apply(n,[e,r,a||p,p])},t.error){var w=t.error;t.error=function(e,r,a){var n=t.context||this;w.apply(n,[e,r,a,p])}}if(t.complete){var S=t.complete;t.complete=function(e,r){var a=t.context||this;S.apply(a,[e,r,p])}}var k=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}).length>0,D="multipart/form-data",A=p.attr("enctype")===D||p.attr("encoding")===D,L=i.fileapi&&i.formdata;a("fileAPI :"+L);var F,E=(k||A)&&!L;!1!==t.iframe&&(t.iframe||E)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){F=c(x)}):F=c(x):F=(k||A)&&L?function(r){for(var a=new FormData,n=0;n<r.length;n++)a.append(r[n].name,r[n].value);if(t.extraData){var i=u(t.extraData);for(n=0;n<i.length;n++)i[n]&&a.append(i[n][0],i[n][1])}t.data=null;var o=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:l||"POST"});t.uploadProgress&&(o.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),o.data=null;var s=o.beforeSend;return o.beforeSend=function(e,r){t.formData?r.data=t.formData:r.data=a,s&&s.call(this,e,r)},e.ajax(o)}(x):e.ajax(t),p.removeData("jqxhr").data("jqxhr",F);for(var M=0;M<g.length;M++)g[M]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n,i,o,s){if(("string"==typeof n||!1===n&&arguments.length>0)&&(n={url:n,data:i,dataType:o},"function"==typeof s&&(n.success=s)),n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var u={s:this.selector,c:this.context};return!e.isReady&&u.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(u.s,u.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().on("submit.form-plugin",n,t).on("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r,a){var n=[];if(0===this.length)return n;var o,s=this[0],u=this.attr("id"),c=t||void 0===s.elements?s.getElementsByTagName("*"):s.elements;if(c&&(c=e.makeArray(c)),u&&(t||/(Edge|Trident)\//.test(navigator.userAgent))&&(o=e(':input[form="'+u+'"]').get()).length&&(c=(c||[]).concat(o)),!c||!c.length)return n;e.isFunction(a)&&(c=e.map(c,a));var l,f,d,p,m,h,v;for(l=0,h=c.length;l<h;l++)if(m=c[l],(d=m.name)&&!m.disabled)if(t&&s.clk&&"image"===m.type)s.clk===m&&(n.push({name:d,value:e(m).val(),type:m.type}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}));else if((p=e.fieldValue(m,!0))&&p.constructor===Array)for(r&&r.push(m),f=0,v=p.length;f<v;f++)n.push({name:d,value:p[f]});else if(i.fileapi&&"file"===m.type){r&&r.push(m);var g=m.files;if(g.length)for(f=0;f<g.length;f++)n.push({name:d,value:g[f],type:m.type});else n.push({name:d,value:"",type:m.type})}else null!==p&&void 0!==p&&(r&&r.push(m),n.push({name:d,value:p,type:m.type,required:m.required}));if(!t&&s.clk){var x=e(s.clk),y=x[0];(d=y.name)&&!y.disabled&&"image"===y.type&&(n.push({name:d,value:x.val()}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}))}return n},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor===Array)for(var i=0,o=n.length;i<o;i++)r.push({name:a,value:n[i]});else null!==n&&void 0!==n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;a<n;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor===Array&&!o.length||(o.constructor===Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,i=t.type,o=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"===i||"button"===i||("checkbox"===i||"radio"===i)&&!t.checked||("submit"===i||"image"===i)&&t.form&&t.form.clk!==t||"select"===o&&-1===t.selectedIndex))return null;if("select"===o){var s=t.selectedIndex;if(s<0)return null;for(var u=[],c=t.options,l="select-one"===i,f=l?s+1:c.length,d=l?s:0;d<f;d++){var p=c[d];if(p.selected&&!p.disabled){var m=p.value;if(m||(m=p.attributes&&p.attributes.value&&!p.attributes.value.specified?p.text:p.value),l)return m;u.push(m)}}return u}return e(t).val().replace(n,"\r\n")},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"===n?this.value="":"checkbox"===a||"radio"===a?this.checked=!1:"select"===n?this.selectedIndex=-1:"file"===a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(!0===t&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){var t=e(this),r=this.tagName.toLowerCase();switch(r){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var a=t.parents("select");return a.length&&a[0].multiple?"option"===r?this.selected=this.defaultSelected:t.find("option").resetForm():a.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var n=e(t.attr("for")),i=t.find("input,select,textarea");return n[0]&&i.unshift(n[0]),i.resetForm(),!0;case"form":return("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"===r||"radio"===r)this.checked=t;else if("option"===this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"===a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  Drupal.Views = {};

  Drupal.Views.parseQueryString = function (query) {
    var args = {};
    var pos = query.indexOf('?');
    if (pos !== -1) {
      query = query.substring(pos + 1);
    }
    var pair = void 0;
    var pairs = query.split('&');
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i].split('=');

      if (pair[0] !== 'q' && pair[1]) {
        args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
      }
    }
    return args;
  };

  Drupal.Views.parseViewArgs = function (href, viewPath) {
    var returnObj = {};
    var path = Drupal.Views.getPath(href);

    var viewHref = Drupal.url(viewPath).substring(drupalSettings.path.baseUrl.length);

    if (viewHref && path.substring(0, viewHref.length + 1) === viewHref + '/') {
      returnObj.view_args = decodeURIComponent(path.substring(viewHref.length + 1, path.length));
      returnObj.view_path = path;
    }
    return returnObj;
  };

  Drupal.Views.pathPortion = function (href) {
    var protocol = window.location.protocol;
    if (href.substring(0, protocol.length) === protocol) {
      href = href.substring(href.indexOf('/', protocol.length + 2));
    }
    return href;
  };

  Drupal.Views.getPath = function (href) {
    href = Drupal.Views.pathPortion(href);
    href = href.substring(drupalSettings.path.baseUrl.length, href.length);

    if (href.substring(0, 3) === '?q=') {
      href = href.substring(3, href.length);
    }
    var chars = ['#', '?', '&'];
    for (var i = 0; i < chars.length; i++) {
      if (href.indexOf(chars[i]) > -1) {
        href = href.substr(0, href.indexOf(chars[i]));
      }
    }
    return href;
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.ViewsAjaxView = {};
  Drupal.behaviors.ViewsAjaxView.attach = function (context, settings) {
    if (settings && settings.views && settings.views.ajaxViews) {
      var ajaxViews = settings.views.ajaxViews;

      Object.keys(ajaxViews || {}).forEach(function (i) {
        Drupal.views.instances[i] = new Drupal.views.ajaxView(ajaxViews[i]);
      });
    }
  };
  Drupal.behaviors.ViewsAjaxView.detach = function (context, settings, trigger) {
    if (trigger === 'unload') {
      if (settings && settings.views && settings.views.ajaxViews) {
        var ajaxViews = settings.views.ajaxViews;

        Object.keys(ajaxViews || {}).forEach(function (i) {
          var selector = '.js-view-dom-id-' + ajaxViews[i].view_dom_id;
          if ($(selector, context).length) {
            delete Drupal.views.instances[i];
            delete settings.views.ajaxViews[i];
          }
        });
      }
    }
  };

  Drupal.views = {};

  Drupal.views.instances = {};

  Drupal.views.ajaxView = function (settings) {
    var selector = '.js-view-dom-id-' + settings.view_dom_id;
    this.$view = $(selector);

    var ajaxPath = drupalSettings.views.ajax_path;

    if (ajaxPath.constructor.toString().indexOf('Array') !== -1) {
      ajaxPath = ajaxPath[0];
    }

    var queryString = window.location.search || '';
    if (queryString !== '') {
      queryString = queryString.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/, '');
      if (queryString !== '') {
        queryString = (/\?/.test(ajaxPath) ? '&' : '?') + queryString;
      }
    }

    this.element_settings = {
      url: ajaxPath + queryString,
      submit: settings,
      setClick: true,
      event: 'click',
      selector: selector,
      progress: { type: 'fullscreen' }
    };

    this.settings = settings;

    this.$exposed_form = $('form#views-exposed-form-' + settings.view_name.replace(/_/g, '-') + '-' + settings.view_display_id.replace(/_/g, '-'));
    this.$exposed_form.once('exposed-form').each($.proxy(this.attachExposedFormAjax, this));

    this.$view.filter($.proxy(this.filterNestedViews, this)).once('ajax-pager').each($.proxy(this.attachPagerAjax, this));

    var selfSettings = $.extend({}, this.element_settings, {
      event: 'RefreshView',
      base: this.selector,
      element: this.$view.get(0)
    });
    this.refreshViewAjax = Drupal.ajax(selfSettings);
  };

  Drupal.views.ajaxView.prototype.attachExposedFormAjax = function () {
    var that = this;
    this.exposedFormAjax = [];

    $('input[type=submit], input[type=image]', this.$exposed_form).not('[data-drupal-selector=edit-reset]').each(function (index) {
      var selfSettings = $.extend({}, that.element_settings, {
        base: $(this).attr('id'),
        element: this
      });
      that.exposedFormAjax[index] = Drupal.ajax(selfSettings);
    });
  };

  Drupal.views.ajaxView.prototype.filterNestedViews = function () {
    return !this.$view.parents('.view').length;
  };

  Drupal.views.ajaxView.prototype.attachPagerAjax = function () {
    this.$view.find('ul.js-pager__items > li > a, th.views-field a, .attachment .views-summary a').each($.proxy(this.attachPagerLinkAjax, this));
  };

  Drupal.views.ajaxView.prototype.attachPagerLinkAjax = function (id, link) {
    var $link = $(link);
    var viewData = {};
    var href = $link.attr('href');

    $.extend(viewData, this.settings, Drupal.Views.parseQueryString(href), Drupal.Views.parseViewArgs(href, this.settings.view_base_path));

    var selfSettings = $.extend({}, this.element_settings, {
      submit: viewData,
      base: false,
      element: link
    });
    this.pagerAjax = Drupal.ajax(selfSettings);
  };

  Drupal.AjaxCommands.prototype.viewsScrollTop = function (ajax, response) {
    var offset = $(response.selector).offset();

    var scrollTarget = response.selector;
    while ($(scrollTarget).scrollTop() === 0 && $(scrollTarget).parent()) {
      scrollTarget = $(scrollTarget).parent();
    }

    if (offset.top - 10 < $(scrollTarget).scrollTop()) {
      $(scrollTarget).animate({ scrollTop: offset.top - 10 }, 500);
    }
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.fileValidateAutoAttach = {
    attach: function attach(context, settings) {
      var $context = $(context);
      var elements = void 0;

      function initFileValidation(selector) {
        $context.find(selector).once('fileValidate').on('change.fileValidate', { extensions: elements[selector] }, Drupal.file.validateExtension);
      }

      if (settings.file && settings.file.elements) {
        elements = settings.file.elements;
        Object.keys(elements).forEach(initFileValidation);
      }
    },
    detach: function detach(context, settings, trigger) {
      var $context = $(context);
      var elements = void 0;

      function removeFileValidation(selector) {
        $context.find(selector).removeOnce('fileValidate').off('change.fileValidate', Drupal.file.validateExtension);
      }

      if (trigger === 'unload' && settings.file && settings.file.elements) {
        elements = settings.file.elements;
        Object.keys(elements).forEach(removeFileValidation);
      }
    }
  };

  Drupal.behaviors.fileAutoUpload = {
    attach: function attach(context) {
      $(context).find('input[type="file"]').once('auto-file-upload').on('change.autoFileUpload', Drupal.file.triggerUploadButton);
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        $(context).find('input[type="file"]').removeOnce('auto-file-upload').off('.autoFileUpload');
      }
    }
  };

  Drupal.behaviors.fileButtons = {
    attach: function attach(context) {
      var $context = $(context);
      $context.find('.js-form-submit').on('mousedown', Drupal.file.disableFields);
      $context.find('.js-form-managed-file .js-form-submit').on('mousedown', Drupal.file.progressBar);
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var $context = $(context);
        $context.find('.js-form-submit').off('mousedown', Drupal.file.disableFields);
        $context.find('.js-form-managed-file .js-form-submit').off('mousedown', Drupal.file.progressBar);
      }
    }
  };

  Drupal.behaviors.filePreviewLinks = {
    attach: function attach(context) {
      $(context).find('div.js-form-managed-file .file a').on('click', Drupal.file.openInNewWindow);
    },
    detach: function detach(context) {
      $(context).find('div.js-form-managed-file .file a').off('click', Drupal.file.openInNewWindow);
    }
  };

  Drupal.file = Drupal.file || {
    validateExtension: function validateExtension(event) {
      event.preventDefault();

      $('.file-upload-js-error').remove();

      var extensionPattern = event.data.extensions.replace(/,\s*/g, '|');
      if (extensionPattern.length > 1 && this.value.length > 0) {
        var acceptableMatch = new RegExp('\\.(' + extensionPattern + ')$', 'gi');
        if (!acceptableMatch.test(this.value)) {
          var error = Drupal.t('The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.', {
            '%filename': this.value.replace('C:\\fakepath\\', ''),
            '%extensions': extensionPattern.replace(/\|/g, ', ')
          });
          $(this).closest('div.js-form-managed-file').prepend('<div class="messages messages--error file-upload-js-error" aria-live="polite">' + error + '</div>');
          this.value = '';

          event.stopImmediatePropagation();
        }
      }
    },
    triggerUploadButton: function triggerUploadButton(event) {
      $(event.target).closest('.js-form-managed-file').find('.js-form-submit[data-drupal-selector$="upload-button"]').trigger('mousedown');
    },
    disableFields: function disableFields(event) {
      var $clickedButton = $(this);
      $clickedButton.trigger('formUpdated');

      var $enabledFields = [];
      if ($clickedButton.closest('div.js-form-managed-file').length > 0) {
        $enabledFields = $clickedButton.closest('div.js-form-managed-file').find('input.js-form-file');
      }

      var $fieldsToTemporarilyDisable = $('div.js-form-managed-file input.js-form-file').not($enabledFields).not(':disabled');
      $fieldsToTemporarilyDisable.prop('disabled', true);
      setTimeout(function () {
        $fieldsToTemporarilyDisable.prop('disabled', false);
      }, 1000);
    },
    progressBar: function progressBar(event) {
      var $clickedButton = $(this);
      var $progressId = $clickedButton.closest('div.js-form-managed-file').find('input.file-progress');
      if ($progressId.length) {
        var originalName = $progressId.attr('name');

        $progressId.attr('name', originalName.match(/APC_UPLOAD_PROGRESS|UPLOAD_IDENTIFIER/)[0]);

        setTimeout(function () {
          $progressId.attr('name', originalName);
        }, 1000);
      }

      setTimeout(function () {
        $clickedButton.closest('div.js-form-managed-file').find('div.ajax-progress-bar').slideDown();
      }, 500);
      $clickedButton.trigger('fileUpload');
    },
    openInNewWindow: function openInNewWindow(event) {
      event.preventDefault();
      $(this).attr('target', '_blank');
      window.open(this.href, 'filePreview', 'toolbar=0,scrollbars=1,location=1,statusbar=1,menubar=0,resizable=1,width=500,height=550');
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.dialog = {
    attach: function attach(context, settings) {
      var $context = $(context);

      if (!$('#drupal-modal').length) {
        $('<div id="drupal-modal" class="ui-front"></div>').hide().appendTo('body');
      }

      var $dialog = $context.closest('.ui-dialog-content');
      if ($dialog.length) {
        if ($dialog.dialog('option', 'drupalAutoButtons')) {
          $dialog.trigger('dialogButtonsChange');
        }

        $dialog.dialog('widget').trigger('focus');
      }

      var originalClose = settings.dialog.close;

      settings.dialog.close = function (event) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        originalClose.apply(settings.dialog, [event].concat(args));
        $(event.target).remove();
      };
    },
    prepareDialogButtons: function prepareDialogButtons($dialog) {
      var buttons = [];
      var $buttons = $dialog.find('.form-actions input[type=submit], .form-actions a.button');
      $buttons.each(function () {
        var $originalButton = $(this).css({ display: 'none' });
        buttons.push({
          text: $originalButton.html() || $originalButton.attr('value'),
          class: $originalButton.attr('class'),
          click: function click(e) {
            if ($originalButton.is('a')) {
              $originalButton[0].click();
            } else {
              $originalButton.trigger('mousedown').trigger('mouseup').trigger('click');
              e.preventDefault();
            }
          }
        });
      });
      return buttons;
    }
  };

  Drupal.AjaxCommands.prototype.openDialog = function (ajax, response, status) {
    if (!response.selector) {
      return false;
    }
    var $dialog = $(response.selector);
    if (!$dialog.length) {
      $dialog = $('<div id="' + response.selector.replace(/^#/, '') + '" class="ui-front"></div>').appendTo('body');
    }

    if (!ajax.wrapper) {
      ajax.wrapper = $dialog.attr('id');
    }

    response.command = 'insert';
    response.method = 'html';
    ajax.commands.insert(ajax, response, status);

    if (!response.dialogOptions.buttons) {
      response.dialogOptions.drupalAutoButtons = true;
      response.dialogOptions.buttons = Drupal.behaviors.dialog.prepareDialogButtons($dialog);
    }

    $dialog.on('dialogButtonsChange', function () {
      var buttons = Drupal.behaviors.dialog.prepareDialogButtons($dialog);
      $dialog.dialog('option', 'buttons', buttons);
    });

    response.dialogOptions = response.dialogOptions || {};
    var dialog = Drupal.dialog($dialog.get(0), response.dialogOptions);
    if (response.dialogOptions.modal) {
      dialog.showModal();
    } else {
      dialog.show();
    }

    $dialog.parent().find('.ui-dialog-buttonset').addClass('form-actions');
  };

  Drupal.AjaxCommands.prototype.closeDialog = function (ajax, response, status) {
    var $dialog = $(response.selector);
    if ($dialog.length) {
      Drupal.dialog($dialog.get(0)).close();
      if (!response.persist) {
        $dialog.remove();
      }
    }

    $dialog.off('dialogButtonsChange');
  };

  Drupal.AjaxCommands.prototype.setDialogOption = function (ajax, response, status) {
    var $dialog = $(response.selector);
    if ($dialog.length) {
      $dialog.dialog('option', response.optionName, response.optionValue);
    }
  };

  $(window).on('dialog:aftercreate', function (e, dialog, $element, settings) {
    $element.on('click.dialog', '.dialog-cancel', function (e) {
      dialog.close('cancel');
      e.preventDefault();
      e.stopPropagation();
    });
  });

  $(window).on('dialog:beforeclose', function (e, dialog, $element) {
    $element.off('.dialog');
  });
})(jQuery, Drupal);;
