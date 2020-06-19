var btn = document.querySelector('button');
var txt = document.querySelector('#machine-text');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Start machine') {
    btn.textContent = 'Stop machine';
    txt.textContent = 'The machine has started!';
  } else {
    btn.textContent = 'Start machine';
    txt.textContent = 'The machine is stopped.';
  }
}


var para = document.querySelector('#name');

para.addEventListener('click', updateName);

function updateName() {
	var name = prompt('Enter a new name');
	para.textContent = 'Player 1: ' + name;
}