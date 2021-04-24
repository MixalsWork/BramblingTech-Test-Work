const bgVideo = document.querySelector('.bg__video');
const bgCircle = document.querySelector('.bg__circle');
const content = document.querySelector('.content');
const mainWrapper = document.querySelector('.main__wrapper');

window.addEventListener('scroll',() => {
    let scrollPosition = window.scrollY/200 +1;
    let opacityLevel = window.scrollY/1200;
    bgCircle.style.transform = `scale(${scrollPosition})`;
    content.style.opacity = opacityLevel
    bgVideo.style.transform = `scale(${scrollPosition})`;
    if(scrollPosition > 5){
        mainWrapper.style.opacity ='0';
    }else{
        mainWrapper.style.opacity ='1';
    }
})
