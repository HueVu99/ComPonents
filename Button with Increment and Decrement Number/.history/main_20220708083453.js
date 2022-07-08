const plus = document.querySelector("plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");

let a =1;
plus.addEventListener("click",()=>{
    a++
    a =(a<10) ? "0"+a :a;
    console.log("~ a", a)
    
})
