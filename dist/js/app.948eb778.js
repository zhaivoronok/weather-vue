(function(t){function e(e){for(var r,c,s=e[0],o=e[1],u=e[2],f=0,l=[];f<s.length;f++)c=s[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&l.push(a[c][0]),a[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);d&&d(e);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/weather-vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},4678:function(t,e,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="4678"},"56d7":function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"addCity",(function(){return w})),n.d(r,"removeCity",(function(){return k})),n.d(r,"updateCity",(function(){return O})),n.d(r,"fillCurrentCity",(function(){return N}));var a={};n.r(a),n.d(a,"getCities",(function(){return W})),n.d(a,"getCity",(function(){return x})),n.d(a,"getCurrentCity",(function(){return z}));var i={};n.r(i),n.d(i,"getWeather",(function(){return B})),n.d(i,"getWeatherByCoords",(function(){return E})),n.d(i,"getHourlyWeather",(function(){return H}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("appHeader"),n("router-view")],1)},o=[],u=n("5530"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",["City"===t.$route.name?n("cButton",{on:{click:function(e){return t.$router.push("/")}}},[t._v("Back")]):t._e(),n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)},f=[],l={name:"appHeader"},m=l,p=n("2877"),h=Object(p["a"])(m,d,f,!1,null,null,null),y=h.exports,b=n("2f62"),j={name:"app",components:{appHeader:y},methods:Object(u["a"])({},Object(b["d"])(["addCity"]),{},Object(b["b"])(["getWeather"]))},v=j,g=Object(p["a"])(v,s,o,!1,null,null,null),C=g.exports,_=(n("d81d"),n("b0c0"),{cities:[],currentCity:null}),w=(n("4de4"),n("7db0"),function(t,e){t.cities.push(e)}),k=function(t,e){t.cities=t.cities.filter((function(t){return t.name!==e}))},O=function(t,e){var n=e.cityName,r=e.weather,a=e.weatherForecast,i=t.cities.find((function(t){return t.name===n}))||t.currentCity;r?c["a"].set(i,"weather",r):a&&c["a"].set(i,"weatherForecast",a)},N=function(t,e){t.currentCity=e},W=function(t){return t.cities},x=function(t){return function(e){return t.cities.find((function(t){return t.name===e}))}},z=function(t){return t.currentCity},F=(n("d3b7"),n("28dd"));c["a"].use(F["a"]);var S="https://api.openweathermap.org/data/2.5",P="&units=metric",$="&APPID=7ad9ae91a26c48edb2233484e61082eb",B=function(t,e){t.commit,t.state;return new Promise((function(t,n){c["a"].http.get(S+"/weather?q="+e+P+$).then((function(e){t(e.body)}),(function(t){n(t)}))}))},E=function(t,e){t.commit,t.state;var n=e.lat,r=e.lon;return new Promise((function(t,e){c["a"].http.get(S+"/weather?lat="+n+"&lon="+r+P+$).then((function(e){t(e.body)}),(function(t){e(t)}))}))},H=function(t,e){t.commit,t.state;return new Promise((function(t,n){c["a"].http.get(S+"/forecast?q="+e+P+$).then((function(e){t(e.body)}),(function(t){n(t)}))}))};c["a"].use(b["a"]);var D=new b["a"].Store({state:_,mutations:r,getters:a,actions:i});D.subscribe((function(t,e){"updateCity"!==t.type&&localStorage.setItem("cities",JSON.stringify(e.cities.map((function(t){return t.name}))))}));var T,q,I=D,M=(n("4160"),n("c975"),n("159b"),n("8c4f")),R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("citySearch"),t._l(t.getCities,(function(t,e){return n("cityCard",{key:e,attrs:{cityName:t.name,cityCountry:t.country,cityWeather:t.weather}})}))],2)},A=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.addNewCity(e)}}},[n("cInput",{attrs:{required:!0},model:{value:t.cityName,callback:function(e){t.cityName=e},expression:"cityName"}},[t._v("Please enter city name")]),n("cButton",[t._v("Add")])],1)},U=[],G={name:"citySearch",data:function(){return{cityName:""}},computed:Object(u["a"])({},Object(b["c"])(["getCity"])),methods:Object(u["a"])({},Object(b["b"])(["getWeather"]),{},Object(b["d"])(["addCity"]),{addNewCity:function(){var t=this;this.getWeather(this.cityName).then((function(e){t.getCity(e.name)?alert("City already added"):t.addCity({id:e.id,name:e.name,country:e.sys.country,weather:{temperature:e.main.temp,temperatureFeels:e.main.feels_like,description:e.weather[0].main}})}),(function(t){alert(t.body.message)})),this.cityName=""}})},L=G,K=Object(p["a"])(L,J,U,!1,null,null,null),Q=K.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[n("a",{attrs:{href:"/"+t.cityName},on:{click:function(e){return e.preventDefault(),t.goToCity(e)}}},[t._v(t._s(t.cityName)+", "+t._s(t.cityCountry))])]),n("p",[t._v("Temperature: "+t._s(t.cityWeather.temperature))]),n("p",[t._v("Feels like: "+t._s(t.cityWeather.temperatureFeels))]),n("p",[t._v("Weather: "+t._s(t.cityWeather.description))]),n("cButton",{attrs:{prevent:!0,stop:!0},on:{click:t.updateCurrentCity}},[t._v("Update")]),n("cButton",{attrs:{prevent:!0,stop:!0},on:{click:t.removeCurrentCity}},[t._v("Remove")])],1)},X=[],Y={name:"cityCard",props:{cityName:{type:String},cityCountry:{type:String},cityWeather:{type:Object}},methods:Object(u["a"])({},Object(b["d"])(["removeCity","updateCity"]),{},Object(b["b"])(["getWeather"]),{removeCurrentCity:function(){this.removeCity(this.cityName)},updateCurrentCity:function(){var t=this;this.getWeather(this.cityName).then((function(e){t.updateCity({cityName:t.cityName,weather:{temperature:e.main.temp,temperatureFeels:e.main.feels_like,description:e.weather[0].main}})}),(function(t){alert(t.body.message)}))},goToCity:function(){this.$router.push("/"+this.cityName)}})},Z=Y,tt=Object(p["a"])(Z,V,X,!1,null,null,null),et=tt.exports,nt={name:"Home",components:{citySearch:Q,cityCard:et},data:function(){return{input:"asdfasd"}},computed:Object(u["a"])({},Object(b["c"])(["getCities"]))},rt=nt,at=Object(p["a"])(rt,R,A,!1,null,null,null),it=at.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(t.city.name)+", "+t._s(t.city.country))]),n("p",[t._v("Temperature: "+t._s(t.city.weather.temperature))]),n("p",[t._v("Feels like: "+t._s(t.city.weather.temperatureFeels))]),n("p",[t._v("Weather: "+t._s(t.city.weather.description))]),t.isCurrent?[n("cButton",{on:{click:t.addCurrentCity}},[t._v("Add")])]:[n("cButton",{on:{click:t.updateCurrentCity}},[t._v("Update")]),n("cButton",{on:{click:t.removeCurrentCity}},[t._v("Remove")])],t.city.weatherForecast?n("chart",{attrs:{chartData:t.chartData,chartOptions:t.chartOptions}}):t._e()],2)},st=[],ot=n("1fca"),ut=ot["b"].reactiveProp,dt={extends:ot["a"],mixins:[ut],props:["chartOptions"],mounted:function(){this.renderChart(this.chartData,this.chartOptions)}},ft=dt,lt=Object(p["a"])(ft,T,q,!1,null,null,null),mt=lt.exports,pt={name:"City",components:{chart:mt},data:function(){return{chartOptions:{responsive:!0,maintainAspectRatio:!1}}},computed:Object(u["a"])({},Object(b["c"])(["getCity","getCurrentCity"]),{city:function(){return this.getCity(this.$route.params.cityName)||this.getCurrentCity},isCurrent:function(){return!this.getCity(this.$route.params.cityName)},chartData:function(){return{labels:this.city.weatherForecast&&this.city.weatherForecast.map((function(t){return t.date})),datasets:[{label:"Temperature",backgroundColor:"#3da0a4",data:this.city.weatherForecast&&this.city.weatherForecast.map((function(t){return t.temperature})),pointRadius:15,pointStyle:"rect",pointHoverRadius:16,showLine:!1}]}}}),methods:Object(u["a"])({},Object(b["d"])(["addCity","removeCity","updateCity","fillCurrentCity"]),{},Object(b["b"])(["getWeather","getHourlyWeather"]),{removeCurrentCity:function(){this.fillCurrentCity(this.city),this.removeCity(this.city.name)},updateCurrentCity:function(){this.getCityWeather(),this.getCityHourlyWeather()},addCurrentCity:function(){this.addCity(this.city)},getCityWeather:function(){var t=this;this.getWeather(this.city.name).then((function(e){t.updateCity({cityName:t.city.name,weather:{temperature:e.main.temp,temperatureFeels:e.main.feels_like,description:e.weather[0].main}})}),(function(t){alert(t.body.message)}))},getCityHourlyWeather:function(){var t=this;this.getHourlyWeather(this.city.name).then((function(e){t.updateCity({cityName:t.city.name,weather:!1,weatherForecast:e.list.filter((function(t,e){return e<=8})).map((function(t){return{temperature:t.main.temp,date:t.dt_txt}}))})}),(function(e){alert(e.body.message),t.$router.push("/")}))}}),created:function(){this.city.weatherForecast||this.getCityHourlyWeather()}},ht=pt,yt=Object(p["a"])(ht,ct,st,!1,null,null,null),bt=yt.exports;c["a"].use(M["a"]);var jt=[{name:"Home",path:"/",component:it},{name:"City",path:"/:cityName",component:bt,beforeEnter:function(t,e,n){I.getters.getCity(t.params.cityName)||I.getters.getCurrentCity?(document.title=t.params.cityName,n()):!I.getters.getCurrentCity||I.getters.getCurrentCity&&I.getters.getCurrentCity.name!==t.params.cityName?_t(t,n):n()}},{path:"*",redirect:{path:"/"}}],vt=new M["a"]({routes:jt,base:"/weather-vue/"});vt.beforeEach((function(t,e,n){"City"!==t.name&&(document.title=t.name);var r=localStorage.getItem("cities"),a=JSON.parse(r);r&&a.length&&!I.getters.getCities.length?gt(a,n):!r&&navigator.geolocation?Ct(n):n()}));var gt=function(t,e){var n=[];t.forEach((function(r){I.dispatch("getWeather",r).then((function(t){n.push(t)}),(function(t){alert(t.body.message)})).finally((function(){t.length===n.length?(n.sort((function(e,n){return t.indexOf(e.name)-t.indexOf(n.name)})),n.forEach((function(t){I.commit("addCity",{id:t.id,name:t.name,country:t.sys.country,weather:{temperature:t.main.temp,temperatureFeels:t.main.feels_like,description:t.weather[0].main}})})),e()):e()}))}))},Ct=function(t){navigator.geolocation.getCurrentPosition((function(e){var n={lat:e.coords.latitude,lon:e.coords.longitude};I.dispatch("getWeatherByCoords",n).then((function(e){I.commit("addCity",{id:e.id,name:e.name,country:e.sys.country,weather:{temperature:e.main.temp,temperatureFeels:e.main.feels_like,description:e.weather[0].main}}),t()}),(function(e){t()}))}),(function(){t()}))},_t=function(t,e){I.dispatch("getWeather",t.params.cityName).then((function(t){I.getters.getCity(t.name)||I.commit("fillCurrentCity",{id:t.id,name:t.name,country:t.sys.country,weather:{temperature:t.main.temp,temperatureFeels:t.main.feels_like,description:t.weather[0].main}}),document.title=t.name,e(t.name)}),(function(t){e("/")}))},wt=vt,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{on:{click:function(e){return e.stopPropagation(),t.emitClick(e)}}},[t._t("default")],2)},Ot=[],Nt={name:"cButton",props:{prevent:Boolean,stop:Boolean},methods:{emitClick:function(t){this.prevent&&t.preventDefault(),this.stop&&t.stopPropagation(),this.$emit("click")}}},Wt=Nt,xt=Object(p["a"])(Wt,kt,Ot,!1,null,null,null),zt=xt.exports,Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{attrs:{type:"text",name:"",id:"",placeholder:t.$slots.default[0].text,required:t.required},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])},St=[],Pt={name:"cInput",props:{value:{type:String},required:{type:Boolean}}},$t=Pt,Bt=Object(p["a"])($t,Ft,St,!1,null,null,null),Et=Bt.exports,Ht={install:function(t,e){t.component(zt.name,zt),t.component(Et.name,Et)}},Dt=Ht;n("7e7d");c["a"].config.productionTip=!1,c["a"].use(Dt),new c["a"]({router:wt,store:I,render:function(t){return t(C)}}).$mount("#app")},"7e7d":function(t,e,n){}});
//# sourceMappingURL=app.948eb778.js.map