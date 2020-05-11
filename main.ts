basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("C - D E - G - - ", 120)
    }
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
