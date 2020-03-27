export function get(object, key) {
    var keys = key.split('.')

    for (var i = 0; i < keys.length; i++) {
        if (!object.hasOwnProperty(keys[i])) {
            return null
        }
        object = object[keys[i]]
    }

    return object
}

const MRE = /^m[trblxy]?$/

export const getProps = test => props => {
    const next = {}
    for (const key in props) {
        if (test(key || '')) next[key] = props[key]
    }
    return next
}

export const getMarginProps = getProps(k => MRE.test(k))
export const omitMarginProps = getProps(k => !MRE.test(k))

// Check if a URL is absolute or not
export const isAbsoluteURL = url => {
    const r = new RegExp('^(?:[a-z]+:)?//', 'i')
    return r.test(url)
}

export const sum = obj => {
    let sum = 0
    for (var el in obj) {
        if (obj.hasOwnProperty(el)) {
            if (obj[el] !== '') {
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
    if (typeof number === 'string') {
        let num = parseFloat(number.replace(/,/g, ''))
        return num
    } else {
        return number
    }
}
