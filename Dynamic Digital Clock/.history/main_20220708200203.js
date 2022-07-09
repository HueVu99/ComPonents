let section = document.querySelector("section");
let icons = document.querySelector(".icons");

icons.onclick =() =>{
    section.classList.toggle("dark");
}
setInterval(()=>{

   let date = new Date() ,
   hour = date.getHours();
   document.querySelector(".hour_num").innerText = hour;
   min = date.getMinutes();
   document.querySelector(".min_num").innerText = min;
   
},1000)