"use client"
import { FormEvent, useState } from "react"
import { scraper } from "../server/actions/index"

const Search = () => {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const urlValidator = (url: string) => {
    try {
      const parsedUrl = new URL(url)
      const hostname = parsedUrl.hostname
      if(
        hostname.includes("www.amazon.in") || 
        hostname.includes("amazon.in") ||
        hostname.endsWith("amazon")
      ){
        return true
      }
      return false
    } catch(e) {
      return false
    }
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const pass = urlValidator(search)
    pass ? alert("Valid URL") : alert("Invalid URL")
    try {
      setLoading(true)
      const product = await scraper(search)
    } catch(err){

    } finally {
      setLoading(false)
    }
  }
  return (
    <form className='flex flex-wrap gap-4' onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Lookup" className="searchbar-input" onChange={(e) => setSearch(e.target.value)}/>
        <button type="submit" className="searchbar-btn" disabled={loading}>{loading===true ? 
        "Searching..." : "Search"}</button>
    </form>
  )
}

export default Search