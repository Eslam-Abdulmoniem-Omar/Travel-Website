const searchBtn=document.getElementById("search-btn"),searchBar=document.querySelector(".search-bar-container"),loginBtn=document.getElementById("login-btn"),form=document.getElementById("form"),formCon=document.querySelector(".login-form-container"),formClose=document.getElementById("form-close"),menuBar=document.getElementById("menu-bar"),navbar=document.querySelector(".navbar"),videos=document.querySelectorAll(".video"),nextEl=document.querySelector(".next"),prevEl=document.querySelector(".prev");function showForm(){formCon.style.top="0px",form.style.left="0px"}function hiddenForm(){formCon.style.top=null,form.style.left=null}function showMenu(){navbar.classList.toggle("active-menu")}searchBtn.addEventListener("click",e=>{searchBtn.classList.toggle("fa-times"),searchBar.classList.toggle("active")}),window.onscroll=()=>{searchBtn.classList.remove("fa-times"),searchBar.classList.remove("active"),navbar.classList.remove("active-menu")},loginBtn.addEventListener("click",showForm),formClose.addEventListener("click",hiddenForm),menuBar.addEventListener("click",showMenu);const country=document.querySelector(".big-text");let countries=["Egypt","Dubai","Luxurious"],index=0,counter=0;function showNextVideo(e){videos[counter].classList.remove("live"),videos[counter=(counter+1)%videos.length].classList.add("live"),index=(index+1)%countries.length,country.innerHTML=countries[index]}function showPrevVideo(e){videos[counter].classList.remove("live"),videos[counter=(counter-1+videos.length)%videos.length].classList.add("live"),index=(index-1+countries.length)%countries.length,country.innerHTML=countries[index]}nextEl.addEventListener("click",showNextVideo),prevEl.addEventListener("click",showPrevVideo);