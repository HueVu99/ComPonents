let section = document.querySelector("section");
let icons = document.querySelector(".icons");

icons.onclick =() =>{
    section.classList.toggle("dark");
}
setInterval(()=>{

   let date = new Date() ,
   hour = date.getHours();

   min = date.getMinutes();
  
   console.log("~ hour", min)
   document.querySelector(".min_num").innerText = min;
},1000)