var content2 = document.getElementById("content2");
var button = document.getElementById("show-more2");

button.onclick = function() {
    if (content2.className == "open") {
        content2.className = "";

    } else {
        content2.className = "open";
    }
};