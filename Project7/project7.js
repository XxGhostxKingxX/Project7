var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var draw = false

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

function drawCircle(xpos, ypos, radius, color) {
  var newcircle = document.createElementNS(namespace,"circle");
  newcircle.setAttribute("fill",color);
  newcircle.setAttribute("cx",xpos);
  newcircle.setAttribute("cy",ypos);
  newcircle.setAttribute("r",radius);
  screen.appendChild(newcircle);
}

function drawSquare(xpos, ypos, size, color) {
  var newrect = document.createElementNS(namespace,"rect");
  newrect.setAttribute("fill",color);
  newrect.setAttribute("x",xpos);
  newrect.setAttribute("y",ypos);
  newrect.setAttribute("height", size);
  newrect.setAttribute("width", size);
  screen.appendChild(newrect);
}

// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  draw = true
})

document.addEventListener("mouseup", function(e) {
draw = false
})

document.addEventListener("mousemove", function(e) {

  if(draw == true) {
  var pt = transformPoint(e)
  var color = document.getElementById("colorSelect").value
  var shape = document.getElementById("shapeSelect").value
  var size = document.getElementById("sizeSelect").value

  if (shape == "square") {
    drawSquare(pt.x, pt.y, size, color)
  }

  else {
    drawCircle(pt.x, pt.y, size, color)
  }}
})
