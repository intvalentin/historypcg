var theme = 1;
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
function closeMenu() {
    document.getElementById("round-menu-v1").style.transform = "translateX(102%)" ;
    document.querySelectorAll("[class^=round-hide]").forEach(el => {el.style.opacity = 1;});
}
function handleTouchMove(evt) {
    if ( ! xDown  || ! yDown ) {
        return;
    } else{
        var a = xDown;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;

    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            document.getElementById("round-menu-v1").style.transform = "translateX(0)";
            document.querySelectorAll("[class^=round-hide]").forEach(el => {el.style.opacity = 0;});
        } else {
            /* right swipe */
            document.getElementById("round-menu-v1").style.transform = "translateX(102%)" ;
            document.querySelectorAll("[class^=round-hide]").forEach(el => {el.style.opacity = 1;});
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
document.getElementById("round-theme-button").addEventListener("click", function (evnt) {
    if (theme == 1) {
        document.querySelectorAll("[class^=round-theme]").forEach(el => {el.classList.remove("round-theme-white"); el.classList.add("round-theme-dark")});
        
        //Default
        document.getElementById("body").classList.remove("background-white");
        document.getElementById("body").classList.add("background-dark");
        //Default

        theme++;
    } else {
        document.querySelectorAll("[class^=round-theme]").forEach(el => {el.classList.remove("round-theme-dark"); el.classList.add("round-theme-white")});
        //Default
        document.getElementById("body").classList.remove("background-dark");
        document.getElementById("body").classList.add("background-white");
        //Default
        theme--;
    }
    document.getElementById("round-menu-v1").style.transform = "translateX(102%)" ;
    document.querySelectorAll("[class^=round-hide]").forEach(el => {el.style.opacity = 1;});
});