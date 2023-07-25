const topRight = document.querySelector('#input-tr');
const bottomRight = document.querySelector('#input-br');
const topLeft = document.querySelector('#input-tl');
const bottomLeft = document.querySelector('#input-bl');
const allBorders = document.querySelector('#input-all');
const surface = document.querySelector('#surface');
const textArea = document.querySelector('#text');
const borderTextTR = 'border-top-right-radius';
const borderTextBR = 'border-bottom-right-radius';
const borderTextTL = 'border-top-left-radius';
const borderTextBL = 'border-bottom-left-radius';

const changeBorder = (value, border, borderText) => {
  surface.style[border] = `${value}px`;
  if (value) {
    textArea.value = `${borderText}: ${value}px`;
  }
};

topRight.addEventListener('change', () => {
  const borderValue = topRight.value;
  const border = 'borderTopRightRadius';

  changeBorder(borderValue, border, borderTextTR);
});

bottomRight.addEventListener('input', () => {
  const borderValue = bottomRight.value;
  const border = 'borderBottomRightRadius';

  changeBorder(borderValue, border, borderTextBR);
});

topLeft.addEventListener('input', () => {
  const borderValue = topLeft.value;
  const border = 'borderTopLeftRadius';

  changeBorder(borderValue, border, borderTextTL);
});

bottomLeft.addEventListener('input', () => {
  const borderValue = bottomLeft.value;
  const border = 'borderBottomLeftRadius';

  changeBorder(borderValue, border, borderTextBL);
});
