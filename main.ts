let XAktuell = 0
let YAktuell = 0
function Display () {
	
}
function Neigung () {
    if (input.isGesture(Gesture.TiltRight)) {
        XAktuell += 1
    } else if (input.isGesture(Gesture.TiltLeft)) {
        XAktuell += -1
    } else if (input.isGesture(Gesture.LogoUp)) {
        YAktuell += 1
    } else if (input.isGesture(Gesture.LogoDown)) {
        YAktuell += -1
    } else {
    	
    }
}
basic.forever(function () {
    led.enable(true)
    basic.pause(100)
    led.enable(false)
    basic.pause(100)
})
