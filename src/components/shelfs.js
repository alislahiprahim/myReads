import PropTypes from 'prop-types';
import Book from './book';

const Shelfs = ({ shelfTitle, books, onUpdateShelf }) => {

    const allowDrop = (ev) => {
        ev.preventDefault();
    }

    const drop = (ev) => {
        ev.preventDefault();
        const bookId = ev.dataTransfer.getData("text")
        ev.target.appendChild(document.getElementById(bookId));
        console.log('bookId', bookId);
        console.log('books.find(b => b.id === bookId)', books.find(b => b.id === bookId));
        if (shelfTitle.includes("Currently")) {
            onUpdateShelf(books.find(b => b.id === bookId), "currentlyReading")
        }
        else if (shelfTitle.includes("Currently")) {
            onUpdateShelf(books.find(b => b.id === bookId), "wantToRead")
        }
        else {
            onUpdateShelf(books.find(b => b.id === bookId), "read")
        }
    }
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)}>
                    {books.map(book => (

                        <Book key={book.id} bookId={book.id} onchangeShelf={(book, shelf) => onUpdateShelf(book, shelf)} />

                    ))}
                </ol>
            </div>
        </div>
    )

}

Shelfs.propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
}

export default Shelfs