// Seleciona os elementos necessários
const modal = document.getElementById('modal');
const modalImg = document.getElementById('imagemModal');
const descricaoModal = document.getElementById('descricaoModal');
const fechar = document.querySelector('.fechar');
const fotos = document.querySelectorAll('.foto');

// Adiciona evento de clique para cada imagem
fotos.forEach((foto) => {
  foto.addEventListener('click', () => {
    modal.style.display = 'block'; // Exibe o modal
    modalImg.src = foto.src; // Define a imagem ampliada
    descricaoModal.innerHTML = foto.alt; // Define a descrição
  });
});

// Fecha o modal ao clicar no botão de fechar
fechar.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fecha o modal ao clicar fora da imagem
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Fechar modal com a tecla Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { // Verifica se a tecla pressionada é Esc
    closeModalFunction();
  }
});



// Seleciona todos os elementos que terão o efeito de fade-in
const fadeInElements = document.querySelectorAll('.fade-in');

function checkScroll() {
  fadeInElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < window.innerHeight) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Chama a função logo de cara, para já mostrar os elementos visíveis na carga



// Animação de entrada para o texto do hero header
const heroContent = document.querySelector('.hero-content');

window.addEventListener('load', () => {
  heroContent.style.opacity = '1';
  heroContent.style.transform = 'translateY(0)';
});

heroContent.style.opacity = '0';
heroContent.style.transform = 'translateY(-50px)';
heroContent.style.transition = 'opacity 1s ease, transform 1s ease';



// Scroll suave para navegação
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Evita o comportamento padrão do link
    const targetId = this.getAttribute('href').substring(1); // Remove o "#" do href
    const targetElement = document.getElementById(targetId);

    // Rolar suavemente até o elemento
    targetElement.scrollIntoView({
      behavior: 'smooth', // Rola suavemente
      block: 'start' // Alinha no início da seção
    });
  });
});



// Scroll suave para Home e outras seções
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Verifica se o link aponta para o topo
    const targetId = this.getAttribute('href') === "#" ? null : this.getAttribute('href').substring(1);

    // Determina o alvo (topo ou seção específica)
    const targetElement = targetId ? document.getElementById(targetId) : document.documentElement;

    // Faz o scroll suave
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});






