var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};

document.getElementById("back-buttn").onclick=function(){
      window.location.replace("index.html");
}