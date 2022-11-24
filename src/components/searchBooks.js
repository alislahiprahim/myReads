import { useState } from "react"
import { Link } from "react-router-dom"
import Book from "./book"
import * as bookAPI from '../BooksAPI'
import InputSearch from "./inputSearch"
import { PropTypes } from "prop-types"


const SearchBooks = ({ handleUpdateShelf }) => {
    const [books, setBooks] = useState([]);

    const searchBooks = async (value) => {
        if (value.trim() === "") {
            setBooks([])
            return
        }
        const res = await bookAPI.search(value);
        if (res?.error) setBooks([])
        else
            setBooks(res)
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                    className="close-search"
                    to={"/"}
                >
                    Close
                </Link>
                <InputSearch onSearch={(event) => searchBooks(event)} />
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {books.map(book => <Book key={book.id} bookId={book.id} onchangeShelf={(book, shelf) => handleUpdateShelf(book, shelf)} />)}
                </ol>
            </div>
        </div>
    )
}

SearchBooks.propTypes = {
    handleUpdateShelf: PropTypes.func.isRequired
}

export default SearchBooks