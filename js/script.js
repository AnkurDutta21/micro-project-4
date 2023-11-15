const buttons = document.querySelectorAll(".btn")
const display = document.querySelector('.display')
let defaultValue = '0'
let newValue = ''
display.innerHTML = defaultValue
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const input = btn.value
        buttonFunc(input)
        display.innerHTML = newValue
        console.log(input, 'clicked');
    });
});


// result 
const buttonFunc= (input)=>{
    if (input === '=') {
        try {
            newValue = eval(newValue)
        } catch (error) {
            newValue = 'Error'
        }
    } else if (input === 'Reset') {
        newValue = defaultValue
    } else if (input === 'Del') {
        newValue = newValue.slice(0, -1)

        if (newValue === '') {
            newValue = defaultValue
        }
    } else {
        newValue += input
    }
}