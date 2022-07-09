let section = document.querySelector("section");
let icons = document.querySelector(".icons");

icons.onclick =() =>{
    section.classList.toggle("dark");
}
setInterval(()=>{

   let date = new Date() ,
   hour = date.getHours();
   min = date.getMinutes();
   sec = date.
   console.log("~ hour", min)
   document.querySelector(".hour_num").innerText = hour;
   document.querySelector(".min_num").innerText = min;
},1000)