const inputFile = document.getElementById('archivo')
const zona_descarga = document.getElementById('zona-de-carga')

zona_descarga.addEventListener('click', () => inputFile.click())

zona_descarga.addEventListener('dragover', (e)=>{
    e.preventDefault()
    zona_descarga.classList.add('drop-zone--active')
})
zona_descarga.addEventListener('dragleave', (e)=>{
    e.preventDefault()
    zona_descarga.classList.remove('drop-zone--active')
})
zona_descarga.addEventListener('drop', (e)=>{
    e.preventDefault()
    inputFile.files = e.dataTransfer.files
    console.log(inputFile.files)
})
inputFile.addEventListener('change', (e) => {
    console.log(inputFile.files)
})