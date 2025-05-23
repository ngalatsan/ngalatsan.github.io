document.addEventListener('DOMContentLoaded', () => {
  // Клики по навигации
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      firebase.analytics().logEvent('nav_click', {
        link_text: link.innerText,
        link_url: link.href
      });
    });
  });

  // Клики по кнопкам
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      firebase.analytics().logEvent('button_click', {
        button_id: btn.id || 'unnamed',
        page_location: window.location.pathname
      });
    });
  });
});