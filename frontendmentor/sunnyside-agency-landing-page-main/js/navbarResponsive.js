const  headerToogle = () => {
    const btnMenu = document.querySelector('.navbar-icon-mobile');
    const menu = document.querySelector('.navigation-wrapper-mobile');
    btnMenu.addEventListener('click', () =>{
        menu.classList.toggle('show')
    });
    console.log('fuego');
  }

  export default headerToogle