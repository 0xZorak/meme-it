const btn = document.getElementById('toggleModeBtn');
const body = document.body;

// Check saved mode on page load
const savedMode = localStorage.getItem('theme');
if (savedMode === 'light') {
  body.classList.add('light-mode');
  btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
} else {
  body.classList.remove('light-mode');
  btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

// Toggle mode and save to localStorage
btn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  if (body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
    btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    localStorage.setItem('theme', 'dark');
    btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
});

function showModal(id) {
  document.getElementById(id).classList.add('show');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('show');
}

// Modal triggers
document.querySelector('.how-to-play-btn').onclick = () => showModal('howToPlayModal');
document.querySelector('.login-btn').onclick = () => showModal('loginModal');

// Modal close buttons
document.querySelectorAll('.close-modal').forEach(btn => {
  btn.onclick = function() {
    closeModal(this.dataset.close);
  };
});

// Optional: close modal on background click
document.querySelectorAll('.modal').forEach(modal => {
  modal.onclick = function(e) {
    if (e.target === modal) closeModal(modal.id);
  };
});