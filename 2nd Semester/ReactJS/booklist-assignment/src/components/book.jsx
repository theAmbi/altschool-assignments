import React from 'react'
import "../styles/books.css";


const Book = ({ title, author, image, genre }) => {
    return (
        <div>
            <div className="book-wrap">
                <div className="book-image">
                    <img src={image} alt={title} className="book-image" />
                </div>
                <div className="book-info">
                    <div className="title-wrap">
                        <h2 className="book-title">{title}</h2>
                        <p className="book-author">{author}</p>
                    </div>
                    <p className="book-genre">{genre}</p>
                </div>
            </div>
        </div>
    )
}

export default Book