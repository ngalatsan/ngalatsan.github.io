---
title: 'Home'
date: 2023-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: hero
    content:
      title: EcoMonitor 🪴
      text: Cистема мониторинга экологической обстановки, анализа данных о загрязнении окружающей среды и предоставления рекомендаций по улучшению экологической ситуации
      primary_action:
        text: Подробнее
        url: /blog
        icon: rocket-launch
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      # For full-screen, add `min-h-screen` below
      css_class: "dark"
      background:
        color: "navy"
        image:
          # Add your image background to `assets/media/`.
          filename: bg.jpg
          filters:
            brightness: 0.5
          


  
  - block: features
    id: features
    content:
      title: О проекте
      text: EcoMonitor — это современная информационно-аналитическая система, которая помогает решать экологические проблемы, предоставляя точные данные, аналитику и рекомендации.
      items:
        - name: Современные технологии
          icon: code-bracket
          description: Big Data, машинное обучение и облачные технологии обеспечивают высокую точность и скорость обработки данных.
        - name: Скорость работы
          icon: bolt
          description: Система позволяет собирать и обрабатывать данные и быстро получать результат
        - name: Простота
          icon: sparkles
          description: EcoMonitor легко запустить или интегрировать в предприятие 
        - name: Визуализация
          icon: eye
          description: Все данные представляются в виде интуитивно понятных диаграмм, графиков и показателей
        - name: Универсальность
          icon: star
          description: Подходит для разных категорий пользователей (государственные органы, предприятия, граждане).
        - name: Модульный подход
          icon: rectangle-group
          description: Использование независимых модулей позволяет достичь высокой производительности и точных данных
  - block: cta-image-paragraph
    id: solutions
    content:
      items:
        - title: Для кого?
          text: Система может быть полезной для всех
          feature_icon: check
          features:
            - "Жители мегаполисов и городов"
            - "Экологические организации"
            - "Предприятия"
            - "Государственные органы"
          # Upload image to `assets/media/` and reference the filename here
          image: build-website.png
          button:
            text: Описание
            url: /blog
        - title: Принцип работы
          text: 
          feature_icon: bolt
          features:
             - "Данные поступают с датчиков, спутников и других источников в реальном времени."
             - "Данные очищаются, структурируются и анализируются. "
             - "Используются алгоритмы машинного обучения для прогнозирования. "
             - " Данные отображаются на картах, графиках и диаграммах."
             - "Система генерирует отчеты и предоставляет рекомендации на основе анализа."
          # Upload image to `assets/media/` and reference the filename here
          image: work.jpg
    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900"

---
