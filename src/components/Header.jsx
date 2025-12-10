import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Vitamove</div>
        <nav className="nav">
          <a href="#features">Возможности</a>
          <a href="#screenshots">Скриншоты</a>
          <a href="#download">Скачать</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
