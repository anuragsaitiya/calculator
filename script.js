// Get the calculator buttons and input element
const buttons = document.querySelectorAll('.btn');
const input = document.querySelector('.input');

// Add a click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if (buttonText === 'c') {
            input.value = '';
        } else if (buttonText === 'del') {
            input.value = input.value.slice(0, -1);
        } else if (buttonText === '=') {
            input.value = eval(input.value);
        } else {
            input.value += buttonText;
        }
    });
});
