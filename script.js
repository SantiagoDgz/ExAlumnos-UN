document.addEventListener('DOMContentLoaded', () => {
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  tabLinks.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.tab;

      tabLinks.forEach((link) => link.classList.toggle('active', link === button));
      tabContents.forEach((content) => {
        const isActive = content.dataset.content === target;
        content.classList.toggle('active', isActive);
      });
    });
  });

  const buttons = document.querySelectorAll('.btn, .panel-header button, .topnav a');

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (button.tagName === 'A') {
        event.preventDefault();
      }

      const navLinks = document.querySelectorAll('.topnav a');
      navLinks.forEach((item) => item.classList.remove('active'));

      if (button.tagName === 'A') {
        button.classList.add('active');
      }
    });
  });
});
