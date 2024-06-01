import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export function ProductCard() {
  return (
    <Card className="w-80 max-w-sm h-96 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 z-10 relative m-4">
      <img
        alt="Product Image"
        className="w-full h-[50%] object-cover"
        src="/placeholder.svg"
        style={{
          objectFit: "cover",
        }}
      />
      <CardContent className="p-3 bg-white">
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Acme Wireless Headphones</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Experience immersive audio with our premium wireless headphones.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">$99.99</span>
            <Button size="sm">Add to Cart</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
