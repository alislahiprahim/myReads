import { useCallback } from "react"
import * as _ from 'lodash'
import { PropTypes } from "prop-types"

const InputSearch = ({ onSearch }) => {

    const handleSearch = (value) => {

            delayedQuery(value)

    }

    const delayedQuery = useCallback(_.debounce(q => onSearch(q), 700), []);

    return (
        <div className="search-books-input-wrapper">
            <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange={(event) => handleSearch(event.target.value)}
            />
        </div>
    )

}

InputSearch.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default InputSearch