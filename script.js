let dayNight = document.querySelector('.mode')
let banner = document.querySelector('.banner')

dayNight.addEventListener("click",()=>{
    banner.classList.toggle('night');
}
)

let typingEffect = new Typed("#text",{
    strings:["Om Sharma","Coder","Developer","Programmer","Full Stack Developer"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,
})