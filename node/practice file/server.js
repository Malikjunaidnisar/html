const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
let book =[
    {
        id:'1',
        title:'book 1'
    },
    {
        id:'2',
        title:'book 2'
    }
]
app.get('/',(req,res)=>{
    res.json('Home is working')
})

app.get('/book',(req,res)=>{
    res.json(book)
})
app.post('/post',(req,res)=>{
    let newBook={
        id:book.length+1,
        title:`book ${book.length+1}`
    }
    book.push(newBook)
    res.json(newBook)
})
app.listen(port,()=>{
    console.log('server is running')
})