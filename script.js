var images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg"
    ];
    var num = 0;
    function next(a) {
    var slider = document.getElementById('slider');
    num=(num+a+images.length)%images.length;
    slider.src = images[num];
}

var applications = [
    "app1.jpg",
    "app2.jpg",
    "app3.jpg",
    "app4.jpg",
    "app5.jpg",
    "app6.jpg",
    "app7.jpg"
    ];
    var num = 0;
    function move(v) {
    var sliderapp = document.getElementById('sliderapp');
    num=(num+v+applications.length)%applications.length;
    sliderapp.src = applications[num];
}
var theme = document.getElementById("wrapers");

theme.onclick = function() {
    alert(new Date())
}