const changeThemeButton = document.querySelector('.change-theme-button');

changeThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
