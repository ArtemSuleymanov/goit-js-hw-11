import{S as d,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="47430297-39549c12782b3a6dbb0b94f2b",p="https://pixabay.com/api/";function h(n,t=1,o=12){const i=`${p}?key=${m}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${o}`;return fetch(i).then(e=>{if(!e.ok)throw new Error("Error fetching images");return e.json()})}const l=document.querySelector(".gallery");let a;function g(n){const t=n.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:s,comments:u,downloads:f})=>`<a href="${i}" class="gallery-item">
    <img src="${o}" alt="${e}" loading="lazy" />
    <div class="info">
        <p><b>Likes:</b> ${r}</p>
        <p><b>Views:</b> ${s}</p>
        <p><b>Comments:</b> ${u}</p>
        <p><b>Downloads:</b> ${f}</p>
    </div>
    </a>`).join("");l.innerHTML=t,a?a.refresh():a=new d(".gallery a")}function y(){l.innerHTML=" "}function b(){document.querySelector(".loader").classList.remove("hidden")}function L(){document.querySelector(".loader").classList.add("hidden")}const $=document.querySelector(".form"),S=document.querySelector(".input");$.addEventListener("submit",q);function q(n){n.preventDefault();const t=S.value.trim();if(t===""){c.error({title:"Error",message:"Please enter a search query"});return}y(),b(),h(t).then(o=>{if(o.hits.length===0){c.info({title:"Info",message:"Sorry, there are no images matching your search query."});return}g(o.hits)}).catch(o=>{c.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(o)}).finally(()=>L())}
//# sourceMappingURL=index.js.map