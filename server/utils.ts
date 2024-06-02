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

export function getRating(...elements:any) {
    for(const element of elements){
        const rating = element.text().trim()
        if(rating) return rating
    }
    return ''
}

export function getCategory(...elements:any) {
    for(const element of elements) {
        const category = element.text().trim()
        if(category) {
            return category
        }
    }
    return ''
}

export const getLowestPrice = (priceHistory:Array<{price:number}>) => {
    let lowestPrice = priceHistory[0].price
    for(let i = 1; i < priceHistory.length; i++) {
        if(priceHistory[i].price < lowestPrice) {
            lowestPrice = priceHistory[i].price
        }
    }
    return lowestPrice
}

export const getHighestPrice = (priceHistory:Array<{price:number}>) => {
    let highestPrice = priceHistory[0].price
    for(let i = 1; i < priceHistory.length; i++) {
        if(priceHistory[i].price > highestPrice) {
            highestPrice = priceHistory[i].price
        }
    }
    return highestPrice
}

export const getAveragePrice = (priceHistory:Array<{price:number}>) => {
    let total = 0
    for(let i = 0; i < priceHistory.length; i++) {
        total += priceHistory[i].price
    }
    return total / priceHistory.length
}