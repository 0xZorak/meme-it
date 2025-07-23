const btn = document.getElementById('toggleModeBtn');
btn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  btn.innerHTML = document.body.classList.contains('light-mode')
    ? '<i class="fa-solid fa-moon"></i>'
    : '<i class="fa-solid fa-sun"></i>';
});