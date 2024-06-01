export function getPrice(...elements:any) {
    for(const element of elements) {
        const price = element.text().trim()
        if(price) return price.replace(/\D/g, '')
    }
    return ''
}

export function getCurrency(element:any) {
    const currency = element.text().trim().slice(0,1)
    return currency ?  currency : ''
}

export function getDescription(...elements:any) {
    for(const element of elements) {
        const description = element.text().trim()
        if(description) return description
    }
    return ''
}