const item = document.querySelector('.item'),
      placeholders = document.querySelectorAll('.placeholder')      

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for(placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
    event.target.classList.add('_raised')
    setTimeout(() => {
        event.target.classList.add('_hidden')
        for(placeholder of placeholders){
            placeholder.classList.add('hold')
        }  
    }, 0)      
}

function dragend(event) {
    event.target.classList.remove('_hidden', '_raised')
    for(placeholder of placeholders){
        placeholder.classList.remove('hold')
    }
}

function dragover (event) { 
    event.preventDefault()   
}

function dragenter (event) {
    event.target.classList.add('hovered')
}

function dragleave (event) {
    event.target.classList.remove('hovered')
}

function dragdrop (event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}