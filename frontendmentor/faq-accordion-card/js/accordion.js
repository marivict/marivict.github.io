const accordionFunction = () => {
    // const item = document.getElementsByClassName('faq__item')
document.querySelectorAll('.faq__item__title').forEach((item) =>{
    item.addEventListener('click', () =>{
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            item.nextElementSibling.classList.remove('active');
          } else {
            // Close all accordion items
            document.querySelectorAll('.faq__item__title').forEach((item) => {
              item.classList.remove('active');
              item.nextElementSibling.classList.remove('active');
            });
      
            item.classList.add('active');
            item.nextElementSibling.classList.add('active');
        }
    })
})
    
}

export {accordionFunction}
