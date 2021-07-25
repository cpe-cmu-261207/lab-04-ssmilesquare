const mainDiv = document.createElement('div')
mainDiv.setAttribute('class', 'max-w-sm mx-auto text-lgs')
const comDiv = document.createElement('div')
comDiv.setAttribute('class', 'max-w-sm mx-auto p-2 text-lg bg-gray-400 rounded-xl')

// Add
const addlist = (backup) => {
    let listadd = { dolist:[]}
    const Taskspan = document.createElement('p')
    Taskspan.setAttribute('class', 'group flex justify-between p-2 border-b-2 transform hover:-translate-y-1 hover:scale-110 transition duration-200 ease-in-out rounded-xl hover:shadow-lg bg-white')
    const span = document.createElement('p')
    const btndiv = document.createElement('div')
    btndiv.setAttribute('class', 'space-x-4')
    if (currentInput != "") {
        span.innerHTML = currentInput
        if(backup===0)
        {
            listadd.dolist.push(currentInput)
            localStorage.listadd = JSON.stringify(listadd)
        }
        Taskspan.append(span)
        input.value=""

        // <done>
        const comBtn = document.createElement('button')
        comBtn.setAttribute('class', 'text-white  pr-4 pl-4 group-hover:bg-blue-100 group-hover:text-black rounded-lg')
        comBtn.innerHTML = "Done"
        comBtn.addEventListener('click', () => {
            const del = document.createElement('del')
            let test = localStorage.getItem('done')
            window.localStorage.setItem('key' + test,[ span.innerHTML])
            del.innerHTML = localStorage.getItem('key' + test)
            test++
            window.localStorage.setItem('done', test)
            
            listadd.dolist.splice(listadd.dolist.indexOf(del.innerHTML),1)
            localStorage.listadd = JSON.stringify(listadd)
            del.append(document.createElement('br'))
            comDiv.prepend(del)
            mainDiv.removeChild(Taskspan)
        })
        // <delete>
        const delBtn = document.createElement('button')
        delBtn.setAttribute('class', 'text-white  pr-3 pl-3 group-hover:bg-red-100 group-hover:text-black rounded-lg')
        delBtn.innerHTML = "Delete"
        delBtn.addEventListener('click', () => {
            listadd.dolist.splice(listadd.dolist.indexOf(span.innerHTML),1)
            localStorage.listadd = JSON.stringify(listadd)
            mainDiv.removeChild(Taskspan)
        })

        btndiv.append(comBtn)
        btndiv.append(delBtn)
        Taskspan.append(btndiv)
        mainDiv.prepend(Taskspan)
        document.body.append(mainDiv)
        document.body.append(comDiv)
    }
    else {
        alert("please fill up the task!!!")
    }
}

let currentInput = ""
const listInput = (event) => {
    currentInput = event.target.value
}

// Enter
const input = document.getElementById("Input")
input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        document.getElementById('Button').click()
    }
})

if (localStorage.length === 0) {
    window.localStorage.setItem('done', 0)
    window.localStorage.setItem('list', 0)
}

const loadDoStr = () => {
    if(localStorage.listadd) listadd = JSON.parse(localStorage.listadd)
    for(let i = 0 ; i< listadd.dolist.length;i++)
    {
        currentInput = listadd.dolist[i]
        addlist(1)
    }
}
const loadDoneStr = () =>{
    for (let i = 0; i <localStorage.getItem('done'); i++) {
        if (localStorage.getItem('key' + i )!== null) {
            const del1 = document.createElement('del')
            del1.innerHTML = localStorage.getItem('key' + i)
            del1.append(document.createElement('br'))
            comDiv.prepend(del1)
        }
    }
    document.body.append(comDiv)
}

loadDoStr()
loadDoneStr()
