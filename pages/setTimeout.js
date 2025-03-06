function timeoutAction(){
    console.log("Timeout!")
}
setTimeout(timeoutAction, 1000) //delay of 1 seconds

function intevalAction(){
    console.log("Interval!")
}
setInterval(intevalAction, 1000*2 ) //delay of 1