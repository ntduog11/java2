function upDate(previewPic) {
    console.log("Event triggered");
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage = 
        "url('" + previewPic.src + "')";
}

function undo() {
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = 
        "Hover or focus on an image below to display here.";
}

function addTabFocus() {
    console.log("Page loaded");

    let images = document.querySelectorAll("img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}