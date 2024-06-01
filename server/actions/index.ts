"use server"
import { scrapeProduct } from "../scraping";

export async function scraper(productUrl: string) {
    if(!productUrl) {
        return;
    }
    try{
        const scrapeRes = await scrapeProduct(productUrl)
    } catch(err: any){
        throw new Error(`Scraping failed: ${err}`)
    }
}