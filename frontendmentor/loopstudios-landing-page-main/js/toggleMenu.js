const toggleMenu = () =>{
    const toggle = document.querySelector('.header .menu-icon button');
    const header = document.querySelector('.header')
    toggle.addEventListener('click', () => {
        header.classList.toggle('open')
    })
    
}

export {toggleMenu}