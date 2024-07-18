let decreaseBtn = document.getElementById("decreaseBtn");
let increaseBtn = document.getElementById("increaseBtn");
let resetBtn = document.getElementById("resetBtn");
let countText = document.getElementById("myText");

let count = 0;

decreaseBtn.onclick = function() {
    count--;
    countText.innerText = count;

}
increaseBtn.onclick = function() {
    count++;
    countText.innerText = count;

}
resetBtn.onclick = function() {
    count = 0;
    countText.innerText = count;

}

