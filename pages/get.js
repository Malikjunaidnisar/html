// const myHeader = document.getElementById("name");
// console(name)
// const Title = document.getElementById("title");
// Title.style.backgroundColor = "orange"
// Title.style.fontSize = "10px"
// Title.style.cssText = "color:red;backgroundColor: orangeyellow;"

// let head = document.getElementById('title')
// head.textContent = "change"

// let head = document.getElementById('content')
// head.innerHTML = '<h2>i m add</h2>' //can inseet a  tag

// let head = document.getElementById('title')
// head.innerText = "change"

// let head = document.querySelector('title')
// head.innerHTML = <h2>i m add</h2> //can inseet a  tag

// let head = document.querySelectorAll('title')
// head.innerHTML = '<h2>i m add</h2>' //it will give all element in array
// let ju = document.getElementById('paragraph')
// ju.textContent = "new text"
// let lk = document.getElementById('content')
// lk.innerHTML = "This is <strong>bold</strong> paragraph"
// let subTitle =document.createElement("h2")
// let newtext =document.createTextNode("baiy")
// subTitle.appendChild(newtext)
// document.body.appendChild(subTitle)

// let ne=document.createElement("p")
// let nt=document.createTextNode("Hello,student")
// ne.style.cssText="color:green;font-size:20px"
// ne.appendChild(nt)
// document.getElementById("content-section").appendChild(ne)
// let date = new Date()
// console.log(date)
// console.log(date.toLocaleString())
// console.log(date.getDay())
// console.log(date.getMonth())
// console.log(date.getFullYear())
                 
// let parent =document.getElementById('overview')
// let child=document.getElementById('title');
// parent.removeChild(child);

// let child2 = document.getElementById('content');
// child2.remove()
                        //    Event litenter


// function addText(){
//     child.textContent = "i have been clicked"
    
// }
// child.addEventListener("click",addText)

let input =document.getElementById("get")
let child =document.getElementById("title")
function getText(){
    child.textContent = input.value

}
input.addEventListener("input",getText)
