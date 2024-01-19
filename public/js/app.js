const nav = document.querySelector(".navbar-second");
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".nav-list");



function handleButtonClick(event){

    if(event.type === "touchstart") event.preventDefault();
    event.stopPropagation();
    nav.classList.toggle("active");
    handleClickOutside(menu, () =>{
        nav.classList.remove("active");
        setAria();
    });
    setAria();
}

function handleClickOutside(targetElement, callback){
    const html = document.documentElement;
    function handleHTMLClick(event){
        if(!targetElement.contains(event.target)){
            targetElement.removeAttribute("data-target");
            html.removeEventListener("click", handleHTMLClick);
            html.removeEventListener("touchstart", handleHTMLClick);
            callback();
        }
    }
    if(!targetElement.hasAttribute("data-target")){
        html.addEventListener("click", handleHTMLClick);
        html.addEventListener("touchstart", handleHTMLClick);
        targetElement.setAttribute("data-target","");
    }

}

function setAria(){
    const isActive = nav.classList.contains("active");
    btnMenu.setAttribute("aria-expanded", isActive);
    if(isActive){
        btnMenu.setAttribute("aria-label", "Fechar Menu");
    }else{
        btnMenu.setAttribute("aria-label", "Abrir Menu");
    }
}

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);

const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    });
