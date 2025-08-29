// Smooth scrolling for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});
