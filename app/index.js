
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Addbook from "./components/Addbook"
import Books from "./components/Books"

let books = [{
    id: 1,
    title: "A Game of Thrones",
    author: "George RR Martin",
    pages: 694,
    read: "Read"
},
{
    id: 2,
    title: "A Clash of Kings",
    author: "George RR Martin",
    pages: 768,
    read: "Read"
},
{
    id: 3,
    title: "A Storm of Swords",
    author: "George RR Martin",
    pages: 973,
    read: "Read"
}]

class App extends React.Component {

    constructor(props) {
        super(props)

        this.addBook = this.addBook.bind(this)
        this.removeBook = this.removeBook.bind(this)
        this.toggleRead = this.toggleRead.bind(this)
        this.state = { books: books };
    }

    addBook(newBook) {
        books.unshift(newBook)
        this.setState({ books: books })
    }

    removeBook(bookIndex) {
        books.splice(bookIndex, 1)
        this.setState({ books: books })
    }

    toggleRead(bookIndex) {
        var book = books[bookIndex]
        books.splice(bookIndex, 1)
        book.read = book.read === "Read" ? "Not Read" : "Read"
        book.read ? books.push(book) : books.unshift(book)
        this.setState({ books: books })
    }

    render() {
        return (
            <div>
                <Addbook addBook={this.addBook} />
                <Books
                    books={this.props.books}
                    removeBook={this.removeBook}
                    toggleRead={this.toggleRead}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <App books={books} />,
    document.getElementById('app'))
