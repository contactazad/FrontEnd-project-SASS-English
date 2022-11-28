var websitesBtn = document.querySelector('#btnweb');
websitesBtn.addEventListener("click" , btnweb);

var photoshopBtn = document.querySelector('#btnphotoshop');
photoshopBtn.addEventListener("click" , btnphotoshop);

var videosBtn = document.querySelector('#btnvideos');
videosBtn.addEventListener("click" , btnvideos);

var allBtn = document.querySelector('#btnall');
allBtn.addEventListener("click" , btnall )

const divWebsites = document.querySelector('.div-websites');
const divPhotoshop = document.querySelector('.div-photoshop');
const divVideos = document.querySelector('.div-videos');

function btnweb(){

    divWebsites.style.display = "flex";
    divPhotoshop.style.display = "none";
    divVideos.style.display = "none";
}

function btnphotoshop(){
    
    divWebsites.style.display = "none";
    divPhotoshop.style.display = "flex";
    divVideos.style.display = "none";
}

function btnvideos(){
    
    divWebsites.style.display = "none";
    divPhotoshop.style.display = "none";
    divVideos.style.display = "flex";
}

function btnall(){
    
    divWebsites.style.display = "flex";
    divPhotoshop.style.display = "flex";
    divVideos.style.display = "flex";
}


