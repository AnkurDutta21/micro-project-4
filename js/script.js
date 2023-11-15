const buttons = document.querySelectorAll(".btn")
const display = document.querySelector('.display')



let defaultValue = '0'
let newValue = ''


display.innerHTML = defaultValue

// taking values from button and useing the button function perform actions


buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const input = btn.value
        buttonFunc(input)
        if (newValue.length !== 0) {
            display.innerHTML = newValue
        }
        else {
            display.innerHTML = defaultValue
        }
        console.log(input, 'clicked')
    })
})


// button function 
const buttonFunc = (input) => {
    const operators = ['+', '-', '*', '/', '-']
    switch (input) {
        case '=':
            const result = eval(newValue)
            newValue = result
            // console.log(typeof(result))
            break
        case 'Reset':
            newValue = defaultValue
            break
        case 'Del':
            if (newValue.length !== 0) {
                newValue = newValue.toString().slice(0, -1)
            }
            else {
                newValue = ''
            }
            break
            case '.':
                if (newValue.includes('.')) {
                    return
                } else {
                    newValue += input
                }
                break
            case '+':
            case '-':
            case '*':
            case '/':
                const lastOperator = newValue.slice(-1)

                if (operators.includes(lastOperator)) {
                    return
                } else {
                    newValue += input
                }
                break
        default:
                newValue += input
            break
    }
}


