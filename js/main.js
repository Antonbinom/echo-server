const form = document.getElementById('form');
const input = document.getElementById('input');
let inputValue

form.addEventListener('submit', (e) => {
	e.preventDefault();
	inputValue = input.value;
})

export const msg = inputValue;