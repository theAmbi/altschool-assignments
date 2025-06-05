import { useState } from 'react'

import './app.css'
import './styles/hero.css'
import Hero from './components/hero'
import Book from './components/book'
import { books } from '/data/books'

function App() {
  const [bookList, setBookList] = useState(books)

  return (
    <>
      <Hero />
      <div className="booklist">
        {bookList.map(({ title, author, genre, id, image }) => {
          return (
            <Book
              key={id}
              title={title}
              author={author}
              image={image}
              genre={genre}
              setBookList={setBookList}
            />
          )
        })}
      </div>
    </>
  )
}

export default App
