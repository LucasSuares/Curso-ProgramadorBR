let titulos = document.querySelectorAll("[title]")

console.log(titulos)

for (i of titulos){
    i.innerHTML = "Títulos alterados no JS"    
}