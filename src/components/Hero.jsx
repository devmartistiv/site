import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Ваш персональный фитнес-помощник</h1>
          <p>Контролируйте калории, отслеживайте тренировки и достигайте своих целей с Vitamove</p>
          <div className="hero-buttons">
            <a href="#download" className="btn btn-primary">Скачать приложение</a>
            <a href="#features" className="btn btn-secondary">Узнать больше</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
