let boton = document.getElementsByTagName("a")


function prevent(v) {
    v.preventDefault()

}
for (let i = 0; i < boton.length; i++) {
    boton[i].addEventListener('click', prevent)
}
// CAMBIAR IMAGENES

let imagenes = document.getElementsByTagName("img")
    // console.log(imagenes)

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("click", () =>
        imagenes[i].src = getRandom(imgSrc))

}

// PARRAFOS DE COLOR Y FONDO
let textos = document.getElementsByTagName("p")
    // console.log(textos)
for (let i = 0; i < textos.length; i++) {
    textos[i].addEventListener("click", () => {
        textos[i].style.color = getRandom(palette);
        textos[i].style.backgroundColor = getRandom(palette)
    })
}
// ARTICULOS Y SECCIONES


let article = document.getElementsByTagName("article")
    // console.log(article)
let section = document.getElementsByTagName("section")
    // console.log(section)
for (let i = 0; i < article.length; i++) {

    article[i].addEventListener("click", () => article[i].style.backgroundColor = getRandom(palette))
}

// cursor hover
imagViejas = []
for (let imagen of imagenes) {
    imagViejas.push(imagen.src)
        // console.log(imagen)
}
console.log("imagenesviejas", imagViejas)
    // console.log("imagenes nuevas", imagenes)



for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('mouseover', () => imagenes[i].src = getRandom(imgSrc));
    imagenes[i].addEventListener('mouseout', () => imagenes[i].src = imagViejas[i])
}
for (let i = 0; i < textos.length; i++) {
    textos[i].addEventListener('mouseover', () => {
        textos[i].style.color = getRandom(palette);
        textos[i].style.backgroundColor = getRandom(palette)
    })
    textos[i].addEventListener('mouseout', () => {
        textos[i].style.color = "black";
        textos[i].style.backgroundColor = "transparent"
    })
}


for (let i = 0; i < article.length; i++) {
    article[i].addEventListener("mouseover", () => article[i].style.backgroundColor = getRandom(palette));
    article[i].addEventListener("mouseout", () =>
        article[i].style.backgroundColor = getRandom(palette))

}


// PREMIUM
const colors = ['red', 'blue', 'green']
    // console.log(colors[Math.floor(Math.random() * colors.length)])
const getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)]
}

console.log(getRandom(colors))
    // imprime 'red', 'blue' o 'green'

const palette = ["#001219", "#005F73", "#0A9396", "#E9D8A6", "#EE9B00", "#BB3E03", "#AE2012"]
    // console.log(getRandom(palette))

const imgSrc = ["./assets/abracadabra.gif", "./assets/magic-1.gif", "./assets/magic-2.gif", "./assets/magic-3.gif", "./assets/magic-4.gif", "./assets/magic-5.gif", "./assets/magic-6.gif"]
    // console.log(getRandom(imgSrc))