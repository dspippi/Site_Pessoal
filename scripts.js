
embassarATela();
playMP3();

function embassarATela(){
document.addEventListener('scroll',function(){
    let s = window.scrollY;
    let opacityVal = (s/550.0);
    console.log(opacityVal)
    this.querySelector(".blurred").style.opacity=1.0-opacityVal;
})
}

function playMP3(){
var vid = document.getElementById("aud");
vid.volume = 0.05;
vid.play();}