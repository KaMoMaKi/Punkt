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
        Debug += 1
    }
}
input.onGesture(Gesture.LogoDown, function () {
    if (!(YAktuell <= 0)) {
        YAktuell += -1
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "LED_AN") {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (receivedString == "LED_AUS") {
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
    	
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
radio.setGroup(4)
XAktuell = 2
XAlt = 2
YAktuell = 2
YAlt = 2
led.plot(2, 2)
basic.forever(function () {
    Display()
})
