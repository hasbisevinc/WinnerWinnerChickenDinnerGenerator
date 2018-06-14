var saveImage = function() {
    html2canvas(document.querySelector("#mainContainer")).then(canvas => {
        Canvas2Image.saveAsPNG(canvas, 1280, 720, "png");
    });
}