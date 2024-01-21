//! change background color
const html = document.documentElement;

// const bodyColor = document.querySelector('.body_background')

const btn1 = document.querySelector('.btn-1');
const colorInput = document.querySelector('#color');

btn1.addEventListener('click', () => html.style.backgroundColor = colorInput.value);

// btn1.addEventListener('click', () => bodyColor.style.backgroundColor = colorInput.value);
