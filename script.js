const mylist = document.createElement('div')
mylist.setAttribute('class', 'max-w-sm mx-auto p-2 text-lg bg-gray-400 rounded-xl')

const loadFromStr = () =>{
    for (let i = 0; i <localStorage.getItem('done'); i++) {
        if (localStorage.getItem('key' + i )!== null) {
            const delete1 = document.createElement('del')
            delete1.innerHTML = localStorage.getItem('key' + i)
            delete1.append(document.createElement('br'))
            mylist.prepend(delete1)
        }
    }
    document.body.append(mylist)
}

loadFromStr()


const detail = document.createElement('div')
detail.setAttribute('class', 'max-w-sm mx-auto text-lgs')

// add list 
const addlist = (backup) => {
    detail.setAttribute('class', 'max-w-sm mx-auto text-lgs')
    
    // <alert>
    if (input.value === "") alert("please fill up the task!!!")
    
    let addbobo = { dolist:[]}
    const task = document.createElement('p')
    task.setAttribute('class', 'group flex justify-between p-2 border-b-2 transform hover:-translate-y-1 hover:scale-110 transition duration-200 ease-in-out rounded-xl hover:shadow-lg bg-white')
    const span = document.createElement('p')
    const boss = document.createElement('div')
    boss.setAttribute('class', 'space-x-4')
    if (input.value != "") {
        span.innerHTML = input.value
        if(backup===0)
        {
            addbobo.dolist.push(input.value)
            localStorage.addbobo = JSON.stringify(addbobo)
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
            addbobo.dolist.splice(addbobo.dolist.indexOf(del.innerHTML),1)
            localStorage.addbobo = JSON.stringify(addbobo)
            del.append(document.createElement('br'))
            mylist.prepend(del)
            detail.removeChild(task)
        })

        // <delete button>
        const deletebutton = document.createElement('button')
        deletebutton.setAttribute('class', 'text-white  pr-3 pl-3 group-hover:bg-red-100 group-hover:text-black rounded-lg')
        deletebutton.innerHTML = "Delete"
        deletebutton.addEventListener('click', () => {
            addbobo.dolist.splice(addbobo.dolist.indexOf(span.innerHTML),1)
            localStorage.addbobo = JSON.stringify(addbobo)
            detail.removeChild(task)
        })

        boss.append(donebutton)
        boss.append(deletebutton)
        task.append(boss)
        detail.prepend(task)
        document.body.append(detail)
        document.body.append(mylist)
    }
}

if (localStorage.length === 0) {
    window.localStorage.setItem('done', 0)
    window.localStorage.setItem('list', 0)
}
// enter
const input = document.getElementById("Input")
input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        document.getElementById('Button').click()
    }
})


// const enter = (event) => {
//     if (event.key === "Enter") addTodoList();
// }


// let myinput = ""
// const listInput = (event) => {
//     myinput = event.target.value
// }
