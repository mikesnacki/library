import React from 'react'
import { FaFolderPlus } from 'react-icons/fa'

export default class Addbook extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            index: "",
            title: "",
            author: "",
            numPages: "",
            read: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        var newBook = {
            title: this.refs.title.value,
            author: this.refs.author.value,
            pages: this.refs.numPages.value,
            read: this.refs.readSelect.value,
        }

        if (newBook) {
            this.props.addBook(newBook)
            this.setState({
                index: "",
                title: "",
                author: "",
                numPages: "",
                read: "",
            })
        }
    }

    render() {
        return (
            <form ref="form" onSubmit={this.onSubmit} className="form">
                <div className="library">
                    <h2 className="header"> Add a book below</h2>
                    <div className="row">
                        <div className="column">
                            <label className="label">Book Title</label>
                            <input
                                className="input"
                                placeholder="Enter Book Title"
                                name="title"
                                type="text"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                autoComplete="off"
                                ref="title"
                                required
                            />
                        </div>
                        <div className="column">
                            <label className="label">Author</label>
                            <input
                                className="input"
                                placeholder="Enter Book Author"
                                name="author"
                                type="text"
                                value={this.state.author}
                                onChange={this.handleInputChange}
                                autoComplete="off"
                                ref="author"
                                required
                            />
                        </div>
                        <div className="column">
                            <label className="label">Number of Pages</label>
                            <input
                                className="input"
                                placeholder="Enter Number of Pages"
                                name="numPages"
                                type="number"
                                min="0"
                                value={this.state.numPages}
                                onChange={this.handleInputChange}
                                autoComplete="off"
                                ref="numPages"
                            />
                        </div>
                        <div className="column">
                            <label className="label">Read Status</label>
                            <select ref="readSelect" className="input select">
                                <option value="Read">Read</option>
                                <option value="Not Read">Not Read</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn-submit" ><FaFolderPlus /></button>
                </div >
            </form>
        )
    }
}