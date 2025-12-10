import React from 'react'
import './Features.css'

function Features() {
  const features = [
    {
      icon: '🔥',
      title: 'Баланс калорий',
      description: 'Отслеживайте потребление и расход калорий в течение дня'
    },
    {
      icon: '💧',
      title: 'Водный баланс',
      description: 'Контролируйте потребление воды и поддерживайте гидратацию'
    },
    {
      icon: '⚖️',
      title: 'Контроль веса',
      description: 'Следите за изменениями веса и достигайте целей'
    },
    {
      icon: '👟',
      title: 'Счетчик шагов',
      description: 'Отслеживайте активность и количество пройденных шагов'
    },
    {
      icon: '💪',
      title: 'Тренировки',
      description: 'Программы упражнений и статистика тренировок'
    },
    {
      icon: '🍽️',
      title: 'Дневник питания',
      description: 'Записывайте приемы пищи с подсчетом БЖУ'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Возможности приложения</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
