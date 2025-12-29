import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PromoSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Promo</h2>
          <Button variant="link" className="text-primary">
            Lihat Semua
          </Button>
        </div>

        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-muted-foreground">Tidak Ada Promo</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
