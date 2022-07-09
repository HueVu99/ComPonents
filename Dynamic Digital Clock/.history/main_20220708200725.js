let section = document.querySelector("section");
let icons = document.querySelector(".icons");

icons.onclick =() =>{
    section.classList.toggle("dark");
}
setInterval(()=>{

   let date = new Date() ,
   hour = date.getHours();
   min = date.getMinutes();
   sec = date.getSeconds();

   let d = hour < 12 ? "AM" : "PM";
   hour = hour > 12 ? hour = 12 : hour;
   hour = hour == 0 ? hour = 12 : hour;
   console.log("~ hour", sec)
   document.querySelector(".hour_num").innerText = hour;
   document.querySelector(".min_num").innerText = min;
   document.querySelector(".sec_num").innerText = sec;
},1000)