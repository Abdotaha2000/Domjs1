var imgs = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.getElementById("lightBocContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");
var currentIndex = 0;
for( var i = 0 ; i< imgs.length ; i++){
    imgs[i].addEventListener("click", function(e){
        var imgsr = e.target.getAttribute('src');
        lightBoxItem.style.backgroundImage = `url(${imgsr})`;
        lightBoxContainer.style.display = 'flex';
    })
}
function nextSlider(){
    currentIndex++;
    if(currentIndex == imgs.length)
    {
        currentIndex = 0 ;
    }
    var imgsr = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgsr})`;
}
nextBtn.addEventListener("click" , nextSlider);
function prevSlider(){
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = imgs.length -1 ;
    }
    var imgsr = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgsr})`;
}
prevBtn.addEventListener("click", prevSlider);

function closeSlider(){
    lightBoxContainer.style.display = "none";
}
closeBtn.addEventListener("click" , closeSlider);
// document.body.addEventListener("click" , closeSlider);
document.addEventListener("keydown" , function(e){
    if (e.code== "ArrowRight"){
        nextSlider();
    }
    else if (e.code== "ArrowLeft"){
        prevSlider();
    }
    else if (e.code== "Escape"){
        closeSlider();
    }
})