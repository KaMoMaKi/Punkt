input.onGesture(Gesture.TiltRight, function () {
    if (!(4 <= XAktuell)) {
        XAktuell += 1
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (YAktuell < 1) {
        if (XAktuell == 0) {
            radio.sendValue("LED_AN", 0)
        } else if (XAktuell == 1) {
            radio.sendValue("LED_AN", 1)
        } else if (XAktuell == 2) {
            radio.sendValue("LED_AN", 2)
        } else if (XAktuell == 3) {
            radio.sendValue("LED_AN", 3)
        } else {
            basic.setLedColor(0xff0000)
            basic.pause(500)
            basic.turnRgbLedOff()
        }
    } else {
        if (XAktuell == 0) {
            radio.sendValue("LED_AUS", 0)
        } else if (XAktuell == 1) {
            radio.sendValue("LED_AUS", 1)
        } else if (XAktuell == 2) {
            radio.sendValue("LED_AUS", 2)
        } else if (XAktuell == 3) {
            radio.sendValue("LED_AUS", 3)
        } else {
            basic.setLedColor(0xff0000)
            basic.pause(500)
            basic.turnRgbLedOff()
        }
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (!(XAktuell <= 0)) {
        XAktuell += -1
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
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
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    basic.setLedColor(0xff0000)
})
radio.onReceivedValue(function (name, value) {
    if (name == "LED_AN") {
        if (value == 0) {
            pins.digitalWritePin(DigitalPin.P0, 1)
        } else if (value == 1) {
            pins.digitalWritePin(DigitalPin.P1, 1)
        } else if (value == 2) {
            pins.digitalWritePin(DigitalPin.P2, 1)
        } else if (value == 3) {
            pins.digitalWritePin(DigitalPin.P3, 1)
        }
    }
    if (name == "LED_AUS") {
        if (value == 0) {
            pins.digitalWritePin(DigitalPin.P0, 0)
        } else if (value == 1) {
            pins.digitalWritePin(DigitalPin.P1, 0)
        } else if (value == 2) {
            pins.digitalWritePin(DigitalPin.P2, 0)
        } else if (value == 3) {
            pins.digitalWritePin(DigitalPin.P3, 0)
        }
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
