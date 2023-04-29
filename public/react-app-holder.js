console.log('holder rendered and changed')
let targetDOMElement = document.getElementById("rcnt")

let container = document.createElement("div")
container.setAttribute("id", "my-app-container")

targetDOMElement.appendChild(container)