var item,chart,cod,isIE11=!!window.MSInputMethodContext&&!!document.documentMode;document.addEventListener("DOMContentLoaded",function(){function t(t,e){r();var u=document.getElementById("phone-Data-chart"),s=window.screen.availWidth;if(u.innerHTML="",document.getElementById("detItem").insertAdjacentHTML("beforeend",'<a class="round-theme round-theme-white" href="https://www.pcgarage.ro/" style="background: none !important; border: none !important;">Link produs</a>'),s>600){var c=item[5];if("Cod"!=item[0].trim()){console.log("Item not found!"),document.getElementById("optionsChart").style.display="none",(u=document.getElementById("round-notification")).insertAdjacentHTML("beforeend",'<div class="round-theme round-theme-white round-row round-shadow-default round-right" style="position: absolute; top: 10%; text-align: center; width: 60%; left: 20%;"><div class="round-col-8"> Codul '+cod+' nu exista</div><div class="round-col-12"> <button class="round-button-normal-medium" onclick="closeNotification()">Ok</button></div></div>'),cod=void 0}else{document.getElementById("optionsChart").style.display="flex";var m=document.getElementById("round-menu-v1"),f=(getComputedStyle(m),[]),p=void 0,h=[];Chart.defaults.global.defaultFontColor="#ffffff",Chart.defaults.global.defaultColor="#ffffff",Chart.defaults.global.defaultFontFamily="myFirstFont";for(var y=9;y<item.length;y++){let e=d(item[y]),o=i(item[y]);if(!n(item[y]))break;if(parseInt(e)>parseInt(t))break;if(p==o||parseInt(e)<parseInt(t))continue;let r=l(item[y]),u=a(item[y]);p=o;let s=o+" "+r;h.push(s),f.push(u)}var g=document.getElementById("myChart").getContext("2d");(chart=new Chart(g,{type:e,data:{labels:h,datasets:[{label:t,data:f,borderColor:"rgba(255,255,255,1)",backgroundColor:"rgba(0,0,0,0.4)"}]},options:{title:{display:!0,text:c},layout:{padding:{left:0,right:0,top:0,bottom:0}},responsive:!0}})).canvas.parentNode.style.height="90%",chart.canvas.parentNode.style.width="93%"}}else{if(p=void 0,document.getElementById("optionsChart").style.display="flex","Cod"!=item[0].trim())console.log("Item not found!"),document.getElementById("optionsChart").style.display="none",(u=document.getElementById("round-notification")).insertAdjacentHTML("beforeend",'<div class="round-theme round-theme-white round-row round-shadow-default round-right" style="position: absolute; top: 10%; text-align: center; width: 60%; left: 20%;"><div class="round-col-8"> Codul '+cod+' nu exista</div><div class="round-col-12"> <button class="round-button-normal-medium" onclick="closeNotification()">Ok</button></div></div>'),cod=void 0;for(y=9;y<item.length;y++){let e=d(item[y]),r=i(item[y]);if(!n(item[y]))break;if(parseInt(e)>parseInt(t))break;if(p==r||parseInt(e)<parseInt(t))continue;let s=o(item[y]),c=l(item[y]),m=a(item[y]);p=r,u.insertAdjacentHTML("beforeend",'<div class="round-theme round-theme-white round-row round-shadow-default" style="margin-top: 5px;"><div class="round-col-12"><span>'+s+" | "+c+'</span></div><div class="round-col-12"><span>'+m+" RON</span></div></div>")}}}function e(){null!=chart&&chart.destroy(),document.getElementById("detItem").innerHTML=""}function n(t){let e=t.split(" ");return null!=e[0]&&null!=e[1]&&null!=e[2]}function o(t){let e=t.split(" ")[0].split("/");return e=e[1]+"/"+e[0]+"/"+e[2]}function d(t){return t.split(" ")[0].split("/")[2]}function i(t){let e=t.split(" ")[0].split("/");return e=e[1]+"/"+e[0]}function l(t){let e=t.split(" ");return e=e[1]+" "+e[2]}function a(t){let e=t.split(" ")[3].replace(".","");return parseInt(e)}function r(){document.getElementById("round-notification").innerHTML=""}isIE11&&(document.getElementById("body").innerHTML=""),document.getElementById("searchButton").addEventListener("click",function(n){!async function(){cod=document.getElementById("search").value,item=await fetch("./items/"+cod+".txt").then(t=>t.text()).then(t=>item=t.split("\n")),e(),t(document.getElementById("year").value,document.getElementById("chartType").value),closeMenu()}()}),document.getElementById("closeNotifButton").addEventListener("click",function(t){r()}),document.getElementById("chartType").addEventListener("change",function(n){e(),t(document.getElementById("year").value,document.getElementById("chartType").value)})},!1);