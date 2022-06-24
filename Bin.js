class Bin {
    potenc(value, potenc) {
        let resut = 1
        for (let i = 1; i <= potenc; i++) {
            resut = value * resut
        }
        return resut
    }

    mult(v1, v2) {
        return v1 * v2
    }

    sum(v1, v2) {
        return v1 + v2
    }

    potencBit(bit, index) {
        return bit * (this.potenc(2, index))
    }

    calc(bitSequence) {
        let sumBit = 0
        bitSequence.reverse().forEach((bit, index) => {
            sumBit += this.potencBit(bit, index)
        })
        return sumBit
    }
}