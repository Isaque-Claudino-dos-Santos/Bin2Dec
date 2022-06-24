let inputBin = document.querySelector('#bin')
let boxError = document.querySelector('#boxes #error')
let boxResut = document.querySelector('#boxes #resut')

let bin = new Bin()

function convert() {
    boxError.textContent = ''
    boxResut.textContent = ''
    let binValue = inputBin.value
    let aryValues = binValue.split('')

    for (const key in aryValues) {
        let letter = aryValues[key]

        if (typeof letter === 'string' && letter != 1 && letter != 0) {
            boxError.textContent = 'Valid values numeric 1.s and 0.s'
            return
        }
    }

    boxResut.textContent = bin.calc(aryValues)
}