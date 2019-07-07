import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import Book from "./Book"

export default class Library extends React.Component {

    render() {
        return (
            < div className="library" >
                <h2 className="header">Library</h2>
                <div className="row label">
                    <h4 className="column">Title</h4>
                    <h4 className="column">Author</h4>
                    <h4 className="column">Pages</h4>
                    <h4 className="column">Read Status</h4>
                    <h4 className="column">Delete</h4>
                </div>
                {
                    this.props.books.map((book, index) => {
                        return <Book
                            book={book}
                            key={index}
                            index={index}
                            removeBook={this.props.removeBook}
                            toggleRead={this.props.toggleRead}
                        />
                    })
                }
            </div >
        )
    }
}
