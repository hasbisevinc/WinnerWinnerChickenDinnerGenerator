var uploadImageToBrowser = function(e) {
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            userSS.src = img.src;
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
}

var imageLoader = document.getElementById('uploadImage');
var userSS = document.getElementById('userSS');
imageLoader.addEventListener('change', uploadImageToBrowser, false);

var saveImage = function() {
    html2canvas(document.querySelector("#mainContainer")).then(canvas => {
        Canvas2Image.saveAsPNG(canvas, 1280, 720, "png");
    });
}