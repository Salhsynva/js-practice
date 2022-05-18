let box = document.getElementById('box');
let packman = document.getElementById('packman');

let leftPosition = 0;
let topPosition = 0;

let speed = 1;


box.addEventListener('click', function(e) {
    // console.log(e);
    packman.style.top = e.clientY-packman.offsetHeight/2+'px';
    packman.style.left = e.clientX-packman.offsetWidth/2+'px';
    // console.log(packman);

    leftPosition = packman.offsetLeft;
    topPosition = packman.offsetTop;

});

window.addEventListener('keydown', function (e) {
    if(isShiftPressing){
        speed = 10;
    }else{
        speed = 1;
    }

    if (e.keyCode == 39) {
        if (leftPosition == box.offsetWidth) {
            leftPosition = -packman.offsetWidth
        }
        leftPosition += speed;
        packman.style.left = leftPosition + 'px';
    } else if (e.keyCode == 37) {
        if (leftPosition == -packman.offsetWidth) {
            leftPosition = box.offsetWidth;
        }
        leftPosition -= speed;
        packman.style.left = leftPosition + 'px';
    } else if (e.keyCode == 38) {
        if (topPosition == -packman.offsetHeight) {
            topPosition = box.offsetHeight;
        }
        topPosition -= speed;
        packman.style.top = topPosition + 'px';
    } else if (e.keyCode == 40) {
        if (topPosition == box.offsetHeight) {
            topPosition = -packman.offsetHeight;
        }
        topPosition += speed;
        packman.style.top = topPosition + 'px';
    }
})

let isShiftPressing=false;
window.addEventListener('keydown',function(e){
    if(e.keyCode == 16){
        isShiftPressing=true
    }
})

window.addEventListener('keyup',function(e){
    if(e.keyCode == 16){
        isShiftPressing=false
    }
})


