window.addEventListener('scroll', function(){
    //const logoMain = document.getElementsByClassName('logoimg');
    const mainNav = document.getElementById('mainNav');
    const logoImage = document.getElementById('home-logo');
    const logoH3 = document.getElementById('home-h3');
    const logoTxt = document.getElementById('logo');

    if (window.pageYOffset > 0){
        logoImage.style.height = '70px';
        logoImage.style.background = '#eee';
        logoImage.style.color = '#000';
        logoH3.style.fontSize = '15px';
    }
    else {
        logoImage.style.height = '80px';
        logoImage.style.background = '#fff';
        logoImage.style.si = '#000';
        logoH3.style.fontSize = '25px';
    }
})

//scroll for rigi
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight  - revealpoint){
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}
//-------------rigi


function show_hideclose() {
    var tag = document.getElementsByTagName("ul");
    for (var x=0;x<tag.length;x++)
    {
        tag[x].style.right="-220px"
    }
    
}
function show_menu() {
    var element = document.getElementsById("menu-btn");
    
    element.style.right="220px"
    
    
}
var a;
function show_hide() {

    if(a==1) {
        document.getElementById("note").style.display="inline";
        return a=0;
    }

    else {
        document.getElementById("note").style.display="none";
        return a=1;
    }
    
}
var b;
function show_hide1() {
    if(b==1) {
        document.getElementById("note-2").style.display="inline";
        return b=0;

    }

    else {
        document.getElementById("note-2").style.display="none";
        return b=1;
    }
}
var c;
function show_hide2() {
    if(c==1) {
        document.getElementById("note-3").style.display="inline";
        return c=0;

    }

    else {
        document.getElementById("note-3").style.display="none";
        return c=1;
    }
}