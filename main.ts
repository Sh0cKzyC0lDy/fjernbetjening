input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 - C5 - C5 - C5 - ", 120)
    music.playMelody("C5 C5 C5 C5 - - - - ", 500)
    music.playTone(988, music.beat(BeatFraction.Breve))
    music.stopAllSounds()
})
radio.setGroup(1)
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < -20) {
        basic.showArrow(ArrowNames.North)
        radio.sendNumber(1)
    } else if (input.rotation(Rotation.Pitch) > 20) {
        basic.showArrow(ArrowNames.South)
        radio.sendNumber(2)
    } else if (input.rotation(Rotation.Roll) < -20) {
        basic.showArrow(ArrowNames.West)
        radio.sendNumber(3)
    } else if (input.rotation(Rotation.Roll) > 20) {
        basic.showArrow(ArrowNames.East)
        radio.sendNumber(4)
    } else {
        radio.sendNumber(5)
    }
})
