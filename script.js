const mylist = document.createElement('div')
mylist.setAttribute('class', 'max-w-sm mx-auto p-2 text-lg bg-gray-400 rounded-xl')
const detail = document.createElement('div')
detail.setAttribute('class', 'max-w-sm mx-auto text-lgs')

const loadFromStr = () =>{
    for (let i = 0; i <localStorage.getItem('done'); i++) {
        if (localStorage.getItem('key' + i )!== null) {
            const del1 = document.createElement('del')
            del1.innerHTML = localStorage.getItem('key' + i)
            del1.append(document.createElement('br'))
            mylist.prepend(del1)
        }
    }
    document.body.append(mylist)
}

loadFromStr()

// Add list 
const addlist = (backup) => {
    const input = document.querySelector("input")
    if (input.value === "") alert("please fill up the task!!!")
    let listadd = { dolist:[]}
    const task = document.createElement('p')
    task.setAttribute('class', 'group flex justify-between p-2 border-b-2 transform hover:-translate-y-1 hover:scale-110 transition duration-200 ease-in-out rounded-xl hover:shadow-lg bg-white')
    const span = document.createElement('p')
    const btndiv = document.createElement('div')
    btndiv.setAttribute('class', 'space-x-4')
    if (input.value != "") {
        span.innerHTML = input.value
        if(backup===0)
        {
            listadd.dolist.push(input.value)
            localStorage.listadd = JSON.stringify(listadd)
        }
        task.append(span)
        input.value=""

        // <done button>
        const donebutton = document.createElement('button')
        donebutton.setAttribute('class', 'text-white  pr-4 pl-4 group-hover:bg-blue-100 group-hover:text-black rounded-lg')
        donebutton.innerHTML = "Done"
        donebutton.addEventListener('click', () => {
            const del = document.createElement('del')
            let test = localStorage.getItem('done')
            window.localStorage.setItem('key' + test,[span.innerHTML])
            del.innerHTML = localStorage.getItem('key' + test)
            test++
            window.localStorage.setItem('done', test)
            
            listadd.dolist.splice(listadd.dolist.indexOf(del.innerHTML),1)
            localStorage.listadd = JSON.stringify(listadd)
            del.append(document.createElement('br'))
            mylist.prepend(del)
            detail.removeChild(task)
        })
        // <delete button>
        const delBtn = document.createElement('button')
        delBtn.setAttribute('class', 'text-white  pr-3 pl-3 group-hover:bg-red-100 group-hover:text-black rounded-lg')
        delBtn.innerHTML = "Delete"
        delBtn.addEventListener('click', () => {
            listadd.dolist.splice(listadd.dolist.indexOf(span.innerHTML),1)
            localStorage.listadd = JSON.stringify(listadd)
            detail.removeChild(task)
        })

        btndiv.append(donebutton)
        btndiv.append(delBtn)
        task.append(btndiv)
        detail.prepend(task)
        document.body.append(detail)
        document.body.append(mylist)
    }
}

// let myinput = ""
// const listInput = (event) => {
//     myinput = event.target.value
// }

if (localStorage.length === 0) {
    window.localStorage.setItem('done', 0)
    window.localStorage.setItem('list', 0)
}
// Enter
const input = document.getElementById("Input")
input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        document.getElementById('Button').click()
    }
})