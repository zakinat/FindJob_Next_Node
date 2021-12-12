import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className='navbar container'>
        <div className='navbar__links'>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/test/jobs'>Jobs</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav
