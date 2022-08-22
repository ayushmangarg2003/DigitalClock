const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second  = document.getElementById("seconds");
const ampm  = document.getElementById("ampm");

function updateclock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if(h>12){
        ampm.innerText = "PM"
        h = h-12
    }

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s; 


    setTimeout(() => {
        updateclock() 
    }, 1000);
}
updateclock();