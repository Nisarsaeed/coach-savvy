'use client'
import React, { useState } from 'react'
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, ShoppingCart, Store } from 'lucide-react'
import Image from 'next/image'
const NAV_ITEMS = [
  { label: 'Homepage', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Terms', href: '/terms' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute top-2 z-50 container mx-auto shadow-lg">
      <div className="flex items-center justify-between">
        {/* Mobile Hamburger Menu */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-4 space-y-4">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.href}
                  href={item.href}
                  className="block py-2 hover:bg-gray-100 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <a 
          href="/"
        >
          <Image src={'/logo.png'} width={70} height={70} alt='Cheat Savant' className='rounded-md'/>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-20">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              className="text-primary font-semibold text-md hover:text-primary-foreground transition-colors py-1 px-2 rounded-md bg-accentPurple hover:bg-transparent border-2 border-accentPurple "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Cart Icon */}
        {/* <a href="/cart" className="relative">
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-10 w-10 text-primary" />
          </Button>
        </a> */}
      </div>
    </header>
  )
}

export default Header