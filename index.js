import{a as l,i as c}from"./assets/vendor-DWF7Y0fL.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function u(r){const i="https://api.openweathermap.org/data/2.5/weather",s={q:r,appid:"07904cc67030c59fe615e3aa37a319a8",units:"metric"};try{const{data:e}=await l(i,{params:s});if(!e)throw new Error("Error");return e}catch(e){console.log(e)}}function m(r){return`
         <h2 class="countryName">${r.name}, ${r.sys.country}</h2>
          <img src="http://openweathermap.org/img/w/${r.weather[0].icon}.png" alt="${r.weather[0].description}" class="weatherImg" />
          <p class="disc">${r.weather[0].description}</p>
          <ul class="detailsList">
            <li class="weatherDetails">Temperature: ${r.main.temp}&#8451;</li>
            <li class="weatherDetails">Feels like: ${r.main.feels_like}&#8451;</li>
            <li class="weatherDetails">Humidity: ${r.main.humidity}%</li>
            <li class="weatherDetails">Pressure: ${r.main.pressure}</li>
          </ul>
  `}const a=document.querySelector(".form"),p=document.querySelector(".card");a.addEventListener("submit",f);async function f(r){r.preventDefault();const i=a.elements.city.value.trim();if(!i){c.error({title:"Error",message:"Enter city",position:"topRight"});return}try{const o=await u(i);if(!o){c.error({title:"Error",message:"Enter city",position:"topRight"});return}p.innerHTML=m(o)}catch(o){console.log(o)}}
//# sourceMappingURL=index.js.map
