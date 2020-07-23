/*
    Fetch Api
    blob(): Binary Long Object

*/

const buttonImg = document.getElementById('button-img')
const buttonPDF = document.getElementById('button-pdf')


buttonImg.addEventListener("click", () =>{

    fetch('dog.jpg')
        .then(res => res.blob())
        .then(img =>{
            document.getElementById('img').src = URL.createObjectURL(img)
        })

})
buttonPDF.addEventListener("click", () =>{

    fetch('demo.pdf')
        .then(res => res.blob())
        .then(pdf =>{
            document.getElementById('pdf').href = URL.createObjectURL(pdf)
        })

})