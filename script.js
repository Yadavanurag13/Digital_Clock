const clock = document.getElementById('clock')

//console.log(clock);
let date = new Date();

console.log(date.toLocaleTimeString());

//setInterval Method mujhe koi bhi method dedo aur interval dedo 
//utne time ke liye run karunga

setInterval(function() {
    let date = new Date();

    //console.log(date.toLocaleTimeString());

    clock.innerHTML = date.toLocaleTimeString();
}, 1000)