const resultInput = document.getElementById('result');

export function calculate() {
  resultInput.value = 'ERROR';
  resultInput.classList.add('error');
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove('error');
}

export function keydown() {
  input.addEventListener('keydown', function (ev) {
    ev.preventDefault();
    if (allowedKeys.includes(ev.key)) {
      input.value += ev.key;
      return;
    }
    if (ev.key === 'Backspace') {
      input.value = input.value.slice(0, -1);
    }
    if (ev.key === 'Enter') {
      calculate();
    }
  });
}

export function copyToClipboard() {
  document.getElementById('copyToClipboard').addEventListener('click', function (ev) {
    const button = ev.currentTarget;
    if (button.innerText === 'Copy') {
      button.innerText = 'Copied!';
      button.classList.add('success');
      navigator.clipboard.writeText(resultInput.value);
    } else {
      button.innerText = 'Copy';
      button.classList.remove('success');
    }
  });
}

export function clear() {
  document.getElementById('clear').addEventListener('click', function () {
    input.value = '';
    input.focus();
  });
}
