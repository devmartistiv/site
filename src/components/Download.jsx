import React from 'react'
import './Download.css'

function Download() {
  return (
    <section id="download" className="download">
      <div className="container">
        <div className="download-content">
          <div className="download-text">
            <h2>Начните свой путь к здоровью</h2>
            <p>Скачайте Vitamove и получите полный контроль над своим фитнесом</p>
          </div>
          <a href="#" className="store-button">
            <div className="store-icon">📱</div>
            <div className="store-text">
              <div className="store-label">Доступно в</div>
              <div className="store-name">RuStore</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Download
