const linkBtn = document.querySelector('[data-button="link"]');
const vW = window.innerWidth;

const setMargin = (marginType, marginValue) => {
  linkBtn.style[marginType] = marginValue;
}

window.addEventListener('resize', () => {
  let w = window.innerWidth;
  if ( w < 420 ) {
    setMargin('marginInline', 'auto');
  }
  if ( w > 419 ) {
    setMargin('marginInline', '')
    setMargin('marginLeft', 'auto');
  }
})

if ( vW < 420 ) {
  setMargin('marginInline', 'auto');
}