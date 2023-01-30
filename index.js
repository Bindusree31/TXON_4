let headerEl = document.getElementById("header");
let navbarNavAltMarkup = document.getElementById("navbarNavAltMarkup");
let navbarEl = document.getElementById("navbar");

window.addEventListener("scroll",() =>{
    headerEl.classList.toggle("shadow",window.scrollY>0);
})

navbarNavAltMarkup.onclick = () =>{
    navbarEl.classList.toggle("active");
}

//dark mode//light mode//
let darkmodeEl = document.getElementById("darkmode");
darkmodeEl.onclick = () =>{
    if(darkmodeEl.classList.contains("bx-moon")){
        darkmodeEl.classList.replace("bx-moon","bx-sun");
        
        document.body.classList.add("active");
    }else{
        darkmodeEl.classList.replace("bx-sun","bx-moon");
        document.body.classList.remove("active");
    }
};