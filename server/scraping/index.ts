import axios from 'axios'
import * as cheerio from 'cheerio'
import { getPrice, getCurrency, getDescription } from '../utils';

export async function scrapeProduct(productUrl: string) {
    if(!productUrl) {
        return;
    }

    const username = String(process.env.BRIGHT_DATA_USERNAME)
    const password = String(process.env.BRIGHT_DATA_PASSWORD)
    const port = 22225
    const session_id = (1000000 * Math.random()) | 0
    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false
    }

    try {
        const response = await axios.get(productUrl, options)
        const $ = cheerio.load(response.data)
        const title = $('#productTitle').text().trim()
        const currPrice = getPrice(
            $('.priceToPay span.a-price-whole'),
            $('a.size.base.a-color-price'),
            $('.a-button-selected .a-color-base')
        )

        const originalPrice = getPrice(
            $('#priceblock_ourprice'),
            $('.a-price.a-text-price span.a-offscreen')
        )

        const stockCheck = $('#availability span').text().trim().toLowerCase() === 'currently unavailable'

        const images = $('#imgBlkFront').attr('data-a-dynamic-image') || $('#landingImage').attr('data-a-dynamic-image') || '{}'
        const imageUrls = Object.keys(JSON.parse(images))

        const currency = getCurrency($('.a-price-symbol'))
        
        const discount = $('.savingsPercentage').text().trim().replace(/[-%]/g, '')

        const description = getDescription(
            $('#featurebullets_feature_div'),
            $('span.a-list-item')
        )

        console.log({title, currPrice, originalPrice, stockCheck, imageUrls, currency, discount, description})
    } catch(e: any){
        throw new Error(`Scraping failed: ${e.message}`)
    }
}