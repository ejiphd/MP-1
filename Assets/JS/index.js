var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 100){
        nav.classList.add('nav-scrolled','shadow');
    } else{
        nav.classList.remove('nav-scrolled','shadow');
    }
});
