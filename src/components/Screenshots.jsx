import React from 'react'
import './Screenshots.css'

function Screenshots() {
  return (
    <section id="screenshots" className="screenshots">
      <div className="container">
        <h2>Интерфейс приложения</h2>
        <p className="screenshots-subtitle">Простой и интуитивный дизайн для комфортного использования</p>
        <div className="screenshots-grid">
          <div className="screenshot-card">
            <div className="screenshot-placeholder">
              <div className="phone-mockup">
                <div className="mockup-content orange">
                  <div className="mockup-icon">🔥</div>
                  <div className="mockup-title">Баланс калорий</div>
                  <div className="mockup-value">1,500</div>
                  <div className="mockup-label">Осталось</div>
                </div>
              </div>
            </div>
            <h3>Главный экран</h3>
          </div>
          <div className="screenshot-card">
            <div className="screenshot-placeholder">
              <div className="phone-mockup">
                <div className="mockup-content blue">
                  <div className="mockup-icon">🍽️</div>
                  <div className="mockup-title">Дневник питания</div>
                  <div className="mockup-stats">
                    <div>Б: 34г</div>
                    <div>Ж: 4.7г</div>
                    <div>У: 0.5г</div>
                  </div>
                </div>
              </div>
            </div>
            <h3>Питание</h3>
          </div>
          <div className="screenshot-card">
            <div className="screenshot-placeholder">
              <div className="phone-mockup">
                <div className="mockup-content purple">
                  <div className="mockup-icon">💪</div>
                  <div className="mockup-title">Тренировки</div>
                  <div className="mockup-value">23</div>
                  <div className="mockup-label">Подходов</div>
                </div>
              </div>
            </div>
            <h3>Тренировки</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Screenshots
