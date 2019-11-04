/**
 * Functions to operate the turtle
 */
// % color=#0b9630 icon="\f188" block="Turtle"
// groups=['Control', 'Parameters', 'Other']
namespace turtle {
    let patterns = [[1, 0, 1, 0], [0, 1, 1, 0], [0, 1, 0, 1], [1, 0, 0, 1]]
    let pattern: boolean[] = []
    let steps = 0
    let wheel_dia = 52
    let wheel_base = 74
    let PEN_UP = 90
    let PEN_DOWN = 10
    let rotation = 0
    let degree = 0
    let distance = 0
    let steps_rev = 512 //  512 for 64x gearbox, 128 for 16x gearbox
    let x = 0
    let y = 0
    let _heading = 0    // starts to the right (east) (same as Python)
    let delay_time = 2  // (ms) delay between stepper moves
    let debug = true

    export function forward(distance: number) {
        // 25 * 512 / (52 * 3.1412)
        steps = Math.round(distance * steps_rev / (wheel_dia * Math.PI))
        if (debug == true) { console.log("forward(" + distance + ")\n") }

        for (let i = 0; i < steps; i++) {
            pattern = [true, false, true, false]
            pins.A2.digitalWrite(pattern[3])
            pins.A3.digitalWrite(pattern[2])
            pins.A4.digitalWrite(pattern[1])
            pins.A5.digitalWrite(pattern[0])
            pins.SCK.digitalWrite(pattern[3])
            pins.MOSI.digitalWrite(pattern[2])
            pins.MISO.digitalWrite(pattern[1])
            pins.D9.digitalWrite(pattern[0])
            basic.pause(delay_time)
            pattern = [false, true, true, false]
            pins.A2.digitalWrite(pattern[3])
            pins.A3.digitalWrite(pattern[2])
            pins.A4.digitalWrite(pattern[1])
            pins.A5.digitalWrite(pattern[0])
            pins.SCK.digitalWrite(pattern[3])
            pins.MOSI.digitalWrite(pattern[2])
            pins.MISO.digitalWrite(pattern[1])
            pins.D9.digitalWrite(pattern[0])
            basic.pause(delay_time)
            pattern = [false, true, false, true]
            pins.A2.digitalWrite(pattern[3])
            pins.A3.digitalWrite(pattern[2])
            pins.A4.digitalWrite(pattern[1])
            pins.A5.digitalWrite(pattern[0])
            pins.SCK.digitalWrite(pattern[3])
            pins.MOSI.digitalWrite(pattern[2])
            pins.MISO.digitalWrite(pattern[1])
            pins.D9.digitalWrite(pattern[0])
            basic.pause(delay_time)
            pattern = [true, false, false, true]
            pins.A2.digitalWrite(pattern[3])
            pins.A3.digitalWrite(pattern[2])
            pins.A4.digitalWrite(pattern[1])
            pins.A5.digitalWrite(pattern[0])
            pins.SCK.digitalWrite(pattern[3])
            pins.MOSI.digitalWrite(pattern[2])
            pins.MISO.digitalWrite(pattern[1])
            pins.D9.digitalWrite(pattern[0])
            basic.pause(delay_time)
        }
        pattern = [false, false, false, false]
        pins.A2.digitalWrite(pattern[3])
        pins.A3.digitalWrite(pattern[2])
        pins.A4.digitalWrite(pattern[1])
        pins.A5.digitalWrite(pattern[0])
        pins.SCK.digitalWrite(pattern[3])
        pins.MOSI.digitalWrite(pattern[2])
        pins.MISO.digitalWrite(pattern[1])
        pins.D9.digitalWrite(pattern[0])
        x = x + distance * Math.cos(_heading * Math.PI / 180)  // must convert to radians
        y = y + distance * Math.sin(_heading * Math.PI / 180)
    }
}
