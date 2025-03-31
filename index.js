/* empty css                      */import{a as l,S as c,i as n}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();async function d(o){const i=`https://pixabay.com/api/?key=49620243-9bab7bc345dc9a388b23e7e17&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`,r=document.querySelector(".loader");r&&r.classList.add("active");try{return(await l.get(i)).data}catch(e){return console.error(e),{hits:[]}}finally{r&&r.classList.remove("active")}}function u(o){const t=document.querySelector(".gallery");if(t.innerHTML="",o.length===0){t.innerHTML="<p>No images found. Try another search.</p>";return}const i=o.map(r=>`
        <li class="gallery-item">
            <a href="${r.largeImageURL}">
                <img src="${r.webformatURL}" alt="${r.tags}">
<div class="info">
    <div class="stats">
        <div class="label">Likes</div>
        <div class="label">Views</div>
        <div class="label">Comments</div>
        <div class="label">Downloads</div>
        <div class="counts">${r.likes}</div>
        <div class="counts">${r.views}</div>
        <div class="counts">${r.comments}</div>
        <div class="counts">${r.downloads}</div>
    </div>
</div>



            </a>
        </li>
    `).join("");t.innerHTML=i,new c(".gallery a").refresh()}document.querySelector("#search-form").addEventListener("submit",async o=>{o.preventDefault(),console.log("submit"),console.log(o);const t=o.target.elements[0].value.trim();if(!t){n.warning({title:"Warning",message:"Enter a search term!"});return}document.querySelector(".gallery").innerHTML='<div class="loader"></div>';const{hits:i}=await d(t);i.length===0?n.error({title:"Error",message:"No images found!"}):u(i)});
//# sourceMappingURL=index.js.map
