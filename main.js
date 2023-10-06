let button = document.querySelector('.darkmodebutton')

button.addEventListener('click', () => {
  document.documentElement.classList.toggle('darkmode')
})