// function beweegbanaan(event) {

//     var x = event.clientX;
//     var y = event.clientY;
//     console.log(`x:${x} y:${y}`)
//     var banaan = document.getElementById('banaan')
//     banaan.style.backgroundPositionX = x+'px'
//     banaan.style.backgroundPositionY = y+'px'
// }

$(document).mousemove(function(e){
    $("#banaan").stop().animate({left:e.pageX - 150, top:e.pageY - 150}, 250);
});

let firsttimein = false

$(document).mouseleave(function() {
    if(firsttimein === true) {
        setTimeout(function() {
            console.log('Gewonnen!')
            winelement = document.getElementById('wintext')
            winelement.style.visibility = 'visible'
            banelement = document.getElementById('banaan')
            banelement.style.visibility = 'hidden'
        }, 250)
    }
})


$(document).mouseenter(function() {
    firsttimein = true
})