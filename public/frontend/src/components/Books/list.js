import React from 'react'
import Button from '../Form/button'

const BookList = ({ books = [], getBook, handleDeleteBook }) => {
    const Item = ({ children }) => {
        return (
            <div className="w-full border-[1px] mb-2 rounded-lg border-gray-200 px-5 py-5">
                {children}
            </div>
        )
    }

    return books.map((book, index) => (
        <Item key={book.id}>
            <div className="flex justify-between items-center">
                <div className="flex">
                    <p className="mr-2">{index + 1}</p>
                    <p>{book.name}</p>
                </div>

                <div>
                    <Button
                        typevar="warning"
                        type="submit"
                        onClick={() => getBook(book.id)}>
                        Edit
                    </Button>

                    <Button
                        typevar="danger"
                        type="submit"
                        onClick={() => handleDeleteBook(book.id)}>
                        Delete
                    </Button>
                </div>
            </div>
        </Item>
    ))
}

// BookList.propTypes = {
//     books: PropTypes.array.isRequired,
// }

export default BookList
