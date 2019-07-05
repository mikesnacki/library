import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

export default class Book extends React.Component {
    constructor(props) {
        super(props)

        this.onClickRead = this.onClickRead.bind(this)
        this.onClickRemove = this.onClickRemove.bind(this)
    }

    onClickRead() {
        var id = parseInt(this.props.index)
        this.props.toggleRead(id)
    }

    onClickRemove() {
        var id = parseInt(this.props.index);
        this.props.removeBook(id);
    }

    render() {
        return (

            <ul className="row">
                <li className="column">{this.props.book.title}</li>
                <li className="column">{this.props.book.author}</li>
                <li className="column">{this.props.book.pages}</li>
                <li className="column">
                    <button className="btn-library"
                        onClick={this.onClickRead}>
                        {this.props.book.read === "Read" ? "Read" : " Not Read"}
                    </button>
                </li>
                <li className="column">
                    <button className="btn-library"
                        onClick={this.onClickRemove}>
                        {<FaTrashAlt className="basura" />}
                    </button>
                </li>
            </ul>

        )
    }
}
