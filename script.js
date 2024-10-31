const colorInput = document.getElementById('color-input');
const colorDisplay = document.getElementById('color-display');
const colorLabel = document.getElementById('color-label');
const check = document.getElementById('check');

const setColor = (color) => {
    colorDisplay.style.backgroundColor = colorInput.value;
    colorLabel.innerText = colorDisplay.style.backgroundColor;
};


const randomColors = [
    '#FFB17A',
    '#0A1128',
    '#BEE7B8',
    '#713E5A',
    '#0B4F6C',
    '#20BF55'
  ];