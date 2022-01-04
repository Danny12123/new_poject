window.addEventListener('scroll', function(){
    const logoImage = document.querySelector('.logoimg');
    const mainNav = document.getElementById('mainNav');

    if (window.pageYOffset > 0){
        logoImage.style.height = '10px';
        mainNav.classList.add("bg-black");
        mainNav.classList.add("txt-white");
        
    }
    else {
        logoImage.style.height = '25px';
        mainNav.classList.remove("bg-black");
        mainNav.classList.remove("txt-white");
        
    }
})
/*
window.addEventListener("scroll", function(){
    var header = document.getElementsByClassName("navigation");
    header.classList.toggle("navigation", window.scrollY > 0);
})*/