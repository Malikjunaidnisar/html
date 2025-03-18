function fetchData(){
    const url ="https://jsonplaceholder.typicode.com/"
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.error(err))
}
fetchData()
async function fetchData1(){
    const url ="https://jsonplaceholder.typicode.com/"
    try{
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
    }catch(err){
        console.error(err)
    }
}
fetchData1()
// axxios
//get is a http method