import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">Vitamove</div>
            <p>Ваш персональный фитнес-помощник</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <a href="#">FAQ</a>
              <a href="/privacy">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Vitamove. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
