var saveImage = function() {
    html2canvas(document.querySelector("#mainContainer")).then(canvas => {
        document.body.appendChild(canvas)
    });
}