!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=()=>{const e=document.querySelectorAll("form"),t=document.createElement("div");t.style.cssText="font-size: 2rem",e.forEach(e=>{e.addEventListener("submit",n=>{n.preventDefault(),e.append(t);const r=new XMLHttpRequest;r.addEventListener("readystatechange",()=>{t.textContent="Загрузка",4===r.readyState&&(200===r.status?t.textContent="Отправлено":t.textContent="Ошибка")}),r.open("POST","./server.php"),r.setRequestHeader("Content-Type","application/json");let o=new FormData(e),u={};for(let e of o.entries())u[e[0]]=e[1];r.send(JSON.stringify(u))}),e.addEventListener("input",t=>{((e,t)=>{const n=t.target;if("input"===t.type){if(n.matches("input")){const e=n.getAttribute("name");"user_name"!==e&&"user_message"!==e||(n.value=n.value.replace(/[^А-Яа-яёЁ\s]/,"")),"user_phone"===e&&(n.value=n.value.replace(/[^0-9+]/,""))}}else"submit"===t.type&&(e=>{const t=[];e.querySelectorAll("input").forEach(e=>{""===e.value.trim()&&t.push(e.name)})})(e)})(e,t)})})};(()=>{const e=document.querySelectorAll(".call-btn"),t=document.querySelector(".popup");e.forEach(e=>{e.addEventListener("click",()=>{t.style.display="block"})}),t.addEventListener("click",e=>{let n=e.target;n.classList.contains("popup-close")?t.style.display="none":(n=n.closest(".popup-content"),n||(t.style.display="none"))})})(),r()}]);