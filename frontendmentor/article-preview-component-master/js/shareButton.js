const shareButton = () => {
    const button = document.querySelector('.article-preview__footer__share')
    const shareAction = document.querySelector('.article-preview__footer__share--action')
    const buttonIcon = document.querySelector('.article-preview__footer__share svg')
    const activeShare = (a) => {
         a.classList.toggle('active')
    }
    const removeShare = (a) => {
        a.classList.remove('active')
    }

    let mediaBreakPointSize = 992

    if(document.documentElement.clientWidth <= mediaBreakPointSize){
        button.addEventListener('click', ()=>{
            activeShare(shareAction)
            activeShare(button)
        })

    } else {

        button.addEventListener('mouseover', ()=>{
            activeShare(button)
            activeShare(shareAction)
         })

         buttonIcon.addEventListener('mouseover', ()=>{
            activeShare(shareAction)
            activeShare(button)
        })
    }

    window.addEventListener('click', (e)=>{
        if(!button.contains(e.target)){
            removeShare(button)
            removeShare(shareAction)
        }
    })
}

export default shareButton