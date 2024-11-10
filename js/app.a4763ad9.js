(function(){"use strict";var e={7401:function(e,t,a){var r=a(3751),n=a(641),i=a(33);const l={key:0,class:"load"},h={key:1,class:"weather-cont"},d={class:"weather-data"},c={class:"weather-data__city-container"},o={class:"weather-data__weather-parameters"},s={class:"weather-data__description-container"},u=["src"],p={key:2},w={key:3,class:"weather-cont"};function g(e,t,a,r,g,v){const _=(0,n.g2)("PredictedWeather");return(0,n.uX)(),(0,n.CE)(n.FK,null,[t[4]||(t[4]=(0,n.Lk)("h1",null,"Приложение погоды",-1)),t[5]||(t[5]=(0,n.Lk)("div",{class:"city-chosen"},[(0,n.Lk)("p",null,"выбранный город")],-1)),(0,n.Lk)("select",{onChange:t[0]||(t[0]=e=>(v.getWeatherData(),v.getWeatherPredict())),id:"select_"},t[1]||(t[1]=[(0,n.Lk)("option",{value:"Нижний Тагил"},"Нижний Тагил",-1),(0,n.Lk)("option",{value:"Екатеринбург"},"Екатеринбург",-1),(0,n.Lk)("option",{value:"Москва"},"Москва",-1)]),32),g.weather_data?((0,n.uX)(),(0,n.CE)("div",h,[(0,n.Lk)("div",d,[(0,n.Lk)("div",c,[(0,n.Lk)("h2",null,"Город - "+(0,i.v_)(g.weather_data.name),1)]),t[3]||(t[3]=(0,n.Lk)("div",{class:"weather-data__date"},[(0,n.Lk)("h2",null,"Сегодня")],-1)),(0,n.Lk)("div",o,[(0,n.Lk)("p",null," Температура: "+(0,i.v_)(g.weather_data.main.temp)+" °C ",1),(0,n.Lk)("p",null,"Ветер: "+(0,i.v_)(g.weather_data.wind.speed)+" м/с, "+(0,i.v_)(v.getWindDirection(g.weather_data.wind.deg)),1),(0,n.Lk)("p",null,"Влажность: "+(0,i.v_)(g.weather_data.main.humidity)+" %",1),(0,n.Lk)("p",null,"Давление: "+(0,i.v_)(g.weather_data.main.pressure)+" hPa",1)]),(0,n.Lk)("div",s,[(0,n.Lk)("img",{src:`https://openweathermap.org/img/wn/${g.weather_data.weather[0].icon}@2x.png`},null,8,u),(0,n.Lk)("p",null,(0,i.v_)(g.weather_data.weather[0].description),1)])])])):((0,n.uX)(),(0,n.CE)("div",l,t[2]||(t[2]=[(0,n.Lk)("p",null,"Загрузка...",-1)]))),g.arrFilterDate?((0,n.uX)(),(0,n.CE)("div",w,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(g.arrFilterDate,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{class:"predicted-container",key:t},[(0,n.bF)(_,{"weather-predict":g.weather_predict??null,"index-weather":e,"get-degw":v.getWindDirection},null,8,["weather-predict","index-weather","get-degw"])])))),128))])):((0,n.uX)(),(0,n.CE)("div",p,"Загрузка..."))],64)}a(4114);const v={key:0},_={key:1,class:"weather-cont"},f={class:"weather-data"},k={class:"weather-data__city-container"},m={class:"weather-data__date"},L={class:"weather-data__weather-parameters"},y={class:"weather-data__description-container"},D=["src"];function P(e,t,a,r,l,h){return a.weatherPredict?((0,n.uX)(),(0,n.CE)("div",_,[(0,n.Lk)("div",f,[(0,n.Lk)("div",k,[(0,n.Lk)("h2",null,"Город - "+(0,i.v_)(a.weatherPredict.city.name),1)]),(0,n.Lk)("div",m,[(0,n.Lk)("h2",null,(0,i.v_)(h.getDateWeather(a.weatherPredict,a.indexWeather)),1)]),(0,n.Lk)("div",L,[(0,n.Lk)("p",null," Температура: "+(0,i.v_)(a.weatherPredict.list[a.indexWeather].main.temp)+" °C ",1),(0,n.Lk)("p",null,"Ветер: "+(0,i.v_)(a.weatherPredict.list[a.indexWeather].wind.speed)+" м/с, "+(0,i.v_)(a.getDegw(a.weatherPredict.list[a.indexWeather].wind.deg)),1),(0,n.Lk)("p",null,"Влажность: "+(0,i.v_)(a.weatherPredict.list[a.indexWeather].main.humidity)+" %",1),(0,n.Lk)("p",null,"Давление: "+(0,i.v_)(a.weatherPredict.list[a.indexWeather].main.pressure)+" hPa",1)]),(0,n.Lk)("div",y,[(0,n.Lk)("img",{src:`https://openweathermap.org/img/wn/${a.weatherPredict.list[a.indexWeather].weather[0].icon}@2x.png`},null,8,D),(0,n.Lk)("p",null,(0,i.v_)(a.weatherPredict.list[a.indexWeather].weather[0].description),1)])])])):((0,n.uX)(),(0,n.CE)("p",v))}var W={props:["weatherPredict","indexWeather","getDegw"],methods:{getDateWeather(e,t){let a=new Date(1e3*e.list[t].dt);return`${a.getDate()<10?"0"+a.getDate():a.getDate()}.${+a.getMonth()+1<10?"0"+(+a.getMonth()+1):a.getMonth()+1}.${a.getFullYear()}`}}},b=a(6262);const x=(0,b.A)(W,[["render",P]]);var C=x,E={name:"App",data(){return{weather_predict:null,weather_data:null,weather_date:new Date(17305704e5),latlon:null,arrFilterDate:null}},mounted(){this.getWeatherData(),this.getWeatherPredict()},methods:{getWeatherData(){let e="lat=57.9194&lon=59.965";e=this.getValue(),this.latlon=e;let t=`https://api.openweathermap.org/data/2.5/weather?${e}&appid=bb57199299dbac295d19c2e303bfe470&units=metric&lang=ru`;console.log(t),fetch(t).then((e=>e.json())).then((e=>{this.weather_data=e}))},getWeatherPredict(){let e=`https://api.openweathermap.org/data/2.5/forecast?${this.latlon??"lat=57.9194&lon=59.965"}&appid=b92cabe8d54a8c11f45f761e5d5570cb&units=metric&lang=ru`;console.log(e),fetch(e).then((e=>e.json())).then((e=>{this.weather_predict=e})).then(this.filterPredicted)},getValue(){let e=document.getElementById("select_"),t=e.value;return"Екатеринбург"==t?"lat=56.88&lon=60.6122":"Москва"==t?"lat=55.7522&lon=37.6156":"Нижний Тагил"==t?"lat=57.9194&lon=59.965":"lat=0&lon=0"},filterPredicted(){let e=[];console.log(this.weather_predict.list.length);for(let t=0;t<this.weather_predict.list.length;t++)new Date(1e3*this.weather_predict.list[t].dt).getDate()!=(new Date).getDate()&&14==new Date(1e3*this.weather_predict.list[t].dt).getHours()&&e.push(t+1);this.arrFilterDate=e},getWindDirection(e){const t=["↓ С","↙ СВ","← В","↖ ЮВ","↑ Ю","↗ ЮЗ","→ З","↘ СЗ"];return t[Math.round(e/45)%8]}},components:{PredictedWeather:C}};const O=(0,b.A)(E,[["render",g]]);var F=O;(0,r.Ef)(F).mount("#app")}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,r,n,i){if(!r){var l=1/0;for(o=0;o<e.length;o++){r=e[o][0],n=e[o][1],i=e[o][2];for(var h=!0,d=0;d<r.length;d++)(!1&i||l>=i)&&Object.keys(a.O).every((function(e){return a.O[e](r[d])}))?r.splice(d--,1):(h=!1,i<l&&(l=i));if(h){e.splice(o--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var o=e.length;o>0&&e[o-1][2]>i;o--)e[o]=e[o-1];e[o]=[r,n,i]}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,i,l=r[0],h=r[1],d=r[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(n in h)a.o(h,n)&&(a.m[n]=h[n]);if(d)var o=d(a)}for(t&&t(r);c<l.length;c++)i=l[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(o)},r=self["webpackChunkweather_my"]=self["webpackChunkweather_my"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(7401)}));r=a.O(r)})();
//# sourceMappingURL=app.a4763ad9.js.map