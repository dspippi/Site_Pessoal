

document.addEventListener('scroll',function(){
    let s = window.scrollY;
    let opacityVal = (s/550.0);
    console.log(opacityVal)
    this.querySelector(".blurred").style.opacity=1.0-opacityVal;
})