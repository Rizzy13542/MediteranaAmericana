var content1 = document.getElementById("content1");
var button = document.getElementById("show-more1");

button.onclick = function() {
    if (content1.className == "open") {
        content1.className = "";

    } else {
        content1.className = "open";
    }
};