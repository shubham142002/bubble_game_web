function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 126; i++) {
        var a = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${a}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();

var Timer = 60;
function runTime() {
    var timeint = setInterval(function () {
        if (Timer > 0) {
            Timer--;
            document.querySelector("#timerev").textContent = Timer;
        }
        else {
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `<h2>Game is Over</h2>`;
        }
    }, 1000);


}
runTime();
var Hitrn = 0;
function newHit() {
    Hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = Hitrn;
}
newHit();

var Score = 0;
function IncreseScoreval() {
    Score += 10;
    document.querySelector("#Scoreval").textContent = Score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var Clickednum = Number(dets.target.textContent);
    if(Clickednum === Hitrn){
        newHit();
        makeBubble();
        IncreseScoreval();
    }

}); 
