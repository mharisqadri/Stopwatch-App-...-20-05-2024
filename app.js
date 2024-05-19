let sec = 1;
let min = 0;
let hour =0; 
let countEl = document.querySelectorAll('.count');

let stopWatch = setInterval(function () {
    countEl[0].innerHTML = `${hour}:${min}:${sec++}`; minFunc (), hourFunc ()
    }, 1000);

function clearTimeInter() {
    clearInterval(stopWatch);
}

let timeoutRef = setTimeout(function () {
    clearInterval(stopWatch);
}, 100000000000000);

function stopTimeout() {
    clearTimeout(timeoutRef);
}

function minFunc (){
    if (sec===59){
min++;
sec=1;
    }
}

function hourFunc (){
        if (min===59){
    hour++;
    min=1;
        }
}

function restart (){
sec = 0;
min = 0;
hour =0;
    
}


































/////// ye sahi nahi chal raha dekhna he kia masla he //////////////////////




// let sec = 1;
// let min = 0;
// let hour = 0;
// let countEl = document.querySelectorAll('.count');

// let stopWatch = setInterval(function () {
//     countEl[0].innerHTML = `${min}:${min}:${sec++}`; minFunc (),hourFunc()
//     }, 1);

// function clearTimeInter() {
//     clearInterval(stopWatch);
// }

// let timeoutRef = setTimeout(function () {
//     clearInterval(stopWatch);
// }, 5000);

// function stopTimeout() {
//     clearTimeout(timeoutRef);
// }

// function minFunc (){
//     if (sec===59){
// min++;
// sec=1;
//     }
//     // countEl[0].innerHTML;
// }

// function hourFunc (){
//     if (min===59){
// hour++;
// min=1;
//     }
//     // countEl[0].innerHTML;
// }