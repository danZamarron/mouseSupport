const $canvas = document.querySelector("canvas")
const ctx = $canvas.getContext("2d")
let y1 = 2;
let y2 = 3;
let mousePos;
let mouseClick = false;
let mouseClickTime = 0;

let time =
{
    startTime: 0,
    lastTime: 0,
    totalTime: 0,
    lastLoopTime: 0
}



function update(timeloop) {
    timeCheck(timeloop);
    // 1. Guardar el estado (o afectarlo)
    // changeState()
    // 2. Limpiar el canvas
    clearCanvas()
    // 3. volvemos a pintar
    //p1.draw()
    printElements()
    mouseCheck()
    // 4. repetimos
    // Forma2 => setTimeout(update, 1000 / 60)
    requestAnimationFrame(update)
  }
  
  function changeState() {
    y1 += 1
    y2 += 3
  }
  
  function clearCanvas() {
    ctx.clearRect(0, 0, $canvas.width, $canvas.height)
  }
  
  function printElements() {
    ctx.fillRect(20, y1, 100, 100)
    ctx.fillRect(200, y2, 100, 100)
  }
  
  // setInterval(update, 1000 / 60)
  // Forma 2 => setTimeout(update, 1000 / 60)
  update()

  function timeCheck(actualFrame){
    if(time.startTime){
        time.startTime = actualFrame;
    }
    if(!time.lastTime)
    {
        time.lastTime = actualFrame;
    }
    time.totalTime =  (actualFrame-time.startTime);
    time.lastLoopTime = (actualFrame-time.lastTime);
    time.lastTime = actualFrame;
  }


  function mouseCheck(){
    if(mousePos)
        writeMessage('Mouse position: ' + mousePos.x + ',' + mousePos.y, 50, 250)
    
    if(mouseClick)
    {        
        writeMessage('Mouse Click True', 50, 300);
        mouseClick = false;
        mouseClickTime = time.lastTime
    }
    else{
        writeMessage('Mouse Click False', 50, 300);        
    }
    

    writeMessage(`Click Dado el ${mouseClickTime}`, 50, 400)
    writeMessage(`Total Actual ${time.totalTime}`, 50, 450)

    }

    function writeMessage(message, posX = 10, posY = 25) {
    ctx.font = '18pt Calibri';
    ctx.fillStyle = 'black';
    ctx.fillText(message, posX, posY);
    }

    function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
    }


    $canvas.addEventListener('mousemove', function(evt) {
    mousePos = getMousePos($canvas, evt);
    }, false);


    $canvas.addEventListener('mousedown', function(e) {
        mouseClick = true;
    })

