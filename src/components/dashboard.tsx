/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/3yZSqBZiNUB
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function Dashboard() {
  const [showBuyModal, setShowBuyModal] = useState(false)
  const [showSellModal, setShowSellModal] = useState(false)
  const [usd, setUsd] = useState(1.00)
  const [eur, setEur] = useState(0.00)
  const [buyRate, setBuyRate] = useState(0)
  const [buyAmount, setBuyAmount] = useState(0)
  const [sellRate, setSellRate] = useState(0)
  const [sellAmount, setSellAmount] = useState(0)
  const handleBuy = () => {
    if (buyAmount <= usd) {
      setUsd(usd - buyAmount)
      setEur(eur + buyAmount / buyRate)
      setShowBuyModal(false)
    }
  }
  const handleSell = () => {
    if (sellAmount <= eur) {
      setEur(eur - sellAmount)
      setUsd(usd + sellAmount * sellRate)
      setShowSellModal(false)
    }
  }
  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <main className="flex-1 p-4 grid grid-rows-2 gap-4">
        <div className="bg-card text-card-foreground p-4 rounded-lg flex flex-col items-center justify-center">
          <div className="text-4xl font-bold">${usd.toFixed(2)}</div>
        </div>
        <div className="bg-card text-card-foreground p-4 rounded-lg flex flex-col items-center justify-center">
          <div className="text-4xl font-bold">€{eur.toFixed(2)}</div>
        </div>
      </main>
      <footer className="bg-card text-card-foreground p-4 flex gap-4">
        <Button size="lg" className="flex-1" onClick={() => setShowBuyModal(true)}>
          Buy
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="flex-1"
          onClick={() => setShowSellModal(true)}
        >
          Sell
        </Button>
      </footer>
      {showBuyModal && (
        <Dialog open={showBuyModal} onOpenChange={setShowBuyModal}>
          <DialogContent className="sm:max-w-[425px] w-full">
            <div className="grid gap-6 py-4">
              <div className="grid gap-2">
                <Label htmlFor="buyRate">Rate (EUR to USD)</Label>
                <Input
                  id="buyRate"
                  type="number"
                  value={buyRate}
                  onChange={(e) => setBuyRate(parseFloat(e.target.value))}
                  className="text-4xl font-bold"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="buyAmount">Amount (USD)</Label>
                <Input
                  id="buyAmount"
                  type="number"
                  value={buyAmount}
                  onChange={(e) => setBuyAmount(parseFloat(e.target.value))}
                  className="text-4xl font-bold"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleBuy} disabled={buyAmount > usd}>
                Buy
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      {showSellModal && (
        <Dialog open={showSellModal} onOpenChange={setShowSellModal}>
          <DialogContent className="sm:max-w-[425px] w-full">
            <div className="grid gap-6 py-4">
              <div className="grid gap-2">
                <Label htmlFor="sellRate">Rate (EUR to USD)</Label>
                <Input
                  id="sellRate"
                  type="number"
                  value={sellRate}
                  onChange={(e) => setSellRate(parseFloat(e.target.value))}
                  className="text-4xl font-bold"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="sellAmount">Amount (EUR)</Label>
                <Input
                  id="sellAmount"
                  type="number"
                  value={sellAmount}
                  onChange={(e) => setSellAmount(parseFloat(e.target.value))}
                  className="text-4xl font-bold"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSell} disabled={sellAmount > eur}>
                Sell
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}