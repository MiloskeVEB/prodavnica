document.addEventListener('DOMContentLoaded', function () {
  // Kreiramo IntersectionObserver za sekcije i slike
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Dodajemo 'visible' kada je element vidljiv
      }
    });
  }, { threshold: 0.1 }); // Aktivira se kada je samo 10% elementa vidljivo

  // Selektovanje svih sekcija koje želimo da pratimo
  const sections = document.querySelectorAll('section');
  sections.forEach(section => observer.observe(section));

  // Selektovanje svih slika sa klasom 'hidden' (koje treba da postanu vidljive)
  const images = document.querySelectorAll('img.hidden');
  images.forEach(image => observer.observe(image));

  // Dodatno, ako želite animaciju za 'h2' sa klasom 'hidden'
  const h2elements = document.querySelectorAll('h2.hidden');
  h2elements.forEach(h2 => observer.observe(h2));
});
document.addEventListener('DOMContentLoaded', function () {
  // Kreiramo IntersectionObserver za slike
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Dodajemo 'visible' kada je element vidljiv
      }
    });
  }, { threshold: 0.3 }); // Aktivira se kada 30% slike postane vidljivo

  // Selektovanje svih slika sa klasom 'hidden'
  const images = document.querySelectorAll('img.hidden');
  
  // Počinjemo da pratimo svaku sliku
  images.forEach(image => observer.observe(image));
});
