!function(h){"use strict";var e="ult_countdown";h.JQPlugin.createPlugin({name:e,defaultOptions:{until:null,since:null,timezone:null,serverSync:null,format:"dHMS",layout:"",compact:!1,padZeroes:!1,significant:0,description:"",expiryUrl:"",expiryText:"",alwaysExpire:!1,onExpiry:null,onTick:null,tickInterval:1},regionalOptions:{"":{labels:["Years","Months","Weeks","Days","Hours","Minutes","Seconds"],labels1:["Year","Month","Week","Day","Hour","Minute","Second"],compactLabels:["y","m","w","d"],whichLabels:null,digits:["0","1","2","3","4","5","6","7","8","9"],timeSeparator:":",isRTL:!1}},_rtlClass:e+"-rtl",_sectionClass:e+"-section",_amountClass:e+"-amount",_periodClass:e+"-period",_rowClass:e+"-row",_holdingClass:e+"-holding",_showClass:e+"-show",_descrClass:e+"-descr",_timerElems:[],_init:function(){var i=this;this._super(),this._serverSyncs=[];var s="function"==typeof Date.now?Date.now:function(){return(new Date).getTime()},n=window.performance&&"function"==typeof window.performance.now;var o=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null,r=0;!o||h.noRequestAnimationFrame?(h.noRequestAnimationFrame=null,h.countdown._timer=setInterval(function(){i._updateElems()},1e3)):(r=window.animationStartTime||window.webkitAnimationStartTime||window.mozAnimationStartTime||window.oAnimationStartTime||window.msAnimationStartTime||s(),o(function e(t){t=t<1e12?n?window.performance.now()+window.performance.timing.navigationStart:s():t||s();1e3<=t-r&&(i._updateElems(),r=t),o(e)}))},UTCDate:function(e,t,i,s,n,o,r,a){"object"==typeof t&&t instanceof Date&&(a=t.getMilliseconds(),r=t.getSeconds(),o=t.getMinutes(),n=t.getHours(),s=t.getDate(),i=t.getMonth(),t=t.getFullYear());var l=new Date;return l.setUTCFullYear(t),l.setUTCDate(1),l.setUTCMonth(i||0),l.setUTCDate(s||1),l.setUTCHours(n||0),l.setUTCMinutes((o||0)-(Math.abs(e)<30?60*e:e)),l.setUTCSeconds(r||0),l.setUTCMilliseconds(a||0),l},periodsToSeconds:function(e){return 31557600*e[0]+2629800*e[1]+604800*e[2]+86400*e[3]+3600*e[4]+60*e[5]+e[6]},resync:function(){var n=this;h("."+this._getMarker()).each(function(){var e=h.data(this,n.name);if(e.options.serverSync){for(var t,i=null,s=0;s<n._serverSyncs.length;s++)if(n._serverSyncs[s][0]===e.options.serverSync){i=n._serverSyncs[s];break}n._eqNull(i[2])&&(t=h.isFunction(e.options.serverSync)?e.options.serverSync.apply(this,[]):null,i[2]=(t?(new Date).getTime()-t.getTime():0)-i[1]),e._since&&e._since.setMilliseconds(e._since.getMilliseconds()+i[2]),e._until.setMilliseconds(e._until.getMilliseconds()+i[2])}});for(var e=0;e<n._serverSyncs.length;e++)n._eqNull(n._serverSyncs[e][2])||(n._serverSyncs[e][1]+=n._serverSyncs[e][2],delete n._serverSyncs[e][2])},_instSettings:function(e,t){return{_periods:[0,0,0,0,0,0,0]}},_addElem:function(e){this._hasElem(e)||this._timerElems.push(e)},_hasElem:function(e){return-1<h.inArray(e,this._timerElems)},_removeElem:function(t){this._timerElems=h.map(this._timerElems,function(e){return e===t?null:e})},_updateElems:function(){for(var e=this._timerElems.length-1;0<=e;e--)this._updateCountdown(this._timerElems[e])},_optionsChanged:function(e,t,i){i.layout&&(i.layout=i.layout.replace(/&lt;/g,"<").replace(/&gt;/g,">")),this._resetExtraLabels(t.options,i);var s=t.options.timezone!==i.timezone;h.extend(t.options,i),this._adjustSettings(e,t,!this._eqNull(i.until)||!this._eqNull(i.since)||s);s=new Date;(t._since&&t._since<s||t._until&&t._until>s)&&this._addElem(e[0]),this._updateCountdown(e,t)},_updateCountdown:function(e,t){var i;e=e.jquery?e:h(e),(t=t||this._getInst(e))&&(e.html(this._generateHTML(t)).toggleClass(this._rtlClass,t.options.isRTL),"pause"!==t._hold&&h.isFunction(t.options.onTick)&&(i="lap"!==t._hold?t._periods:this._calculatePeriods(t,t._show,t.options.significant,new Date),1!==t.options.tickInterval&&this.periodsToSeconds(i)%t.options.tickInterval!=0||t.options.onTick.apply(e[0],[i])),"pause"!==t._hold&&(t._since?t._now.getTime()<t._since.getTime():t._now.getTime()>=t._until.getTime())&&!t._expiring?(t._expiring=!0,(this._hasElem(e[0])||t.options.alwaysExpire)&&(this._removeElem(e[0]),h.isFunction(t.options.onExpiry)&&t.options.onExpiry.apply(e[0],[]),t.options.expiryText&&(i=t.options.layout,t.options.layout=t.options.expiryText,this._updateCountdown(e[0],t),t.options.layout=i),t.options.expiryUrl&&(window.location=t.options.expiryUrl)),t._expiring=!1):"pause"===t._hold&&this._removeElem(e[0]))},_resetExtraLabels:function(e,t){var i=null;for(i in t)i.match(/[Ll]abels[02-9]|compactLabels1/)&&(e[i]=t[i]);for(i in e)i.match(/[Ll]abels[02-9]|compactLabels1/)&&void 0===t[i]&&(e[i]=null)},_eqNull:function(e){return null==e},_adjustSettings:function(e,t,i){for(var s=null,n=0;n<this._serverSyncs.length;n++)if(this._serverSyncs[n][0]===t.options.serverSync){s=this._serverSyncs[n][1];break}var o=null,r=null;this._eqNull(s)?(a=h.isFunction(t.options.serverSync)?t.options.serverSync.apply(e[0],[]):null,o=new Date,r=a?o.getTime()-a.getTime():0,this._serverSyncs.push([t.options.serverSync,r])):(o=new Date,r=t.options.serverSync?s:0);var a=t.options.timezone,a=this._eqNull(a)?-o.getTimezoneOffset():a;(i||!i&&this._eqNull(t._until)&&this._eqNull(t._since))&&(t._since=t.options.since,this._eqNull(t._since)||(t._since=this.UTCDate(a,this._determineTime(t._since,null)),t._since&&r&&t._since.setMilliseconds(t._since.getMilliseconds()+r)),t._until=this.UTCDate(a,this._determineTime(t.options.until,o)),r&&t._until.setMilliseconds(t._until.getMilliseconds()+r)),t._show=this._determineShow(t)},_preDestroy:function(e,t){this._removeElem(e[0]),e.empty()},pause:function(e){this._hold(e,"pause")},lap:function(e){this._hold(e,"lap")},resume:function(e){this._hold(e,null)},toggle:function(e){this[(h.data(e,this.name)||{})._hold?"resume":"pause"](e)},toggleLap:function(e){this[(h.data(e,this.name)||{})._hold?"resume":"lap"](e)},_hold:function(e,t){var i,s=h.data(e,this.name);s&&("pause"!==s._hold||t||(s._periods=s._savePeriods,i=s._since?"-":"+",s[s._since?"_since":"_until"]=this._determineTime(i+s._periods[0]+"y"+i+s._periods[1]+"o"+i+s._periods[2]+"w"+i+s._periods[3]+"d"+i+s._periods[4]+"h"+i+s._periods[5]+"m"+i+s._periods[6]+"s"),this._addElem(e)),s._hold=t,s._savePeriods="pause"===t?s._periods:null,h.data(e,this.name,s),this._updateCountdown(e,s))},getTimes:function(e){e=h.data(e,this.name);return e?"pause"===e._hold?e._savePeriods:e._hold?this._calculatePeriods(e,e._show,e.options.significant,new Date):e._periods:null},_determineTime:function(e,t){var i,s,p=this,e=this._eqNull(e)?t:"string"==typeof e?function(e){e=e.toLowerCase();for(var t=new Date,i=t.getFullYear(),s=t.getMonth(),n=t.getDate(),o=t.getHours(),r=t.getMinutes(),a=t.getSeconds(),l=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g,_=l.exec(e);_;){switch(_[2]||"s"){case"s":a+=parseInt(_[1],10);break;case"m":r+=parseInt(_[1],10);break;case"h":o+=parseInt(_[1],10);break;case"d":n+=parseInt(_[1],10);break;case"w":n+=7*parseInt(_[1],10);break;case"o":s+=parseInt(_[1],10),n=Math.min(n,p._getDaysInMonth(i,s));break;case"y":i+=parseInt(_[1],10),n=Math.min(n,p._getDaysInMonth(i,s))}_=l.exec(e)}return new Date(i,s,n,o,r,a,0)}(e):"number"==typeof e?(i=e,(s=new Date).setTime(s.getTime()+1e3*i),s):e;return e&&e.setMilliseconds(0),e},_getDaysInMonth:function(e,t){return 32-new Date(e,t,32).getDate()},_normalLabels:function(e){return e},_generateHTML:function(i){var s=this;i._periods=i._hold?i._periods:this._calculatePeriods(i,i._show,i.options.significant,new Date);for(var e=!1,t=0,n=i.options.significant,o=h.extend({},i._show),r=null,r=0;r<=6;r++)e=e||"?"===i._show[r]&&0<i._periods[r],o[r]="?"!==i._show[r]||e?i._show[r]:null,t+=o[r]?1:0,n-=0<i._periods[r]?1:0;var a=[!1,!1,!1,!1,!1,!1,!1];for(r=6;0<=r;r--)i._show[r]&&(i._periods[r]?a[r]=!0:(a[r]=0<n,n--));function l(e){var t=i.options["compactLabels"+c(i._periods[e])];return o[e]?s._translateDigits(i,i._periods[e])+(t||p)[e]+" ":""}function _(e){var t=i.options["labels"+c(i._periods[e])];return!i.options.significant&&o[e]||i.options.significant&&a[e]?'<span class="'+s._sectionClass+'"><span class="'+s._amountClass+'">'+s._minDigits(i,i._periods[e],u)+'</span><span class="'+s._periodClass+'">'+(t||p)[e]+"</span></span>":""}var p=i.options.compact?i.options.compactLabels:i.options.labels,c=i.options.whichLabels||this._normalLabels,u=i.options.padZeroes?2:1;return i.options.layout?this._buildLayout(i,o,i.options.layout,i.options.compact,i.options.significant,a):(i.options.compact?'<span class="'+this._rowClass+" "+this._amountClass+(i._hold?" "+this._holdingClass:"")+'">'+l(0)+l(1)+l(2)+l(3)+(o[4]?this._minDigits(i,i._periods[4],2):"")+(o[5]?(o[4]?i.options.timeSeparator:"")+this._minDigits(i,i._periods[5],2):"")+(o[6]?(o[4]||o[5]?i.options.timeSeparator:"")+this._minDigits(i,i._periods[6],2):""):'<span class="'+this._rowClass+" "+this._showClass+(i.options.significant||t)+(i._hold?" "+this._holdingClass:"")+'">'+_(0)+_(1)+_(2)+_(3)+_(4)+_(5)+_(6))+"</span>"+(i.options.description?'<span class="'+this._rowClass+" "+this._descrClass+'">'+i.options.description+"</span>":"")},_buildLayout:function(i,e,t,s,n,o){for(var r=i.options[s?"compactLabels":"labels"],a=i.options.whichLabels||this._normalLabels,l=function(e){return(i.options[(s?"compactLabels":"labels")+a(i._periods[e])]||r)[e]},_=function(e,t){return i.options.digits[Math.floor(e/t)%10]},_={desc:i.options.description,sep:i.options.timeSeparator,yl:l(0),yn:this._minDigits(i,i._periods[0],1),ynn:this._minDigits(i,i._periods[0],2),ynnn:this._minDigits(i,i._periods[0],3),y1:_(i._periods[0],1),y10:_(i._periods[0],10),y100:_(i._periods[0],100),y1000:_(i._periods[0],1e3),ol:l(1),on:this._minDigits(i,i._periods[1],1),onn:this._minDigits(i,i._periods[1],2),onnn:this._minDigits(i,i._periods[1],3),o1:_(i._periods[1],1),o10:_(i._periods[1],10),o100:_(i._periods[1],100),o1000:_(i._periods[1],1e3),wl:l(2),wn:this._minDigits(i,i._periods[2],1),wnn:this._minDigits(i,i._periods[2],2),wnnn:this._minDigits(i,i._periods[2],3),w1:_(i._periods[2],1),w10:_(i._periods[2],10),w100:_(i._periods[2],100),w1000:_(i._periods[2],1e3),dl:l(3),dn:this._minDigits(i,i._periods[3],1),dnn:this._minDigits(i,i._periods[3],2),dnnn:this._minDigits(i,i._periods[3],3),d1:_(i._periods[3],1),d10:_(i._periods[3],10),d100:_(i._periods[3],100),d1000:_(i._periods[3],1e3),hl:l(4),hn:this._minDigits(i,i._periods[4],1),hnn:this._minDigits(i,i._periods[4],2),hnnn:this._minDigits(i,i._periods[4],3),h1:_(i._periods[4],1),h10:_(i._periods[4],10),h100:_(i._periods[4],100),h1000:_(i._periods[4],1e3),ml:l(5),mn:this._minDigits(i,i._periods[5],1),mnn:this._minDigits(i,i._periods[5],2),mnnn:this._minDigits(i,i._periods[5],3),m1:_(i._periods[5],1),m10:_(i._periods[5],10),m100:_(i._periods[5],100),m1000:_(i._periods[5],1e3),sl:l(6),sn:this._minDigits(i,i._periods[6],1),snn:this._minDigits(i,i._periods[6],2),snnn:this._minDigits(i,i._periods[6],3),s1:_(i._periods[6],1),s10:_(i._periods[6],10),s100:_(i._periods[6],100),s1000:_(i._periods[6],1e3)},p=t,c=0;c<=6;c++)var u="yowdhms".charAt(c),u=new RegExp("\\{"+u+"<\\}([\\s\\S]*)\\{"+u+">\\}","g"),p=p.replace(u,!n&&e[c]||n&&o[c]?"$1":"");return h.each(_,function(e,t){e=new RegExp("\\{"+e+"\\}","g");p=p.replace(e,t)}),p},_minDigits:function(e,t,i){return(t=""+t).length>=i?this._translateDigits(e,t):this._translateDigits(e,(t="0000000000"+t).substr(t.length-i))},_translateDigits:function(t,e){return(""+e).replace(/[0-9]/g,function(e){return t.options.digits[e]})},_determineShow:function(e){var t=e.options.format,e=[];return e[0]=t.match("y")?"?":t.match("Y")?"!":null,e[1]=t.match("o")?"?":t.match("O")?"!":null,e[2]=t.match("w")?"?":t.match("W")?"!":null,e[3]=t.match("d")?"?":t.match("D")?"!":null,e[4]=t.match("h")?"?":t.match("H")?"!":null,e[5]=t.match("m")?"?":t.match("M")?"!":null,e[6]=t.match("s")?"?":t.match("S")?"!":null,e},_calculatePeriods:function(e,i,t,s){e._now=s,e._now.setMilliseconds(0);var n=new Date(e._now.getTime());e._since?s.getTime()<e._since.getTime()?e._now=s=n:s=e._since:(n.setTime(e._until.getTime()),s.getTime()>e._until.getTime()&&(e._now=s=n));var o,r,a,l=[0,0,0,0,0,0,0];(i[0]||i[1])&&(a=this._getDaysInMonth(s.getFullYear(),s.getMonth()),r=this._getDaysInMonth(n.getFullYear(),n.getMonth()),o=n.getDate()===s.getDate()||n.getDate()>=Math.min(a,r)&&s.getDate()>=Math.min(a,r),r=function(e){return 60*(60*e.getHours()+e.getMinutes())+e.getSeconds()},r=Math.max(0,12*(n.getFullYear()-s.getFullYear())+n.getMonth()-s.getMonth()+(n.getDate()<s.getDate()&&!o||o&&r(n)<r(s)?-1:0)),l[0]=i[0]?Math.floor(r/12):0,l[1]=i[1]?r-12*l[0]:0,r=(s=new Date(s.getTime())).getDate()===a,a=this._getDaysInMonth(s.getFullYear()+l[0],s.getMonth()+l[1]),s.getDate()>a&&s.setDate(a),s.setFullYear(s.getFullYear()+l[0]),s.setMonth(s.getMonth()+l[1]),r&&s.setDate(a));var _=Math.floor((n.getTime()-s.getTime())/1e3),p=null,s=function(e,t){l[e]=i[e]?Math.floor(_/t):0,_-=l[e]*t};if(s(2,604800),s(3,86400),s(4,3600),s(5,60),s(6,1),0<_&&!e._since)for(var c=[1,12,4.3482,7,24,60,60],u=6,h=1,p=6;0<=p;p--)i[p]&&(l[u]>=h&&(l[u]=0,_=1),0<_&&(l[p]++,_=0,u=p,h=1)),h*=c[p];if(t)for(p=0;p<=6;p++)t&&l[p]?t--:t||(l[p]=0);return l}})}(jQuery);