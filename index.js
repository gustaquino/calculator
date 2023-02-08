import { themeSwitcher } from './theme.js';
import { copyToClipboard, calculate, keydown, clear } from './calculate.js';

const input = document.getElementById('input');
const resultInput = document.getElementById('result');
const allowedKeys = [
  '(',
  ')',
  '/',
  '*',
  '-',
  '+',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
  '1',
  '0',
  '.',
  '%',
  ' ',
];

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

document.getElementById('equal').addEventListener('click', calculate);
