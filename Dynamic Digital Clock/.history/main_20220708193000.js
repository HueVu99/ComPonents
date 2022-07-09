let section = document.querySector("section"),
icons = document.querySector(".icon");

icons.onclick =() =>{
    section.classList.toggle("dark");
}