var header = document.getElementById('header');

var navHeader = document.getElementById('navigation-header');

var content = document.getElementById('content');

var showSideBar = false;

function toggleSideBar() {
    showSideBar = !showSideBar
    
    if (showSideBar) {
        
        navHeader.style.marginLeft = '-10vw'
        navHeader.style.animationName = 'showSideBar';
        content.style.filter = 'blur(2px)';
        
    } else {
        navHeader.style.marginLeft = '-100vw'
        navHeader.style.animationName = '';
        content.style.filter = '';
    }
}

function closeSideBar() {
    if (showSideBar) {
        toggleSideBar()
    }
}

window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && showSideBar) {
        toggleSideBar()
    }
    if(window.innerWidth < 767){
        document.getElementById('title-names').innerText = "Nome e RGM"
    }
    else{
        document.getElementById('title-names').innerText = "Nome"
    }
})

if(window.innerWidth < 767){
    document.getElementById('title-names').innerText = "Nome e RGM"
}