let numero = 0
input.onButtonPressed(Button.A, function () {
    numero = 0
    for (let index = 0; index < 5; index++) {
        numero += 1
        basic.showNumber(numero)
        basic.pause(5000)
    }
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    numero = 6
    for (let index = 0; index < 5; index++) {
        numero += -1
        basic.showNumber(numero)
        basic.pause(5000)
    }
})
