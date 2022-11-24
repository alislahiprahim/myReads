import { Link } from "react-router-dom"
import Shelfs from "./shelfs"

const BooksList = ({ books, handleUpdateShelf }) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Shelfs onUpdateShelf={(book, shelf) => handleUpdateShelf(book, shelf)} shelfTitle="Currently Reading" books={books.filter(book => book.shelf === 'currentlyReading')} />
                    <Shelfs onUpdateShelf={(book, shelf) => handleUpdateShelf(book, shelf)} shelfTitle="Want to Read" books={books.filter(book => book.shelf === 'wantToRead')} />
                    <Shelfs onUpdateShelf={(book, shelf) => handleUpdateShelf(book, shelf)} shelfTitle="Read" books={books.filter(book => book.shelf === 'read')} />
                </div>
            </div>
            <div className="open-search">
                <Link to={"/search"}>Add a book</Link>
            </div>
        </div>
    )
}

export default BooksList