input.onButtonPressed(Button.A, function () {
    Start_temperatur += -1
    basic.showNumber(Start_temperatur)
})
input.onButtonPressed(Button.B, function () {
    Start_temperatur += 1
    basic.showNumber(Start_temperatur)
})
let Start_temperatur = 0
let A = 18
let B = 115
let C = -54
let Avlest_temperatur = pins.analogReadPin(AnalogPin.P1)
let Temperatur_i_Celsius = Math.idiv(Avlest_temperatur * A, B) + C
Start_temperatur = Temperatur_i_Celsius + 2
basic.forever(function () {
    Avlest_temperatur = pins.analogReadPin(AnalogPin.P1)
    Temperatur_i_Celsius = Math.idiv(Avlest_temperatur * A, B) + C
    basic.showNumber(Temperatur_i_Celsius)
    if (Temperatur_i_Celsius >= Start_temperatur) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
