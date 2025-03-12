const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const count = document.getElementById("count");
const speed = document.getElementById("speed"); 
let count1 = 0;
let lastClickTime = 0;
let cps = 0;

increase.onclick = function () {
    count1++;
    count.textContent = count1;
    let currentTime = Date.now(); 
    if (lastClickTime !== 0) {
        let timeDiff = (currentTime - lastClickTime) / 1000; 
        cps = (1 / timeDiff).toFixed(2); 
        speed.textContent = cps; 
    }
    lastClickTime = currentTime;
};

decrease.onclick = function () {
    count1--;
    count.textContent = count1;
};

reset.onclick = function () {
    count1 = 0;
    cps = 0;
    lastClickTime = 0;
    count.textContent = count1;
    speed.textContent = "Speed: 0 CPS"; 
};

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});
