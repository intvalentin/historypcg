var theme=1;document.addEventListener("touchstart",handleTouchStart,!1),document.addEventListener("touchmove",handleTouchMove,!1);var xDown=null,yDown=null;function getTouches(e){return e.touches||e.originalEvent.touches}function handleTouchStart(e){const t=getTouches(e)[0];xDown=t.clientX,yDown=t.clientY}function closeMenu(){document.getElementById("round-menu-v1").style.transform="translateX(102%)",document.querySelectorAll("[class^=round-hide]").forEach(e=>{e.style.opacity=1})}function handleTouchMove(e){if(xDown&&yDown){var t=e.touches[0].clientX,n=e.touches[0].clientY,o=xDown-t,c=yDown-n;Math.abs(o)>Math.abs(c)&&(o>0?(document.getElementById("round-menu-v1").style.transform="translateX(0)",document.querySelectorAll("[class^=round-hide]").forEach(e=>{e.style.opacity=0}),closeNotification()):(document.getElementById("round-menu-v1").style.transform="translateX(102%)",document.querySelectorAll("[class^=round-hide]").forEach(e=>{e.style.opacity=1}))),xDown=null,yDown=null}}document.getElementById("round-theme-button").addEventListener("click",function(e){1==theme?(document.querySelectorAll("[class^=round-theme]").forEach(e=>{e.classList.remove("round-theme-white"),e.classList.add("round-theme-dark")}),document.getElementById("body").classList.remove("background-white"),document.getElementById("body").classList.add("background-dark"),theme++):(document.querySelectorAll("[class^=round-theme]").forEach(e=>{e.classList.remove("round-theme-dark"),e.classList.add("round-theme-white")}),document.getElementById("body").classList.remove("background-dark"),document.getElementById("body").classList.add("background-white"),theme--),document.getElementById("round-menu-v1").style.transform="translateX(102%)",document.querySelectorAll("[class^=round-hide]").forEach(e=>{e.style.opacity=1})});