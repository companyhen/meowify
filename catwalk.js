// when the page loads, animateCat
$(document).ready(animateCat());


function animateCat() {
    var $newdiv1 = $('<div id="catBalloon" style="height: 25px; display: none;"><a href=""><img src="img/balloon.png" /></a></div>');
    $('body').append($newdiv1);
    moveCat(500);
}

function moveCat(count) {
    // start positions
    leftpos = -100;
    toppos = 0;
    n = 0;
    var catBalloon = document.getElementById("catBalloon");
    catBalloon.style.position = "absolute";
    catBalloon.style.left = -250 + "px";
    catBalloon.style.top = 0 + "px";
    moveit();

    function moveit() {
        n += 1;
        catBalloon.style.display = "inherit";
        catBalloon.style.left = ((parseInt(catBalloon.style.left) || 0) + 5) + "px";
        catBalloon.style.top = ((parseInt(catBalloon.style.top) || 0) + toppos) + "px";

        if (count-- > 0) {
            setTimeout(moveit, 75);
        }
        else {
            catBalloon.style.display = "none";            
        }
    }
}
