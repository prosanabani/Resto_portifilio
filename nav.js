const priamryNav = document.querySelector('.nav-bar');
const navToggle = document.querySelector('.navigation-button')

navToggle.addEventListener('click' , () =>{

    const visibility = priamryNav.getAttribute("date-visible")

    console.log(visibility);
    
    if(visibility === "false"){
        priamryNav.setAttribute("data-visible" , true)
    }


     
} )