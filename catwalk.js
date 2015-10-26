// when the page loads, startPaws
$(document).ready(startPaws());


function startPaws() {
    // append 2 hidden DIVs
    var $newdiv1 = $('<div id="pawprint1" style="height: 25px; display: none;"><img src="img/balloon.png" /></div>');
    // var $newdiv2 = $('<div id="pawprint2" style="height: 85px; display: none;"><img src="https://cdn3.iconfinder.com/data/icons/pets-and-animals-1/60/Pawprint-01-128.png" /></div>');
    $('body').append($newdiv1);
    // move the DIVs
    movePaws(500);
}

function movePaws(count) {
    // start positions
    leftpos = -100;
    toppos = 0;
    n = 0;
    var pawprint1 = document.getElementById("pawprint1");
    // var pawprint2 = document.getElementById("pawprint2");
    pawprint1.style.position = "absolute";
    pawprint1.style.left = -250 + "px";
    pawprint1.style.top = 0 + "px";
    // pawprint2.style.position = "absolute";
    moveit();

    function moveit() {
        n += 1;
        pawprint1.style.display = "inherit";
        pawprint1.style.left = ((parseInt(pawprint1.style.left) || 0) + 5) + "px";
        pawprint1.style.top = ((parseInt(pawprint1.style.top) || 0) + toppos) + "px";

        if (count-- > 0) {
            setTimeout(moveit, 75);
        }
        else {
            pawprint1.style.display = "none";
            // pawprint2.style.display = "none";
        }
    }
}
