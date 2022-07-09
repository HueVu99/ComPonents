let section = document.querySelector("section");
let icons = document.querySelector(".icons");

icons.onclick =() =>{
    section.classList.toggle("dark");
}
setInterval(()=>{

   let date = new Date() ,
   hour = date.getHours();
   console.log("~ hour", hour)
   document.querySelector(".hour_num").innerText = hour;
},1000)