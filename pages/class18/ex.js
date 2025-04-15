class Book{
    constructor(title,author){
        this.title=title,
        this.author=author
    }
    getDetails(){
        // console.log(`${this.title} is ${this.author}`)
        return`${this.title} is ${this.author}`

    }
   
}
const a =new Book('a','g')
let b =a.getDetails()
// console.log(b)
const ab =new Book('ab','gh')
let ba =ab.getDetails()
// console.log(ba)
// class Library{
//     constructor(Book){
//         this.book =[]
//     }
//     addBook(){
//         book.push=b
//     }
// }
// let ac =new Library('n')
// ac.addBook()
class Ebook extends Book{
    constructor(title,author,fileSize){
        super(title,author)
        this.fileSize=fileSize
    }
    getDetails(){
        return `${super.getDetails()} file size:${this.fileSize}mb`
    }
}
const book4=new Ebook("a",'b','c')
console.log(book4.getDetails())
// console.log()