import React, { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import Login from './components/Login'
import RecommendedBooks from './components/RecommendedBooks'

const App = () => {
  const [page, setPage] = useState('authors')
  const [token, setToken] = useState(localStorage.getItem('loggedUser'))

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        {
          token
          ? <button onClick={() => setPage('add')}>add book</button>
          : null
        }
        {
          token
          ? null
          : <button onClick={() => setPage('login')}>login</button>
        }
        {
          token
          ? <button onClick={() => setPage('recommended')}>
              recommended
            </button>
          : null
        }
        {
          token
          ? <button onClick={() =>{
              localStorage.clear()
              setToken(null)
              setPage('authors')
            }}>
              logout
            </button>
          : null
        }
      </div>

      <Authors
        show={page === 'authors'}
        token={token}
      />

      <Books
        show={page === 'books'}
      />

      <NewBook
        show={page === 'add'}
      />

      <RecommendedBooks
        show={page === 'recommended'}
      />
      
      <Login
        show={page === 'login'}
        setOurPage={setPage}
        setOurToken={setToken}
      />
    </div>
  )
}

export default App