import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
        <Link to={'/'}><button>page 1</button></Link>
        <Link to={'/page2'}><button>page 2</button></Link>
    </div>
  )
}
