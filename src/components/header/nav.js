
import style from './nav.css'
import Link from 'next/link'

export default function Nav() {
  return (
      <div className="nav">
        <Link href="/">
          <p className="nav-logo">
            Nothing
          </p>
        </Link>
        <div className="nav-links">
          <Link href='/about'>
            <p className="nav-link">Link</p>
          </Link>
          <p className="nav-link">Link</p>
        </div>
      </div>
  )
}

