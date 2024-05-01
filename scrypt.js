  const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if ( menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })
}

let slider = 30;
function leftslide(){
    if(slider>0 ){
        slider-=10;
        
        document.getElementById("slider").style.transform="translateX(-"+slider+"%)";
        if(slider==0){document.getElementById("leftbtn").style.color="grey"}
        if(slider<=40)document.getElementById("rightbtn").style.color="black";
    }
    
}

function rightslide(){
    if(slider<50 ){
        slider+=10;
        document.getElementById("slider").style.transform="translateX(-"+slider+"%)";
        if (slider>=10)document.getElementById("leftbtn").style.color="black";
        if(slider==50)document.getElementById("rightbtn").style.color="grey";
    }
}

function showDialog(){
    document.getElementById("dialog").showModal();
}

function closeDialog(){
    document.getElementById("dialog").close();
}