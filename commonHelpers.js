import{a as h,S as F,i as w}from"./assets/vendor-89feecc5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function g(s){w.error({message:s,position:"topRight",timeout:2e3,close:!1,overlay:!1,displayMode:"once",color:"#EF4040",messageColor:"#FFFFFF",messageSize:"16px",iconColor:"#FFFFFF",theme:"dark",messageLineHeight:"24px",iconColor:"#FFFFFF"})}const v="38212376-ffcb529addc704f756c0c7d48",S=`https://pixabay.com/api/?key=${v}&image_type=photo&orientation=horizontal&safesearch=true`;h.defaults.baseURL=S;const $=document.querySelector(".search-form"),y=document.querySelector(".search-input"),f=document.querySelector(".gallery"),d=document.querySelector(".loader"),u=document.querySelectorAll(".loader")[1],c=document.querySelector(".load-more-btn"),p=40;let n=1;const m=new F(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",captionClass:"caption-style",close:!0,closeText:"×",fadeSpeed:250,animationSpeed:250});$.addEventListener("submit",q);c.addEventListener("click",M);function q(s){s.preventDefault(),f.innerHTML="",d.classList.add("loader-show"),n=1;const r=y.value;_(r)}function M(){c.classList.remove("load-more-btn-show"),u.classList.add("loader-more-show");const s=y.value;C(s)}async function C(s){const r=`&q=${s}&per_page=${p}&page=${n}`;return await h.get(r).then(t=>{const a=t.data.totalHits,e=Math.ceil(a/p);if(n>e)g("We're sorry, but you've reached the end of search results."),u.classList.remove("loader-more-show"),m.refresh();else{n=n+1;const o=b(t.data.hits);f.insertAdjacentHTML("beforeend",o),u.classList.remove("loader-more-show"),c.classList.add("load-more-btn-show");const l=document.querySelector(".photo-card").getBoundingClientRect().height;window.scrollBy({top:l*2,behavior:"smooth"}),m.refresh()}}).catch(t=>console.log(t))}async function _(s){const r=`&q=${s}&per_page=${p}&page=${n}`;return await h.get(r).then(t=>{if(t.data.hits.length===0)g("Sorry, there are no images matching your search query. Please try again!"),d.classList.remove("loader-show");else{n=n+1;const a=b(t.data.hits);f.insertAdjacentHTML("beforeend",a),d.classList.remove("loader-show"),c.classList.add("load-more-btn-show"),m.refresh()}}).catch(t=>console.log(t))}function b(s){return s.map(({webformatURL:r,largeImageURL:t,tags:a,likes:e,views:o,comments:i,downloads:l,user:L})=>`
        <li class="photo-card">
            <a href="${t}" class="gallery__item">
                <img src="${r}" alt="Author: ${L}, tags: ${a}" class="gallery__image" />
            </a>
            <div class="info">
                <p class="info-item">
                    <b>Likes</b>
                    <span>${e}</span>
                </p>
                <p class="info-item">
                    <b>Views</b>
                    <span>${o}</span>
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    <span>${i}</span>
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    <span>${l}</span>
                </p>
            </div>
        </li>
        `).join("")}
//# sourceMappingURL=commonHelpers.js.map
