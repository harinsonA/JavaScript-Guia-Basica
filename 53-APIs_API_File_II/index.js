const archivo = document.getElementById('archivo')
const progress = document.getElementById('progress')

// archivo.addEventListener('change', (e) =>{
//     const file  = e.target.files[0]
//     const fileReader = new FileReader()

//     fileReader.readAsDataURL(file)

//     fileReader.addEventListener('progress', (e) =>{
//         progress.style.width = Number.parseInt(e.loaded * 100 / e.total) + '%'
        
//     })
//     fileReader.addEventListener('loadend', () =>{
//         progress.style.width = '100%'
//     })

// })
const root = document.documentElement

archivo.addEventListener('change', (e) =>{
    const file  = e.target.files[0]
    const fileReader = new FileReader()

    fileReader.readAsDataURL(file)

    fileReader.addEventListener('progress', (e) =>{
        root.style.setProperty('--bar-width', Number.parseInt(e.loaded * 100 / e.total) + '%')
    })
    fileReader.addEventListener('loadend', () =>{
        root.style.setProperty('--bar-width','100%')
    })

})