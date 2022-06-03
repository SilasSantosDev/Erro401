const Menu = document.getElementById('nav-menus'),
    Toggle = document.getElementById('toggle'),
    Close = document.getElementById('close')

if(Toggle){
    Toggle.addEventListener('click', () => {
        Menu.classList.add('active')
    })
}
    
if(Close){
    Close.addEventListener('click', () => {
        Menu.classList.remove('active')
    })
}

const navLink = document.querySelectorAll('nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menus')
    navMenu.classList.remove('active')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sr = ScrollReveal({
    distance:'90px',
    duration:2000,
})

sr.reveal(`.left`,{origin:'top', delay:400})
sr.reveal(`.right`,{origin:'botton', delay:600})
sr.reveal(`.footer`,{origin:'left', delay:800})