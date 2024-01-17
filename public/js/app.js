
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type == 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}


btnMobile.addEventListener('click',toggleMenu);
btnMobile.addEventListener('touchstart',toggleMenu, {passive:true});

const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    });

