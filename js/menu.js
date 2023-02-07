(()=>{
    const headerNav = document.querySelector('.mob-menu');
    const headerBtn = document.querySelector('.top-menu-btn')
    const svgIcon = document.querySelector('.top-menu-btn use');
    let closeFlag = false;
    
    headerBtn.addEventListener('click', ()=>{
        console.log('click');
        closeFlag = !closeFlag;
        switchIcon();
        headerNav.classList.toggle('mob-menu__mobile')
    })

    function switchIcon(){
        closeFlag ? svgIcon.setAttribute('href',"./images/icon_burger/icon_burger.svg#icon-menu") : 
            svgIcon.setAttribute('href',"./images/icon_burger/icon_burger.svg#icon-close");
    }
    
})()