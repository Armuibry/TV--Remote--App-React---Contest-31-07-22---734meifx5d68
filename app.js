let powerBtn = document.getElementById('power-off');
let tv = document.getElementById('containerToggle');
let flag = 1;
let tvlight = document.getElementById('tv-light');
let remoteLight = document.getElementById('remote-light');


powerBtn.addEventListener('click', () => {
    if (flag == 1) {
        powerBtn.innerText = "ON";
        tv.innerHTML = "Power On";
        tvlight.className = "tv-on"
        remoteLight.className = "remote-on"
        setTimeout(() => {
            tvlight.className = "none"
            remoteLight.className = "none";
        }, 2000);
        flag = 0;
    }
    else {
        powerBtn.innerText = "OFF";
        tv.innerHTML = "Power Off";
        tvlight.className = "tv-light"
        remoteLight.className = "remote-light"
        setTimeout(() => {
            tvlight.className = "none"
            remoteLight.className = "none";
        }, 2000);
        flag = 1;
    }

})

let buttons = document.querySelectorAll('button');

for(let btn of buttons){
    
        btn.addEventListener('click',()=>{
            if(flag==0)
            tv.innerHTML = btn.innerText;
        })
}