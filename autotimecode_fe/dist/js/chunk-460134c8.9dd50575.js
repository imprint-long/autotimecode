(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-460134c8"],{"0d10":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stt-container"},[n("el-alert",{attrs:{title:"STT: Speech to Text, audio + SRT -> filled SRT"}}),n("el-divider",[t._v("创建任务")]),n("el-form",{attrs:{"label-width":"100px"}},[n("el-form-item",{attrs:{label:"文件链接",required:""}},[n("el-input",{attrs:{placeholder:"请输入Firefox send文件链接"},model:{value:t.form.wav_url,callback:function(e){t.$set(t.form,"wav_url",e)},expression:"form.wav_url"}})],1),n("el-form-item",{attrs:{label:"原始srt",required:""}},[n("el-input",{attrs:{placeholder:"请输入原始SRT",type:"textarea",autosize:{minRows:7,maxRows:14}},model:{value:t.form.srt,callback:function(e){t.$set(t.form,"srt",e)},expression:"form.srt"}})],1),n("el-form-item",[n("el-button",{on:{click:t.submit}},[t._v("提交")])],1)],1),n("el-divider",[t._v("创建任务结果")]),n("el-form",{attrs:{"label-width":"100px"}},[n("el-form-item",{attrs:{label:"任务id",required:""}},[n("el-input",{attrs:{placeholder:"通常情况下无需自动填写，仅供尝试次数超过限制后手动调用"},model:{value:t.taskId,callback:function(e){t.taskId=e},expression:"taskId"}})],1),n("el-form-item",[n("el-button",{on:{click:t.getResult}},[t._v("查询")])],1)],1),n("el-divider",[t._v("生成文件结果")]),n("el-form",{attrs:{"label-width":"100px"}},[n("el-form-item",{attrs:{label:"文件处理结果"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:7,maxRows:14}},model:{value:t.steps,callback:function(e){t.steps=e},expression:"steps"}})],1),n("el-form-item",{attrs:{label:"生成文件"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:7,maxRows:14}},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}})],1)],1)],1)},i=[],s=(n("2338"),n("f763"),n("fb37"),n("b04f")),a=(n("34a3"),n("fce8")),u=n.n(a);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"stt",data:function(){return{form:{wav_url:"",srt:"",segment:!0,lang:"en"},taskId:"",result:"",steps:"",limit:0,timer:null}},methods:{submit:function(){var t=this;if(this.form.wav_url&&this.form.srt){var e=this.form.srt.replace(/\n\n\n\n/g,"\\n\\n").replace(/\n\n\n/g,"\\n\\n").replace(/\n/g,"\\n");this.$axios.post("/api/stt",c({},this.form,{srt:e})).then((function(e){e.data.task_id?(t.taskId=e.data.task_id,t.$message.success("任务创建成功:"+t.taskId),t.getResult()):t.$message.error("任务创建失败")})).catch((function(){t.$message.error("任务创建失败")}))}else this.$message.error("请完整填写表单内容")},getResult:function(){var t=this;this.taskId?(this.limit=0,this.result="开始轮询...\n",this.steps="",clearInterval(this.timer),this.timer=setInterval((function(){if(t.limit>9)return t.$message.error("超过最大重试次数, 请手动尝试"),void clearInterval(t.timer);t.$axios.get("/api/stt/".concat(t.taskId)).then((function(e){t.steps=JSON.stringify(e.data.steps,null,4);var n=e.data.steps.some((function(t){return"SRT cannot be parsed"===t.comment}));n&&(t.$meesage.error("SRT解析失败"),clearInterval(t.timer))})),t.$axios.get("/api/stt/".concat(t.taskId,"/srt")).then((function(e){t.result=e,clearInterval(t.timer)})).catch((function(){t.limit+=1;var e=u()().format("YYYY-MM-DD HH:mm:ss");t.result+="轮询结果中: ".concat(e,"\n")}))}),5e3)):this.$message.error("请输入任务ID")}}},l=f,h=n("6691"),d=Object(h["a"])(l,r,i,!1,null,null,null);e["default"]=d.exports},2338:function(t,e,n){var r=n("b2f5"),i=n("2e9a"),s=n("3a68"),a=n("acb9"),u=n("f59b");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,r=s(t),o=a.f,c=i(r),f={},l=0;while(c.length>l)n=o(r,e=c[l++]),void 0!==n&&u(f,e,n);return f}})},"2e9a":function(t,e,n){var r=n("a891"),i=n("f7c1"),s=n("a013"),a=n("3754").Reflect;t.exports=a&&a.ownKeys||function(t){var e=r.f(s(t)),n=i.f;return n?e.concat(n(t)):e}},a891:function(t,e,n){var r=n("fb6d"),i=n("b4e0").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},acb9:function(t,e,n){var r=n("d217"),i=n("7dea"),s=n("3a68"),a=n("5325"),u=n("03b3"),o=n("568a"),c=Object.getOwnPropertyDescriptor;e.f=n("dad2")?c:function(t,e){if(t=s(t),e=a(e,!0),o)try{return c(t,e)}catch(n){}if(u(t,e))return i(!r.f.call(t,e),t[e])}},b04f:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},f59b:function(t,e,n){"use strict";var r=n("ddf7"),i=n("7dea");t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},f9f2:function(t,e,n){var r=n("b2f5"),i=n("a4cc"),s=n("b6f1");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*s((function(){n(1)})),"Object",a)}},fb37:function(t,e,n){var r=n("db4b"),i=n("cfc7");n("f9f2")("keys",(function(){return function(t){return i(r(t))}}))},fce8:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",a="month",u="quarter",o="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},h={s:l,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+l(r,2,"0")+":"+l(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,a),i=e-r<0,s=t.clone().add(n+(i?-1:1),a);return Number(-(n+(e-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:a,y:o,w:s,d:i,h:r,m:n,s:e,ms:t,Q:u}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m="en",p={};p[m]=d;var $=function(t){return t instanceof y},v=function(t,e,n){var r;if(!t)return m;if("string"==typeof t)p[t]&&(r=t),e&&(p[t]=e,r=t);else{var i=t.name;p[i]=t,r=i}return n||(m=r),r},g=function(t,e,n){if($(t))return t.clone();var r=e?"string"==typeof e?{format:e,pl:n}:e:{};return r.date=t,new y(r)},b=h;b.l=v,b.i=$,b.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u})};var y=function(){function l(t){this.$L=this.$L||v(t.locale,null,!0),this.parse(t)}var h=l.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return b},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return g(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<g(t)},h.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},h.year=function(t){return this.$g(t,"$y",o)},h.month=function(t){return this.$g(t,"$M",a)},h.day=function(t){return this.$g(t,"$W",i)},h.date=function(t){return this.$g(t,"$D","date")},h.hour=function(t){return this.$g(t,"$H",r)},h.minute=function(t){return this.$g(t,"$m",n)},h.second=function(t){return this.$g(t,"$s",e)},h.millisecond=function(e){return this.$g(e,"$ms",t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,u){var c=this,f=!!b.u(u)||u,l=b.p(t),h=function(t,e){var n=b.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return f?n:n.endOf(i)},d=function(t,e){return b.w(c.toDate()[t].apply(c.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},m=this.$W,p=this.$M,$=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case o:return f?h(1,0):h(31,11);case a:return f?h(1,p):h(0,p+1);case s:var g=this.$locale().weekStart||0,y=(m<g?m+7:m)-g;return h(f?$-y:$+(6-y),p);case i:case"date":return d(v+"Hours",0);case r:return d(v+"Minutes",1);case n:return d(v+"Seconds",2);case e:return d(v+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(s,u){var c,f=b.p(s),l="set"+(this.$u?"UTC":""),h=(c={},c[i]=l+"Date",c.date=l+"Date",c[a]=l+"Month",c[o]=l+"FullYear",c[r]=l+"Hours",c[n]=l+"Minutes",c[e]=l+"Seconds",c[t]=l+"Milliseconds",c)[f],d=f===i?this.$D+(u-this.$W):u;if(f===a||f===o){var m=this.clone().set("date",1);m.$d[h](d),m.init(),this.$d=m.set("date",Math.min(this.$D,m.daysInMonth())).toDate()}else h&&this.$d[h](d);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[b.p(t)]()},h.add=function(t,u){var c,f=this;t=Number(t);var l=b.p(u),h=function(e){var n=g(f);return b.w(n.date(n.date()+Math.round(e*t)),f)};if(l===a)return this.set(a,this.$M+t);if(l===o)return this.set(o,this.$y+t);if(l===i)return h(1);if(l===s)return h(7);var d=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[l]||1,m=this.valueOf()+t*d;return b.w(m,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=b.z(this),i=this.$locale(),s=this.$H,a=this.$m,u=this.$M,o=i.weekdays,c=i.months,l=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},h=function(t){return b.s(s%12||12,t,"0")},d=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:b.s(u+1,2,"0"),MMM:l(i.monthsShort,u,c,3),MMMM:c[u]||c(this,n),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:l(i.weekdaysMin,this.$W,o,2),ddd:l(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:b.s(s,2,"0"),h:h(1),hh:h(2),a:d(s,a,!0),A:d(s,a,!1),m:String(a),mm:b.s(a,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:r};return n.replace(f,(function(t,e){return e||m[t]||r.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,c,f){var l,h=b.p(c),d=g(t),m=6e4*(d.utcOffset()-this.utcOffset()),p=this-d,$=b.m(this,d);return $=(l={},l[o]=$/12,l[a]=$,l[u]=$/3,l[s]=(p-m)/6048e5,l[i]=(p-m)/864e5,l[r]=p/36e5,l[n]=p/6e4,l[e]=p/1e3,l)[h]||p,f?$:b.a($)},h.daysInMonth=function(){return this.endOf(a).$D},h.$locale=function(){return p[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone();return n.$L=v(t,e,!0),n},h.clone=function(){return b.w(this.toDate(),this)},h.toDate=function(){return new Date(this.$d)},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},l}();return g.prototype=y.prototype,g.extend=function(t,e){return t(e,y,g),g},g.locale=v,g.isDayjs=$,g.unix=function(t){return g(1e3*t)},g.en=p[m],g.Ls=p,g}))}}]);