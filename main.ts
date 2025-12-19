input.onGesture(Gesture.TiltRight, function () {
    if (!(4 <= XAktuell)) {
        XAktuell += 1
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (!(XAktuell <= 0)) {
        XAktuell += -1
    }
})
function Display () {
    if (!(XAlt == XAktuell && YAlt == YAktuell)) {
        led.unplot(XAlt, YAlt)
        led.plot(XAktuell, YAktuell)
        XAlt = XAktuell
        YAlt = YAktuell
        basic.setLedColor(0x00ff00)
        Debug += 1
    }
}
function Neigung () {
    if (true) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
        basic.setLedColor(0xff0000)
    }
}
input.onGesture(Gesture.LogoDown, function () {
    if (!(YAktuell <= 0)) {
        YAktuell += -1
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (!(4 <= YAktuell)) {
        YAktuell += 1
    }
})
let Debug = 0
let YAlt = 0
let YAktuell = 0
let XAlt = 0
let XAktuell = 0
XAktuell = 2
XAlt = 2
YAktuell = 2
YAlt = 2
led.plot(2, 2)
basic.forever(function () {
    Neigung()
    Display()
})
