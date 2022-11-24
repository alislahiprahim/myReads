import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import ShelfChanger from './shelfChanger'
import * as bookAPI from "../BooksAPI"


const Book = ({ bookId, onchangeShelf }) => {
    const [book, setBook] = useState([])

    useEffect(() => {
        const getBook = async () => {
            const res = await bookAPI.get(bookId);
            setBook(res)
        }
        getBook()

    }, [bookId])

    const drag = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    return (
        <li>
            <div className="book"
                draggable="true"
                onDragStart={(event) => { drag(event) }}
                id={book.id}>
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                                `url("${book.imageLinks?.thumbnail}")`,
                        }}

                    ></div>
                    <ShelfChanger currentShelf={book.shelf ?? "none"} onSelectShelf={(shelf) => onchangeShelf(book, shelf)} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors?.toString().replaceAll(",", " ")}</div>
            </div>
        </li>
    )
}

Book.propTypes = {
    bookId: PropTypes.string.isRequired,
    onchangeShelf: PropTypes.func.isRequired
}

export default Book