import { PropTypes } from "prop-types"

const ShelfChanger = ({ onSelectShelf, currentShelf }) => {

    const handleSelect = (event) => {
        onSelectShelf(event.target.value)
    }

    return (
        <div className="book-shelf-changer">
            <select onChange={(event) => handleSelect(event)} value={currentShelf}>
                <option disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div >
    )
}

ShelfChanger.propTypes = {
    onSelectShelf: PropTypes.func.isRequired,
    currentShelf: PropTypes.string.isRequired
}

export default ShelfChanger