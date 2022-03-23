var content3 = document.getElementById("content3");
var button = document.getElementById("show-more3");

button.onclick = function() {
    if (content3.className == "open") {
        content3.className = "";

    } else {
        content3.className = "open";
    }
};