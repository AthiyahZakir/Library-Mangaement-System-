import { useState, useEffect } from 'react'

function Books({ searchTerm }) {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  console.log('Books component rendered')
  console.log('searchTerm:', searchTerm)
  console.log('books:', books)
  console.log('loading:', loading)
  console.log('error:', error)

  useEffect(() => {
    console.log('useEffect running - fetching books...')
    fetch('/books.json')
      .then((res) => {
        console.log('Fetch response:', res)
        if (!res.ok) throw new Error('Failed to fetch books.json')
        return res.json()
      })
      .then((data) => {
        console.log('Fetched data:', data)
        setBooks(data.books)
        setLoading(false)
      })
      .catch((err) => {
        console.log('Fetch error:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading books...</p>
  if (error) return <p>Error: {error}</p>

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  console.log('filteredBooks:', filteredBooks)

  return (
    <>
      <h1>Book List</h1>
      {filteredBooks.length === 0 ? (
        <p>No books found</p>
      ) : (
        <ul>
          {filteredBooks.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong> by {book.author} ({book.publicationYear})
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Books