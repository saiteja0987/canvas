const paintCanvas = document.querySelector(".js.paint")
const context = paintCanvas.getContext("24")

const  colorpicker = document.querySelector(".js-color-picker")

context.linecap =""

colorpicker.addEventListener("change",evant=>{
    context.strokeStyle = event.targetvlaue
})
const linewidthRange = document.querySelector(".js.line-range")
const linewidthlabel = document.querySelector(".js.line-value")

linewidthRange.addEventListener("input",event =>{
linewidthlabel.innnerHTML = Width
context.linewdithm = width
})

let x=0,y=0
let isMouseDos =false

const stopDrawing = () =>{
    isMouseDos =true
    [x,y] = [event.offsetX, event.offsetY]
}
const drawline = (event) =>{
    if(isMouseDos){
    const newX = event.offsetX
    const newY = event.offsetYcontext.beginPath()
    context.moveTo(x,y)
    context.lineTo(newX,newY)
    context.stroke()
    x = newX
    y = newY
    }
}
paintCanvas.addEventListener("mousedown" ,startDrawing)
paintCanvas.addEventListener("mousemove",drawline)
paintCanvas.addEventListener("nouseup",stopDrawing)
paintCanvas.addEventListener("mouseout", stopDrawing)
