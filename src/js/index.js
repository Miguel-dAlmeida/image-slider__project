function alignArrowsToContent() {
  const activeSlide = document.querySelector('.slider-background--selected');

  if (!activeSlide) return;

  const content = activeSlide.querySelector('.slider__content');
  const arrowLeft = document.querySelector('.slider__arrows--left');
  const arrowRight = document.querySelector('.slider__arrows--right');

  if (!content || !arrowLeft || !arrowRight) return;

  const contentRect = content.getBoundingClientRect();
  const contentMiddle = contentRect.top + contentRect.height / 2;

  arrowLeft.style.top = `${contentMiddle}px`;
  arrowRight.style.top = `${contentMiddle}px`;
}

// Executa no carregamento e no redimensionamento
window.addEventListener('load', alignArrowsToContent);
window.addEventListener('resize', alignArrowsToContent);

// Também reexecuta sempre que o slide muda
// (Você provavelmente já tem um evento de clique nas setas. Exemplo:)
document.querySelectorAll('.slider__arrows').forEach(arrow => {
  arrow.addEventListener('click', () => {
    // Espera a transição do slide (se houver) e reposiciona
    setTimeout(alignArrowsToContent, 100);
  });
});
