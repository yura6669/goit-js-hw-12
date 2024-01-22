import{a as f,S as w,i as g}from"./assets/vendor-89feecc5.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(o){if(o.ep)return;o.ep=!0;const t=e(o);fetch(o.href,t)}})();function m(s){g.error({message:s,position:"topRight",timeout:2e3,close:!1,overlay:!1,displayMode:"once",color:"#EF4040",messageColor:"#FFFFFF",messageSize:"16px",iconColor:"#FFFFFF",theme:"dark",messageLineHeight:"24px"})}function y(s){g.info({message:s,position:"topRight",timeout:2e3,close:!1,overlay:!1,displayMode:"once",color:"#59A10D",messageColor:"#FFFFFF",messageSize:"16px",iconColor:"#FFFFFF",theme:"dark",messageLineHeight:"24px"})}const v="38212376-ffcb529addc704f756c0c7d48",$=`https://pixabay.com/api/?key=${v}&image_type=photo&orientation=horizontal&safesearch=true`;f.defaults.baseURL=$;const S=document.querySelector(".search-form"),L=document.querySelector(".search-input"),p=document.querySelector(".gallery"),r=document.querySelector(".loader"),l=document.querySelector(".load-more-btn"),d=40;let n=1;const h=new w(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",captionClass:"caption-style",close:!0,closeText:"×",fadeSpeed:250,animationSpeed:250});S.addEventListener("submit",M);l.addEventListener("click",q);function M(s){s.preventDefault(),p.innerHTML="",r.classList.add("loader-show"),n=1;const a=L.value;x(a)}function q(){l.classList.remove("load-more-btn-show"),r.classList.add("loader-show");const s=L.value;C(s)}async function C(s){const a=`&q=${s}&per_page=${d}&page=${n}`;return await f.get(a).then(e=>{const i=e.data.totalHits,o=Math.ceil(i/d);if(n>o)m("We're sorry, but you've reached the end of search results."),r.classList.remove("loader-show"),h.refresh();else{n=n+1;const t=b(e.data.hits);p.insertAdjacentHTML("beforeend",t);const u=document.querySelector(".photo-card").getBoundingClientRect().height;window.scrollBy({top:u*2,behavior:"smooth"}),e.data.hits.length<d?(y(`We are found ${e.data.hits.length} images.`),r.classList.remove("loader-show"),l.classList.remove("load-more-btn-show"),h.refresh()):(r.classList.remove("loader-show"),l.classList.add("load-more-btn-show"),h.refresh())}}).catch(e=>{console.log(e),m(e.message),r.classList.remove("loader-show"),l.classList.add("load-more-btn-show")})}async function x(s){const a=`&q=${s}&per_page=${d}&page=${n}`;return await f.get(a).then(e=>{if(e.data.hits.length===0)m("Sorry, there are no images matching your search query. Please try again!"),r.classList.remove("loader-show");else{const i=b(e.data.hits);p.insertAdjacentHTML("beforeend",i),e.data.hits.length<d?(y(`We are found ${e.data.hits.length} images.`),r.classList.remove("loader-show"),l.classList.remove("load-more-btn-show"),h.refresh()):(n=n+1,r.classList.remove("loader-show"),l.classList.add("load-more-btn-show"),h.refresh())}}).catch(e=>{console.log(e),m(e.message)})}function b(s){return s.map(({webformatURL:a,largeImageURL:e,tags:i,likes:o,views:t,comments:c,downloads:u,user:F})=>`
        <li class="photo-card">
            <a href="${e}" class="gallery__item">
                <img src="${a}" alt="Author: ${F}, tags: ${i}" class="gallery__image" />
            </a>
            <div class="info">
                <p class="info-item">
                    <b>Likes</b>
                    <span>${o}</span>
                </p>
                <p class="info-item">
                    <b>Views</b>
                    <span>${t}</span>
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    <span>${c}</span>
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    <span>${u}</span>
                </p>
            </div>
        </li>
        `).join("")}
//# sourceMappingURL=commonHelpers.js.map
