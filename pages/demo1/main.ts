let div:HTMLDivElement = document.createElement('div')
div.style.border = '1px solid red'
div.style.height = '100px'
div.style.width = '100px'
div.id = 'demo'
document.body.append(div)

let down:Boolean = false
let position: [number,number] = [0,0]
div.onmousedown = (e: MouseEvent) => {
    down = true
    position = [e.clientX,e.clientY]
}
div.onmouseup = (e: MouseEvent) => {
    down = false
}

document.onmousemove = (e: MouseEvent) => {
    if(down){
        let deltaX = e.clientX - position[0]
        let deltaY = e.clientY - position[1]
        div.style.left = (parseInt(div.style.left) || 0) + deltaX + 'px'
        div.style.top = (parseInt(div.style.top) || 0) + deltaY + 'px'
        position = [e.clientX,e.clientY]
    }   
}