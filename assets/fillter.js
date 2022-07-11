var inputimage = document.getElementById("imagefile");
var image;
var canvas = document.getElementById("cvs");

function loadImage(){
  image = new SimpleImage(inputimage);
  image.drawTo(canvas);
}

function doGreyscale() {
    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg)
    }
  image.drawTo(canvas);
}

function doRed() {
    for (var pixel of image.values()) {
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    if (avg < 128 ) {
      pixel.setRed(255);
      pixel.setBlue(0);
      pixel.setGreen(0);
    } else {
      pixel.setRed(255);
      pixel.setBlue(2*avg-255);
      pixel.setGreen(2*avg-255);
    }
    }
  image.drawTo(canvas);
}

function doRain() {
    var width = image.getWidth();
    for (var pixel of image.values()) {
    if (pixel.getX() < (width/3)) {
      pixel.setRed(255);
    } else if (pixel.getX() > ((width/3)*2)) {
      pixel.setBlue(255);
    } else {
      pixel.setGreen(255);
    }
      
    }
  image.drawTo(canvas);
}

function doReset(){
  image = new SimpleImage(inputimage);
  image.drawTo(canvas);
}

function doClears(){
  var context = canvas.getContext("2d");
context.clearRect(0,0,canvas.width,canvas.height);
}