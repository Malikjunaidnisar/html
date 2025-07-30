const Welcome=()=>{
    let a = {
        name:'malik'
    }
    return(
        <>
        <div className="container">
            <h1>Welcome to My Tech Park!{a.name}</h1>
            <p>This is a paragaph with <strong>bold text</strong> and <em>italic text</em></p>
            <ul>
                <li>First Item</li>
                <li>Second Item</li>
                <li>Third Item</li>
            </ul>
            <label htmlFor="name">Name</label>
            <input type="text" name="Your name here" id="name" />
        </div>
        </>
    )
}

export default Welcome