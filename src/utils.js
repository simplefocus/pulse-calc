export const sum = obj => {
    let sum = 0
    for (var el in obj) {
        if (obj.hasOwnProperty(el)) {
            if (obj[el] !== "") {
                sum += parseFloat(convertToNumber(obj[el]))
            }
        }
    }
    return sum
}

export const debounce = (func, wait) => {
    let timeout
    return function() {
        const context = this
        const args = arguments
        const later = function() {
            timeout = null
            func.apply(context, args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}

export const convertToNumber = number => {
    if (typeof number === "string") {
        let num = parseFloat(number.replace(/,/g, ""))
        return num
    } else {
        return number
    }
}