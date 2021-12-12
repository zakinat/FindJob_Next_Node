
import Nav from './Nav'
import Meta from './Meta'
import React from 'react'


const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className=''>
        <main className=''>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
