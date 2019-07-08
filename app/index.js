
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Addbook from "./components/Addbook"
import Books from "./components/Books"
import base from "./data/firebase"

class App extends React.Component {

    constructor(props) {
        super(props)

        this.addBook = this.addBook.bind(this)
        this.removeBook = this.removeBook.bind(this)
        this.toggleRead = this.toggleRead.bind(this)
        this.state = {
            books: []
        };
    }

    componentWillMount() {
        console.log(this.state.books)
        base.syncState("books", {
            context: this,
            state: "books",
        })
    }

    addBook(newBook) {
        const { books } = this.state
        {
            books.length = 0 ? this.setState({ books: newBook }) :
                this.setState({
                    books: this.state.books.concat([newBook])
                })
        }
    }

    removeBook(bookIndex) {
        const { books } = this.state
        books.splice(bookIndex, 1)
        this.setState({ books })
    }

    toggleRead(bookIndex) {
        const { books } = this.state
        var book = books[bookIndex]
        books.splice(bookIndex, 1)
        book.read = book.read === "Read" ? "Not Read" : "Read"
        book.read ? books.push(book) : books.unshift(book)
        this.setState({ books })
    }

    render() {
        return (
            <div>
                <Addbook addBook={this.addBook} />
                <Books
                    books={this.state.books}
                    removeBook={this.removeBook}
                    toggleRead={this.toggleRead}
                />
            </div >
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
