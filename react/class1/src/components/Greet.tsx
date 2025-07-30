export default function Greet(props:{name:string,time:number}){

    console.log(props);
    return(
        <>
        
        <h1>HELLO {props.name}</h1>
        <h2>HELLO {props.time}</h2>
        </>
    )
}