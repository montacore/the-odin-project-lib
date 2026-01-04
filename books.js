function Book(title, author, pages, read){
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read ? "read": "not read yet"}`
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());